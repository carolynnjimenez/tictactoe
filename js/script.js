let player = "X";
let turnsTaken = 0;
let gameOver = false;

function performLogic(button, tile) {
  if (gameOver === false) {
    $(button).hide();
    $(tile).html(player);
    checkWins();
    changePlayer(player);
    tieGame();
  }
  if(gameOver===true){
    $("button").hide();
  }
}

function changePlayer(currPlayer) {
  if (currPlayer === "X") {
    player = "O";
  } else {
    player = "X";
  }
}

function tieGame() {
  turnsTaken = turnsTaken + 1;
  if (turnsTaken === 9 && gameOver === false) {
    $("h1").text("It's a draw!");
    gameOver = true;
  }
}

function win(tileId1,tileId2,tileId3) {
    if ($(tileId1).html() === player && 
    $(tileId2).html() === player && 
    $(tileId3).html() === player) {
        $("h1").text(player + " wins!");
        gameOver = true;
    }
}

function checkWins(){
  checkVerticalWins();
  checkHorizontalWins();
  checkDiagonalWins();
}

function checkVerticalWins() {
    win("#tile1", "#tile4", "#tile7"); 
    win("#tile2", "#tile5", "#tile8"); 
    win("#tile3", "#tile6", "#tile9");
}

function checkHorizontalWins() {
    win("#tile1", "#tile2", "#tile3"); 
    win("#tile4", "#tile5", "#tile6"); 
    win("#tile7", "#tile8", "#tile9");
}

function checkDiagonalWins() {
    win("#tile1", "#tile5", "#tile9"); 
    win("#tile3", "#tile5", "#tile7"); 
}

$("#button1").click(function() {
  performLogic("#button1", "#tile1");
});

$("#button2").click(function() {
  performLogic("#button2", "#tile2");
});

$("#button3").click(function() {
  performLogic("#button3", "#tile3");
});

$("#button4").click(function() {
  performLogic("#button4", "#tile4");
});

$("#button5").click(function() {
  performLogic("#button5", "#tile5");
});

$("#button6").click(function() {
  performLogic("#button6", "#tile6");
});

$("#button7").click(function() {
  performLogic("#button7", "#tile7");
});

$("#button8").click(function() {
  performLogic("#button8", "#tile8");
});

$("#button9").click(function() {
  performLogic("#button9", "#tile9");
});
