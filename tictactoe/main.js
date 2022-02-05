i = 0;
let arrayFirstPlayer = ["X", "O", "X", "O", "X", "O", "X", "O", "X"];
let gameState = "Started";
const myGame = (id) => {
  let result = document.getElementById(id);

  let result1 = document.getElementById("cell1");
  let result2 = document.getElementById("cell2");
  let result3 = document.getElementById("cell3");
  let result4 = document.getElementById("cell4");
  let result5 = document.getElementById("cell5");
  let result6 = document.getElementById("cell6");
  let result7 = document.getElementById("cell7");
  let result8 = document.getElementById("cell8");
  let result9 = document.getElementById("cell9");

  if (result.innerText === "") {
    if (gameState === "Started" && i < arrayFirstPlayer.length) {
      if (arrayFirstPlayer[i] === "X") {
        result.innerHTML = '<span class="xColor">X</span>';
      } else if (arrayFirstPlayer[i] === "O") {
        result.innerHTML = '<span class="oColor">O</span>';
      }
      i++;
    }
    if (
      (result1.innerText === "X" &&
        result2.innerText === "X" &&
        result3.innerText === "X") ||
      (result1.innerText === "X" &&
        result4.innerText === "X" &&
        result7.innerText === "X") ||
      (result2.innerText === "X" &&
        result5.innerText === "X" &&
        result8.innerText === "X") ||
      (result3.innerText === "X" &&
        result6.innerText === "X" &&
        result9.innerText === "X") ||
      (result4.innerText === "X" &&
        result5.innerText === "X" &&
        result6.innerText === "X") ||
      (result7.innerText === "X" &&
        result8.innerText === "X" &&
        result9.innerText === "X") ||
      (result1.innerText === "X" &&
        result5.innerText === "X" &&
        result9.innerText === "X") ||
      (result3.innerText === "X" &&
        result5.innerText === "X" &&
        result7.innerText === "X")
    ) {
      gameState = "Ended";
      let displayResult1 = document.getElementById("displayResult");
      displayResult1.innerHTML = "First player wins!";
      return;
    }
    if (
      (result1.innerText === "O" &&
        result2.innerText === "O" &&
        result3.innerText === "O") ||
      (result1.innerText === "O" &&
        result4.innerText === "O" &&
        result7.innerText === "O") ||
      (result2.innerText === "O" &&
        result5.innerText === "O" &&
        result8.innerText === "O") ||
      (result3.innerText === "O" &&
        result6.innerText === "O" &&
        result9.innerText === "O") ||
      (result4.innerText === "O" &&
        result5.innerText === "O" &&
        result6.innerText === "O") ||
      (result7.innerText === "O" &&
        result8.innerText === "O" &&
        result9.innerText === "O") ||
      (result1.innerText === "O" &&
        result5.innerText === "O" &&
        result9.innerText === "O") ||
      (result3.innerText === "O" &&
        result5.innerText === "O" &&
        result7.innerText === "O")
    ) {
      gameState = "Ended";
      let displayResult2 = document.getElementById("displayResult");
      displayResult2.innerHTML = "Second player wins!";
      return;
    }
    if (i === arrayFirstPlayer.length) {
      let displayResult2 = document.getElementById("displayResult");
      displayResult2.innerHTML = "It's a tie!";
    }
  }
};

const restartButton = () => {
  const cellArray = [
    "cell1",
    "cell2",
    "cell3",
    "cell4",
    "cell5",
    "cell6",
    "cell7",
    "cell8",
    "cell9",
    "displayResult",
  ];
  for (let j = 0; j < cellArray.length; j++) {
    let resultClear = document.getElementById(cellArray[j]);
    resultClear.innerHTML = "";
  }
  gameState = "Started";
  i = 0;
};
