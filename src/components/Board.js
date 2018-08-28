import React, { Component } from 'react';
import { View, Alert, SafeAreaView, Dimensions } from 'react-native';
import Header from './Header';
import Row from './Row';
import Bottom from './Bottom';
import Score from './Score';
import Reset from './Reset';

export default class Board extends Component {
  constructor(props) {
    let {width, height} = Dimensions.get('window');
    console.log("width ", width);
    console.log("height ", height);
    super(props);
    this.state = {
      board: [[-1, -1, -1], [-1, -1, -1], [-1, -1, -1]],
      firstTurn: 0,
      turn:0,
      totalTurns:0,
      game: true,
      playerOneScore: 0,
      playerTwoScore: 0,
    };
    this.handler = this.handler.bind(this);
    this.showAlert = this.showAlert.bind(this);
    this.reset = this.reset.bind(this);
    this.resetScores = this.resetScores.bind(this);
  }

  handler(row, square) {
    if (this.state.game && this.state.board[row][square] == -1) {
      oldTotalTurns = this.state.totalTurns;
      newBoard = this.state.board;
      currentTurn = this.state.turn;
      newBoard[row][square] = currentTurn;
      nextTurn = currentTurn == 0 ? 1 : 0;
      this.setState({ board: newBoard, turn: nextTurn, totalTurns: oldTotalTurns + 1 });
      if (this.isVictory(0)) {
        oldScore = this.state.playerOneScore;
        this.setState({ game: false, playerOneScore: oldScore + 1});
        this.showAlert(0)
      } else if (this.isVictory(1)) {
        oldScore = this.state.playerTwoScore;
        this.setState({ game: false, playerTwoScore: oldScore + 1 });
        this.showAlert(1);
      } else if (this.state.totalTurns == 8) {
        this.showAlert(-1);
      }
    }
  }

  showAlert(player) {
    if (player == -1) {
      Alert.alert(
        `Tie Game`,
        '',
        [
          {text: 'New Game', onPress: () => this.reset()},
          {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
        ],
        { cancelable: false }
      )
    } else {
      Alert.alert(
        `Congrats Player ${player + 1}`,
        '',
        [
          {text: 'New Game', onPress: () => this.reset()},
          {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
        ],
        { cancelable: false }
      )

    }
  }

  reset() {
    nextFirstTurn = this.state.firstTurn;
    this.setState({
      board: [[-1, -1, -1], [-1, -1, -1], [-1, -1, -1]],
      turn:!nextFirstTurn,
      totalTurns:0,
      game:true,
      firstTurn:!nextFirstTurn,
    });
  }

  isVictory(player) {
    return this.rowWin(player) || this.colWin(player) || this.diagWin(player);
  }

  rowWin(player) {
    for (row = 0; row < 3; row++) {
      status = true;
      for (col = 0; col < 3; col++) {
        if (this.state.board[row][col] != player) {
          status = false;
        }
      }
      if (status == true)
        return true;
    }
    return false;
  }

  colWin(player) {
    for (col = 0; col < 3; col++) {
      status = true;
      for (row = 0; row < 3; row++) {
        if (this.state.board[row][col] != player) {
          status = false;
        }
      }
      if (status == true)
        return true;
    }
    return false;
  }

  diagWin(player) {
    status = true
    for (i = 0; i < 3; i++) {
      if (this.state.board[i][i] != player) {
        status = false;
      }
    }
    if (status) return status;
    status = true;
    for (i = 0; i < 3; i++) {
      if (this.state.board[2-i][i] != player) {
        status = false;
      }
    }
    return status;
  }

  resetScores() {
    this.setState({
      playerOneScore: 0,
      playerTwoScore: 0,
      turn: 0,
      firstTurn: 0,
    });
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
          <Header header="Tic Tac Toe" />
          <Row values={this.state.board[0]} row={0} handler={this.handler} />
          <Row values={this.state.board[1]} row={1} handler={this.handler} />
          <Row values={this.state.board[2]} row={2} handler={this.handler} />
          <Reset resetScores={this.resetScores} newGame={this.reset} />
          <Bottom turn={this.state.turn} />
          <Score playerOneScore={this.state.playerOneScore} playerTwoScore={this.state.playerTwoScore} />
      </SafeAreaView>
    );
  }
}
