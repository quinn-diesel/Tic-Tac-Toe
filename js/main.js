console.log("check me out now");
// Overview
//
// Let's start out with something fun - a game!
//
// We'll be making Tic Tac Toe, a game that takes seconds to learn but minutes to master! Everyone will get a chance to be creative, and work through some really tough programming challenges to get your feet wet in the world of web development.
//
// "hand me your phone," load up the game, and play a quick round!
// You will be working individually for this project, but we'll be guiding you along the process and helping as you go. Show us what you've got!


//Big Goals

// Build a web application from scratch, without a starter codebase
// Use your programming skills to map out the game logic for a simple game like Tic Tac Toe
// Separate HTML, CSS, and JavaScript files in your application
// Build an application to a spec that someone else gives you
// Build a dynamic game that allows two players to compete
// Craft a readme.md file that explains your app to the world

// Technical Requirements
//
// Your app must:
//
// Render a game board in the browser
// Switch turns between X and O (or whichever markers you select)
// Visually display which side won if a player gets three in a row or show a draw/"cat’s game" if neither wins
// Include separate HTML / CSS / JavaScript files
// Stick with KISS (Keep It Simple Stupid) and DRY (Don't Repeat Yourself) principles
// Use Javascript for DOM manipulation
// Deploy your game online, where the rest of the world can access it
// Use semantic markup for HTML and CSS (adhere to best practices)

//Necessary Deliverables
//
// A working game, built by you, hosted somewhere on the internet
// A link to your hosted working game in the URL section of your Github repo
// A git repository hosted on Github, with a link to your hosted game, and frequent commits dating back to the very beginning of the project
// A readme.md file with explanations of the technologies used, the approach taken, installation instructions, unsolved problems, etc.

// set up the object that is going to be accessed when the players interact with the game
// the logic behind the game is going
// the result coming DOM is going to dictate how the players are going to be interacting with the game

//nOtes
//want to make it a magic square
//first player to 15 wins

//GLOBAL VARIABLES


//store board & player moves

var game = {

  moveCounter: 0;
  currentPlayer : "X";
  player1: "X";
  player2: "O";
  gamereset = "9";
  startgame = false;


  var board = [null, null, null, null, null, null, null, null, null];

//function to check for winning combination
  checkwin: function (){

    if (board["X"] === board[0] && board["X"] === board[1] && board["X"] === board[2] && board ["X"] !== null) {
      // return startgame true;
    } if (board["X"] === board[0] && board["X"] === board[3] && board["X"] === board[6] && board ["X"] !== null){
      // return startgame true;
    } if (board["X"] === board[1] && board["X"] === board[4] && board["X"] === board[7] && board ["X"] !== null){
      // return startgame true;
    } if (board["X"] === board[3] && board["X"] === board[4] && board["X"] === board[5] && board ["X"] !== null){
      // return startgame true;
    } if (board["X"] === board[2] && board["X"] === board[5] && board["X"] === board[8] && board ["X"] !== null){
      // return startgame true;
    } if (board["X"] === board[5] && board["X"] === board[6] && board["X"] === board[7] && board ["X"] !== null){
      // return startgame true;
    } if (board["X"] === board[0] && board["X"] === board[4] && board["X"] === board[8] && board ["X"] !== null){
      // return startgame true;
    } if (board["X"] === board[2] && board["X"] === board[4] && board["X"] === board[6] && board ["X"] !== null){
      return startgame true;
    } else {
      return
    }

  };





};// game ready secction

//DOM manipulation
$(document).ready(function (){


// click once for each grid
$('.col').one('click',( function(){
  var row = $(this).index();
  var id = this.id;


//Game logic


// create turn counter - merge this into the click counter
// have an automatic click counter


//start on player 1
  $(this).html(currentPlayer);


//switching player logic
  if( currentPlayer === 'X'){
    currentPlayer = 'O';
    $(this).css("backgroundColor", "yellow");
    console.log( $(this).index() );

      //creating variables to change the id
    var boardIndex = parseInt( this.id );

      //subbing in the X to the board array
    board[ boardIndex ] = 'X';
    console.log( " " + this.id);

    //functions to set what is happening
    game.checkwin





    //switch it back to the other player
  } else {
    $(this).css("backgroundColor", "blue");
    currentPlayer = 'X';

    console.log( $(this).index() );
      board.push($(this).index());
    console.log(" " + this.id);
  }

}));



});//document ready break
