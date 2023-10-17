var board = new Array(9);
var player = 0;
computerMove();

function computerMove() {
  for (var i = 0; i < 9; i++) {
    if (board[i] == undefined) {
      board[i] = 0;
      updateBoard();
      return;
    }
  }
}

function updateBoard() {
  var elements = document.getElementsByClassName("cell");
  for (var i = 0; i < 9; i++) {
    let innerElement = document.createElement("p");
    if (board[i] == 0) {
      innerElement.innerHTML = "X";
    } else if (board[i] == 1) {
      innerElement.innerHTML = "O";
    } else {
      innerElement.innerHTML = "-";
    }
    elements[i].innerHTML = "";
    elements[i].append(innerElement);
  }
  if (checkGameOver(board) == -1) {
    if (player == 0) {
      player = 1;
    } else {
      player = 0;
      computerMove();
    }
  } else {
    document.getElementById("gameState").style.visibility = "visible";
  }
}

function playerClick(index) {
  if (checkGameOver(board) != -1) {
    return;
  }
  if (board[index] != undefined) {
    return;
  }
  board[index] = 1;
  updateBoard();
}

function checkGameOver(gameBoard) {
  if (
    gameBoard[0] == gameBoard[1] &&
    gameBoard[1] == gameBoard[2] &&
    gameBoard[2] != undefined
  ) {
    return gameBoard[0];
  } else if (
    gameBoard[3] == gameBoard[4] &&
    gameBoard[4] == gameBoard[5] &&
    gameBoard[5] != undefined
  ) {
    return gameBoard[3];
  } else if (
    gameBoard[6] == gameBoard[7] &&
    gameBoard[7] == gameBoard[8] &&
    gameBoard[8] != undefined
  ) {
    return gameBoard[6];
  } else if (
    gameBoard[0] == gameBoard[3] &&
    gameBoard[3] == gameBoard[6] &&
    gameBoard[6] != undefined
  ) {
    return gameBoard[0];
  } else if (
    gameBoard[1] == gameBoard[4] &&
    gameBoard[4] == gameBoard[7] &&
    gameBoard[7] != undefined
  ) {
    return gameBoard[1];
  } else if (
    gameBoard[2] == gameBoard[5] &&
    gameBoard[5] == gameBoard[8] &&
    gameBoard[8] != undefined
  ) {
    return gameBoard[2];
  } else if (
    gameBoard[0] == gameBoard[4] &&
    gameBoard[4] == gameBoard[8] &&
    gameBoard[8] != undefined
  ) {
    return gameBoard[0];
  } else if (
    gameBoard[2] == gameBoard[4] &&
    gameBoard[4] == gameBoard[6] &&
    gameBoard[6] != undefined
  ) {
    return gameBoard[2];
  } else {
    for (var i = 0; i < 9; i++) {
      if (board[i] == undefined) {
        return -1;
      }
    }
  }
  return -2;
}
