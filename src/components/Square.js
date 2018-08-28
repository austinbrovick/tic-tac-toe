import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';


export default class Square extends Component {
  constructor(props) {
    super(props);
    this.handler = this.props.handler.bind(this);
    console.log(this.props);
  }

  render() {
    if (this.props.value == -1) {
      return (
        <TouchableOpacity style={[styles.square, styles.openSquare]} onPress={() => this.handler(this.props.row, this.props.square)} />
      );
    } else {
      if (this.props.value == 0) {
        return (
          <TouchableOpacity style={[styles.square, styles.zeroPlayer]} onPress={() => this.handler(this.props.row, this.props.square)} />
        );
      } else {
        return (
          <TouchableOpacity style={[styles.square, styles.onePlayer]} onPress={() => this.handler(this.props.row, this.props.square)} />
        );
      }
    }
  }
}

const styles = StyleSheet.create({
  square: {
    flex: 0.3,
    width: 114,
    height: 114,
    borderRadius: 15,
  },
  zeroPlayer: {
    backgroundColor: '#4ECDC4',
  },
  onePlayer: {
    backgroundColor: '#C7F464',
  },
  openSquare: {
    backgroundColor: '#556270',
  },
});
