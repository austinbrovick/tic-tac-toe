import React, { Component } from 'react';
import { Text, View, StyleSheet, Button, TouchableOpacity } from 'react-native';


export default class Reset extends Component {
  constructor(props) {
    super(props);
    this.resetScores = this.props.resetScores.bind(this);
    this.newGame = this.props.newGame.bind(this);
  }


  render() {
    return (
      <View style={styles.outer}>
        <View style={[styles.view]}>
          <TouchableOpacity onPress={() => this.resetScores()} >
            <Text style={styles.text}>Reset Score</Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.view]}>
          <TouchableOpacity onPress={() => this.newGame()} >
            <Text style={styles.text}>New Game</Text>
          </TouchableOpacity>
        </View>
     </View>
    );
  }
}

const styles = StyleSheet.create({
  touchableOpacity: {
    justifyContent: 'center'
  },
  outer: {
    flexDirection: 'row',
    marginBottom: 4,
    height: '9%',
  },
  view: {
    flex: 0.5,
    flex: 0.5,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderLeftWidth: 3,
    borderRightWidth: 3,
    borderBottomWidth: 3,
    borderTopWidth: 3,
    borderColor: 'white',
    borderRadius: 10,
    backgroundColor: '#FF6B6B',
  },
  text: {
    // flex: 0.5,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    fontSize: 20,
  },
})
