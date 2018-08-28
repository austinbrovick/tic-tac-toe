import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Square from './Square';

export default class Row extends Component {
  constructor(props) {
    super(props);
    this.handler = this.props.handler.bind(this);
    console.log(this.state);
  }
  render() {
    return (
      <View style={styles.layout}>
        <Square value={this.props.values[0]} row={this.props.row} square={0} handler={this.handler} />
        <Square value={this.props.values[1]} row={this.props.row} square={1} handler={this.handler} />
        <Square value={this.props.values[2]} row={this.props.row} square={2} handler={this.handler} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  layout: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: '20%',
  }
});
