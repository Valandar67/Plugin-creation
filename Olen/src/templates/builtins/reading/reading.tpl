// ============================================================
// Olen — Reading Session Template
// Converted from standalone Reading session.md
// Sage Green theme, book carousel, session logging, stats
// ============================================================

const { container, getData, setData, setMultipleData, app, moment, notice,
        createEl, file, readFile, getFilesInFolder, getFileMetadata } = ctx;

// ==========================================
// SETTINGS
// ==========================================
const SETTINGS = {
  booksFolder: "Books",
  logFile: ((ctx.plugin?.settings?.activities?.find(a => a.id === "reading")?.folder) || "Activities/Reading") + "/Reading Log.md",
};

// Theme — Sage Green
const T = {
  color: "#7a9a7d",
  colorHover: "#8aaa8d",
  colorBorder: "#2a3a2d",
  colorBorderHover: "#3a4a3d",
  colorMuted: "#5a6a5d",
  colorAccent: "#8aaa8d",
  colorProgress: "#7a9a7d",
  colorPages: "#6a8a9a",
  bg: "#0a0a0a",
  bgCard: "#0f0f0f",
};

// ==========================================
// STATE (from frontmatter)
// ==========================================
const isCompleted = getData("Reading") === true;

// ==========================================
// STYLES
// ==========================================
if (!document.getElementById("olen-tpl-reading-v1")) {
  const style = document.createElement("style");
  style.id = "olen-tpl-reading-v1";
  style.textContent = `
    @keyframes otr-breathe {
      0%, 100% { box-shadow: inset 0 0 20px rgba(122, 154, 125, 0.03); }
      50% { box-shadow: inset 0 0 40px rgba(122, 154, 125, 0.08); }
    }
    @keyframes otr-float-up {
      0% { transform: translateY(0); opacity: 0; }
      10% { opacity: 0.3; }
      90% { opacity: 0.3; }
      100% { transform: translateY(-80px); opacity: 0; }
    }
    @keyframes otr-fade-in {
      from { opacity: 0; transform: translateY(10px); }
      to { opacity: 1; transform: translateY(0); }
    }
    @keyframes otr-scanline {
      0% { top: -100%; opacity: 0; }
      50% { opacity: 0.4; }
      100% { top: 100%; opacity: 0; }
    }
    @keyframes otr-book-glow {
      0% { box-shadow: 0 8px 32px rgba(0,0,0,0.6), 0 0 0 rgba(122, 154, 125, 0); }
      50% { box-shadow: 0 8px 32px rgba(0,0,0,0.6), 0 0 30px rgba(122, 154, 125, 0.4); }
      100% { box-shadow: 0 8px 32px rgba(0,0,0,0.6), 0 0 0 rgba(122, 154, 125, 0); }
    }
    @keyframes otr-page-flip {
      0% { transform: perspective(400px) rotateY(0deg); }
      30% { transform: perspective(400px) rotateY(-8deg); }
      100% { transform: perspective(400px) rotateY(0deg); }
    }
    .otr-modal-overlay {
      position: fixed; top: 0; left: 0; width: 100%; height: 100%;
      background: rgba(0,0,0,0); display: flex; align-items: center;
      justify-content: center; z-index: 9999; backdrop-filter: blur(0px);
      transition: background 0.5s ease, backdrop-filter 0.5s ease;
    }
    .otr-modal-overlay.visible {
      background: rgba(0,0,0,0.95); backdrop-filter: blur(4px);
    }
    .otr-modal-content {
      background: #0a0a0a; padding: 32px; border: 1px solid #2a3a2d;
      max-width: 500px; max-height: 85vh; width: 90%;
      display: flex; flex-direction: column; gap: 20px;
      box-shadow: 0 40px 120px rgba(0,0,0,0.9); position: relative;
      opacity: 0; transform: translateY(30px);
      transition: opacity 0.5s ease, transform 0.5s ease;
    }
    .otr-modal-overlay.visible .otr-modal-content {
      opacity: 1; transform: translateY(0);
    }
    .otr-img-no-drag {
      pointer-events: none !important;
      user-select: none !important;
      -webkit-user-select: none !important;
      -webkit-touch-callout: none !important;
      -webkit-user-drag: none !important;
    }
    .otr-carousel-container {
      touch-action: pan-x !important;
      -webkit-overflow-scrolling: touch;
    }
    .otr-book-card {
      transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    }
    .otr-root *, .otr-modal-overlay * {
      border-radius: 0 !important;
      -webkit-appearance: none;
      appearance: none;
    }
    .otr-root input[type="number"] {
      -moz-appearance: textfield;
    }
  `;
  document.head.appendChild(style);
}

// ==========================================
// HELPERS
// ==========================================
function createCorners(el, color, size) {
  color = color || T.color;
  size = size || 16;
  ["TL", "TR", "BL", "BR"].forEach(function(pos) {
    var corner = document.createElement("div");
    var isTop = pos.includes("T");
    var isLeft = pos.includes("L");
    corner.style.cssText =
      "position:absolute;" +
      (isTop ? "top:0;" : "bottom:0;") +
      (isLeft ? "left:0;" : "right:0;") +
      "width:" + size + "px;height:" + size + "px;" +
      "border-" + (isTop ? "top" : "bottom") + ":1px solid " + color + ";" +
      "border-" + (isLeft ? "left" : "right") + ":1px solid " + color + ";" +
      "z-index:10;pointer-events:none;transition:all 0.4s ease;";
    el.appendChild(corner);
  });
}

function addMotes(el, color, count) {
  count = count || 3;
  for (var i = 0; i < count; i++) {
    var mote = document.createElement("div");
    mote.style.cssText =
      "position:absolute;bottom:10%;left:" + (10 + Math.random() * 80) + "%;" +
      "width:" + (1 + Math.random() * 2) + "px;height:" + (1 + Math.random() * 2) + "px;" +
      "background:" + color + ";border-radius:50%;opacity:0;pointer-events:none;" +
      "animation:otr-float-up " + (10 + Math.random() * 8) + "s " + (Math.random() * 12) + "s ease-out infinite;z-index:1;";
    el.appendChild(mote);
  }
}

