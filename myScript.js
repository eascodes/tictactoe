

const playerFactory = (name, symbol) => { //factory
    const getName = () => name;
    const getSymbol = () => symbol;
    return {name, symbol, getName, getSymbol};
}

const playerOne = playerFactory("em", "X"); //example players
const playerTwo = playerFactory("code", "O");

const playGame = (() => {
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

        function declareWinner(mark) {
            if (mark === playerOne.symbol) {
                console.log("Player One wins!");
            } else if (mark === playerTwo.symbol) {
                console.log("Player Two wins!");
            }
        };

    }

    firstPlay();
})();

