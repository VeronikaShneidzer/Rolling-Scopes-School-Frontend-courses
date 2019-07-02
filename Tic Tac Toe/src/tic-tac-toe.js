class TicTacToe {
    constructor() {
      this.currentPlayerSymbol = 'x';
      this.winner = null;
      this.field = [[null, null, null], [null, null, null], [null, null, null]];
    }

    getCurrentPlayerSymbol() {
      return this.currentPlayerSymbol;
    }

    nextTurn(rowIndex, colIndex) {
      if (this.field[rowIndex][colIndex] == null) {
        this.field[rowIndex][colIndex] = this.getCurrentPlayerSymbol();
        if (this.field[0][0] && this.field[0][0] == this.field[0][1] && this.field[0][0] == this.field[0][2] ||
            this.field[1][0] && this.field[1][0] == this.field[1][1] && this.field[1][0] == this.field[1][2] ||
            this.field[2][0] && this.field[2][0] == this.field[2][1] && this.field[2][0] == this.field[2][2] ||
            this.field[0][0] && this.field[0][0] == this.field[1][1] && this.field[0][0] == this.field[2][2] ||
            this.field[2][0] && this.field[2][0] == this.field[1][1] && this.field[2][0] == this.field[0][2] ||
            this.field[0][0] && this.field[0][0] == this.field[1][0] && this.field[0][0] == this.field[2][0] ||
            this.field[0][1] && this.field[0][1] == this.field[1][1] && this.field[0][1] == this.field[2][1] ||
            this.field[0][2] && this.field[0][2] == this.field[1][2] && this.field[0][2] == this.field[2][2]) {
          this.winner = this.getCurrentPlayerSymbol();
        }
        this.currentPlayerSymbol = (this.currentPlayerSymbol == 'x') ? 'o' : 'x';
      }

      return this.currentPlayerSymbol;
    }

    isFinished() {
      return (this.noMoreTurns() || this.winner != null);
    }

    getWinner() {
      return this.winner;
    }

    noMoreTurns() {
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          if (this.field[i][j] == null) return false;
        }
      }

      return true;
    }

    isDraw() {
      return (this.noMoreTurns() && !this.winner);
    }

    getFieldValue(rowIndex, colIndex) {
      return this.field[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
