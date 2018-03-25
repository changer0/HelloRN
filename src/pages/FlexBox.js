/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';



export default class Test extends Component {
  render() {
    return (
      // justifyContent: 主轴 alignItems: 次轴
      // flex-start、center、flex-end、space-around以及space-between
      <View style={{flex: 1, flexDirection: 'row',justifyContent: 'flex-end',   alignItems: 'center'}}>
        <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
      </View>
    );
  }
}
