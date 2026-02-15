```dataviewjs
// ============================================================
// BLOCK 1: GLOBAL STYLES, CONFIG & DATA LAYER
// ============================================================
window.drumCoach = window.drumCoach || {};
const DC = window.drumCoach;

// --- Theme ---
DC.theme = {
    bg: '#0a0a0a', bgCard: '#0f0f0f',
    border: '#222', borderLight: '#333',
    text: '#888', textDim: '#555',
    accent: '#fff', accentDim: '#aaa',
    success: '#5a8a5a', warning: '#8a7a4a', danger: '#8a4a4a',
    maxWidth: '460px',
};

// --- Settings (localStorage) ---
DC.getSettings = () => {
    const defaults = {
        logPath: 'Personal Life/04 Drumming/Practice Log.md',
        rudimentFolder: 'Home/Starts/Drumming/Rudiments',
        sessionFolder: 'Home/Starts/Drumming/Sessions',
        defaultSessionMinutes: 30,
        vaultName: 'Alt society',
    };
    try {
        const saved = JSON.parse(localStorage.getItem('drumCoach_settings') || '{}');
        return { ...defaults, ...saved };
    } catch { return defaults; }
};
DC.saveSettings = (s) => localStorage.setItem('drumCoach_settings', JSON.stringify(s));

// --- CSS ---
if (!document.getElementById('dc-styles')) {
    const style = document.createElement('style');
    style.id = 'dc-styles';
    style.textContent = `
        @keyframes dc-breathe {
            0%, 100% { box-shadow: inset 0 0 20px rgba(255,255,255,0.02); }
            50% { box-shadow: inset 0 0 40px rgba(255,255,255,0.05); }
        }
        @keyframes dc-fade-in {
            from { opacity: 0; transform: translateY(8px); }
            to { opacity: 1; transform: translateY(0); }
        }
        @keyframes dc-float-up {
            0% { transform: translateY(0) translateX(0); opacity: 0; }
            10% { opacity: 0.3; }
            90% { opacity: 0.3; }
            100% { transform: translateY(-80px) translateX(15px); opacity: 0; }
        }
        @keyframes dc-modal-in { from { opacity: 0; } to { opacity: 1; } }
        @keyframes dc-modal-slide {
            from { transform: translateY(20px) scale(0.98); opacity: 0; }
            to { transform: translateY(0) scale(1); opacity: 1; }
        }
        @keyframes dc-pulse { 0%,100% { opacity:0.6; } 50% { opacity:1; } }
        @keyframes dc-draw-corner { from { width:0;height:0; } to { width:18px;height:18px; } }
        .dc-wrap * { box-sizing: border-box; }
        .dc-wrap input, .dc-wrap select, .dc-wrap textarea {
            font-family: 'Courier New', monospace;
            background: #111; border: 1px solid #333; color: #ccc;
            padding: 8px 12px; font-size: 14px; outline: none;
            transition: border-color 0.2s; width: 100%;
        }
        .dc-wrap input:focus, .dc-wrap select:focus { border-color: #666; }
        .dc-wrap button {
            font-family: 'Times New Roman', serif;
            background: #111; border: 1px solid #333; color: #888;
            padding: 10px 20px; font-size: 12px; letter-spacing: 2px;
            text-transform: uppercase; cursor: pointer;
            transition: all 0.3s ease; min-height: 44px;
            -webkit-tap-highlight-color: transparent;
        }
        .dc-wrap button:hover { border-color: #fff; color: #fff; }
        .dc-wrap button.dc-primary { border-color: #666; color: #fff; }
        .dc-wrap button.dc-primary:hover { background: #fff; color: #0a0a0a; }
        .dc-wrap button.dc-active { background: #fff; color: #0a0a0a; border-color: #fff; }
        img { pointer-events: none !important; user-select: none !important; }
    `;
    document.head.appendChild(style);
}

// --- 40 PAS Rudiments ---
DC.RUDIMENTS = [
    { name:'Single Stroke Roll', category:'Single Strokes', slug:'single-stroke-roll' },
    { name:'Single Stroke Four', category:'Single Strokes', slug:'single-stroke-four' },
    { name:'Single Stroke Seven', category:'Single Strokes', slug:'single-stroke-seven' },
    { name:'Double Stroke Roll', category:'Double Strokes', slug:'double-stroke-roll' },
    { name:'Double Stroke Bounce', category:'Double Strokes', slug:'double-stroke-bounce' },
    { name:'Single Paradiddle', category:'Paradiddles', slug:'single-paradiddle' },
    { name:'Double Paradiddle', category:'Paradiddles', slug:'double-paradiddle' },
    { name:'Triple Paradiddle', category:'Paradiddles', slug:'triple-paradiddle' },
    { name:'Paradiddle-diddle', category:'Paradiddles', slug:'paradiddle-diddle' },
    { name:'Flam', category:'Flams', slug:'flam' },
    { name:'Flam Accent', category:'Flams', slug:'flam-accent' },
    { name:'Flam Tap', category:'Flams', slug:'flam-tap' },
    { name:'Flamacue', category:'Flams', slug:'flamacue' },
    { name:'Flam Paradiddle', category:'Flams', slug:'flam-paradiddle' },
    { name:'Single Flammed Mill', category:'Flams', slug:'single-flammed-mill' },
    { name:'Flam Paradiddle-diddle', category:'Flams', slug:'flam-paradiddle-diddle' },
    { name:'Pataflafla', category:'Flams', slug:'pataflafla' },
    { name:'Swiss Army Triplet', category:'Flams', slug:'swiss-army-triplet' },
    { name:'Inverted Flam Tap', category:'Flams', slug:'inverted-flam-tap' },
    { name:'Flam Drag', category:'Flams', slug:'flam-drag' },
    { name:'Drag', category:'Drags', slug:'drag' },
    { name:'Single Drag Tap', category:'Drags', slug:'single-drag-tap' },
    { name:'Double Drag Tap', category:'Drags', slug:'double-drag-tap' },
    { name:'Drag Paradiddle #1', category:'Drags', slug:'drag-paradiddle-1' },
    { name:'Drag Paradiddle #2', category:'Drags', slug:'drag-paradiddle-2' },
    { name:'Single Ratamacue', category:'Drags', slug:'single-ratamacue' },
    { name:'Double Ratamacue', category:'Drags', slug:'double-ratamacue' },
    { name:'Triple Ratamacue', category:'Drags', slug:'triple-ratamacue' },
    { name:'Five Stroke Roll', category:'Rolls', slug:'five-stroke-roll' },
    { name:'Six Stroke Roll', category:'Rolls', slug:'six-stroke-roll' },
    { name:'Seven Stroke Roll', category:'Rolls', slug:'seven-stroke-roll' },
    { name:'Nine Stroke Roll', category:'Rolls', slug:'nine-stroke-roll' },
    { name:'Ten Stroke Roll', category:'Rolls', slug:'ten-stroke-roll' },
    { name:'Eleven Stroke Roll', category:'Rolls', slug:'eleven-stroke-roll' },
    { name:'Thirteen Stroke Roll', category:'Rolls', slug:'thirteen-stroke-roll' },
    { name:'Fifteen Stroke Roll', category:'Rolls', slug:'fifteen-stroke-roll' },
    { name:'Seventeen Stroke Roll', category:'Rolls', slug:'seventeen-stroke-roll' },
];
DC.CATEGORIES = ['Single Strokes','Double Strokes','Paradiddles','Flams','Drags','Rolls'];
DC.CAT_KEY = {
    'Single Strokes':'singles','Double Strokes':'doubles','Paradiddles':'paradiddles',
    'Flams':'flams','Drags':'drags','Rolls':'rolls'
};
DC.BENCH = {
    singles:     {beginner:[0,119],developing:[120,159],intermediate:[160,199],advanced:[200,239],pro:[240,9999]},
    doubles:     {beginner:[0,79],developing:[80,109],intermediate:[110,139],advanced:[140,179],pro:[180,9999]},
    paradiddles: {beginner:[0,79],developing:[80,109],intermediate:[110,139],advanced:[140,169],pro:[170,9999]},
    flams:       {beginner:[0,79],developing:[80,99],intermediate:[100,119],advanced:[120,149],pro:[150,9999]},
    drags:       {beginner:[0,79],developing:[80,99],intermediate:[100,119],advanced:[120,149],pro:[150,9999]},
    rolls:       {beginner:[0,79],developing:[80,109],intermediate:[110,139],advanced:[140,169],pro:[170,9999]},
};
DC.getLevel = (cat, bpm) => {
    const k = DC.CAT_KEY[cat]; if (!k || !bpm) return 'unrated';
    const b = DC.BENCH[k];
    for (const [lv,[mn,mx]] of Object.entries(b)) { if (bpm >= mn && bpm <= mx) return lv; }
    return 'beginner';
};
DC.LEVEL_NUM = {unrated:0,beginner:1,developing:2,intermediate:3,advanced:4,pro:5};
DC.NUM_LEVEL = ['unrated','beginner','developing','intermediate','advanced','pro'];
DC.getLevelNum = l => DC.LEVEL_NUM[l] || 0;
DC.getLevelFromNum = n => DC.NUM_LEVEL[Math.round(Math.max(0,Math.min(5,n)))] || 'unrated';

DC.KNOWN_BOOKS = {
    'stick control': {type:'cycle',totalExercises:72,targetBPM:200,author:'George Lawrence Stone'},
    'accents and rebounds': {type:'cycle',totalExercises:50,targetBPM:160,author:'George Lawrence Stone'},
    'master studies': {type:'cycle',totalExercises:100,targetBPM:160,author:'Joe Morello'},
    'progressive steps to syncopation': {type:'linear',totalExercises:38,targetBPM:120,author:'Ted Reed'},
    '150 rudimental solos': {type:'linear',totalExercises:150,targetBPM:120,author:'Charley Wilcoxon'},
    'rhythmic patterns': {type:'linear',totalExercises:60,targetBPM:140,author:'Joe Cusatis'},
};

// --- Data Layer ---
DC.readLog = async () => {
    const s = DC.getSettings();
    const f = app.vault.getAbstractFileByPath(s.logPath);
    if (!f) return null;
    const c = app.metadataCache.getFileCache(f);
    return c?.frontmatter || null;
};
DC.writeLog = async (updateFn) => {
    const s = DC.getSettings();
    let f = app.vault.getAbstractFileByPath(s.logPath);
    if (!f) {
        const dir = s.logPath.substring(0, s.logPath.lastIndexOf('/'));
        try { await app.vault.createFolder(dir); } catch(e) {}
        await app.vault.create(s.logPath, '---\ntotalSessions: 0\ntotalMinutes: 0\ncurrentStreak: 0\nlongestStreak: 0\nlastSessionDate: ""\nrudiments: {}\nentries: []\nbooks: {}\n---\n');
        await new Promise(r => setTimeout(r, 500));
        f = app.vault.getAbstractFileByPath(s.logPath);
    }
    if (f) await app.fileManager.processFrontMatter(f, updateFn);
};

// --- UI Helpers ---
DC.createCorners = (el, color='#333') => {
    [['top','left'],['top','right'],['bottom','left'],['bottom','right']].forEach(([v,h]) => {
        const c = document.createElement('div');
        c.style.cssText = `position:absolute;${v}:0;${h}:0;width:18px;height:18px;border-${v}:1px solid ${color};border-${h}:1px solid ${color};z-index:10;pointer-events:none;transition:all 0.4s ease;`;
        el.appendChild(c);
    });
};
DC.addMotes = (el, n=2) => {
    for (let i=0;i<n;i++) {
        const m = document.createElement('div');
        const sz = 1+Math.random()*1.5;
        m.style.cssText = `position:absolute;bottom:10%;left:${10+Math.random()*80}%;width:${sz}px;height:${sz}px;background:#fff;border-radius:50%;opacity:0;pointer-events:none;animation:dc-float-up ${8+Math.random()*6}s ${Math.random()*10}s ease-out infinite;z-index:1;`;
        el.appendChild(m);
    }
};
DC.card = (parent, opts={}) => {
    const c = document.createElement('div');
    c.className = 'dc-wrap';
    c.style.cssText = `border:1px solid ${DC.theme.border};padding:${opts.padding||'28px 24px'};margin-bottom:${opts.mb||'24px'};background:${DC.theme.bg};box-shadow:0 20px 60px rgba(0,0,0,0.8);position:relative;overflow:hidden;animation:dc-breathe ${6+Math.random()*4}s ease-in-out infinite,dc-fade-in 0.6s ease-out;max-width:${DC.theme.maxWidth};`;
    DC.createCorners(c, opts.corner||'#333');
    if (opts.motes !== false) DC.addMotes(c, opts.motes||2);
    parent.appendChild(c);
    return c;
};
DC.sectionTitle = (parent, text) => {
    const t = document.createElement('div');
    t.textContent = text;
    t.style.cssText = `font-size:11px;font-weight:500;color:#555;letter-spacing:3px;text-transform:uppercase;margin-bottom:20px;font-family:'Times New Roman',serif;`;
    parent.appendChild(t); return t;
};
DC.divider = (parent) => {
    const d = document.createElement('div');
    d.style.cssText = `width:40px;height:1px;background:linear-gradient(90deg,transparent,#333,transparent);margin:20px auto;`;
    parent.appendChild(d); return d;
};
DC.modal = (renderFn) => {
    const ov = document.createElement('div');
    ov.style.cssText = `position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.92);display:flex;align-items:center;justify-content:center;z-index:9999;backdrop-filter:blur(4px);animation:dc-modal-in 0.25s ease-out;`;
    const ct = document.createElement('div');
    ct.className = 'dc-wrap';
    ct.style.cssText = `background:#0a0a0a;border:1px solid #222;max-width:420px;width:92%;max-height:85vh;overflow-y:auto;padding:28px 24px;position:relative;animation:dc-modal-slide 0.35s cubic-bezier(0.4,0,0.2,1);`;
    DC.createCorners(ct,'#444');
    ov.appendChild(ct);
    const close = () => { ov.style.opacity='0'; ov.style.transition='opacity 0.2s'; setTimeout(()=>ov.remove(),200); };
    ov.onclick = e => { if (e.target===ov) close(); };
    renderFn(ct, close);
    document.body.appendChild(ov);
    return close;
};

DC.slugify = s => s.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/(^-|-$)/g,'');
DC.today = () => moment().format('YYYY-MM-DD');
DC.daysSince = d => d ? moment().diff(moment(d),'days') : Infinity;

// Session state
DC.activeSession = DC.activeSession || null;
DC.currentPlan = DC.currentPlan || null;

// Init marker
const wrap = dv.el('div','',{attr:{style:`max-width:${DC.theme.maxWidth};margin:0 auto;padding:4px 0;`}});
const st = document.createElement('div');
st.style.cssText = `font-family:'Courier New',monospace;font-size:9px;color:#2a2a2a;letter-spacing:3px;text-align:center;padding:4px;`;
st.textContent = 'JARVIS v1.0 — DRUM COACH SYSTEM';
wrap.appendChild(st);
```

```dataviewjs
// ============================================================
// BLOCK 2: COACH BRIEFING
// ============================================================
const DC = window.drumCoach;
if (!DC) { dv.paragraph('⚠ Initialize Block 1 first.'); return; }

const container = dv.el('div','',{attr:{style:`max-width:${DC.theme.maxWidth};margin:0 auto;`}});

const data = await DC.readLog();

// Briefing text style — larger serif, not in a card
const brief = document.createElement('div');
brief.style.cssText = `
    padding: 20px 8px 28px 8px;
    animation: dc-fade-in 0.8s ease-out;
`;
container.appendChild(brief);

const line = (text, opts={}) => {
    const p = document.createElement('p');
    p.textContent = text;
    p.style.cssText = `
        font-family: 'Georgia', serif;
        font-size: ${opts.size || '15px'};
        color: ${opts.color || '#999'};
        line-height: 1.7;
        margin: ${opts.margin || '0 0 12px 0'};
        ${opts.italic ? 'font-style:italic;' : ''}
    `;
    brief.appendChild(p);
    return p;
};

const heading = (text) => {
    const h = document.createElement('div');
    h.textContent = text;
    h.style.cssText = `font-family:'Times New Roman',serif;font-size:20px;color:#ccc;letter-spacing:1px;margin-bottom:16px;`;
    brief.appendChild(h);
};

if (!data || !data.rudiments || Object.keys(data.rudiments || {}).length === 0) {
    heading('Good evening.');
    line("No practice data yet. Let's establish your baselines.", {size:'16px', color:'#aaa'});
    line("I'll walk you through the main rudiment families — just play at a comfortable tempo and tell me your BPM. Use the Session Planner below to get started.", {color:'#777'});
} else {
    const now = moment();
    const lastDate = data.lastSessionDate;
    const streak = data.currentStreak || 0;
    const rudiments = data.rudiments || {};
    const entries = data.entries || [];
    const books = data.books || {};

    // --- Greeting ---
    const daysSinceLast = lastDate ? now.diff(moment(lastDate), 'days') : Infinity;
    if (daysSinceLast === 0) {
        heading(`Day ${streak}. Welcome back.`);
        line("You already practiced today. Reviewing your status.", {color:'#777'});
    } else if (daysSinceLast === 1) {
        heading(`Day ${streak}. Consistent.`);
        line(streak >= 7 ? `${streak} days running. That's how it's done.` : "You showed up yesterday. Show up again today.", {color:'#777'});
    } else if (daysSinceLast <= 3) {
        heading("Let's get back to it.");
        line(`${daysSinceLast} days since your last session. The streak was ${streak}. Time to rebuild.`, {color:'#777'});
    } else {
        heading("It's been a while.");
        line(`${daysSinceLast} days off. Your last streak was ${streak}. Start fresh today — no judgement, just play.`, {color:'#777'});
    }

    // --- What's improving ---
    const movers = [];
    for (const [slug, rd] of Object.entries(rudiments)) {
        if (rd.history && rd.history.length >= 2) {
            const recent = rd.history[0];
            const twoWeeksAgo = rd.history.find(h => DC.daysSince(h.date) >= 14);
            if (twoWeeksAgo && recent.comfortBPM > twoWeeksAgo.comfortBPM) {
                movers.push({ slug, name: slug.replace(/-/g,' '), gain: recent.comfortBPM - twoWeeksAgo.comfortBPM, current: recent.comfortBPM });
            }
        }
    }
    movers.sort((a,b) => b.gain - a.gain);
    if (movers.length > 0) {
        DC.divider(brief);
        line("What's improving:", {size:'12px', color:'#555', italic:true, margin:'0 0 8px 0'});
        movers.slice(0,3).forEach(m => {
            line(`${m.name} comfort BPM up ${m.gain} to ${m.current} over the last 2 weeks.`, {color:'#aaa'});
        });
    }

    // --- What's stagnating ---
    const stagnant = [];
    for (const [slug, rd] of Object.entries(rudiments)) {
        if (rd.history && rd.history.length >= 5) {
            const last5 = rd.history.slice(0, 5);
            const allSame = last5.every(h => h.comfortBPM === last5[0].comfortBPM);
            if (allSame) stagnant.push({ slug, name: slug.replace(/-/g,' '), bpm: last5[0].comfortBPM, sessions: rd.sessionCount });
        }
    }
    if (stagnant.length > 0) {
        DC.divider(brief);
        line("Plateaus:", {size:'12px', color:'#555', italic:true, margin:'0 0 8px 0'});
        stagnant.slice(0,3).forEach(s => {
            line(`${s.name} has been flat at ${s.bpm} BPM for ${Math.min(s.sessions, 8)}+ sessions. Time to push.`, {color:'#aaa'});
        });
    }

    // --- What's neglected ---
    const practiced = Object.entries(rudiments).map(([slug, rd]) => ({slug, name: slug.replace(/-/g,' '), lastPracticed: rd.lastPracticed}));
    const neglected = practiced.filter(r => DC.daysSince(r.lastPracticed) >= 14);
    // Also find categories never touched
    const practicedCats = new Set(practiced.map(r => {
        const rud = DC.RUDIMENTS.find(x => x.slug === r.slug);
        return rud ? rud.category : null;
    }).filter(Boolean));
    const untouchedCats = DC.CATEGORIES.filter(c => !practicedCats.has(c));

    if (neglected.length > 0 || untouchedCats.length > 0) {
        DC.divider(brief);
        line("Neglected:", {size:'12px', color:'#555', italic:true, margin:'0 0 8px 0'});
        neglected.slice(0,3).forEach(n => {
            line(`${n.name} — ${DC.daysSince(n.lastPracticed)} days since last touch.`, {color:'#aaa'});
        });
        if (untouchedCats.length > 0) {
            line(`Never practiced: ${untouchedCats.join(', ')}.`, {color:'#777'});
        }
    }

    // --- Book status ---
    const bookKeys = Object.keys(books);
    if (bookKeys.length > 0) {
        DC.divider(brief);
        line("Books:", {size:'12px', color:'#555', italic:true, margin:'0 0 8px 0'});
        bookKeys.forEach(bk => {
            const book = books[bk];
            const exKeys = Object.keys(book.exercises || {});
            const daysSinceBook = exKeys.reduce((min, ek) => {
                const ex = book.exercises[ek];
                return Math.min(min, DC.daysSince(ex.lastPracticed));
            }, Infinity);
            if (book.type === 'cycle' && exKeys.length > 0) {
                const bpms = exKeys.map(ek => book.exercises[ek].maxBPM || 0);
                const minBPM = Math.min(...bpms);
                const maxBPM = Math.max(...bpms);
                const lagging = exKeys.filter(ek => (book.exercises[ek].maxBPM||0) < maxBPM - 20);
                let msg = `${book.title}: ${exKeys.length} exercises tracked, BPM range ${minBPM}–${maxBPM}.`;
                if (lagging.length > 0) msg += ` ${lagging.length} exercise${lagging.length>1?'s':''} lagging behind.`;
                if (daysSinceBook > 7) msg += ` Haven't opened it in ${daysSinceBook} days.`;
                line(msg, {color:'#aaa'});
            } else if (book.type === 'linear') {
                let msg = `${book.title}: currently on page ${book.currentPage || '?'}.`;
                if (daysSinceBook > 7) msg += ` ${daysSinceBook} days since last practice.`;
                line(msg, {color:'#aaa'});
            } else {
                line(`${book.title}: no exercises tracked yet.`, {color:'#777'});
            }
        });
    }

    // --- Overall level ---
    const levels = [];
    for (const [slug, rd] of Object.entries(rudiments)) {
        const rud = DC.RUDIMENTS.find(r => r.slug === slug);
        if (rud && rd.comfortBPM) {
            levels.push(DC.getLevelNum(DC.getLevel(rud.category, rd.comfortBPM)));
        }
    }
    if (levels.length > 0) {
        const avgLevel = levels.reduce((a,b)=>a+b,0) / levels.length;
        const overall = DC.getLevelFromNum(avgLevel);
        // Find weakest categories
        const catLevels = {};
        for (const [slug, rd] of Object.entries(rudiments)) {
            const rud = DC.RUDIMENTS.find(r => r.slug === slug);
            if (rud && rd.comfortBPM) {
                if (!catLevels[rud.category]) catLevels[rud.category] = [];
                catLevels[rud.category].push(DC.getLevelNum(DC.getLevel(rud.category, rd.comfortBPM)));
            }
        }
        const weakest = Object.entries(catLevels)
            .map(([cat, lvls]) => ({cat, avg: lvls.reduce((a,b)=>a+b,0)/lvls.length}))
            .sort((a,b) => a.avg - b.avg);

        DC.divider(brief);
        let overallMsg = `Overall: ${overall}.`;
        if (weakest.length >= 2 && weakest[0].avg < avgLevel - 0.5) {
            overallMsg += ` ${weakest[0].cat} ${weakest.length > 1 && weakest[1].avg < avgLevel - 0.5 ? 'and ' + weakest[1].cat + ' are' : 'is'} holding you back.`;
        }
        line(overallMsg, {size:'16px', color:'#bbb'});
    }

    // --- Recommendation ---
    DC.divider(brief);
    const weakCats = neglected.length > 0
        ? [...new Set(neglected.map(n => { const r = DC.RUDIMENTS.find(x=>x.slug===n.slug); return r?.category; }).filter(Boolean))]
        : untouchedCats.length > 0 ? untouchedCats.slice(0,2) : DC.CATEGORIES.slice(0,2);
    const recTime = data.totalSessions > 0 ? Math.round((data.totalMinutes||0)/(data.totalSessions)) : 30;
    line(`Today I'd focus on ${weakCats.slice(0,2).join(' and ').toLowerCase()}. ${recTime} minutes should do it.`, {size:'16px', color:'#ccc'});
}

// Settings gear
const gear = document.createElement('div');
gear.textContent = '⚙';
gear.style.cssText = `font-size:14px;color:#333;cursor:pointer;text-align:right;padding:8px;transition:color 0.2s;`;
gear.onmouseover = () => gear.style.color = '#888';
gear.onmouseout = () => gear.style.color = '#333';
gear.onclick = () => {
    const s = DC.getSettings();
    DC.modal((ct, close) => {
        DC.sectionTitle(ct, 'Settings');
        const fields = [
            {key:'logPath', label:'Practice Log Path'},
            {key:'rudimentFolder', label:'Rudiment Notes Folder'},
            {key:'sessionFolder', label:'Session Notes Folder'},
        ];
        const inputs = {};
        fields.forEach(f => {
            const lbl = document.createElement('div');
            lbl.textContent = f.label;
            lbl.style.cssText = `font-family:'Georgia',serif;font-size:12px;color:#666;margin:12px 0 4px 0;`;
            ct.appendChild(lbl);
            const inp = document.createElement('input');
            inp.value = s[f.key] || '';
            ct.appendChild(inp);
            inputs[f.key] = inp;
        });
        const btn = document.createElement('button');
        btn.textContent = 'Save';
        btn.className = 'dc-primary';
        btn.style.cssText += 'width:100%;margin-top:20px;';
        btn.onclick = () => {
            const updated = {...s};
            for (const [k,inp] of Object.entries(inputs)) updated[k] = inp.value;
            DC.saveSettings(updated);
            new Notice('Settings saved.');
            close();
        };
        ct.appendChild(btn);
    });
};
container.appendChild(gear);
```

```dataviewjs
// ============================================================
// BLOCK 3: SESSION PLANNER
// ============================================================
const DC = window.drumCoach;
if (!DC) return;

const container = dv.el('div','',{attr:{style:`max-width:${DC.theme.maxWidth};margin:0 auto;`}});
const card = DC.card(container);
DC.sectionTitle(card, 'Session Planner');

const data = await DC.readLog();
const rudiments = data?.rudiments || {};
const books = data?.books || {};
const avgMin = data?.totalSessions > 0 ? Math.round((data.totalMinutes||0)/data.totalSessions) : 30;

// Time selector
const timeRow = document.createElement('div');
timeRow.style.cssText = 'display:flex;gap:8px;margin-bottom:20px;flex-wrap:wrap;';
card.appendChild(timeRow);

let selectedTime = avgMin;
const timeOpts = [15, 30, 45, 60];
const timeBtns = {};

timeOpts.forEach(t => {
    const btn = document.createElement('button');
    btn.textContent = `${t} min`;
    btn.style.cssText += 'flex:1;min-width:60px;';
    if (t === selectedTime || (selectedTime > 15 && selectedTime <= 22 && t === 15) ||
        (selectedTime > 22 && selectedTime <= 37 && t === 30) ||
        (selectedTime > 37 && selectedTime <= 52 && t === 45) ||
        (selectedTime > 52 && t === 60)) {
        btn.classList.add('dc-active');
    }
    btn.onclick = () => {
        selectedTime = t;
        Object.values(timeBtns).forEach(b => b.classList.remove('dc-active'));
        btn.classList.add('dc-active');
        generatePlan();
    };
    timeRow.appendChild(btn);
    timeBtns[t] = btn;
});

// Plan display
const planArea = document.createElement('div');
card.appendChild(planArea);

// Start session button area
const startArea = document.createElement('div');
startArea.style.cssText = 'margin-top:20px;';
card.appendChild(startArea);

function pickRudiments(category, count, exclude=[]) {
    const available = DC.RUDIMENTS.filter(r => r.category === category && !exclude.includes(r.slug));
    // Prefer those with data (sort by staleness)
    available.sort((a,b) => {
        const aData = rudiments[a.slug], bData = rudiments[b.slug];
        const aDays = aData ? DC.daysSince(aData.lastPracticed) : 999;
        const bDays = bData ? DC.daysSince(bData.lastPracticed) : 999;
        return bDays - aDays; // most stale first
    });
    return available.slice(0, count);
}

function getWeakestCategories() {
    const catScores = {};
    DC.CATEGORIES.forEach(cat => {
        const rudsInCat = DC.RUDIMENTS.filter(r => r.category === cat);
        const practiced = rudsInCat.filter(r => rudiments[r.slug]?.comfortBPM);
        if (practiced.length === 0) { catScores[cat] = 0; return; }
        const avg = practiced.reduce((sum,r) => sum + DC.getLevelNum(DC.getLevel(cat, rudiments[r.slug].comfortBPM)), 0) / practiced.length;
        catScores[cat] = avg;
    });
    return Object.entries(catScores).sort((a,b) => a[1] - b[1]).map(e => e[0]);
}

function getStalestCategories() {
    const catStaleness = {};
    DC.CATEGORIES.forEach(cat => {
        const rudsInCat = DC.RUDIMENTS.filter(r => r.category === cat);
        const dates = rudsInCat.map(r => rudiments[r.slug]?.lastPracticed).filter(Boolean);
        if (dates.length === 0) { catStaleness[cat] = 999; return; }
        catStaleness[cat] = Math.min(...dates.map(d => DC.daysSince(d)));
    });
    return Object.entries(catStaleness).sort((a,b) => b[1] - a[1]).map(e => e[0]);
}

function generatePlan() {
    planArea.innerHTML = '';
    const total = selectedTime;
    const hasBooks = Object.keys(books).length > 0;

    // Time allocation
    let warmup, technique, bookWork, pushZone, cooldown;
    if (hasBooks) {
        warmup = Math.round(total * 0.15);
        technique = Math.round(total * 0.25);
        bookWork = Math.round(total * 0.25);
        pushZone = Math.round(total * 0.20);
        cooldown = total - warmup - technique - bookWork - pushZone;
    } else {
        warmup = Math.round(total * 0.15);
        technique = Math.round(total * 0.35);
        bookWork = 0;
        pushZone = Math.round(total * 0.30);
        cooldown = total - warmup - technique - pushZone;
    }

    const weakCats = getWeakestCategories();
    const staleCats = getStalestCategories();
    const plan = [];
    const usedSlugs = [];

    // WARMUP — easiest rudiment at 60% comfort
    const warmupRud = rudiments['single-stroke-roll']
        ? {slug:'single-stroke-roll', name:'Single Stroke Roll', comfort: rudiments['single-stroke-roll'].comfortBPM}
        : {slug:'single-stroke-roll', name:'Single Stroke Roll', comfort: 100};
    const warmupBPM = Math.round((warmupRud.comfort || 100) * 0.6);
    plan.push({
        phase: 'Warmup', rudiment: warmupRud.name, slug: warmupRud.slug,
        bpmRange: `${warmupBPM}–${warmupBPM + 10}`, minutes: warmup,
        note: 'Slow and controlled. Focus on even strokes.', type: 'rudiment'
    });
    usedSlugs.push(warmupRud.slug);

    // TECHNIQUE — weakest or stalest categories
    const techCat1 = weakCats.find(c => c !== 'Single Strokes') || weakCats[0];
    const techRuds = pickRudiments(techCat1, 2, usedSlugs);
    techRuds.forEach((r, i) => {
        const rd = rudiments[r.slug];
        const comfort = rd?.comfortBPM || 80;
        const target = Math.round(comfort * 1.05);
        plan.push({
            phase: i === 0 ? 'Technique' : '', rudiment: r.name, slug: r.slug,
            bpmRange: `${comfort}–${target}`, minutes: Math.round(technique / Math.max(techRuds.length, 1)),
            note: rd ? `Push from ${comfort} toward ${target}.` : 'Establish your baseline tempo.', type: 'rudiment'
        });
        usedSlugs.push(r.slug);
    });
    if (techRuds.length === 0) {
        const fallback = pickRudiments(staleCats[0] || 'Paradiddles', 1, usedSlugs);
        if (fallback.length > 0) {
            plan.push({
                phase: 'Technique', rudiment: fallback[0].name, slug: fallback[0].slug,
                bpmRange: '80–90', minutes: technique, note: 'Start finding your comfortable tempo.', type: 'rudiment'
            });
            usedSlugs.push(fallback[0].slug);
        }
    }

    // BOOK WORK
    if (hasBooks) {
        const bookEntries = Object.entries(books);
        // Pick the stalest book, or alternate
        bookEntries.sort((a,b) => {
            const aEx = Object.values(a[1].exercises||{});
            const bEx = Object.values(b[1].exercises||{});
            const aLast = aEx.length > 0 ? Math.min(...aEx.map(e=>DC.daysSince(e.lastPracticed))) : 999;
            const bLast = bEx.length > 0 ? Math.min(...bEx.map(e=>DC.daysSince(e.lastPracticed))) : 999;
            return bLast - aLast;
        });
        const [bookSlug, book] = bookEntries[0];
        const exKeys = Object.keys(book.exercises || {});
        if (exKeys.length > 0) {
            // Pick 1-2 exercises
            const exArr = exKeys.map(k => ({key:k, ...book.exercises[k]})).filter(e => e.status !== 'mastered');
            exArr.sort((a,b) => DC.daysSince(b.lastPracticed) - DC.daysSince(a.lastPracticed));
            const pickCount = Math.min(2, exArr.length);
            exArr.slice(0, pickCount).forEach((ex, i) => {
                plan.push({
                    phase: i === 0 ? 'Book Work' : '', rudiment: `${book.title} — ${ex.label}`,
                    slug: null, bookSlug, exerciseKey: ex.key,
                    bpmRange: `${ex.comfortBPM||80}–${(ex.maxBPM||80)+5}`, minutes: Math.round(bookWork / pickCount),
                    note: book.type === 'cycle' ? 'Push tempo this rotation.' : `Current page ${book.currentPage||'?'}.`,
                    type: 'book'
                });
            });
        } else {
            plan.push({
                phase: 'Book Work', rudiment: `${book.title} — Add first exercise`,
                slug: null, bpmRange: '—', minutes: bookWork,
                note: 'Open the book and log your first exercise.', type: 'book'
            });
        }
    }

    // PUSH ZONE — rudiment with most improvement potential
    const pushCat = staleCats.find(c => !usedSlugs.some(s => DC.RUDIMENTS.find(r=>r.slug===s)?.category === c)) || weakCats[0];
    const pushRuds = pickRudiments(pushCat, 1, usedSlugs);
    if (pushRuds.length > 0) {
        const pr = pushRuds[0];
        const rd = rudiments[pr.slug];
        const maxBPM = rd?.maxBPM || 90;
        plan.push({
            phase: 'Push Zone', rudiment: pr.name, slug: pr.slug,
            bpmRange: `${maxBPM - 5}–${maxBPM + 10}`, minutes: pushZone,
            note: rd ? `Current max: ${maxBPM}. Go for a new PR.` : 'Find your ceiling.', type: 'rudiment'
        });
        usedSlugs.push(pr.slug);
    }

    // COOLDOWN
    const coolRud = rudiments['single-stroke-roll'] ? 'Single Stroke Roll' : DC.RUDIMENTS[0].name;
    const coolComfort = rudiments['single-stroke-roll']?.comfortBPM || 100;
    plan.push({
        phase: 'Cooldown', rudiment: coolRud, slug: 'single-stroke-roll',
        bpmRange: `${Math.round(coolComfort*0.7)}–${Math.round(coolComfort*0.8)}`, minutes: cooldown,
        note: 'Easy tempo. End clean.', type: 'rudiment'
    });

    DC.currentPlan = plan;

    // Render plan
    plan.forEach((item, idx) => {
        const row = document.createElement('div');
        row.style.cssText = `display:flex;align-items:flex-start;gap:12px;padding:12px 0;border-bottom:1px solid #1a1a1a;cursor:pointer;transition:background 0.2s;`;
        row.onmouseover = () => row.style.background = '#111';
        row.onmouseout = () => row.style.background = 'transparent';

        const phase = document.createElement('div');
        phase.textContent = item.phase;
        phase.style.cssText = `width:80px;flex-shrink:0;font-family:'Times New Roman',serif;font-size:11px;color:#555;letter-spacing:1px;text-transform:uppercase;padding-top:2px;`;
        row.appendChild(phase);

        const info = document.createElement('div');
        info.style.cssText = 'flex:1;min-width:0;';
        row.appendChild(info);

        const name = document.createElement('div');
        name.textContent = item.rudiment;
        name.style.cssText = `font-family:'Georgia',serif;font-size:14px;color:#ccc;margin-bottom:4px;`;
        info.appendChild(name);

        const meta = document.createElement('div');
        meta.textContent = `${item.bpmRange} BPM · ${item.minutes} min`;
        meta.style.cssText = `font-family:'Courier New',monospace;font-size:12px;color:#666;margin-bottom:2px;`;
        info.appendChild(meta);

        const note = document.createElement('div');
        note.textContent = item.note;
        note.style.cssText = `font-family:'Georgia',serif;font-size:11px;color:#555;font-style:italic;`;
        info.appendChild(note);

        planArea.appendChild(row);
    });

    // Start button
    startArea.innerHTML = '';
    const startBtn = document.createElement('button');
    startBtn.className = 'dc-primary';
    startBtn.textContent = 'Start Session';
    startBtn.style.cssText += 'width:100%;';
    startBtn.onclick = () => {
        DC.activeSession = {
            plan: [...plan],
            exercises: [],
            startTime: moment().format(),
            startDate: DC.today(),
        };
        new Notice('Session started. Scroll to the Logger to begin.');
    };
    startArea.appendChild(startBtn);
}

generatePlan();
```

```dataviewjs
// ============================================================
// BLOCK 4: ACTIVE SESSION LOGGER
// ============================================================
const DC = window.drumCoach;
if (!DC) return;

const container = dv.el('div','',{attr:{style:`max-width:${DC.theme.maxWidth};margin:0 auto;`}});
const card = DC.card(container);
DC.sectionTitle(card, 'Session Logger');

const data = await DC.readLog();
const rudiments = data?.rudiments || {};
const books = data?.books || {};

// State
let exerciseType = 'rudiment'; // rudiment | book | free
let selectedRudiment = '';
let selectedBook = '';
let selectedExercise = '';
let newExLabel = '';

const form = document.createElement('div');
card.appendChild(form);

// Logged exercises display
const loggedArea = document.createElement('div');
loggedArea.style.cssText = 'margin-bottom:20px;';
card.appendChild(loggedArea);

const feedbackArea = document.createElement('div');
card.appendChild(feedbackArea);

function renderForm() {
    form.innerHTML = '';
    const session = DC.activeSession;
    if (!session) {
        const msg = document.createElement('div');
        msg.textContent = 'No active session. Use the Session Planner to start one, or log exercises directly.';
        msg.style.cssText = `font-family:'Georgia',serif;font-size:13px;color:#555;font-style:italic;padding:12px 0;`;
        form.appendChild(msg);
    }

    // Type selector
    const typeRow = document.createElement('div');
    typeRow.style.cssText = 'display:flex;gap:6px;margin-bottom:16px;';
    form.appendChild(typeRow);
    ['rudiment','book','free'].forEach(t => {
        const btn = document.createElement('button');
        btn.textContent = t === 'rudiment' ? 'Rudiment' : t === 'book' ? 'Book Exercise' : 'Free Practice';
        btn.style.cssText += 'flex:1;font-size:11px;padding:8px 4px;';
        if (t === exerciseType) btn.classList.add('dc-active');
        btn.onclick = () => { exerciseType = t; renderForm(); };
        typeRow.appendChild(btn);
    });

    if (exerciseType === 'rudiment') {
        // Rudiment selector
        const sel = document.createElement('select');
        sel.style.cssText += 'margin-bottom:12px;';
        const defOpt = document.createElement('option');
        defOpt.value = ''; defOpt.textContent = '— Select Rudiment —';
        sel.appendChild(defOpt);
        DC.CATEGORIES.forEach(cat => {
            const grp = document.createElement('optgroup');
            grp.label = cat;
            DC.RUDIMENTS.filter(r => r.category === cat).forEach(r => {
                const opt = document.createElement('option');
                opt.value = r.slug; opt.textContent = r.name;
                if (r.slug === selectedRudiment) opt.selected = true;
                grp.appendChild(opt);
            });
            sel.appendChild(grp);
        });
        sel.onchange = () => { selectedRudiment = sel.value; };
        form.appendChild(sel);

    } else if (exerciseType === 'book') {
        const bookKeys = Object.keys(books);
        if (bookKeys.length === 0) {
            const msg = document.createElement('div');
            msg.textContent = 'No books added yet. Use the Book Library section to add one.';
            msg.style.cssText = `font-family:'Georgia',serif;font-size:12px;color:#555;font-style:italic;padding:8px 0;`;
            form.appendChild(msg);
        } else {
            // Book selector
            const bSel = document.createElement('select');
            bSel.style.cssText += 'margin-bottom:8px;';
            const bDef = document.createElement('option');
            bDef.value = ''; bDef.textContent = '— Select Book —';
            bSel.appendChild(bDef);
            bookKeys.forEach(k => {
                const opt = document.createElement('option');
                opt.value = k; opt.textContent = books[k].title;
                if (k === selectedBook) opt.selected = true;
                bSel.appendChild(opt);
            });
            bSel.onchange = () => { selectedBook = bSel.value; selectedExercise = ''; renderForm(); };
            form.appendChild(bSel);

            if (selectedBook && books[selectedBook]) {
                const bk = books[selectedBook];
                const exKeys = Object.keys(bk.exercises || {});
                const eSel = document.createElement('select');
                eSel.style.cssText += 'margin-bottom:8px;';
                const eDef = document.createElement('option');
                eDef.value = ''; eDef.textContent = '— Select Exercise —';
                eSel.appendChild(eDef);
                exKeys.forEach(k => {
                    const opt = document.createElement('option');
                    opt.value = k; opt.textContent = bk.exercises[k].label;
                    if (k === selectedExercise) opt.selected = true;
                    eSel.appendChild(opt);
                });
                const newOpt = document.createElement('option');
                newOpt.value = '__new__'; newOpt.textContent = '+ Add New Exercise';
                eSel.appendChild(newOpt);
                eSel.onchange = () => { selectedExercise = eSel.value; renderForm(); };
                form.appendChild(eSel);

                if (selectedExercise === '__new__') {
                    const newInp = document.createElement('input');
                    newInp.placeholder = 'e.g. "Exercise 13 (p.6)"';
                    newInp.style.cssText += 'margin-bottom:8px;';
                    newInp.value = newExLabel;
                    newInp.oninput = () => { newExLabel = newInp.value; };
                    form.appendChild(newInp);
                }
            }
        }

    } else {
        // Free practice — label
        const freeInp = document.createElement('input');
        freeInp.placeholder = 'What are you practicing?';
        freeInp.style.cssText += 'margin-bottom:12px;';
        form.appendChild(freeInp);
        freeInp._dcFreeLabel = true;
    }

    // BPM inputs
    const bpmRow = document.createElement('div');
    bpmRow.style.cssText = 'display:flex;gap:8px;margin-bottom:12px;';
    form.appendChild(bpmRow);

    const comfortWrap = document.createElement('div');
    comfortWrap.style.cssText = 'flex:1;';
    const comfortLbl = document.createElement('div');
    comfortLbl.textContent = 'Comfort BPM';
    comfortLbl.style.cssText = `font-family:'Georgia',serif;font-size:11px;color:#555;margin-bottom:4px;`;
    comfortWrap.appendChild(comfortLbl);
    const comfortInp = document.createElement('input');
    comfortInp.type = 'number'; comfortInp.placeholder = '120';
    comfortInp.id = 'dc-comfort-bpm';
    // Pre-fill from last session data
    if (exerciseType === 'rudiment' && selectedRudiment && rudiments[selectedRudiment]) {
        comfortInp.value = rudiments[selectedRudiment].comfortBPM || '';
    }
    comfortWrap.appendChild(comfortInp);
    bpmRow.appendChild(comfortWrap);

    const maxWrap = document.createElement('div');
    maxWrap.style.cssText = 'flex:1;';
    const maxLbl = document.createElement('div');
    maxLbl.textContent = 'Max BPM';
    maxLbl.style.cssText = `font-family:'Georgia',serif;font-size:11px;color:#555;margin-bottom:4px;`;
    maxWrap.appendChild(maxLbl);
    const maxInp = document.createElement('input');
    maxInp.type = 'number'; maxInp.placeholder = '140';
    maxInp.id = 'dc-max-bpm';
    if (exerciseType === 'rudiment' && selectedRudiment && rudiments[selectedRudiment]) {
        maxInp.value = rudiments[selectedRudiment].maxBPM || '';
    }
    maxWrap.appendChild(maxInp);
    bpmRow.appendChild(maxWrap);

    // Duration
    const durRow = document.createElement('div');
    durRow.style.cssText = 'margin-bottom:12px;';
    const durLbl = document.createElement('div');
    durLbl.textContent = 'Minutes';
    durLbl.style.cssText = `font-family:'Georgia',serif;font-size:11px;color:#555;margin-bottom:4px;`;
    durRow.appendChild(durLbl);
    const durInp = document.createElement('input');
    durInp.type = 'number'; durInp.placeholder = '10'; durInp.value = '10';
    durInp.id = 'dc-duration';
    durRow.appendChild(durInp);
    form.appendChild(durRow);

    // Notes
    const notesInp = document.createElement('input');
    notesInp.placeholder = 'Notes (optional)';
    notesInp.id = 'dc-notes';
    notesInp.style.cssText += 'margin-bottom:12px;';
    form.appendChild(notesInp);

    // Quick tags
    const tagRow = document.createElement('div');
    tagRow.style.cssText = 'display:flex;gap:6px;margin-bottom:16px;flex-wrap:wrap;';
    form.appendChild(tagRow);
    let selectedTag = '';
    ['Clean','Sloppy','Breakthrough','Struggled'].forEach(tag => {
        const btn = document.createElement('button');
        btn.textContent = tag;
        btn.style.cssText += 'font-size:10px;padding:6px 12px;min-height:36px;';
        btn.onclick = () => {
            if (selectedTag === tag) { selectedTag = ''; btn.classList.remove('dc-active'); }
            else {
                tagRow.querySelectorAll('button').forEach(b => b.classList.remove('dc-active'));
                selectedTag = tag; btn.classList.add('dc-active');
            }
        };
        tagRow.appendChild(btn);
    });

    // Log button
    const logBtn = document.createElement('button');
    logBtn.className = 'dc-primary';
    logBtn.textContent = 'Log Exercise';
    logBtn.style.cssText += 'width:100%;';
    logBtn.onclick = async () => {
        const comfort = parseInt(comfortInp.value);
        const max = parseInt(maxInp.value);
        const mins = parseInt(durInp.value) || 10;
        const notes = notesInp.value.trim();

        if (!comfort && !max) { new Notice('Enter at least one BPM value.'); return; }

        let entry = { minutes: mins, comfortBPM: comfort || max, maxBPM: max || comfort, notes };
        if (selectedTag) entry.notes = (entry.notes ? entry.notes + ' ' : '') + `[${selectedTag}]`;

        if (exerciseType === 'rudiment') {
            if (!selectedRudiment) { new Notice('Select a rudiment.'); return; }
            const rud = DC.RUDIMENTS.find(r => r.slug === selectedRudiment);
            entry.rudiment = rud.name;
            entry.slug = selectedRudiment;
        } else if (exerciseType === 'book') {
            if (!selectedBook) { new Notice('Select a book.'); return; }
            entry.type = 'book';
            entry.book = selectedBook;
            if (selectedExercise === '__new__') {
                if (!newExLabel.trim()) { new Notice('Enter exercise label.'); return; }
                entry.exercise = DC.slugify(newExLabel);
                entry.label = newExLabel.trim();
                entry.isNew = true;
            } else if (selectedExercise) {
                entry.exercise = selectedExercise;
                entry.label = books[selectedBook].exercises[selectedExercise].label;
            } else { new Notice('Select an exercise.'); return; }
        } else {
            const freeEl = form.querySelector('input[placeholder="What are you practicing?"]');
            entry.type = 'free';
            entry.label = freeEl?.value?.trim() || 'Free practice';
        }

        // Save to Practice Log
        await DC.writeLog(fm => {
            if (!fm.rudiments) fm.rudiments = {};
            if (!fm.entries) fm.entries = [];
            if (!fm.books) fm.books = {};

            const today = DC.today();

            if (exerciseType === 'rudiment' && entry.slug) {
                const rd = fm.rudiments[entry.slug] || { comfortBPM:0, maxBPM:0, lastPracticed:'', sessionCount:0, history:[] };
                rd.comfortBPM = entry.comfortBPM;
                rd.maxBPM = Math.max(rd.maxBPM || 0, entry.maxBPM);
                rd.lastPracticed = today;
                rd.sessionCount = (rd.sessionCount || 0) + 1;
                if (!rd.history) rd.history = [];
                rd.history.unshift({ date: today, comfortBPM: entry.comfortBPM, maxBPM: entry.maxBPM });
                if (rd.history.length > 20) rd.history = rd.history.slice(0, 20);
                fm.rudiments[entry.slug] = rd;
            }

            if (exerciseType === 'book' && entry.book) {
                const bk = fm.books[entry.book];
                if (bk) {
                    if (!bk.exercises) bk.exercises = {};
                    if (entry.isNew) {
                        bk.exercises[entry.exercise] = {
                            label: entry.label, comfortBPM: entry.comfortBPM, maxBPM: entry.maxBPM,
                            sessionCount: 1, lastPracticed: today, status: 'active',
                            history: [{ date: today, comfortBPM: entry.comfortBPM, maxBPM: entry.maxBPM }]
                        };
                    } else if (bk.exercises[entry.exercise]) {
                        const ex = bk.exercises[entry.exercise];
                        ex.comfortBPM = entry.comfortBPM;
                        ex.maxBPM = Math.max(ex.maxBPM || 0, entry.maxBPM);
                        ex.lastPracticed = today;
                        ex.sessionCount = (ex.sessionCount || 0) + 1;
                        if (!ex.history) ex.history = [];
                        ex.history.unshift({ date: today, comfortBPM: entry.comfortBPM, maxBPM: entry.maxBPM });
                        if (ex.history.length > 20) ex.history = ex.history.slice(0, 20);
                    }
                }
            }

            // Add to session entries if active session
            if (DC.activeSession) {
                DC.activeSession.exercises.push(entry);
            }
        });

        // Feedback
        feedbackArea.innerHTML = '';
        const fb = document.createElement('div');
        fb.style.cssText = `padding:12px 16px;border:1px solid #1a1a1a;background:#0c0c0c;margin-bottom:12px;animation:dc-fade-in 0.4s ease-out;`;
        feedbackArea.appendChild(fb);

        if (exerciseType === 'rudiment' && entry.slug) {
            const prevData = rudiments[entry.slug];
            if (prevData) {
                if (entry.maxBPM > (prevData.maxBPM || 0)) {
                    const fbText = document.createElement('div');
                    fbText.textContent = `New max on ${entry.rudiment}: ${entry.maxBPM} BPM. Previous best was ${prevData.maxBPM}.`;
                    fbText.style.cssText = `font-family:'Georgia',serif;font-size:13px;color:${DC.theme.success};`;
                    fb.appendChild(fbText);
                } else if (entry.comfortBPM > (prevData.comfortBPM || 0)) {
                    const fbText = document.createElement('div');
                    fbText.textContent = `Comfort BPM up ${entry.comfortBPM - prevData.comfortBPM} from last session. Real progress.`;
                    fbText.style.cssText = `font-family:'Georgia',serif;font-size:13px;color:${DC.theme.success};`;
                    fb.appendChild(fbText);
                } else if (entry.comfortBPM === prevData.comfortBPM) {
                    const fbText = document.createElement('div');
                    fbText.textContent = `Holding steady at ${entry.comfortBPM}. Next session, try starting at ${entry.comfortBPM + 2}.`;
                    fbText.style.cssText = `font-family:'Georgia',serif;font-size:13px;color:#888;`;
                    fb.appendChild(fbText);
                } else {
                    const fbText = document.createElement('div');
                    fbText.textContent = `Down from ${prevData.comfortBPM} to ${entry.comfortBPM} today. Off days happen.`;
                    fbText.style.cssText = `font-family:'Georgia',serif;font-size:13px;color:${DC.theme.warning};`;
                    fb.appendChild(fbText);
                }
            } else {
                const fbText = document.createElement('div');
                fbText.textContent = `Baseline set for ${entry.rudiment}: ${entry.comfortBPM} comfort / ${entry.maxBPM} max.`;
                fbText.style.cssText = `font-family:'Georgia',serif;font-size:13px;color:#aaa;`;
                fb.appendChild(fbText);
            }
        } else {
            const fbText = document.createElement('div');
            fbText.textContent = `Logged: ${entry.label || entry.rudiment || 'Exercise'} at ${entry.comfortBPM}/${entry.maxBPM} BPM.`;
            fbText.style.cssText = `font-family:'Georgia',serif;font-size:13px;color:#aaa;`;
            fb.appendChild(fbText);
        }

        // Update logged exercises
        renderLogged();
        new Notice('Exercise logged.');
    };
    form.appendChild(logBtn);

    // End Session button
    if (DC.activeSession) {
        const endBtn = document.createElement('button');
        endBtn.textContent = 'End Session';
        endBtn.style.cssText += 'width:100%;margin-top:8px;border-color:#8a4a4a;color:#8a4a4a;';
        endBtn.onmouseover = () => { endBtn.style.borderColor = '#c66'; endBtn.style.color = '#c66'; };
        endBtn.onmouseout = () => { endBtn.style.borderColor = '#8a4a4a'; endBtn.style.color = '#8a4a4a'; };
        endBtn.onclick = () => endSession();
        form.appendChild(endBtn);
    }
}

function renderLogged() {
    loggedArea.innerHTML = '';
    const session = DC.activeSession;
    if (!session || session.exercises.length === 0) return;

    const title = document.createElement('div');
    title.textContent = `Logged (${session.exercises.length})`;
    title.style.cssText = `font-family:'Times New Roman',serif;font-size:11px;color:#555;letter-spacing:2px;text-transform:uppercase;margin-bottom:8px;`;
    loggedArea.appendChild(title);

    session.exercises.forEach(ex => {
        const row = document.createElement('div');
        row.style.cssText = `display:flex;justify-content:space-between;padding:6px 0;border-bottom:1px solid #1a1a1a;`;
        const name = document.createElement('div');
        name.textContent = ex.rudiment || ex.label || 'Exercise';
        name.style.cssText = `font-family:'Georgia',serif;font-size:12px;color:#888;`;
        row.appendChild(name);
        const bpm = document.createElement('div');
        bpm.textContent = `${ex.comfortBPM}/${ex.maxBPM} · ${ex.minutes}m`;
        bpm.style.cssText = `font-family:'Courier New',monospace;font-size:12px;color:#666;`;
        row.appendChild(bpm);
        loggedArea.appendChild(row);
    });
}

async function endSession() {
    const session = DC.activeSession;
    if (!session) return;

    DC.modal(async (ct, close) => {
        DC.sectionTitle(ct, 'Session Summary');

        const totalMins = session.exercises.reduce((s,e) => s + (e.minutes||0), 0);
        const prs = session.exercises.filter(e => {
            if (!e.slug) return false;
            const prev = rudiments[e.slug];
            return prev && e.maxBPM > (prev.maxBPM || 0);
        });

        const stats = document.createElement('div');
        stats.style.cssText = 'margin-bottom:16px;';
        const statLine = (label, val) => {
            const row = document.createElement('div');
            row.style.cssText = `display:flex;justify-content:space-between;padding:6px 0;border-bottom:1px solid #1a1a1a;`;
            const l = document.createElement('div');
            l.textContent = label;
            l.style.cssText = `font-family:'Georgia',serif;font-size:13px;color:#666;`;
            row.appendChild(l);
            const v = document.createElement('div');
            v.textContent = val;
            v.style.cssText = `font-family:'Courier New',monospace;font-size:13px;color:#ccc;`;
            row.appendChild(v);
            stats.appendChild(row);
        };
        statLine('Total Time', `${totalMins} min`);
        statLine('Exercises', `${session.exercises.length}`);
        statLine('PRs Hit', `${prs.length}`);
        ct.appendChild(stats);

        // Rating
        const ratingLbl = document.createElement('div');
        ratingLbl.textContent = 'Session Rating';
        ratingLbl.style.cssText = `font-family:'Georgia',serif;font-size:12px;color:#555;margin:12px 0 8px 0;`;
        ct.appendChild(ratingLbl);
        const ratingRow = document.createElement('div');
        ratingRow.style.cssText = 'display:flex;gap:8px;margin-bottom:12px;';
        ct.appendChild(ratingRow);
        let rating = 3;
        for (let i = 1; i <= 5; i++) {
            const btn = document.createElement('button');
            btn.textContent = i;
            btn.style.cssText += 'flex:1;min-height:44px;font-family:"Courier New",monospace;font-size:16px;';
            if (i === 3) btn.classList.add('dc-active');
            btn.onclick = () => {
                rating = i;
                ratingRow.querySelectorAll('button').forEach(b => b.classList.remove('dc-active'));
                btn.classList.add('dc-active');
            };
            ratingRow.appendChild(btn);
        }

        // Metronome toggle
        const metRow = document.createElement('div');
        metRow.style.cssText = 'display:flex;align-items:center;gap:12px;margin-bottom:20px;';
        const metLbl = document.createElement('div');
        metLbl.textContent = 'Used metronome?';
        metLbl.style.cssText = `font-family:'Georgia',serif;font-size:13px;color:#666;`;
        metRow.appendChild(metLbl);
        let usedMetronome = true;
        const metBtnY = document.createElement('button');
        metBtnY.textContent = 'Yes';
        metBtnY.classList.add('dc-active');
        metBtnY.style.cssText += 'min-height:36px;padding:6px 16px;';
        const metBtnN = document.createElement('button');
        metBtnN.textContent = 'No';
        metBtnN.style.cssText += 'min-height:36px;padding:6px 16px;';
        metBtnY.onclick = () => { usedMetronome = true; metBtnY.classList.add('dc-active'); metBtnN.classList.remove('dc-active'); };
        metBtnN.onclick = () => { usedMetronome = false; metBtnN.classList.add('dc-active'); metBtnY.classList.remove('dc-active'); };
        metRow.appendChild(metBtnY);
        metRow.appendChild(metBtnN);
        ct.appendChild(metRow);

        // Save button
        const saveBtn = document.createElement('button');
        saveBtn.className = 'dc-primary';
        saveBtn.textContent = 'Save Session';
        saveBtn.style.cssText += 'width:100%;';
        saveBtn.onclick = async () => {
            await DC.writeLog(fm => {
                fm.totalSessions = (fm.totalSessions || 0) + 1;
                fm.totalMinutes = (fm.totalMinutes || 0) + totalMins;
                fm.lastSessionDate = DC.today();

                // Update streak
                const yesterday = moment().subtract(1,'day').format('YYYY-MM-DD');
                if (fm.lastSessionDate === yesterday || fm.lastSessionDate === DC.today()) {
                    fm.currentStreak = (fm.currentStreak || 0) + 1;
                } else {
                    fm.currentStreak = 1;
                }
                fm.longestStreak = Math.max(fm.longestStreak || 0, fm.currentStreak);

                // Add session entry
                if (!fm.entries) fm.entries = [];
                fm.entries.unshift({
                    id: Date.now(),
                    timestamp: moment().format(),
                    date: DC.today(),
                    totalMinutes: totalMins,
                    rating: rating,
                    usedMetronome: usedMetronome,
                    exercises: session.exercises.map(e => {
                        const clean = { ...e };
                        delete clean.slug;
                        delete clean.isNew;
                        return clean;
                    }),
                });
                if (fm.entries.length > 200) fm.entries = fm.entries.slice(0, 200);
            });

            DC.activeSession = null;
            new Notice('Session saved.');
            close();
        };
        ct.appendChild(saveBtn);
    });
}

renderForm();
renderLogged();
```

```dataviewjs
// ============================================================
// BLOCK 5: PROGRESS DASHBOARD
// ============================================================
const DC = window.drumCoach;
if (!DC) return;

const container = dv.el('div','',{attr:{style:`max-width:${DC.theme.maxWidth};margin:0 auto;`}});
const card = DC.card(container);
DC.sectionTitle(card, 'Progress');

const data = await DC.readLog();
const rudiments = data?.rudiments || {};
const entries = data?.entries || [];
const books = data?.books || {};

// --- Stats Row ---
const statsGrid = document.createElement('div');
statsGrid.style.cssText = 'display:grid;grid-template-columns:1fr 1fr 1fr;gap:1px;background:#1a1a1a;margin-bottom:24px;';
card.appendChild(statsGrid);

function statCell(label, value) {
    const cell = document.createElement('div');
    cell.style.cssText = `background:#0a0a0a;padding:16px 8px;text-align:center;`;
    const val = document.createElement('div');
    val.textContent = value;
    val.style.cssText = `font-family:'Courier New',monospace;font-size:20px;color:#ccc;margin-bottom:4px;`;
    cell.appendChild(val);
    const lbl = document.createElement('div');
    lbl.textContent = label;
    lbl.style.cssText = `font-family:'Georgia',serif;font-size:10px;color:#555;text-transform:uppercase;letter-spacing:1px;`;
    cell.appendChild(lbl);
    statsGrid.appendChild(cell);
}

const totalHrs = data ? ((data.totalMinutes || 0) / 60).toFixed(1) : '0';
const avgSession = data?.totalSessions > 0 ? Math.round((data.totalMinutes||0)/data.totalSessions) : 0;
const metronomeRate = entries.length > 0 ? Math.round(entries.filter(e=>e.usedMetronome).length / entries.length * 100) : 0;
const practicedRudCount = Object.keys(rudiments).length;

// Level counts
const levelCounts = {beginner:0, developing:0, intermediate:0, advanced:0, pro:0};
for (const [slug, rd] of Object.entries(rudiments)) {
    const rud = DC.RUDIMENTS.find(r => r.slug === slug);
    if (rud && rd.comfortBPM) {
        const lv = DC.getLevel(rud.category, rd.comfortBPM);
        if (levelCounts[lv] !== undefined) levelCounts[lv]++;
    }
}

statCell('Hours', totalHrs);
statCell('Streak', `${data?.currentStreak || 0}d`);
statCell('Best Streak', `${data?.longestStreak || 0}d`);
statCell('Avg Session', `${avgSession}m`);
statCell('Rudiments', `${practicedRudCount}/40`);
statCell('Metronome', `${metronomeRate}%`);

// Level summary
const levelSummary = document.createElement('div');
levelSummary.style.cssText = 'margin-bottom:24px;';
card.appendChild(levelSummary);
const levelColors = {beginner:'#8a4a4a',developing:'#8a7a4a',intermediate:'#5a8a5a',advanced:'#4a6a8a',pro:'#8a5a8a'};
const levelRow = document.createElement('div');
levelRow.style.cssText = 'display:flex;gap:8px;flex-wrap:wrap;';
levelSummary.appendChild(levelRow);
for (const [lv, count] of Object.entries(levelCounts)) {
    if (count === 0) continue;
    const badge = document.createElement('span');
    badge.textContent = `${count} ${lv}`;
    badge.style.cssText = `font-family:'Courier New',monospace;font-size:11px;color:${levelColors[lv]};border:1px solid ${levelColors[lv]}44;padding:4px 10px;`;
    levelRow.appendChild(badge);
}

// Books in progress
const activeBooks = Object.values(books).filter(b => Object.keys(b.exercises||{}).length > 0);
if (activeBooks.length > 0) {
    const bookStat = document.createElement('div');
    bookStat.textContent = `${activeBooks.length} book${activeBooks.length>1?'s':''} in progress`;
    bookStat.style.cssText = `font-family:'Georgia',serif;font-size:12px;color:#555;font-style:italic;margin-top:8px;`;
    levelSummary.appendChild(bookStat);
}

DC.divider(card);

// --- BPM Trend Chart ---
DC.sectionTitle(card, 'BPM Trends');

const chartSelect = document.createElement('select');
chartSelect.style.cssText += 'margin-bottom:12px;';
card.appendChild(chartSelect);

// Group options: Rudiments, then Books
const rudGroup = document.createElement('optgroup');
rudGroup.label = 'Rudiments';
Object.keys(rudiments).forEach(slug => {
    const rud = DC.RUDIMENTS.find(r => r.slug === slug);
    if (rud && rudiments[slug].history?.length > 0) {
        const opt = document.createElement('option');
        opt.value = `rud:${slug}`;
        opt.textContent = rud.name;
        rudGroup.appendChild(opt);
    }
});
if (rudGroup.children.length > 0) chartSelect.appendChild(rudGroup);

Object.entries(books).forEach(([bk, book]) => {
    const exKeys = Object.keys(book.exercises || {});
    if (exKeys.length > 0) {
        const grp = document.createElement('optgroup');
        grp.label = book.title;
        exKeys.forEach(ek => {
            const ex = book.exercises[ek];
            if (ex.history?.length > 0) {
                const opt = document.createElement('option');
                opt.value = `book:${bk}:${ek}`;
                opt.textContent = ex.label;
                grp.appendChild(opt);
            }
        });
        if (grp.children.length > 0) chartSelect.appendChild(grp);
    }
});

const chartCanvas = document.createElement('canvas');
const chartW = 400, chartH = 200;
const dpr = window.devicePixelRatio || 1;
chartCanvas.width = chartW * dpr;
chartCanvas.height = chartH * dpr;
chartCanvas.style.cssText = `width:${chartW}px;height:${chartH}px;display:block;margin:0 auto;`;
card.appendChild(chartCanvas);
const ctx = chartCanvas.getContext('2d');
ctx.scale(dpr, dpr);

function drawChart(key) {
    ctx.clearRect(0, 0, chartW, chartH);
    let history = [];
    let category = null;

    if (key.startsWith('rud:')) {
        const slug = key.slice(4);
        history = rudiments[slug]?.history || [];
        const rud = DC.RUDIMENTS.find(r => r.slug === slug);
        category = rud?.category;
    } else if (key.startsWith('book:')) {
        const parts = key.split(':');
        const bk = parts[1], ek = parts[2];
        history = books[bk]?.exercises?.[ek]?.history || [];
    }

    if (history.length === 0) return;

    const reversed = [...history].reverse(); // oldest first
    const pad = {top:20, right:20, bottom:30, left:45};
    const w = chartW - pad.left - pad.right;
    const h = chartH - pad.top - pad.bottom;

    const allBPMs = reversed.flatMap(d => [d.comfortBPM, d.maxBPM]);
    const minBPM = Math.min(...allBPMs) - 10;
    const maxBPM = Math.max(...allBPMs) + 10;

    const xScale = (i) => pad.left + (i / Math.max(reversed.length - 1, 1)) * w;
    const yScale = (v) => pad.top + h - ((v - minBPM) / (maxBPM - minBPM)) * h;

    // Draw benchmark bands if rudiment
    if (category) {
        const catKey = DC.CAT_KEY[category];
        if (catKey) {
            const bench = DC.BENCH[catKey];
            const bandColors = {beginner:'#8a4a4a11',developing:'#8a7a4a11',intermediate:'#5a8a5a11',advanced:'#4a6a8a11',pro:'#8a5a8a11'};
            for (const [lv, [lo, hi]] of Object.entries(bench)) {
                const y1 = yScale(Math.min(hi, maxBPM));
                const y2 = yScale(Math.max(lo, minBPM));
                if (y1 < pad.top + h && y2 > pad.top) {
                    ctx.fillStyle = bandColors[lv] || '#ffffff08';
                    ctx.fillRect(pad.left, Math.max(y1, pad.top), w, Math.min(y2 - y1, h));
                }
            }
        }
    }

    // Grid lines
    ctx.strokeStyle = '#1a1a1a';
    ctx.lineWidth = 1;
    for (let i = 0; i <= 4; i++) {
        const y = pad.top + (h / 4) * i;
        ctx.beginPath(); ctx.moveTo(pad.left, y); ctx.lineTo(pad.left + w, y); ctx.stroke();
        const val = Math.round(maxBPM - ((maxBPM - minBPM) / 4) * i);
        ctx.fillStyle = '#444';
        ctx.font = '10px Courier New';
        ctx.textAlign = 'right';
        ctx.fillText(val, pad.left - 6, y + 3);
    }

    // Comfort BPM line
    ctx.strokeStyle = '#888';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    reversed.forEach((d, i) => {
        const x = xScale(i), y = yScale(d.comfortBPM);
        i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
    });
    ctx.stroke();

    // Max BPM line
    ctx.strokeStyle = '#fff';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    reversed.forEach((d, i) => {
        const x = xScale(i), y = yScale(d.maxBPM);
        i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
    });
    ctx.stroke();

    // Dots
    reversed.forEach((d, i) => {
        const x = xScale(i);
        ctx.fillStyle = '#888';
        ctx.beginPath(); ctx.arc(x, yScale(d.comfortBPM), 3, 0, Math.PI * 2); ctx.fill();
        ctx.fillStyle = '#fff';
        ctx.beginPath(); ctx.arc(x, yScale(d.maxBPM), 3, 0, Math.PI * 2); ctx.fill();
    });

    // Legend
    ctx.font = '10px Georgia';
    ctx.fillStyle = '#888'; ctx.textAlign = 'left';
    ctx.fillText('comfort', pad.left, chartH - 5);
    ctx.fillStyle = '#fff';
    ctx.fillText('max', pad.left + 60, chartH - 5);
}

chartSelect.onchange = () => drawChart(chartSelect.value);
if (chartSelect.options.length > 0) drawChart(chartSelect.value);

DC.divider(card);

// --- Skill Radar ---
DC.sectionTitle(card, 'Balance');

const radarCanvas = document.createElement('canvas');
const radarSize = 300;
radarCanvas.width = radarSize * dpr;
radarCanvas.height = radarSize * dpr;
radarCanvas.style.cssText = `width:${radarSize}px;height:${radarSize}px;display:block;margin:0 auto;`;
card.appendChild(radarCanvas);
const rCtx = radarCanvas.getContext('2d');
rCtx.scale(dpr, dpr);

function drawRadar() {
    rCtx.clearRect(0, 0, radarSize, radarSize);
    const cx = radarSize / 2, cy = radarSize / 2, r = 100;
    const cats = DC.CATEGORIES;
    const n = cats.length;

    // Calculate levels per category
    const catLevels = cats.map(cat => {
        const rudsInCat = DC.RUDIMENTS.filter(rd => rd.category === cat);
        const practiced = rudsInCat.filter(rd => rudiments[rd.slug]?.comfortBPM);
        if (practiced.length === 0) return 0;
        const avg = practiced.reduce((sum, rd) =>
            sum + DC.getLevelNum(DC.getLevel(cat, rudiments[rd.slug].comfortBPM)), 0) / practiced.length;
        return avg;
    });

    // Draw concentric rings
    for (let ring = 1; ring <= 5; ring++) {
        const ringR = (ring / 5) * r;
        rCtx.strokeStyle = '#1a1a1a';
        rCtx.lineWidth = 1;
        rCtx.beginPath();
        for (let i = 0; i <= n; i++) {
            const angle = (Math.PI * 2 * i / n) - Math.PI / 2;
            const x = cx + Math.cos(angle) * ringR;
            const y = cy + Math.sin(angle) * ringR;
            i === 0 ? rCtx.moveTo(x, y) : rCtx.lineTo(x, y);
        }
        rCtx.stroke();
    }

    // Draw axes
    for (let i = 0; i < n; i++) {
        const angle = (Math.PI * 2 * i / n) - Math.PI / 2;
        rCtx.strokeStyle = '#1a1a1a';
        rCtx.beginPath();
        rCtx.moveTo(cx, cy);
        rCtx.lineTo(cx + Math.cos(angle) * r, cy + Math.sin(angle) * r);
        rCtx.stroke();

        // Labels
        const labelR = r + 20;
        const lx = cx + Math.cos(angle) * labelR;
        const ly = cy + Math.sin(angle) * labelR;
        rCtx.font = '10px Georgia';
        rCtx.fillStyle = '#555';
        rCtx.textAlign = 'center';
        rCtx.textBaseline = 'middle';
        const shortName = cats[i].replace(' Strokes','').replace('Single ','S.').replace('Double ','D.');
        rCtx.fillText(shortName, lx, ly);
    }

    // Draw data polygon
    rCtx.strokeStyle = '#fff';
    rCtx.lineWidth = 1.5;
    rCtx.fillStyle = 'rgba(255,255,255,0.08)';
    rCtx.beginPath();
    catLevels.forEach((lv, i) => {
        const angle = (Math.PI * 2 * i / n) - Math.PI / 2;
        const dataR = (lv / 5) * r;
        const x = cx + Math.cos(angle) * dataR;
        const y = cy + Math.sin(angle) * dataR;
        i === 0 ? rCtx.moveTo(x, y) : rCtx.lineTo(x, y);
    });
    rCtx.closePath();
    rCtx.fill();
    rCtx.stroke();

    // Data points
    catLevels.forEach((lv, i) => {
        const angle = (Math.PI * 2 * i / n) - Math.PI / 2;
        const dataR = (lv / 5) * r;
        rCtx.fillStyle = '#fff';
        rCtx.beginPath();
        rCtx.arc(cx + Math.cos(angle) * dataR, cy + Math.sin(angle) * dataR, 3, 0, Math.PI * 2);
        rCtx.fill();
    });
}

drawRadar();

DC.divider(card);

// --- Consistency Heatmap ---
DC.sectionTitle(card, 'Consistency');

const heatmap = document.createElement('div');
heatmap.style.cssText = 'display:flex;gap:3px;flex-wrap:wrap;justify-content:center;';
card.appendChild(heatmap);

// Last 12 weeks = 84 days
const today = moment().startOf('day');
const startDay = today.clone().subtract(83, 'days');

// Build a map of date -> minutes
const dateMinutes = {};
entries.forEach(e => {
    if (e.date && e.totalMinutes) {
        dateMinutes[e.date] = (dateMinutes[e.date] || 0) + e.totalMinutes;
    }
});

const maxMins = Math.max(...Object.values(dateMinutes), 1);

for (let d = 0; d < 84; d++) {
    const date = startDay.clone().add(d, 'days');
    const dateStr = date.format('YYYY-MM-DD');
    const mins = dateMinutes[dateStr] || 0;
    const intensity = mins > 0 ? 0.2 + (mins / maxMins) * 0.8 : 0;

    const cell = document.createElement('div');
    cell.title = `${dateStr}: ${mins}m`;
    cell.style.cssText = `
        width: 12px; height: 12px;
        background: ${mins > 0 ? `rgba(255,255,255,${intensity})` : '#111'};
        border: 1px solid #1a1a1a;
        transition: background 0.2s;
    `;
    heatmap.appendChild(cell);
}

// Week labels
const weekLabel = document.createElement('div');
weekLabel.style.cssText = `display:flex;justify-content:space-between;width:100%;margin-top:4px;`;
weekLabel.innerHTML = `<span style="font-family:'Courier New',monospace;font-size:9px;color:#333;">12w ago</span><span style="font-family:'Courier New',monospace;font-size:9px;color:#333;">today</span>`;
card.appendChild(weekLabel);
```

```dataviewjs
// ============================================================
// BLOCK 6: RUDIMENT DATABASE
// ============================================================
const DC = window.drumCoach;
if (!DC) return;

const container = dv.el('div','',{attr:{style:`max-width:${DC.theme.maxWidth};margin:0 auto;`}});
const card = DC.card(container, {padding:'20px 16px'});
DC.sectionTitle(card, 'Rudiment Database');

const data = await DC.readLog();
const rudiments = data?.rudiments || {};

// Sort controls
const sortRow = document.createElement('div');
sortRow.style.cssText = 'display:flex;gap:6px;margin-bottom:16px;flex-wrap:wrap;';
card.appendChild(sortRow);

let sortBy = 'category';
const sortOpts = ['category','name','level','last practiced','sessions'];
sortOpts.forEach(s => {
    const btn = document.createElement('button');
    btn.textContent = s;
    btn.style.cssText += 'font-size:10px;padding:6px 10px;min-height:36px;';
    if (s === sortBy) btn.classList.add('dc-active');
    btn.onclick = () => {
        sortBy = s;
        sortRow.querySelectorAll('button').forEach(b => b.classList.remove('dc-active'));
        btn.classList.add('dc-active');
        renderList();
    };
    sortRow.appendChild(btn);
});

const listArea = document.createElement('div');
card.appendChild(listArea);

function renderList() {
    listArea.innerHTML = '';

    let sorted = [...DC.RUDIMENTS].map(r => {
        const rd = rudiments[r.slug] || {};
        return {
            ...r,
            comfortBPM: rd.comfortBPM || 0,
            maxBPM: rd.maxBPM || 0,
            lastPracticed: rd.lastPracticed || '',
            sessionCount: rd.sessionCount || 0,
            history: rd.history || [],
            level: rd.comfortBPM ? DC.getLevel(r.category, rd.comfortBPM) : 'unrated',
        };
    });

    if (sortBy === 'name') sorted.sort((a,b) => a.name.localeCompare(b.name));
    else if (sortBy === 'level') sorted.sort((a,b) => DC.getLevelNum(b.level) - DC.getLevelNum(a.level));
    else if (sortBy === 'last practiced') sorted.sort((a,b) => {
        if (!a.lastPracticed) return 1;
        if (!b.lastPracticed) return -1;
        return moment(b.lastPracticed).diff(moment(a.lastPracticed));
    });
    else if (sortBy === 'sessions') sorted.sort((a,b) => b.sessionCount - a.sessionCount);
    // default: category grouping (already in order)

    const levelColors = {unrated:'#333',beginner:'#8a4a4a',developing:'#8a7a4a',intermediate:'#5a8a5a',advanced:'#4a6a8a',pro:'#8a5a8a'};

    let currentCat = '';
    sorted.forEach(r => {
        if (sortBy === 'category' && r.category !== currentCat) {
            currentCat = r.category;
            const catHeader = document.createElement('div');
            catHeader.textContent = currentCat;
            catHeader.style.cssText = `font-family:'Times New Roman',serif;font-size:11px;color:#444;letter-spacing:2px;text-transform:uppercase;padding:12px 0 6px 0;border-bottom:1px solid #1a1a1a;margin-top:8px;`;
            listArea.appendChild(catHeader);
        }

        const row = document.createElement('div');
        row.style.cssText = `display:flex;align-items:center;gap:8px;padding:10px 8px;border-bottom:1px solid #111;cursor:pointer;transition:background 0.2s;`;
        row.onmouseover = () => row.style.background = '#111';
        row.onmouseout = () => row.style.background = 'transparent';

        // Name
        const nameEl = document.createElement('div');
        nameEl.textContent = r.name;
        nameEl.style.cssText = `flex:1;font-family:'Georgia',serif;font-size:13px;color:${r.comfortBPM ? '#aaa' : '#555'};min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;`;
        row.appendChild(nameEl);

        // Trend
        if (r.history.length >= 3) {
            const last3 = r.history.slice(0, 3).map(h => h.comfortBPM);
            const trend = last3[0] > last3[2] ? '↑' : last3[0] < last3[2] ? '↓' : '→';
            const trendColor = trend === '↑' ? DC.theme.success : trend === '↓' ? DC.theme.danger : '#666';
            const trendEl = document.createElement('span');
            trendEl.textContent = trend;
            trendEl.style.cssText = `font-size:14px;color:${trendColor};`;
            row.appendChild(trendEl);
        }

        // BPM
        const bpmEl = document.createElement('div');
        bpmEl.textContent = r.comfortBPM ? `${r.comfortBPM}/${r.maxBPM}` : '—';
        bpmEl.style.cssText = `font-family:'Courier New',monospace;font-size:12px;color:#666;width:70px;text-align:right;`;
        row.appendChild(bpmEl);

        // Level badge
        const lvBadge = document.createElement('span');
        lvBadge.textContent = r.level === 'unrated' ? '—' : r.level.charAt(0).toUpperCase();
        lvBadge.title = r.level;
        lvBadge.style.cssText = `font-family:'Courier New',monospace;font-size:10px;color:${levelColors[r.level]};border:1px solid ${levelColors[r.level]}44;padding:2px 6px;width:24px;text-align:center;`;
        row.appendChild(lvBadge);

        // Click for detail
        row.onclick = () => {
            DC.modal((ct, close) => {
                DC.sectionTitle(ct, r.name);
                const catBadge = document.createElement('div');
                catBadge.textContent = r.category;
                catBadge.style.cssText = `font-family:'Georgia',serif;font-size:12px;color:#555;font-style:italic;margin-bottom:16px;`;
                ct.appendChild(catBadge);

                const detailStats = document.createElement('div');
                detailStats.style.cssText = 'margin-bottom:16px;';
                const dLine = (l,v) => {
                    const row = document.createElement('div');
                    row.style.cssText = `display:flex;justify-content:space-between;padding:6px 0;border-bottom:1px solid #1a1a1a;`;
                    const ll = document.createElement('div'); ll.textContent = l; ll.style.cssText = `font-family:'Georgia',serif;font-size:12px;color:#555;`;
                    const vv = document.createElement('div'); vv.textContent = v; vv.style.cssText = `font-family:'Courier New',monospace;font-size:12px;color:#aaa;`;
                    row.appendChild(ll); row.appendChild(vv); detailStats.appendChild(row);
                };
                dLine('Level', r.level);
                dLine('Comfort BPM', r.comfortBPM || '—');
                dLine('Max BPM', r.maxBPM || '—');
                dLine('Sessions', r.sessionCount);
                dLine('Last Practiced', r.lastPracticed || 'Never');
                ct.appendChild(detailStats);

                // Mini history
                if (r.history.length > 0) {
                    DC.sectionTitle(ct, 'History');
                    r.history.slice(0, 10).forEach(h => {
                        const hRow = document.createElement('div');
                        hRow.style.cssText = `display:flex;justify-content:space-between;padding:4px 0;`;
                        const hDate = document.createElement('div'); hDate.textContent = h.date; hDate.style.cssText = `font-family:'Courier New',monospace;font-size:11px;color:#555;`;
                        const hBPM = document.createElement('div'); hBPM.textContent = `${h.comfortBPM}/${h.maxBPM}`; hBPM.style.cssText = `font-family:'Courier New',monospace;font-size:11px;color:#888;`;
                        hRow.appendChild(hDate); hRow.appendChild(hBPM); ct.appendChild(hRow);
                    });
                }
            });
        };

        listArea.appendChild(row);
    });
}

renderList();
```

```dataviewjs
// ============================================================
// BLOCK 7: BOOK LIBRARY
// ============================================================
const DC = window.drumCoach;
if (!DC) return;

const container = dv.el('div','',{attr:{style:`max-width:${DC.theme.maxWidth};margin:0 auto;`}});
const card = DC.card(container, {padding:'20px 16px'});
DC.sectionTitle(card, 'Book Library');

const data = await DC.readLog();
const books = data?.books || {};

const listArea = document.createElement('div');
card.appendChild(listArea);

// Add Book button
const addBtn = document.createElement('button');
addBtn.textContent = '+ Add Book';
addBtn.style.cssText += 'width:100%;margin-bottom:16px;';
addBtn.onclick = () => {
    DC.modal((ct, close) => {
        DC.sectionTitle(ct, 'Add Book');

        const titleInp = document.createElement('input');
        titleInp.placeholder = 'Book title';
        titleInp.style.cssText += 'margin-bottom:8px;';
        ct.appendChild(titleInp);

        const authorInp = document.createElement('input');
        authorInp.placeholder = 'Author (optional)';
        authorInp.style.cssText += 'margin-bottom:8px;';
        ct.appendChild(authorInp);

        // Auto-detect known books
        const hintArea = document.createElement('div');
        hintArea.style.cssText = `font-family:'Georgia',serif;font-size:11px;color:#555;font-style:italic;margin-bottom:8px;min-height:20px;`;
        ct.appendChild(hintArea);

        titleInp.oninput = () => {
            const lower = titleInp.value.toLowerCase().trim();
            const match = Object.entries(DC.KNOWN_BOOKS).find(([k]) => lower.includes(k) || k.includes(lower));
            if (match) {
                hintArea.textContent = `Recognized: ${match[0]}. Defaults applied.`;
                authorInp.value = match[1].author || '';
                typeSel.value = match[1].type;
                totalInp.value = match[1].totalExercises;
            } else {
                hintArea.textContent = '';
            }
        };

        const typeRow = document.createElement('div');
        typeRow.style.cssText = 'display:flex;gap:8px;margin-bottom:8px;';
        const typeLbl = document.createElement('div');
        typeLbl.textContent = 'Type';
        typeLbl.style.cssText = `font-family:'Georgia',serif;font-size:11px;color:#555;margin-bottom:4px;`;
        ct.appendChild(typeLbl);
        const typeSel = document.createElement('select');
        typeSel.innerHTML = '<option value="cycle">Cycle (rotate exercises)</option><option value="linear">Linear (work through)</option>';
        typeSel.style.cssText += 'margin-bottom:8px;';
        ct.appendChild(typeSel);

        const totalLbl = document.createElement('div');
        totalLbl.textContent = 'Total Exercises (approximate)';
        totalLbl.style.cssText = `font-family:'Georgia',serif;font-size:11px;color:#555;margin-bottom:4px;`;
        ct.appendChild(totalLbl);
        const totalInp = document.createElement('input');
        totalInp.type = 'number'; totalInp.placeholder = '72';
        totalInp.style.cssText += 'margin-bottom:16px;';
        ct.appendChild(totalInp);

        const saveBtn = document.createElement('button');
        saveBtn.className = 'dc-primary';
        saveBtn.textContent = 'Add Book';
        saveBtn.style.cssText += 'width:100%;';
        saveBtn.onclick = async () => {
            const title = titleInp.value.trim();
            if (!title) { new Notice('Enter a title.'); return; }
            const slug = DC.slugify(title);

            await DC.writeLog(fm => {
                if (!fm.books) fm.books = {};
                fm.books[slug] = {
                    title: title,
                    author: authorInp.value.trim(),
                    type: typeSel.value,
                    totalExercises: parseInt(totalInp.value) || 50,
                    currentPage: 1,
                    exercises: {},
                };
            });

            new Notice(`Added: ${title}`);
            close();
            renderBooks();
        };
        ct.appendChild(saveBtn);
    });
};
card.appendChild(addBtn);

function renderBooks() {
    listArea.innerHTML = '';
    const currentBooks = data?.books || {};

    if (Object.keys(currentBooks).length === 0) {
        const empty = document.createElement('div');
        empty.textContent = 'No books added yet. Add your first practice book above.';
        empty.style.cssText = `font-family:'Georgia',serif;font-size:13px;color:#555;font-style:italic;text-align:center;padding:20px 0;`;
        listArea.appendChild(empty);
        return;
    }

    Object.entries(currentBooks).forEach(([slug, book]) => {
        const bookCard = document.createElement('div');
        bookCard.style.cssText = `border:1px solid #1a1a1a;padding:16px;margin-bottom:12px;background:#0c0c0c;cursor:pointer;transition:all 0.2s;position:relative;`;
        bookCard.onmouseover = () => { bookCard.style.borderColor = '#333'; bookCard.style.background = '#111'; };
        bookCard.onmouseout = () => { bookCard.style.borderColor = '#1a1a1a'; bookCard.style.background = '#0c0c0c'; };

        const header = document.createElement('div');
        header.style.cssText = 'display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:8px;';
        bookCard.appendChild(header);

        const titleEl = document.createElement('div');
        titleEl.style.cssText = 'flex:1;';
        const titleText = document.createElement('div');
        titleText.textContent = book.title;
        titleText.style.cssText = `font-family:'Georgia',serif;font-size:14px;color:#aaa;`;
        titleEl.appendChild(titleText);
        if (book.author) {
            const authorText = document.createElement('div');
            authorText.textContent = book.author;
            authorText.style.cssText = `font-family:'Georgia',serif;font-size:11px;color:#555;font-style:italic;`;
            titleEl.appendChild(authorText);
        }
        header.appendChild(titleEl);

        const typeBadge = document.createElement('span');
        typeBadge.textContent = book.type.toUpperCase();
        typeBadge.style.cssText = `font-family:'Courier New',monospace;font-size:10px;color:#666;border:1px solid #333;padding:2px 8px;`;
        header.appendChild(typeBadge);

        // Progress bar
        const exCount = Object.keys(book.exercises || {}).length;
        const total = book.totalExercises || 1;
        const pct = Math.round((exCount / total) * 100);
        const barWrap = document.createElement('div');
        barWrap.style.cssText = 'height:4px;background:#1a1a1a;margin-bottom:8px;';
        const barFill = document.createElement('div');
        barFill.style.cssText = `height:100%;width:${pct}%;background:#fff;transition:width 0.3s;`;
        barWrap.appendChild(barFill);
        bookCard.appendChild(barWrap);

        // Stats
        const statsRow = document.createElement('div');
        statsRow.style.cssText = `display:flex;gap:16px;font-family:'Courier New',monospace;font-size:11px;color:#555;`;
        statsRow.innerHTML = `<span>${exCount}/${total} exercises</span><span>${pct}%</span>`;
        bookCard.appendChild(statsRow);

        // BPM range
        if (exCount > 0) {
            const exArr = Object.values(book.exercises);
            const bpms = exArr.map(e => e.maxBPM || 0).filter(b => b > 0);
            if (bpms.length > 0) {
                const bpmRange = document.createElement('div');
                bpmRange.textContent = `BPM: ${Math.min(...bpms)} – ${Math.max(...bpms)}`;
                bpmRange.style.cssText = `font-family:'Courier New',monospace;font-size:11px;color:#555;margin-top:4px;`;
                bookCard.appendChild(bpmRange);
            }
        }

        if (book.type === 'linear') {
            const currentEl = document.createElement('div');
            currentEl.textContent = `Currently on: page ${book.currentPage || 1}`;
            currentEl.style.cssText = `font-family:'Georgia',serif;font-size:11px;color:#666;margin-top:4px;font-style:italic;`;
            bookCard.appendChild(currentEl);
        }

        // Click for detail
        bookCard.onclick = () => {
            DC.modal((ct, close) => {
                DC.sectionTitle(ct, book.title);
                const exEntries = Object.entries(book.exercises || {});
                if (exEntries.length === 0) {
                    const empty = document.createElement('div');
                    empty.textContent = 'No exercises tracked yet. Log a book exercise in the Session Logger to add one.';
                    empty.style.cssText = `font-family:'Georgia',serif;font-size:12px;color:#555;font-style:italic;`;
                    ct.appendChild(empty);
                    return;
                }

                exEntries.forEach(([key, ex]) => {
                    const exRow = document.createElement('div');
                    exRow.style.cssText = `display:flex;justify-content:space-between;align-items:center;padding:10px 0;border-bottom:1px solid #1a1a1a;`;

                    const exInfo = document.createElement('div');
                    const exName = document.createElement('div');
                    exName.textContent = ex.label;
                    exName.style.cssText = `font-family:'Georgia',serif;font-size:13px;color:#aaa;`;
                    exInfo.appendChild(exName);
                    const exMeta = document.createElement('div');
                    exMeta.textContent = `${ex.sessionCount || 0} sessions · last: ${ex.lastPracticed || 'never'}`;
                    exMeta.style.cssText = `font-family:'Courier New',monospace;font-size:10px;color:#555;`;
                    exInfo.appendChild(exMeta);
                    exRow.appendChild(exInfo);

                    const exBPM = document.createElement('div');
                    exBPM.style.cssText = 'text-align:right;';
                    const bpmText = document.createElement('div');
                    bpmText.textContent = `${ex.comfortBPM||0}/${ex.maxBPM||0}`;
                    bpmText.style.cssText = `font-family:'Courier New',monospace;font-size:13px;color:#888;`;
                    exBPM.appendChild(bpmText);

                    const statusBadge = document.createElement('div');
                    statusBadge.textContent = (ex.status||'active').toUpperCase();
                    const statusColor = ex.status === 'mastered' ? DC.theme.success : ex.status === 'skipped' ? '#666' : '#888';
                    statusBadge.style.cssText = `font-family:'Courier New',monospace;font-size:9px;color:${statusColor};`;
                    exBPM.appendChild(statusBadge);
                    exRow.appendChild(exBPM);

                    ct.appendChild(exRow);
                });
            });
        };

        listArea.appendChild(bookCard);
    });
}

renderBooks();
```

```dataviewjs
// ============================================================
// BLOCK 8: TIMELINE / HISTORY
// ============================================================
const DC = window.drumCoach;
if (!DC) return;

const container = dv.el('div','',{attr:{style:`max-width:${DC.theme.maxWidth};margin:0 auto;`}});
const card = DC.card(container);
DC.sectionTitle(card, 'Recent Sessions');

const data = await DC.readLog();
const entries = (data?.entries || []).slice(0, 10);

if (entries.length === 0) {
    const empty = document.createElement('div');
    empty.textContent = 'No sessions recorded yet. Complete your first session to see your history here.';
    empty.style.cssText = `font-family:'Georgia',serif;font-size:13px;color:#555;font-style:italic;text-align:center;padding:20px 0;`;
    card.appendChild(empty);
} else {
    const timeline = document.createElement('div');
    timeline.style.cssText = 'position:relative;padding-left:20px;';
    card.appendChild(timeline);

    // Vertical line
    const vline = document.createElement('div');
    vline.style.cssText = `position:absolute;left:6px;top:0;bottom:0;width:1px;background:#1a1a1a;`;
    timeline.appendChild(vline);

    entries.forEach((entry, idx) => {
        const item = document.createElement('div');
        item.style.cssText = `position:relative;padding:16px 0;margin-bottom:4px;border-bottom:1px solid #0f0f0f;animation:dc-fade-in ${0.3 + idx * 0.1}s ease-out;`;

        // Dot
        const dot = document.createElement('div');
        dot.style.cssText = `position:absolute;left:-17px;top:20px;width:7px;height:7px;border-radius:50%;background:${idx === 0 ? '#fff' : '#333'};border:1px solid ${idx === 0 ? '#fff' : '#444'};`;
        item.appendChild(dot);

        // Date & meta
        const dateRow = document.createElement('div');
        dateRow.style.cssText = 'display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;';
        const dateEl = document.createElement('div');
        dateEl.textContent = moment(entry.date).format('MMM D, YYYY');
        dateEl.style.cssText = `font-family:'Georgia',serif;font-size:13px;color:#aaa;`;
        dateRow.appendChild(dateEl);

        const metaEl = document.createElement('div');
        metaEl.style.cssText = `display:flex;gap:10px;font-family:'Courier New',monospace;font-size:11px;color:#555;`;
        metaEl.innerHTML = `<span>${entry.totalMinutes || 0}m</span><span>${entry.rating || '—'}/5</span>${entry.usedMetronome ? '<span>MET</span>' : ''}`;
        dateRow.appendChild(metaEl);
        item.appendChild(dateRow);

        // Exercises
        const exercises = entry.exercises || [];
        exercises.forEach(ex => {
            const exRow = document.createElement('div');
            exRow.style.cssText = `display:flex;justify-content:space-between;padding:4px 0 4px 8px;`;

            const exName = document.createElement('div');
            if (ex.type === 'book') {
                exName.textContent = ex.label || `${ex.book} exercise`;
            } else if (ex.type === 'free') {
                exName.textContent = ex.label || 'Free practice';
            } else {
                exName.textContent = ex.rudiment || 'Exercise';
            }
            exName.style.cssText = `font-family:'Georgia',serif;font-size:12px;color:#666;`;
            exRow.appendChild(exName);

            const exBPM = document.createElement('div');
            exBPM.textContent = `${ex.comfortBPM || '—'}/${ex.maxBPM || '—'}`;
            exBPM.style.cssText = `font-family:'Courier New',monospace;font-size:11px;color:#555;`;
            exRow.appendChild(exBPM);

            item.appendChild(exRow);
        });

        if (exercises.length === 0) {
            const noEx = document.createElement('div');
            noEx.textContent = 'No exercises logged for this session.';
            noEx.style.cssText = `font-family:'Georgia',serif;font-size:11px;color:#444;font-style:italic;padding:4px 0 4px 8px;`;
            item.appendChild(noEx);
        }

        timeline.appendChild(item);
    });
}

// Footer
const footer = document.createElement('div');
footer.style.cssText = `text-align:center;padding:24px 0 8px 0;`;
const footerText = document.createElement('div');
footerText.textContent = 'JARVIS — Drum Coach System';
footerText.style.cssText = `font-family:'Courier New',monospace;font-size:9px;color:#222;letter-spacing:3px;`;
footer.appendChild(footerText);
container.appendChild(footer);
```
