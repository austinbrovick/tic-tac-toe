import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class Header extends Component {
  render() {
    return (
      <View style={styles.layout}>
        <Text style={styles.font}>
          {this.props.header}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  font: {
    color: '#FF6B6B',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 35,
  },
  layout: {
    //marginTop: 20,
    borderBottomWidth: 5,
    borderLeftWidth: 4,
    borderRightWidth: 4,
    paddingTop: 4,
    borderTopWidth: 4,
    borderColor: '#FF6B6B',
    height: '11%',
    borderRadius: 10,
    marginLeft: 2,
    marginRight: 2,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',

    // paddingTop: 20,
  },
});
