import React from 'react';
import { View, AppRegistry, Text } from 'react-native';
import Board from './src/components/Board';

const App  = () => (
    <Board style={{flex: 1}} />
);


AppRegistry.registerComponent('TicTacToe', () => App);
