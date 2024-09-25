# TIC_TAK_TOE_Resposnsive
This is a responsive Tic-Tac-Toe game built using HTML, CSS, and JavaScript. The game includes sound effects for clicks and a confetti celebration for the winning player.

## Features

- **Responsive Design**: The game board adapts to different screen sizes, ensuring a smooth user experience across devices.
- **Sound Effects**: Audio feedback is provided when a player clicks on a cell or resets/starts a new game.
- **Confetti Celebration**: A confetti animation is triggered when a player wins the game.
- **Player Turns**: Alternates between Player "O" and Player "X", with visual indication of whose turn it is.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Files](#files)
- [Credits](#credits)

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/tic-tac-toe-game.git
    ```

2. Navigate to the project directory:
    ```bash
    cd tic-tac-toe-game
    ```

3. Open the `index.html` file in your browser to start the game.

    Alternatively, you can use a local server:
    ```bash
    npx serve .
    ```

4. Ensure your project structure looks like this:
    ```
    - soundss/
      - buttons.wav
      - new game button.wav
    - index.html
    - style.css
    - script.js
    ```

## Usage

### Game Instructions
1. Player "O" always starts the game.
2. Click on any of the boxes to place your marker (either "O" or "X").
3. The game alternates turns between Player "O" and Player "X".
4. When a player wins (by completing a row, column, or diagonal), a confetti celebration is triggered, and the game board is disabled.
5. Click on "Reset" or "New Game" to start a new round.

### Sound Effects
- The click sound for placing a marker is stored in `soundss/buttons.wav`.
- The sound for resetting or starting a new game is stored in `soundss/new game button.wav`.

### Confetti Celebration
When a player wins, a confetti animation is triggered on the screen. Ensure you have internet access for the confetti effect, as it relies on an external library.

## Files

- `index.html`: The main structure of the game.
- `style.css`: Styles for the game including responsive layout and button styles.
- `script.js`: Contains the game logic, sound integration, and confetti trigger.
- `soundss/buttons.wav`: Sound file for clicking.
- `soundss/new game button.wav`: Sound file for the new game/reset button.

## Dependencies

- **canvas-confetti**: This library is used to trigger the confetti effect. It is loaded via a CDN.

```html
<script src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.4.0/dist/confetti.browser.min.js"></script>
