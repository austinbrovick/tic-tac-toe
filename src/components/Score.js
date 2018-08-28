import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';


export default class Bottom extends Component {
  render() {
    return (
      <View style={[styles.view]}>
        <Text style={[styles.text, styles.font]}>
          Player One: {this.props.playerOneScore}
        </Text>
        <Text style={[styles.text, styles.font]}>
          Player Two: {this.props.playerTwoScore}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  view: {
    flexDirection: 'row',
    height: '9%',
    borderBottomWidth: 4,
    borderTopWidth: 4,
    borderLeftWidth: 4,
    borderRightWidth: 4,
    borderColor: '#FF6B6B',
    // flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 2,
    marginRight: 2,
    marginBottom: 2,
    borderRadius: 10,
  },
  text: {
    flex: 0.5,
    color: '#FF6B6B',
  },
  font: {
    fontWeight: 'bold',
    textAlign: 'center',
    // padding: 5,
    fontSize: 20,
  }
})