// ==========================================
// BOOK DISCOVERY (replaces dv.pages())
// ==========================================
function discoverBooks() {
  var bookFiles = getFilesInFolder(SETTINGS.booksFolder);
  var books = [];
  for (var i = 0; i < bookFiles.length; i++) {
    var fm = getFileMetadata(bookFiles[i].path);
    if (!fm) continue;
    var hasBookMeta = fm.title || fm.author || fm.localCoverImage || fm.coverUrl;
    var isInProgress = fm.Progress === "Currently reading" ||
                       fm.Progress === "In progress" ||
                       fm.Progress === "Reading";
    if (hasBookMeta && isInProgress && fm.totalPage) {
      books.push({ fm: fm, file: bookFiles[i] });
    }
  }
  // Sort by mtime desc
  books.sort(function(a, b) { return b.file.stat.mtime - a.file.stat.mtime; });
  return books.slice(0, 10);
}

function discoverAllBooks() {
  var bookFiles = getFilesInFolder(SETTINGS.booksFolder);
  var books = [];
  for (var i = 0; i < bookFiles.length; i++) {
    var fm = getFileMetadata(bookFiles[i].path);
    if (!fm) continue;
    var hasBookMeta = fm.title || fm.author || fm.localCoverImage || fm.coverUrl;
    if (hasBookMeta && fm.totalPage) {
      books.push({ fm: fm, file: bookFiles[i] });
    }
  }
  books.sort(function(a, b) { return b.file.stat.mtime - a.file.stat.mtime; });
  return books;
}

// ==========================================
// SMART PAGE TRACKING
// ==========================================
var pageProgressCache = {};

async function findHighestPageForBook(bookTitle, totalPages, trackingFolders) {
  var folders = trackingFolders || [];
  if (folders.length === 0 || !totalPages) return null;

  var searchFolders = Array.isArray(folders) ? folders : [folders];
  var cleanTitle = bookTitle.replace(/\s*-\s*[^-]+$/, "").trim();
  var escapedTitle = cleanTitle.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  var pageRegex = new RegExp(
    "\\[\\[[^\\]]*" + escapedTitle + "[^\\]]*\\.pdf#page=(\\d+)", "gi"
  );

  var highestPage = 0;

  // Gather files from all tracking folders
  for (var fi = 0; fi < searchFolders.length; fi++) {
    var folderFiles = getFilesInFolder(searchFolders[fi]);
    // Sort by mtime desc, limit to 50
    folderFiles.sort(function(a, b) { return b.stat.mtime - a.stat.mtime; });
    var toSearch = folderFiles.slice(0, 50);

    for (var j = 0; j < toSearch.length; j++) {
      try {
        var content = await readFile(toSearch[j].path);
        if (!content) continue;
        var match;
        while ((match = pageRegex.exec(content)) !== null) {
          var pageNum = parseInt(match[1], 10);
          if (pageNum > highestPage) highestPage = pageNum;
        }
        pageRegex.lastIndex = 0;
      } catch (e) {}
    }
  }

  if (highestPage > 0) {
    return {
      currentPage: highestPage,
      totalPages: totalPages,
      percent: Math.min(100, Math.round((highestPage / totalPages) * 100)),
    };
  }
  return null;
}

// ==========================================
// READING LOG (stored in a vault file)
// ==========================================
async function getReadingLog() {
  var fm = getFileMetadata(SETTINGS.logFile);
  if (!fm) return {
    totalSessions: 0, totalMinutes: 0, totalPages: 0,
    currentStreak: 0, longestStreak: 0, lastSessionDate: null, entries: []
  };
  return {
    totalSessions: fm.totalSessions || 0,
    totalMinutes: fm.totalMinutes || 0,
    totalPages: fm.totalPages || 0,
    currentStreak: fm.currentStreak || 0,
    longestStreak: fm.longestStreak || 0,
    lastSessionDate: fm.lastSessionDate || null,
    entries: fm.entries || []
  };
}

async function saveReadingLog(data) {
  var content = "---\n" +
    "totalSessions: " + data.totalSessions + "\n" +
    "totalMinutes: " + data.totalMinutes + "\n" +
    "totalPages: " + data.totalPages + "\n" +
    "currentStreak: " + data.currentStreak + "\n" +
    "longestStreak: " + data.longestStreak + "\n" +
    'lastSessionDate: "' + (data.lastSessionDate || "") + '"\n' +
    "entries: " + JSON.stringify(data.entries) + "\n" +
    "cssclasses:\n  - hide-properties\n---\n\n" +
    "# Reading Log\n\n" +
    "> Personal reading journey tracker.\n" +
    "> This file is auto-managed by the Reading template.\n\n" +
    "Last updated: " + moment().format("YYYY-MM-DD HH:mm") + "\n";

  var existingFile = app.vault.getAbstractFileByPath(SETTINGS.logFile);
  if (existingFile) {
    await app.vault.modify(existingFile, content);
  } else {
    var folder = SETTINGS.logFile.substring(0, SETTINGS.logFile.lastIndexOf("/"));
    if (!app.vault.getAbstractFileByPath(folder)) {
      try { await app.vault.createFolder(folder); } catch (e) {}
    }
    await app.vault.create(SETTINGS.logFile, content);
  }
}

async function logReadingSession(bookTitle, bookPath, durationMins, pagesRead, notes) {
  var log = await getReadingLog();
  var today = moment().format("YYYY-MM-DD");

  var lastDate = log.lastSessionDate ? moment(log.lastSessionDate) : null;
  var daysSinceLast = lastDate ? moment().diff(lastDate, "days") : null;

  var newStreak = log.currentStreak;
  if (daysSinceLast === null || daysSinceLast > 1) {
    newStreak = 1;
  } else if (daysSinceLast === 1) {
    newStreak = log.currentStreak + 1;
  }

  var entry = {
    id: Date.now(),
    timestamp: moment().format(),
    date: today,
    bookTitle: bookTitle,
    bookPath: bookPath,
    durationMins: durationMins,
    pagesRead: pagesRead,
    notes: notes || null
  };

  log.entries.unshift(entry);
  if (log.entries.length > 100) log.entries = log.entries.slice(0, 100);

  log.totalSessions++;
  log.totalMinutes += durationMins;
  log.totalPages += pagesRead;
  log.currentStreak = newStreak;
  log.longestStreak = Math.max(log.longestStreak, newStreak);
  log.lastSessionDate = today;

  await saveReadingLog(log);
  return entry;
}

// ==========================================
// COMPLETION & NAVIGATION
// ==========================================
function getReturnDestination() {
  var activityId = getData("activity");
  var activities = ctx.plugin && ctx.plugin.settings && ctx.plugin.settings.activities;
  if (!activities) return "dashboard";
  var actConfig = activities.find(function(a) { return a.id === activityId; });
  return (actConfig && actConfig.completionReturnTo) || "dashboard";
}

