let xControl = true;
let hasWinner = false;

const x = document.getElementById('xControl');
const o = document.getElementById('oControl');
const cells = document.querySelectorAll('td');

function handleTimeToPlay() {
    if (!xControl) {
        x.classList.add('selected');
        o.classList.remove('selected');
    }

    if (xControl) {
        o.classList.add('selected');
        x.classList.remove('selected');
    }
}

function checkWinner() {
    const winningCombinations = [
        // Linhas
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        // Colunas
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        // Diagonais
        [0, 4, 8],
        [2, 4, 6],
    ];

    for (let combination of winningCombinations) {
        const [a, b, c] = combination;
        // Verifica se todas as células da combinação possuem o mesmo símbolo e não estão vazias
        if (
            cells[a].innerHTML &&
            cells[a].innerHTML === cells[b].innerHTML &&
            cells[a].innerHTML === cells[c].innerHTML
        ) {
            hasWinner = true;
            return cells[a].innerHTML; // Retorna o vencedor ('X' ou 'O')
        }
    }

    return null;
}

function chooseLabel(element) {
    if (hasWinner) {
        setTimeout(() => alert(`O Jogo acabou`), 100);
        return;
    }

    if (element.innerHTML) return;

    if (xControl) {
        element.innerHTML = 'X';
    } else {
        element.innerHTML = 'O';
    }

    const winner = checkWinner();

    if (winner) {
        setTimeout(() => alert(`${winner} venceu!`), 100);
        return;
    }

    handleTimeToPlay();
    xControl = !xControl;
}
