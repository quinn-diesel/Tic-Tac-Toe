console.log("check me out now");
// Overview
//
// Let's start out with something fun - a game!
//
// We'll be making Tic Tac Toe, a game that takes seconds to learn but minutes to master! Everyone will get a chance to be creative, and work through some really tough programming challenges to get your feet wet in the world of web development.
//
// "hand me your phone," load up the game, and play a quick round!
// You will be working individually for this project, but we'll be guiding you along the process and helping as you go. Show us what you've got!


//WHAT YOU'VE LEARNED

// By the time you submit this project, you will have covered new ground in many of the big themes of the course:
//
// Command Line: Practice interacting with the computer and navigating the filesystem from the command line.
// Source Control: Manage and interact with a git repository to store changes to code.
// Programming Fundamentals: Work with objects, constructors, events, while learning how to strategically solve problems and resolve errors.
// Web Fundamentals: Learn how communication happens over the internet, and how to structure, style, and animate documents within a browser. Also learn how to respond to actions your users take and the data they input into the browser.
// Browser Applications: Dive into CSS, Sass, and how to use libraries and frameworks to get lots of style for free.
// Deployment: Host a static web site in a managed hosting environment.
// Products and Teams: Document your code and your code repository so others understand what you've built.

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

// Suggested Ways to Get Started
//
// Break the project down into different components (data, presentation, views, style, DOM manipulation) and brainstorm each component individually. Use whiteboards!
// Use your Development Tools (console.log, inspector, alert statements, etc) to debug and solve problems
// Work through the lessons in class, ask questions and come to office hours when you need to. Think about adding relevant code to your Tic Tac Toe game each night, instead of, you know... procrastinating.
// Commit early, commit often. Don’t be afraid to break something because you can always go back in time to a previous version.
// Check out Tutorial and Documentation resources (jQuery tutorial) at home to better understand what you’ll be getting into.
// Don’t be afraid to write code that you know you will have to remove later. Create temporary elements (buttons, links, etc) that trigger events if real data is not available. For example, if you’re trying to figure out how to change some text when the game is over but you haven’t solved the win/lose game logic, you can create a button to simulate that until then.

// set up the object that is going to be accessed when the players interact with the game
// the logic behind the game is going
// the result coming DOM is going to dictate how the players are going to be interacting with the game

//nOtes
//want to make it a magic square
//first player to 15 wins

//GLOBAL VARIABLES

// var tableID = "board";

// var board = function (){
//
//   var winnerscore = 0;
//   var player1score = 0;
//   var player2score = 0;
//
//   // var winnerscore = [15];
//
//   if (winnscore === 15) {
//     console.log( player_1 || player_2 + " is the winner");
//   } else {
//     console.log( "It's a draw. Start again.");
//   }
//
// };
// //



//DOCUMENT ready
$(document).ready(function (){

//REGISTERING ONE CLICK


//TRIAL
//telling the function


$('.col').one('click',( function(){
  var row = $(this).index();
  var id = this.id;
  console.log('You clicked ' + this.id);
}));


// clicker count



// Register the players

    // var player_1 = true;
    // var player_2 = !player_1;
    // var $player_2 = $(player_1.reverse());


//trial stack overflow

  // var player_one = true;
  // function display_input(square){
  //     if ( player_one === true ){
  //         document.getElementById(square).innerHTML = "X";
  //         player_one = 0;
  //     } else {
  //         document.getElementById(square).innerHTML = "O";
  //         player_one = 1;
  //     }
  // }

// //swicthing players with true
// var players = function (){
//
//   var player_1 = true;
//   var player_2 = !player_1;
//
// for (var i = 0; i < player_1.length; i++) {
//   if (player_1 === true ) {
//     return player_2;
//     // console.log('test 1');
//   } else {
//     // console.log('test 2');
//     return player_1;
//   }
// }
// };


//   $(this).one('click', function (){
//     if (player_1 === true ) {
//       return player_2;
//       // console.log('test 1');
//     } else {
//       // console.log('test 2');
//       return player_1;
//     }
//   });
// };


//trial
    function player_1() {
        $(this).one("click", player_2);
      console.log('player 1 played');
    }

    function player_2() {
        $(this).one("click", player_1);
      console.log('player 2 played');
    }

    $('.board-container').one('click', player_1);
    // $('.board-container').one('click', player_2);



  // //register the player scores
  //
  // var player1score: 0;
  // var player2sore: 0;
  //
  // var score1 = function (player1score){
  // }
  // var score2 = functon (player2score){
  // }
  //
  //
  // //register who gets to 15 first



});//document ready break