function navigateAfterCompletion() {
  var dest = getReturnDestination();
  if (dest === "dashboard") {
    setTimeout(function() { ctx.plugin.activateDashboardView(); }, 600);
  } else if (dest === "homepage") {
    var hp = ctx.plugin.settings.homepage;
    if (hp) {
      var f = app.vault.getAbstractFileByPath(hp);
      if (f) app.workspace.getLeaf(false).openFile(f);
    }
  }
  // "stay" → do nothing
}

async function finishReading(type) {
  await setMultipleData({
    Reading: true,
    "Reading-Type": type,
    Timestamp: moment().format(),
  });
  notice("Reading session logged as " + (type === "discipline" ? "Discipline" : "Flow") + "!");
  navigateAfterCompletion();
}

// ==========================================
// MODAL SYSTEM
// ==========================================
var activeModal = null;

function closeModal() {
  if (!activeModal) return;
  activeModal.classList.remove("visible");
  var ref = activeModal;
  setTimeout(function() {
    if (ref && ref.parentNode) ref.parentNode.removeChild(ref);
  }, 500);
  activeModal = null;
}

function createModal(title, contentBuilder) {
  if (activeModal) {
    activeModal.parentNode.removeChild(activeModal);
    activeModal = null;
  }

  var modal = document.createElement("div");
  modal.className = "otr-modal-overlay";
  activeModal = modal;

  var modalContent = document.createElement("div");
  modalContent.className = "otr-modal-content";
  modal.appendChild(modalContent);

  var scrollWrapper = document.createElement("div");
  scrollWrapper.style.cssText = "overflow-y:auto;max-height:calc(85vh - 60px);display:flex;flex-direction:column;gap:20px;";
  modalContent.appendChild(scrollWrapper);

  createCorners(modalContent, T.color);

  if (title) {
    var modalTitle = document.createElement("h2");
    modalTitle.textContent = title;
    modalTitle.style.cssText =
      "margin:0;color:" + T.color + ";font-size:14px;font-weight:500;" +
      "font-family:'Times New Roman',serif;letter-spacing:3px;text-align:center;" +
      "text-transform:uppercase;opacity:0.8;";
    scrollWrapper.appendChild(modalTitle);

    var divider = document.createElement("div");
    divider.style.cssText =
      "width:60px;height:1px;background:linear-gradient(90deg,transparent," + T.color + ",transparent);margin:0 auto;";
    scrollWrapper.appendChild(divider);
  }

  contentBuilder(scrollWrapper);

  modal.onclick = function(e) { if (e.target === modal) closeModal(); };
  document.body.appendChild(modal);
  requestAnimationFrame(function() { modal.classList.add("visible"); });

  return modal;
}

// ==========================================
// SHOW COMPLETION MODAL ("How did it feel?")
// ==========================================
function showCompletionModal() {
  createModal("How Did It Feel?", function(content) {
    var desc = document.createElement("p");
    desc.textContent = "Classify your reading session";
    desc.style.cssText = "margin:0;color:" + T.colorMuted + ";font-size:13px;text-align:center;font-family:Georgia,serif;font-style:italic;";
    content.appendChild(desc);

    var grid = document.createElement("div");
    grid.style.cssText = "display:flex;gap:16px;justify-content:center;margin-top:8px;";
    content.appendChild(grid);

    var states = [
      { id: "discipline", label: "Discipline", icon: "\u25C6", color: "#928d85" },
      { id: "flow", label: "Flow", icon: "\u2248", color: "#c9a84c" },
    ];

    states.forEach(function(st) {
      var btn = document.createElement("div");
      btn.style.cssText =
        "flex:1;text-align:center;padding:24px 16px;border:1px solid " + st.color + ";" +
        "cursor:pointer;transition:all 0.3s ease;background:transparent;";
      btn.onmouseenter = function() { btn.style.background = st.color + "15"; };
      btn.onmouseleave = function() { btn.style.background = "transparent"; };

      var icon = document.createElement("div");
      icon.textContent = st.icon;
      icon.style.cssText = "font-size:28px;margin-bottom:8px;color:" + st.color + ";";
      btn.appendChild(icon);

      var label = document.createElement("div");
      label.textContent = st.label;
      label.style.cssText = "font-size:12px;letter-spacing:1px;text-transform:uppercase;color:" + st.color + ";";
      btn.appendChild(label);

      btn.onclick = function() {
        closeModal();
        finishReading(st.id);
      };
      grid.appendChild(btn);
    });

    // Skip option
    var skipBtn = document.createElement("div");
    skipBtn.textContent = "SKIP";
    skipBtn.style.cssText =
      "text-align:center;padding:12px;color:" + T.colorMuted + ";font-size:11px;" +
      "letter-spacing:2px;cursor:pointer;margin-top:8px;transition:color 0.2s;";
    skipBtn.onmouseenter = function() { skipBtn.style.color = T.color; };
    skipBtn.onmouseleave = function() { skipBtn.style.color = T.colorMuted; };
    skipBtn.onclick = function() {
      closeModal();
      // Mark as done with skipped type
      setMultipleData({
        Reading: true,
        "Reading-Type": "skipped",
        Timestamp: moment().format(),
      }).then(function() {
        notice("Reading session skipped.");
        navigateAfterCompletion();
      });
    };
    content.appendChild(skipBtn);
  });
}

