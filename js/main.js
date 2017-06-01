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


//nOtes
//want to make it a magic square
//first player to 15 wins

//GAME VARAIBLES SECTIONS

var game = {

  moveCounter: 0,
  currentPlayer: "X",
  win: false,

  player:{

    player1: {
      name: "X",
      score:  0,
    },

    player2: {
      name: "O",
      score: 0,
    },

  }, // end players

 board: [ null, null, null, null, null, null, null, null, null ],


  checkWin: function () {


    // make a minimum of 5 moves to be done for the game
    if( game.moveCounter < 4) {
      return false;
    }

    var board = game.board;
    // var player = game.player;
//
    if (board[0] === board[1] && board[0] === board[2] && board[1]!== null) {
      // console.log(game.player);
      return true;
    } if (board[0] === board[3] && board[0] === board[6] && board[0] !== null){
      return true;
    } if (board[1] === board[4] && board[1] === board[7] && board[1] !== null){
      return true;
    } if (board[3] === board[4] && board[3] === board[5] && board[3] !== null){
      return true;
    } if (board[2] === board[5] && board[2] === board[8] && board[2] !== null){
      return true;
    } if (board[6] === board[7] && board[6] === board[8] && board[6] !== null){
      return true;
    } if (board[0] === board[4] && board[0] === board[8] && board[0] !== null){
      return true;
    } if (board[2] === board[4] && board[2] === board[6] && board[2] !== null){
      return true;
    } else {
      return false;
    }

  },


  reset: function (){

    game.board = [ null, null, null, null, null, null, null, null, null ];
    game.win = false;
    game.moveCounter = 0;


  },

  // reset board function
  draw: function (){
    var counter = this.moveCounter;

      if (counter === 9) {
        console.log("restart the game");
        // return true;
      } else {
        return false;
      }
    },
  //

  winStatus: function (){
    if (this.win === this.checkWin ){
      console.log('have a winner');
    }
  },

};


//change the screen based on what is happening


//DOM MANIUPULATION SECTION

$(document).ready(function(){


  // create a separate click function the reset
  $("#reset").on('click', function (){
    console.log('reset!');
    $('.board-container td').html('').css('backgroundColor', '');
    game.reset();
  });


  // clicks for the grid
  $('.col').one('click', function(){
    var row = $(this).index();
    var id = this.id;
    var boardIndex = parseInt( this.id );

    //need to check to see if someone is using the square
    //check the array to see if it is not null
    // only allow clicks if


  //Start on player 1
    $(this).html(game.currentPlayer);

    //start with player X
    if( game.currentPlayer === 'X'){

      // css change the colour
      $(this).css("backgroundColor", "red");
      //index the grid id to the board
      game.board[ boardIndex ] = game.currentPlayer;
        console.log( " " + this.id);
      // count the number of moves
      game.moveCounter += 1;
      // game.board();
      // winStatus ();
      if( game.checkWin() ){
        // show win
        // call the div that is a win
        // call reset
        // $("#player1win").css ({"display": "block", "text-align": "center"});
        $("#player1win").css({"display": "block", "font-color": "red,"});
        console.log('win for ' + game.currentPlayer);
      } else if(game.moveCounter === 9){
        //call the div that is a draw
        //call reset
        $("#draw").css({"display": "block", "text-align": "center"});
        console.log('draw!');
      }

      game.currentPlayer = 'O'; // switch players

    } else {
      // css change the colour
      $(this).css("backgroundColor", "blue");
      //index the player id to the board array
      game.board[ boardIndex ] = game.currentPlayer;
        console.log(" " + this.id);
      //count the number of moves
      game.moveCounter += 1;
      // winStatus ();
      // game.board();

      if( game.checkWin() ){
        // show win
        // call the div that is a win
        // call reset
        // $('h2').show('visibility': 'visible');
        $("#player2win").css({"display": "block", "font-color": "blue,"});
        console.log('win for ' + game.currentPlayer);
      } else if(game.moveCounter === 9){
        //call the div that is a draw
        //call reset
        $("#draw").css({"display": "block", "text-align": "center"});
        console.log('draw!');
      }

      game.currentPlayer = 'X'; // switch players
    }


  }); // $('.col').one('click')

}); // $(document).ready()
