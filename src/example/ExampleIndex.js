import React, {Component} from 'react';
import {TouchableOpacity, StyleSheet, Text, View} from 'react-native';
import {
    StackNavigator,
} from 'react-navigation';

import Button from '../component/Button';



export default class ExampleIndex extends Component {

    static navigationOptions = {
        title: 'ExampleIndex',    //设置navigator的title
    }


    constructor(props) {
        super(props);

    }

    componentWillUnmount() {

    }

    render() {

        return (
            <View style={styles.container}>
                {/*ref相当于Html中的id, 标记和引用组件*/}
                <Button ref='submit' text='确定' backgroundColor='red'/>
                <Button text='取消' onPress={() => {
                    alert("你点击了取消");
                }}/>
                <Button text='完成'/>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        //justifyContent: 'center',
        alignItems: 'center',
    },
});