// ==========================================
// LOG SESSION MODAL
// ==========================================
function openLogSessionModal(allBooks) {
  var selectedBook = allBooks[0] || null;
  var duration = 30;

  createModal("Log Reading Session", function(content) {
    // Book selection
    var bookLabel = document.createElement("div");
    bookLabel.textContent = "Select Book";
    bookLabel.style.cssText = "color:" + T.colorMuted + ";font-size:11px;letter-spacing:1px;text-transform:uppercase;";
    content.appendChild(bookLabel);

    var bookSelect = document.createElement("select");
    bookSelect.style.cssText =
      "width:100%;padding:14px;background:" + T.bgCard + ";border:1px solid " + T.colorBorder + ";" +
      "color:" + T.color + ";font-size:14px;font-family:'Times New Roman',serif;cursor:pointer;";

    if (allBooks.length === 0) {
      var opt = document.createElement("option");
      opt.textContent = "No books found";
      opt.disabled = true;
      bookSelect.appendChild(opt);
    } else {
      allBooks.forEach(function(book, i) {
        var opt = document.createElement("option");
        opt.value = i;
        opt.textContent = book.fm.title || book.file.basename;
        bookSelect.appendChild(opt);
      });
    }
    bookSelect.onchange = function() { selectedBook = allBooks[parseInt(bookSelect.value)]; };
    content.appendChild(bookSelect);

    // Duration
    var durContainer = document.createElement("div");
    durContainer.style.cssText =
      "display:flex;justify-content:space-between;align-items:center;padding:16px;" +
      "background:" + T.bgCard + ";border:1px solid " + T.colorBorder + ";";
    content.appendChild(durContainer);

    var durLabel = document.createElement("div");
    durLabel.innerHTML = '<span style="color:' + T.color + ';">Duration</span><br><span style="color:' + T.colorMuted + ';font-size:11px;">Minutes read</span>';
    durContainer.appendChild(durLabel);

    var durControls = document.createElement("div");
    durControls.style.cssText = "display:flex;align-items:center;gap:12px;";

    var durMinus = document.createElement("button");
    durMinus.textContent = "\u2212";
    durMinus.style.cssText = "width:36px;height:36px;background:" + T.bg + ";border:1px solid " + T.colorBorder + ";color:" + T.color + ";font-size:18px;cursor:pointer;";

    var durDisplay = document.createElement("span");
    durDisplay.textContent = duration + " min";
    durDisplay.style.cssText = "min-width:70px;text-align:center;color:" + T.colorAccent + ";font-size:18px;font-weight:600;";

    var durPlus = document.createElement("button");
    durPlus.textContent = "+";
    durPlus.style.cssText = "width:36px;height:36px;background:" + T.bg + ";border:1px solid " + T.colorBorder + ";color:" + T.color + ";font-size:18px;cursor:pointer;";

    durMinus.onclick = function() { duration = Math.max(5, duration - 5); durDisplay.textContent = duration + " min"; };
    durPlus.onclick = function() { duration = Math.min(480, duration + 5); durDisplay.textContent = duration + " min"; };

    durControls.appendChild(durMinus);
    durControls.appendChild(durDisplay);
    durControls.appendChild(durPlus);
    durContainer.appendChild(durControls);

    // Pages
    var pagesContainer = document.createElement("div");
    pagesContainer.style.cssText =
      "display:flex;justify-content:space-between;align-items:center;padding:16px;" +
      "background:" + T.bgCard + ";border:1px solid " + T.colorBorder + ";";
    content.appendChild(pagesContainer);

    var pagesLabel = document.createElement("div");
    pagesLabel.innerHTML = '<span style="color:' + T.color + ';">Pages Read</span><br><span style="color:' + T.colorMuted + ';font-size:11px;">Optional</span>';
    pagesContainer.appendChild(pagesLabel);

    var pagesInput = document.createElement("input");
    pagesInput.type = "number";
    pagesInput.value = "0";
    pagesInput.min = "0";
    pagesInput.style.cssText =
      "width:80px;padding:10px;background:" + T.bg + ";border:1px solid " + T.colorBorder + ";" +
      "color:" + T.colorAccent + ";font-size:18px;font-weight:600;text-align:center;";
    pagesContainer.appendChild(pagesInput);

    // Notes
    var notesLabel = document.createElement("div");
    notesLabel.textContent = "Session Notes (optional)";
    notesLabel.style.cssText = "color:" + T.colorMuted + ";font-size:11px;letter-spacing:1px;text-transform:uppercase;";
    content.appendChild(notesLabel);

    var notesInput = document.createElement("textarea");
    notesInput.placeholder = "What did you read? Any thoughts or highlights...";
    notesInput.style.cssText =
      "width:100%;height:80px;padding:12px;background:" + T.bgCard + ";border:1px solid " + T.colorBorder + ";" +
      "color:" + T.color + ";font-size:13px;font-family:Georgia,serif;resize:none;box-sizing:border-box;";
    content.appendChild(notesInput);

    // Submit
    var submitBtn = document.createElement("button");
    submitBtn.textContent = "LOG SESSION";
    submitBtn.style.cssText =
      "width:100%;padding:16px;background:" + T.color + ";border:none;color:" + T.bg + ";" +
      "font-size:14px;font-weight:700;letter-spacing:2px;cursor:pointer;transition:all 0.3s ease;";
    submitBtn.onmouseover = function() { submitBtn.style.background = T.colorHover; };
    submitBtn.onmouseout = function() { submitBtn.style.background = T.color; };
    submitBtn.onclick = async function() {
      if (!selectedBook) { notice("Please select a book"); return; }
      await logReadingSession(
        selectedBook.fm.title || selectedBook.file.basename,
        selectedBook.file.path,
        duration,
        parseInt(pagesInput.value) || 0,
        notesInput.value.trim()
      );
      closeModal();
      notice("Reading session logged: " + duration + " min");
      // After logging, ask how it felt for Olen completion
      showCompletionModal();
    };
    content.appendChild(submitBtn);
  });
}

