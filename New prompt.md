# Personal Stats 
- Add "Personal Stats" to the profile settings with the ability to log weight height and birthday like this

---
Weight: 61
Height: 175
Birthdate: "2005-11-29"
---

- on weight: options to change how regularly you log it (e.g. 2 times a week, in every week, every 2 weeks, plus add custom number of days). **Put the options that make most sense**
- The system will use this info for graphs about the weight progress in the Olen dashboard. The system will check how many days since last log to notify the user through the Olen dashboard to log their weight by a notification.
- Personal Stats will also handle the birth day of the user to find his exact age, and then go on and use this age for the workout strength calculator as Workout Session MD did.

# Small note
make it in every screen to scroll further down because currently the info at the bottom is cut from Obsidian bar in mobile.

# Strength heatmap
- take the "Muscle Man.svg" and "Muscle Woman.svg" and implement them to the current set up
	- the gender it shows will be determined from the profile's personal stats (male or female)

# UI
- When the user clicks a muscle in the muscle figure (heatmap), a graph pops up showing his monthly progress of that myscle (+a yearly progress option), when he clicks elsewhere the pop up closes.
- Add another pop up (that opens by a button bellow the muscle figure called "Progress") that shows 2 graphics: 
	- the first one shows the overall strength gain or lose (all exercises combined showing the average strength curvatures) of the month and year
	- the second shows it with multiple lines, each referring to a individual muscle

- make a different map for chosing muscles, with the musclean lighting the muscles the user selects, this page opens from a "start new workout" button high at the page.
# Aesthetic 
- Make the overall aesthetic minimal Olen dashboard glass feeling
- But make it dark without colors, unless necessary 
- make sure more minimal cause right now it's too loaded with useless info

*After you finish, update the "GUIDE — Converting Workout session.md to an Olen Template.md"

(If you have any questions on the implementation you can ask me with the questions tool of yours, I'll be here to answer, just write in simple language cause I'm not a programmer)