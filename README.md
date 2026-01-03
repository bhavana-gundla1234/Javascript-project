🪨📄✂️ Rock Paper Scissors Game

     A browser-based Rock Paper Scissors game built using HTML, CSS, and JavaScript, designed to closely match the provided Figma design and functional requirements.
     The game allows a human player to compete against the computer with persistent scoring, visual feedback, and an interactive UI.

🚀 Live Gameplay Overview

   .Player selects Rock / Paper / Scissors
   .Computer makes a random choice
   .Result is displayed instantly
   .Scores update and persist across refresh
   .Special win celebration screen appears only when the user wins

✨ Features
 🎮 Gameplay

   .Human vs Computer gameplay
   .Simultaneous move selection
   .Randomized computer logic
   .Instant result display: 
     .YOU WON AGAINST PC
     .YOU LOST AGAINST PC
     .TIED UP

  🧮 Score Management

    .Scores stored using LocalStorage
    .Scores do NOT reset on refresh
    .Scores increment after every round
    .No target score limit

  🎨 UI & Animations

     .Inverted triangle game layout
     .Color-coded borders:
       .Rock → Blue
       .Paper → Orange
       .Scissors → Purple
      .Green ripple animation (3 rings) appears only on the winner
      .No animation on tie or loss
      .Borders remain unchanged during animations

  🏆 Win Celebration

     .“HURRAY!!” screen appears only when user wins
     .Trophy animation created using pure CSS
     .Animated rotating stars around trophy
     .“NEXT” button appears only after a user win

  📜 Rules Section

     .Rules button fixed at bottom-right
     .Click to open/close popup
     .Styled popup with:
       .Thick white border
       .Yellow bullet points
       .Close button

🗂️ Project Structure
rock-paper-scissors/
│
├── index.html        # Main HTML structure
├── styles.css        # Styling, layout, animations
├── script.js         # Game logic & DOM handling
├── assets/
│   ├── rock.jpg
│   ├── paper.jpg
│   ├── scissors.jpg
│
└── README.md         # Project documentation

   🛠️ Technologies Used

      .HTML5 – Structure
      .CSS3 – Styling, layout, animations
      .JavaScript (ES6) – Game logic, DOM manipulation
      .LocalStorage API – Persistent score storage

    🧠 Game Rules

      .Rock beats Scissors
      .Scissors beats Paper
      .Paper beats Rock
      .Same choice results in a Tie
      .Winner gains 1 point
      .Scores are saved automatically
      .Game can be played indefinitely

    📦 How to Run Locally

       .Download or clone the repository
       .Open index.html in any modern browser
       .Start playing 🎉
       .No build tools or dependencies required.
