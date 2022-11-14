

const playerFactory = (name, symbol) => {
    const getName = () => name;
    const getSymbol = () => symbol;
    return {name, symbol, getName, getSymbol};
}

const startGame = (() => {
    function assignPlayers() {

        let nameOne = document.querySelector("#name1").value;
        let nameTwo = document.querySelector("#name2").value;
        let playerOne = playerFactory(nameOne,"X");
        let playerTwo = playerFactory(nameTwo,"O");
        
         if(nameOne != "" && nameTwo != "") {
            playGame(playerOne, playerTwo);
            let playerContainer = document.querySelector(".player-container");
            let playerBanner = document.querySelector(".player-banner");
            playerContainer.classList.add("hidden");
            playerContainer.classList.remove("visible");
            let playerText = document.createElement("h5");
            playerText.textContent = playerOne.name + " vs. " + playerTwo.name;
            playerBanner.appendChild(playerText);
         } else {alert("Please add a name for each player.")}
    }

    let startButton = document.querySelector("#start");
    startButton.addEventListener("click", assignPlayers);

})();

function playGame(playerOne, playerTwo) {

    let squares = Array.from(document.querySelectorAll(".square"));

    function firstPlay() {
        for (let i=0; i < 9; i++) {
            squares[i].addEventListener("click", addX);
        }
        function addX() {
            for (let i=0; i < 9; i++) {
                squares[i].removeEventListener("click", addX);
            }
            if (this.textContent === "") {
                let targetSquare = this;
                let x = document.createElement("p");
                x.textContent = "X";
                targetMark = x;
                targetSquare.appendChild(targetMark);
                checkForWinner();
                secondPlay();
            } else {
                firstPlay();
            }
        }
    } 

    function secondPlay() {
        for (let i=0; i < 9; i++) {
            squares[i].addEventListener("click", addO);
        }
        function addO() {
            for (let i=0; i < 9; i++) {
                squares[i].removeEventListener("click", addO);
            }
            if (this.textContent === "") {
                let targetSquare = this;
                let o = document.createElement("p");
                o.textContent = "O";
                targetMark = o;
                targetSquare.appendChild(targetMark);
                checkForWinner();
                firstPlay();
            } else {
                secondPlay();
            }
        }
    }

    function checkForWinner() {

        const checkHorizontal = (() => {
            if (squares[0].textContent === squares[1].textContent && squares[1].textContent === squares[2].textContent) {
                let winningMark = squares[0].textContent;
                declareWinner(winningMark);
            } else if (squares[3].textContent === squares[4].textContent && squares[4].textContent === squares[5].textContent) {
                let winningMark = squares[3].textContent;
                declareWinner(winningMark);
            } else if (squares[6].textContent === squares[7].textContent && squares[7].textContent === squares[8].textContent) {
                let winningMark = squares[6].textContent;
                declareWinner(winningMark);
            }
        })();

        const checkVertical = (() => {
            if (squares[0].textContent === squares[3].textContent && squares[3].textContent === squares[6].textContent) {
                let winningMark = squares[0].textContent;
                declareWinner(winningMark);
            } else if (squares[1].textContent === squares[4].textContent && squares[4].textContent === squares[7].textContent) {
                let winningMark = squares[1].textContent;
                declareWinner(winningMark);
            } else if (squares[2].textContent === squares[5].textContent && squares[5].textContent === squares[8].textContent) {
                let winningMark = squares[2].textContent;
                declareWinner(winningMark);
            }
        })();

        const checkDiagonal = (() => {
            if (squares[0].textContent === squares[4].textContent && squares[4].textContent === squares[8].textContent) {
                let winningMark = squares[0].textContent;
                declareWinner(winningMark);
            } else if (squares[2].textContent === squares[4].textContent && squares[4].textContent === squares[6].textContent) {
                let winningMark = squares[2].textContent;
                declareWinner(winningMark);
            } 
        })();

        const checkForTie = (() => {
            if(squares.every(item => {
                return item.textContent != "";
            })) {
                console.log("It's a tie!");
            } 

                
        })();

        // function removeAllListeners() {
        //     for (let i=0; i < 9; i++) {
        //         squares[i].;
        //         squares[i].removeEventListener("click", addO);
        //     }
        // }

        function declareWinner(mark) {
            if (mark === playerOne.symbol) {
                console.log(playerOne.name + " wins!");
                // removeAllListeners();
            } else if (mark === playerTwo.symbol) {
                console.log(playerTwo.name + " wins!");
                // removeAllListeners();
            }
        }

    }

    firstPlay();
    }

const resetGame = (() => {
    let squares = Array.from(document.querySelectorAll(".square")); //repeat variable

    function clearBoard() {
        for (let i=0; i < 9; i++) {
            squares[i].textContent = "";
            // document.querySelector("#name1").value = "";
            // document.querySelector("#name2").value = "";
        }
        startGame;
    }
    
    let reset = document.querySelector("#reset");
    reset.addEventListener("click", clearBoard);
})();