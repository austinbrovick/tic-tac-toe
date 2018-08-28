import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class Bottom extends Component {
  render() {
    if (this.props.turn == 0) {
      return (
        <View style={styles.view}>
          <Text style={[styles.font]}>
            Turn: Player 1
          </Text>
        </View>
      );
    } else {
      return (
        <View style={styles.view}>
          <Text style={[styles.font]}>
            Turn: Player 2
          </Text>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  font: {
    color: '#FF6B6B',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 30,
  },
  layout: {
    marginTop: 20,
  },
  zeroPlayer: {
    backgroundColor: 'blue',
  },
  onePlayer: {
    backgroundColor: 'red',
  },
  view: {
   height: '9%',
    borderTopWidth: 4,
    borderBottomWidth: 4,
    borderLeftWidth: 4,
    borderRightWidth: 4,
    borderColor: '#FF6B6B',
    marginLeft: 2,
    marginRight: 2,
    borderRadius: 10,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 4,
  }
});
