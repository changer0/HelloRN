import React, {Component} from 'react';
import {TouchableOpacity, StyleSheet, Text, View} from 'react-native';

import Button from '../component/Button';

export default class ButtonExample extends Component {

    constructor(props) {
        super(props);

    }

    //获取数据
    fetchData = () => {
        //禁用按钮
        this.refs.submit.disable();
        alert("正在获取数据");

        this.timer = setTimeout(() => {
            //获取结束后启用按钮
            this.refs.submit.enable();
        }, 2000);

    }

    componentWillUnmount() {
        // 请注意Un"m"ount的m是小写

        // 如果存在this.timer，则使用clearTimeout清空。
        // 如果你使用多个timer，那么用多个变量，或者用个数组来保存引用，然后逐个clear
        this.timer && clearTimeout(this.timer);
    }

    render() {

        return (
            <View style={styles.container}>
                {/*ref相当于Html中的id, 标记和引用组件*/}
                <Button ref='submit' text='确定' backgroundColor='red' onPress={() => {
                    this.fetchData();
                }}/>
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