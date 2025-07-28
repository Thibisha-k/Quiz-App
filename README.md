# Quiz App

A simple and interactive multiple-choice quiz web app built using **HTML**, **CSS**, and **JavaScript**. This application allows users to test their knowledge with a series of questions, view their score, and restart the quiz.

---

## Features

- Multiple choice questions
- Timer countdown for each quiz session
- Immediate feedback on answers (optional)
- Score calculation and display
- Restart quiz feature
- Responsive design for mobile and desktop

---

## Files Used

### index.html
- Structurally defines:
  - Quiz container
  - Question text
  - Options/Answers section
  - Buttons (Start, Next, Restart)
  - Score and timer display

### styles.css
- Visually improves the quiz app with:
  - Flexbox layout to center content
  - Media queries for responsive design
  - Transitions and hover effects for buttons
  - Custom fonts and colors
  - Card-style question box with shadows and rounded borders
  - Timer badge styling
  - Color indication for selected answers (e.g., correct = green, wrong = red)

### script.js
- Adds interactivity:
  - Loads and displays each question dynamically
  - Tracks selected answers
  - Calculates final score
  - Shows result and enables quiz restart
  - Timer logic using `setInterval`
  - Optional logic to highlight correct and incorrect answers

---

## Styles and UI Design Details

Here’s a quick breakdown of the specific CSS techniques and visual elements used:

| Style Element         | Description |
|----------------------|-------------|
| `display: flex`      | Used to center the quiz box both horizontally and vertically |
| `border-radius`      | Makes the question box and buttons look smooth and modern |
| `box-shadow`         | Adds depth to the quiz container |
| `:hover` effects     | Used on buttons and options to provide visual feedback |
| `transition`         | Smooth animation when hovering over buttons or changing styles |
| `media queries`      | Makes the quiz app responsive for tablets and phones |
 |background gradients` or `solid colors` | Used to create a clean app background |
 |color-coding       | Green for correct and red for incorrect answers, optional visual cues |

## How to Run

1. Download or clone this repository.
2. Open the folder and find the `index.html` file.
3. Double-click `index.html` to open it in your default browser.
4. Click **Start Quiz** to begin.
5. At the end of the quiz, view your score and restart if needed.


