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
import { NavigationActions } from 'react-navigation'
import Button from "../component/Button";
import StackNavigator from "react-navigation/src/navigators/StackNavigator";
import ButtonExample from "./ButtonExample";

class MyHomeScreen extends React.Component {
    static navigationOptions = {
        title: 'Home',
    }

    render() {
        return (
            <Button
                text='跳转到下一个页面'
                onPress={() => this.props.navigation.navigate('ButtonExample')}
            />
        );
    }
}

const ModalStack = StackNavigator({
    Home: {
        screen: MyHomeScreen,
    },
    ButtonExample: {
        path: 'pages/',
        screen: ButtonExample,
    },
});
export default ModalStack;