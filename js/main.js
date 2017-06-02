console.log("check me out now");
//GAME VARAIBLES SECTIONS

var game = {

  moveCounter: 0,
  currentPlayer: "X",
  win: false,

 board: [ null, null, null, null, null, null, null, null, null ],


  checkWin: function () {


    if( game.moveCounter < 4) {
      return false;
    }

    var board = game.board;


    if (board[0] === board[1] && board[0] === board[2] && board[1]!== null) {
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
    game.currentPlayer = "X";

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


//DOM MANIUPULATION SECTION

$(document).ready(function(){

//Animate function
  $(window).on('mouseenter', (function (){
      $('h1').slideDown(1500);
    }));

  $(window).on('mouseenter', (function (){
      $('.row').delay(1500).slideDown(10000);
    }));

  $(window).on('mouseenter', (function (){
      $('#reset').delay(2000).slideDown(1500);
    }));

  $(window).on('mouseenter', (function (){
      $('#instructions').delay(3000).slideDown(3000);
    }));


  // RESET FUNCITON
  $("#reset").on('click', function (){
    console.log('reset!');
    $('.endMessage').hide();
    $('.board-container td').html('').css('backgroundColor', '');
    game.reset();
  });


  // GAME TRACKING
  $('.col').click(function(){
    var row = $(this).index();
    var id = this.id;
    var boardIndex = parseInt( this.id );

  //START GAME

    //check board for X or O
    if (game.board[ boardIndex ]) {
      console.log("pick another option 1");
      return;
    }

      //allow click
        $(this).html(game.currentPlayer);

        //change css background
            if(game.currentPlayer === 'X'){
              $(this).css("backgroundColor", "red");
            } if(game.currentPlayer === 'O'){
              $(this).css("backgroundColor", "blue");
            }

        //add the functions for the board back in
          game.board[ boardIndex ] = game.currentPlayer;
            console.log( " " + this.id);
          game.moveCounter += 1;

      // check for winner/ draw. produce signal if need be.
          if( game.checkWin() ){
            if (game.currentPlayer === "X"){
              $("#player1win").css({"display": "block"});
              console.log('win for ' + game.currentPlayer);
              return;
            }
            if (game.currentPlayer === "O"){
              $("#player2win").css({"display": "block"});
              console.log('win for ' + game.currentPlayer);
              return;
            }
          } else if(game.moveCounter === 9){
            $("#draw").css({"display": "block", "text-align": "center"});
            console.log('draw!');
            return;
          }


  // flip the players back and forth
    if (game.currentPlayer === 'X' ) {
          game.currentPlayer = 'O';
          return;
    } if(game.currentPlayer === 'O'){
          game.currentPlayer = 'X';
          return;
      }


  }); // $('.col').one('click')

}); // $(document).ready()
