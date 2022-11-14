

const playerFactory = (name, symbol) => { //factory
    const getName = () => name;
    const getSymbol = () => symbol;
    return {name, symbol, getName, getSymbol};
}

const playerOne = playerFactory("em", "X");
const playerTwo = playerFactory("code", "O");

const playGame = (() => { //module
    let squares = Array.from(document.querySelectorAll(".square"));

    function firstPlay() {
        for (let i=0; i < 9; i++) {
            squares[i].addEventListener("click", addX);
        }
        function addX() {
            for (let i=0; i < 9; i++) {
                squares[i].removeEventListener("click", addX);
            }
            let targetSquare = this;
            let x = document.createElement("p");
            x.textContent = "X";
            targetMark = x;
            targetSquare.appendChild(targetMark);
            secondPlay();
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
            let targetSquare = this;
            let o = document.createElement("p");
            o.textContent = "O";
            targetMark = o;
            targetSquare.appendChild(targetMark);
            firstPlay();
        }
    }

    firstPlay();
})();

const Gameboard = (() => { //module
    const moves = [];
    return {moves};
})();

