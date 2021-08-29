class TicTacToe {
    constructor() {
        this.symbol = 'x';
        this.matrix = [
            [null, null, null],
            [null, null, null],
            [null, null, null],
        ];

        this.winnerLines = [
            //lines
            [[0,0], [0,1], [0,2]],
            [[1,0], [1,1], [1,2]],
            [[2,0], [2,1], [2,2]],

            //columns
            [[0,0], [1,0], [2,0]],
            [[0,1], [1,1], [2,1]],
            [[0,2], [1,2], [2,2]],

            //crosses
            [[0,0], [1,1], [2,2]],
            [[0,2], [1,1], [2,0]],
        ];
    }

    getCurrentPlayerSymbol() {
        return this.symbol;
    }

    nextTurn(rowIndex, columnIndex) {
        if (this.matrix[rowIndex][columnIndex] !== null) {
            return this.symbol;
        } else {
            this.matrix[rowIndex][columnIndex] = this.symbol;
            this.symbol = this.symbol === 'x' ? 'o' : 'x';
        }
    }

    isFinished() {
        return !!this.getWinner() || this.noMoreTurns();
    }

    getWinner() {
        for (const line of this.winnerLines) {
            const [a, b, c] = line;
            if (this.matrix[a[0]][a[1]] && this.matrix[a[0]][a[1]] === this.matrix[b[0]][b[1]] && this.matrix[a[0]][a[1]] === this.matrix[c[0]][c[1]]) {
                return this.matrix[a[0]][a[1]];
            }
        }

        return null;
    }

    noMoreTurns() {
        let result = false;
        for (const row of this.matrix) {
            result = row.includes(null) || result;
        }

        return !result;
    }

    isDraw() {
        return this.noMoreTurns() && !this.getWinner();
    }

    getFieldValue(rowIndex, colIndex) {
        return this.matrix[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
