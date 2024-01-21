document.addEventListener('DOMContentLoaded', function () {
    const cells = document.querySelectorAll('.cell');
    let currentPlayer = 'X';
    let gameBoard = ['', '', '', '', '', '', '', '', ''];
    let gameActive = true;

    cells.forEach(cell => {
        cell.addEventListener('click', handleCellClick);
    });

    function handleCellClick(event) {
        const cellIndex = event.target.dataset.index;

        if (gameBoard[cellIndex] === '' && gameActive) {
            gameBoard[cellIndex] = currentPlayer;
            event.target.textContent = currentPlayer;
            checkWinner();
            togglePlayer();
        }
    }

    function togglePlayer() {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }

    function checkWinner() {
        const winningCombos = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];

        for (const combo of winningCombos) {
            const [a, b, c] = combo;
            if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
                announceWinner(gameBoard[a]);
                return;
            }
        }

        if (!gameBoard.includes('')) {
            announceTie();
        }
    }

    function announceWinner(winner) {
        gameActive = false;
        alert(`Player ${winner} wins!`);
    }

    function announceTie() {
        gameActive = false;
        alert('It\'s a tie!');
    }
});
