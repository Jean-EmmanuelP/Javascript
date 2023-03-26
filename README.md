# README for "Find Your Way" Game

Welcome to "Find Your Way" game!

## Getting Started

To start playing the game, you need to have Node.js installed on your machine. You can download it from the official Node.js website: https://nodejs.org

Once you have installed Node.js, you need to download the required dependencies. In this case, you need to install the `prompt-sync` package. To do this, open a terminal and type the following command:

npm install prompt-sync

Then, in your JavaScript file, include the following line of code at the beginning:

const prompt = require('prompt-sync')({sigint: true});

This line of code will allow you to use the `prompt-sync` package to get user input from the terminal.

## How to Play

To play the game, simply run the JavaScript file in your terminal by typing:

node your-file-name.js


The game will generate a field with random holes and a hat. Your goal is to find the hat by moving your character (represented by the asterisk symbol) using the arrow keys (right, left, up, and down).

When you move your character, the symbol will change to mark the path you have taken. If you step on a hole, the game is over. If you find the hat, congratulations! You have won the game.

## Customization

You can customize the game by changing the parameters in the `generateField` function. The first parameter is the height of the field, the second parameter is the width of the field, and the third parameter is the percentage of holes in the field (represented by a decimal number between 0 and 1).

## Enjoy the game!