// ==========================================
// RENDER
// ==========================================
(async function render() {
  container.style.cssText = "padding-bottom:120px;";
  container.className = "otr-root";

  var root = document.createElement("div");
  root.style.cssText = "max-width:460px;margin:0 auto;padding:16px;";
  container.appendChild(root);

  // If already completed, show summary
  if (isCompleted) {
    var doneCard = document.createElement("div");
    doneCard.style.cssText =
      "border:1px solid " + T.colorBorder + ";background:" + T.bg + ";position:relative;padding:40px 24px;text-align:center;";
    createCorners(doneCard, T.color);

    var doneIcon = document.createElement("div");
    doneIcon.textContent = "\uD83D\uDCD6";
    doneIcon.style.cssText = "font-size:48px;margin-bottom:16px;";
    doneCard.appendChild(doneIcon);

    var doneTitle = document.createElement("div");
    doneTitle.textContent = "Session Complete";
    doneTitle.style.cssText = "color:" + T.color + ";font-size:16px;font-family:'Times New Roman',serif;letter-spacing:2px;margin-bottom:8px;";
    doneCard.appendChild(doneTitle);

    var doneType = getData("Reading-Type") || "discipline";
    var doneDesc = document.createElement("div");
    doneDesc.textContent = doneType.charAt(0).toUpperCase() + doneType.slice(1);
    doneDesc.style.cssText = "color:" + T.colorMuted + ";font-size:13px;font-family:Georgia,serif;font-style:italic;";
    doneCard.appendChild(doneDesc);

    root.appendChild(doneCard);
    return;
  }

  // ===== BOOK CAROUSEL =====
  var books = discoverBooks();

  var carouselCard = document.createElement("div");
  carouselCard.style.cssText =
    "border:1px solid " + T.colorBorder + ";background:" + T.bg + ";position:relative;overflow:hidden;" +
    "animation:otr-breathe 8s ease-in-out infinite;margin-bottom:16px;";
  createCorners(carouselCard, T.color);
  root.appendChild(carouselCard);

  var carouselSection = document.createElement("div");
  carouselSection.style.cssText =
    "position:relative;padding:24px 16px 16px 16px;min-height:320px;" +
    "display:flex;flex-direction:column;align-items:center;";
  carouselCard.appendChild(carouselSection);

  if (books.length === 0) {
    var emptyMsg = document.createElement("div");
    emptyMsg.style.cssText = "text-align:center;padding:60px 20px;color:" + T.colorMuted + ";";
    emptyMsg.innerHTML =
      '<div style="font-size:48px;margin-bottom:20px;opacity:0.3;">\uD83D\uDCDA</div>' +
      '<div style="font-family:\'Times New Roman\',serif;font-size:16px;letter-spacing:1px;margin-bottom:8px;">No books in progress</div>' +
      '<div style="font-family:Georgia,serif;font-style:italic;font-size:13px;opacity:0.7;">Set a book\'s Progress to "Currently reading"</div>';
    carouselSection.appendChild(emptyMsg);
  } else {
    var currentIndex = 0;

    var bookDisplay = document.createElement("div");
    bookDisplay.className = "otr-carousel-container";
    bookDisplay.style.cssText =
      "width:100%;display:flex;justify-content:center;align-items:center;" +
      "position:relative;min-height:280px;overflow:hidden;";
    carouselSection.appendChild(bookDisplay);

    // Arrows
    function makeArrow(dir) {
      var arrow = document.createElement("div");
      arrow.innerHTML = dir === "left" ? "\u2039" : "\u203A";
      arrow.style.cssText =
        "position:absolute;" + (dir === "left" ? "left:8px;" : "right:8px;") +
        "top:50%;transform:translateY(-50%);width:36px;height:36px;" +
        "display:flex;align-items:center;justify-content:center;" +
        "background:rgba(10,10,10,0.8);border:1px solid " + T.colorBorder + ";" +
        "color:" + T.color + ";font-size:24px;cursor:pointer;z-index:20;" +
        "transition:all 0.3s ease;" +
        (books.length > 1 ? "opacity:1;pointer-events:auto;" : "opacity:0.3;pointer-events:none;");
      arrow.onmouseenter = function() { arrow.style.borderColor = T.color; arrow.style.color = T.colorHover; };
      arrow.onmouseleave = function() { arrow.style.borderColor = T.colorBorder; arrow.style.color = T.color; };
      return arrow;
    }

    var leftArrow = makeArrow("left");
    var rightArrow = makeArrow("right");
    carouselSection.appendChild(leftArrow);
    carouselSection.appendChild(rightArrow);

    // Book card
    var bookCard = document.createElement("div");
    bookCard.className = "otr-book-card";
    bookCard.style.cssText = "width:180px;display:flex;flex-direction:column;align-items:center;cursor:pointer;position:relative;";
    bookDisplay.appendChild(bookCard);

    var coverContainer = document.createElement("div");
    coverContainer.style.cssText =
      "width:160px;height:240px;background:#111;border:1px solid " + T.colorBorder + ";" +
      "position:relative;overflow:hidden;box-shadow:0 8px 32px rgba(0,0,0,0.6), 4px 4px 0 rgba(122,154,125,0.1);";
    bookCard.appendChild(coverContainer);

    var coverImg = document.createElement("img");
    coverImg.className = "otr-img-no-drag";
    coverImg.draggable = false;
    coverImg.style.cssText =
      "width:100%;height:100%;object-fit:cover;filter:grayscale(0.3) contrast(1.1) brightness(0.9);transition:all 0.4s ease;";
    coverContainer.appendChild(coverImg);

    var fallbackIcon = document.createElement("div");
    fallbackIcon.innerHTML = "\uD83D\uDCD6";
    fallbackIcon.style.cssText =
      "position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);font-size:48px;opacity:0;transition:opacity 0.3s ease;";
    coverContainer.appendChild(fallbackIcon);

    var vignette = document.createElement("div");
    vignette.style.cssText =
      "position:absolute;top:0;left:0;right:0;bottom:0;" +
      "background:radial-gradient(circle at center,transparent 40%,rgba(0,0,0,0.5) 100%);pointer-events:none;";
    coverContainer.appendChild(vignette);

    var scanline = document.createElement("div");
    scanline.style.cssText =
      "position:absolute;top:-100%;left:0;right:0;height:100%;" +
      "background:linear-gradient(180deg,transparent 0%," + T.color + "30 50%,transparent 100%);" +
      "pointer-events:none;opacity:0;";
    coverContainer.appendChild(scanline);

    var bookTitle = document.createElement("div");
    bookTitle.style.cssText =
      "margin-top:16px;color:" + T.color + ";font-family:'Times New Roman',serif;" +
      "font-size:14px;letter-spacing:0.5px;text-align:center;max-width:180px;" +
      "overflow:hidden;text-overflow:ellipsis;white-space:nowrap;";
    bookCard.appendChild(bookTitle);

    var bookAuthor = document.createElement("div");
    bookAuthor.style.cssText =
      "margin-top:4px;color:" + T.colorMuted + ";font-family:Georgia,serif;" +
      "font-style:italic;font-size:12px;text-align:center;";
    bookCard.appendChild(bookAuthor);

    var progressContainer = document.createElement("div");
    progressContainer.style.cssText = "margin-top:12px;display:flex;flex-direction:column;align-items:center;gap:6px;";
    bookCard.appendChild(progressContainer);

    var progressBar = document.createElement("div");
    progressBar.style.cssText = "width:120px;height:4px;background:" + T.colorBorder + ";overflow:hidden;";
    progressContainer.appendChild(progressBar);

    var progressFill = document.createElement("div");
    progressFill.style.cssText = "height:100%;background:" + T.colorAccent + ";transition:width 0.4s ease;";
    progressBar.appendChild(progressFill);

    var progressText = document.createElement("div");
    progressText.style.cssText = "color:" + T.colorMuted + ";font-family:'Courier New',monospace;font-size:10px;letter-spacing:0.5px;";
    progressContainer.appendChild(progressText);

    // Dots
    var dotsContainer = document.createElement("div");
    dotsContainer.style.cssText = "display:flex;gap:8px;margin-top:20px;";
    carouselSection.appendChild(dotsContainer);

    var dots = [];
    books.forEach(function(_, i) {
      var dot = document.createElement("div");
      dot.style.cssText =
        "width:8px;height:8px;border-radius:50% !important;background:" +
        (i === 0 ? T.color : T.colorBorder) + ";cursor:pointer;transition:all 0.3s ease;";
      dot.onclick = function() { currentIndex = i; updateDisplay(); };
      dotsContainer.appendChild(dot);
      dots.push(dot);
    });

    async function updateDisplay() {
      var book = books[currentIndex];
      if (!book) return;

      // Cover image
      var imageSrc = null;
      if (book.fm.localCoverImage) {
        var imgMatch = String(book.fm.localCoverImage).match(/\[\[([^\]]+)\]\]/) || [null, book.fm.localCoverImage];
        var imgPath = imgMatch[1] || book.fm.localCoverImage;
        try {
          var imgFile = app.metadataCache.getFirstLinkpathDest(imgPath, book.file.path);
          if (imgFile) imageSrc = app.vault.getResourcePath(imgFile);
        } catch (e) {}
      }
      if (!imageSrc && book.fm.coverUrl) imageSrc = book.fm.coverUrl;

      if (imageSrc) {
        coverImg.src = imageSrc;
        coverImg.style.opacity = "1";
        fallbackIcon.style.opacity = "0";
        coverImg.onerror = function() { coverImg.style.opacity = "0"; fallbackIcon.style.opacity = "0.4"; };
      } else {
        coverImg.style.opacity = "0";
        fallbackIcon.style.opacity = "0.4";
      }

      var displayTitle = book.fm.title || book.file.basename.replace(/\s*-\s*[^-]+$/, "");
      bookTitle.textContent = displayTitle;
      bookAuthor.textContent = book.fm.author || book.fm.authors || "";

      // Progress
      var progressPercent = 0;
      var progressLabel = "";
      var totalPages = book.fm.totalPage || book.fm.totalPages || 0;
      var trackingFolders = book.fm.trackingFolders || book.fm.searchFolders || null;

      var cacheKey = book.file.path;
      var smartProgress = pageProgressCache[cacheKey];

      if (smartProgress === undefined && totalPages > 0 && trackingFolders) {
        smartProgress = await findHighestPageForBook(displayTitle, totalPages, trackingFolders);
        pageProgressCache[cacheKey] = smartProgress || null;
      }

      if (smartProgress && smartProgress.percent > 0) {
        progressPercent = smartProgress.percent;
        progressLabel = progressPercent + "%";
      } else {
        var progress = book.fm.Progress;
        if (typeof progress === "number") {
          progressPercent = progress;
          progressLabel = progressPercent + "%";
        } else if (progress === "Currently reading" || progress === "In progress" || progress === "Reading") {
          progressLabel = "reading";
        } else if (progress === "Completed" || progress === "Finished") {
          progressPercent = 100;
          progressLabel = "100%";
        } else {
          progressLabel = "\u2014";
        }
      }

      progressFill.style.width = progressPercent + "%";
      progressText.textContent = progressLabel;

      dots.forEach(function(dot, i) {
        dot.style.background = i === currentIndex ? T.color : T.colorBorder;
        dot.style.transform = i === currentIndex ? "scale(1.2)" : "scale(1)";
      });
    }

    leftArrow.onclick = function() {
      currentIndex = (currentIndex - 1 + books.length) % books.length;
      bookCard.style.animation = "none";
      bookCard.offsetHeight;
      bookCard.style.animation = "otr-fade-in 0.3s ease";
      updateDisplay();
    };

    rightArrow.onclick = function() {
      currentIndex = (currentIndex + 1) % books.length;
      bookCard.style.animation = "none";
      bookCard.offsetHeight;
      bookCard.style.animation = "otr-fade-in 0.3s ease";
      updateDisplay();
    };

    // Touch support
    var touchStartX = 0;
    bookDisplay.addEventListener("touchstart", function(e) { touchStartX = e.changedTouches[0].screenX; }, { passive: true });
    bookDisplay.addEventListener("touchend", function(e) {
      var diff = touchStartX - e.changedTouches[0].screenX;
      if (Math.abs(diff) > 50) {
        if (diff > 0) rightArrow.onclick();
        else leftArrow.onclick();
      }
    }, { passive: true });

    // Hover effects
    bookCard.onmouseenter = function() {
      coverImg.style.filter = "grayscale(0.1) contrast(1.2) brightness(1)";
      scanline.style.opacity = "1";
      scanline.style.animation = "otr-scanline 1.5s ease-out";
      coverContainer.style.boxShadow = "0 12px 40px rgba(0,0,0,0.8), 6px 6px 0 rgba(122,154,125,0.15)";
    };
    bookCard.onmouseleave = function() {
      coverImg.style.filter = "grayscale(0.3) contrast(1.1) brightness(0.9)";
      scanline.style.opacity = "0";
      scanline.style.animation = "none";
      coverContainer.style.boxShadow = "0 8px 32px rgba(0,0,0,0.6), 4px 4px 0 rgba(122,154,125,0.1)";
    };

    // Click to open book
    bookCard.onclick = function() {
      var book = books[currentIndex];
      if (book) {
        coverContainer.style.animation = "otr-book-glow 0.6s ease-out";
        coverImg.style.animation = "otr-page-flip 0.5s ease-out";
        var bookFile = app.vault.getAbstractFileByPath(book.file.path);
        setTimeout(function() {
          coverContainer.style.animation = "";
          coverImg.style.animation = "";
          if (bookFile) app.workspace.getLeaf(false).openFile(bookFile);
        }, 400);
      }
    };

    updateDisplay();
  }

  // Divider in carousel card
  var divider1 = document.createElement("div");
  divider1.style.cssText = "width:calc(100% - 40px);height:1px;background:" + T.colorBorder + ";margin:0 20px;";
  carouselCard.appendChild(divider1);

  // Info section
  var infoSection = document.createElement("div");
  infoSection.style.cssText = "padding:20px 24px 24px 24px;";
  carouselCard.appendChild(infoSection);

  var shelfTitle = document.createElement("h3");
  shelfTitle.textContent = "Bookshelf";
  shelfTitle.style.cssText =
    "margin:0 0 6px 0;color:" + T.color + ";font-size:14px;font-weight:500;" +
    "font-family:'Times New Roman',serif;letter-spacing:0.5px;";
  infoSection.appendChild(shelfTitle);

  var shelfDesc = document.createElement("p");
  shelfDesc.textContent = books.length > 0
    ? books.length + " book" + (books.length > 1 ? "s" : "") + " in progress"
    : "No books currently being read";
  shelfDesc.style.cssText =
    "margin:0;color:" + T.colorMuted + ";font-size:12px;line-height:1.4;" +
    "font-family:Georgia,serif;font-style:italic;";
  infoSection.appendChild(shelfDesc);

  // ===== SESSION ACTION CARD =====
  var allBooks = discoverAllBooks();

  var actionCard = document.createElement("div");
  actionCard.style.cssText =
    "border:1px solid " + T.colorBorder + ";background:" + T.bg + ";position:relative;overflow:visible;margin-bottom:16px;";
  createCorners(actionCard, T.color);
  root.appendChild(actionCard);

  var headerSection = document.createElement("div");
  headerSection.style.cssText =
    "padding:24px 28px 20px 28px;background:linear-gradient(180deg," + T.bgCard + " 0%," + T.bg + " 100%);" +
    "border-bottom:1px solid " + T.colorBorder + ";";
  actionCard.appendChild(headerSection);

  var sessionHeader = document.createElement("h3");
  sessionHeader.textContent = "Session";
  sessionHeader.style.cssText =
    "margin:0 0 8px 0;color:" + T.color + ";font-size:13px;font-weight:500;" +
    "font-family:'Times New Roman',serif;letter-spacing:3px;text-transform:uppercase;opacity:0.7;";
  headerSection.appendChild(sessionHeader);

  var sessionDesc = document.createElement("p");
  sessionDesc.textContent = "Track your reading journey";
  sessionDesc.style.cssText =
    "margin:0;color:" + T.colorMuted + ";font-size:14px;line-height:1.4;" +
    "font-family:Georgia,serif;font-style:italic;";
  headerSection.appendChild(sessionDesc);

  var buttonsSection = document.createElement("div");
  buttonsSection.style.cssText = "padding:20px;display:flex;flex-direction:column;gap:12px;";
  actionCard.appendChild(buttonsSection);

  var logBtn = document.createElement("button");
  logBtn.innerHTML = '<span style="margin-right:8px;">\uD83D\uDCD6</span> Log Reading Session';
  logBtn.style.cssText =
    "width:100%;padding:18px 24px;background:" + T.color + ";border:none;color:" + T.bg + ";" +
    "font-size:14px;font-weight:600;letter-spacing:1px;cursor:pointer;transition:all 0.3s ease;text-align:center;";
  logBtn.onmouseover = function() { logBtn.style.background = T.colorHover; logBtn.style.transform = "translateY(-2px)"; };
  logBtn.onmouseout = function() { logBtn.style.background = T.color; logBtn.style.transform = "translateY(0)"; };
  logBtn.onclick = function() { openLogSessionModal(allBooks); };
  buttonsSection.appendChild(logBtn);

  // ===== STATS CARD =====
  var statsCard = document.createElement("div");
  statsCard.style.cssText =
    "border:1px solid " + T.colorBorder + ";background:" + T.bg + ";position:relative;overflow:visible;margin-bottom:16px;";
  createCorners(statsCard, T.color);
  root.appendChild(statsCard);

  var statsHeader = document.createElement("div");
  statsHeader.style.cssText =
    "padding:24px 28px 20px 28px;background:linear-gradient(180deg," + T.bgCard + " 0%," + T.bg + " 100%);" +
    "border-bottom:1px solid " + T.colorBorder + ";";
  statsCard.appendChild(statsHeader);

  var statsTitle = document.createElement("h3");
  statsTitle.textContent = "Statistics";
  statsTitle.style.cssText =
    "margin:0 0 8px 0;color:" + T.color + ";font-size:13px;font-weight:500;" +
    "font-family:'Times New Roman',serif;letter-spacing:3px;text-transform:uppercase;opacity:0.7;";
  statsHeader.appendChild(statsTitle);

  var statsDesc = document.createElement("p");
  statsDesc.textContent = "Your reading journey";
  statsDesc.style.cssText =
    "margin:0;color:" + T.colorMuted + ";font-size:14px;line-height:1.4;" +
    "font-family:Georgia,serif;font-style:italic;";
  statsHeader.appendChild(statsDesc);

  var statsGrid = document.createElement("div");
  statsGrid.style.cssText = "padding:20px;display:grid;grid-template-columns:repeat(2,1fr);gap:16px;";
  statsCard.appendChild(statsGrid);

  var stats = await getReadingLog();

  var statItems = [
    { label: "Sessions", value: String(stats.totalSessions || 0), icon: "\uD83D\uDCDA", color: T.color },
    { label: "Time Read", value: Math.floor((stats.totalMinutes || 0) / 60) + "h " + ((stats.totalMinutes || 0) % 60) + "m", icon: "\u23F1\uFE0F", color: T.colorAccent },
    { label: "Pages", value: String(stats.totalPages || 0), icon: "\uD83D\uDCC4", color: T.colorPages },
    { label: "Streak", value: (stats.currentStreak || 0) + " days", icon: "\uD83D\uDD25", color: T.colorProgress },
  ];

  statItems.forEach(function(item) {
    var statEl = document.createElement("div");
    statEl.style.cssText =
      "padding:16px;background:" + T.bgCard + ";border:1px solid " + T.colorBorder + ";" +
      "text-align:center;transition:all 0.3s ease;";
    statEl.onmouseenter = function() { statEl.style.borderColor = item.color; statEl.style.transform = "translateY(-2px)"; };
    statEl.onmouseleave = function() { statEl.style.borderColor = T.colorBorder; statEl.style.transform = "translateY(0)"; };

    var icon = document.createElement("div");
    icon.textContent = item.icon;
    icon.style.cssText = "font-size:20px;margin-bottom:8px;";
    statEl.appendChild(icon);

    var val = document.createElement("div");
    val.textContent = item.value;
    val.style.cssText = "color:" + item.color + ";font-size:18px;font-weight:600;font-family:'Courier New',monospace;";
    statEl.appendChild(val);

    var label = document.createElement("div");
    label.textContent = item.label;
    label.style.cssText = "color:" + T.colorMuted + ";font-size:10px;letter-spacing:1px;text-transform:uppercase;margin-top:4px;";
    statEl.appendChild(label);

    statsGrid.appendChild(statEl);
  });

  if (stats.longestStreak > 0) {
    var streakNote = document.createElement("div");
    streakNote.style.cssText =
      "grid-column:1/-1;text-align:center;padding:12px;background:rgba(122,154,125,0.1);" +
      "border:1px dashed " + T.colorProgress + ";color:" + T.colorProgress + ";" +
      "font-size:12px;font-family:Georgia,serif;font-style:italic;";
    streakNote.textContent = "Longest streak: " + stats.longestStreak + " days";
    statsGrid.appendChild(streakNote);
  }

  // ===== RECENT SESSIONS TIMELINE =====
  var timelineCard = document.createElement("div");
  timelineCard.style.cssText =
    "border:1px solid " + T.colorBorder + ";background:" + T.bg + ";position:relative;overflow:visible;";
  createCorners(timelineCard, T.color);
  root.appendChild(timelineCard);

  var tlHeader = document.createElement("div");
  tlHeader.style.cssText =
    "padding:24px 28px 20px 28px;background:linear-gradient(180deg," + T.bgCard + " 0%," + T.bg + " 100%);" +
    "border-bottom:1px solid " + T.colorBorder + ";";
  timelineCard.appendChild(tlHeader);

  var tlTitle = document.createElement("h3");
  tlTitle.textContent = "Recent";
  tlTitle.style.cssText =
    "margin:0 0 8px 0;color:" + T.color + ";font-size:13px;font-weight:500;" +
    "font-family:'Times New Roman',serif;letter-spacing:3px;text-transform:uppercase;opacity:0.7;";
  tlHeader.appendChild(tlTitle);

  var tlDesc = document.createElement("p");
  tlDesc.textContent = "Latest reading sessions";
  tlDesc.style.cssText =
    "margin:0;color:" + T.colorMuted + ";font-size:14px;line-height:1.4;" +
    "font-family:Georgia,serif;font-style:italic;";
  tlHeader.appendChild(tlDesc);

  var timelineSection = document.createElement("div");
  timelineSection.style.cssText = "padding:16px 20px;";
  timelineCard.appendChild(timelineSection);

  var entries = (stats.entries || []).slice(0, 5);

  if (entries.length === 0) {
    var emptyTl = document.createElement("div");
    emptyTl.style.cssText = "text-align:center;padding:32px 20px;color:" + T.colorMuted + ";";
    emptyTl.innerHTML =
      '<div style="font-size:24px;margin-bottom:12px;opacity:0.3;">\uD83D\uDCD6</div>' +
      '<div style="font-family:Georgia,serif;font-style:italic;font-size:13px;">No sessions logged yet</div>' +
      '<div style="font-family:\'Courier New\',monospace;font-size:10px;letter-spacing:1px;margin-top:8px;opacity:0.5;">LOG A SESSION ABOVE</div>';
    timelineSection.appendChild(emptyTl);
  } else {
    entries.forEach(function(entry, index) {
      var item = document.createElement("div");
      item.style.cssText =
        "display:flex;align-items:flex-start;gap:16px;padding:14px 16px;" +
        "margin-bottom:" + (index < entries.length - 1 ? "8px" : "0") + ";" +
        "background:" + T.bgCard + ";border:1px solid " + T.colorBorder + ";" +
        "transition:all 0.3s ease;cursor:pointer;";
      item.onmouseenter = function() { item.style.borderColor = T.color; item.style.background = "#121210"; };
      item.onmouseleave = function() { item.style.borderColor = T.colorBorder; item.style.background = T.bgCard; };

      // Date col
      var dateCol = document.createElement("div");
      dateCol.style.cssText = "min-width:50px;text-align:center;";

      var entryDate = moment(entry.timestamp || entry.date);
      var dayNum = document.createElement("div");
      dayNum.textContent = entryDate.format("D");
      dayNum.style.cssText = "color:" + T.colorAccent + ";font-size:20px;font-weight:600;font-family:'Courier New',monospace;line-height:1;";
      dateCol.appendChild(dayNum);

      var monthEl = document.createElement("div");
      monthEl.textContent = entryDate.format("MMM");
      monthEl.style.cssText = "color:" + T.colorMuted + ";font-size:10px;letter-spacing:1px;text-transform:uppercase;";
      dateCol.appendChild(monthEl);

      item.appendChild(dateCol);

      // Content col
      var contentCol = document.createElement("div");
      contentCol.style.cssText = "flex:1;min-width:0;";

      var entryTitle = document.createElement("div");
      entryTitle.textContent = entry.bookTitle || "Unknown Book";
      entryTitle.style.cssText =
        "color:" + T.color + ";font-size:14px;font-family:'Times New Roman',serif;" +
        "white-space:nowrap;overflow:hidden;text-overflow:ellipsis;margin-bottom:4px;";
      contentCol.appendChild(entryTitle);

      var meta = document.createElement("div");
      meta.style.cssText = "display:flex;gap:12px;color:" + T.colorMuted + ";font-size:11px;";
      if (entry.durationMins) {
        var dur = document.createElement("span");
        dur.textContent = "\u23F1 " + entry.durationMins + " min";
        meta.appendChild(dur);
      }
      if (entry.pagesRead) {
        var pg = document.createElement("span");
        pg.textContent = "\uD83D\uDCC4 " + entry.pagesRead + " pages";
        meta.appendChild(pg);
      }
      contentCol.appendChild(meta);

      if (entry.notes) {
        var notesEl = document.createElement("div");
        notesEl.textContent = entry.notes;
        notesEl.style.cssText =
          "margin-top:8px;padding:8px 10px;background:rgba(122,154,125,0.05);" +
          "border-left:2px solid " + T.colorBorder + ";color:" + T.colorMuted + ";" +
          "font-size:12px;font-family:Georgia,serif;font-style:italic;line-height:1.4;" +
          "overflow:hidden;text-overflow:ellipsis;white-space:nowrap;";
        contentCol.appendChild(notesEl);
      }

      item.appendChild(contentCol);

      // Click to open book
      if (entry.bookPath) {
        item.onclick = function() {
          var f = app.vault.getAbstractFileByPath(entry.bookPath);
          if (f) app.workspace.getLeaf(false).openFile(f);
        };
      }

      timelineSection.appendChild(item);
    });
  }
})();
