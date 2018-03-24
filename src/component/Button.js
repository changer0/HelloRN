/**
 * by lulu
 * 基本的自定义按钮
 */
import React, {Component} from 'react';
import {TouchableOpacity, StyleSheet, Text, View} from 'react-native';

export default class Button extends Component {
    //构造函数
    constructor(props) {
        super(props);
        this.state = {
            disabled: false,
        }
    }
    onPress = () => {
        const { onPress } = this.props;
        this.disable();
        onPress(this.enable);
    };

    enable = () => {
        this.setState({
            disabled:false,
        });
    };

    disable = () => {
        this.setState({
            disabled:true,
        });
    };
    render() {
        // 结构
        let {text, backgroundColor} = this.props;
        if (!backgroundColor) {
            backgroundColor = 'green';
        }
        return (
            <View style={styles.container}>
                <TouchableOpacity
                    disabled={this.state.disabled}
                    onPress={this.onPress}
                    style={[styles.button, {backgroundColor: backgroundColor}, this.state.disabled && styles.disabled]}>
                    <Text style={styles.buttonText}>{text}</Text>
                </TouchableOpacity>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        margin: 5,
    },
    button: {
        height: 40,
        width: 200,
        borderRadius: 20,
        backgroundColor: 'green',
        justifyContent: 'center',
        overflow: 'hidden'
    },
    buttonText: {
        textAlign: 'center',
        color: 'white'
    },
    disabled: {
        backgroundColor: 'gray'
    }
});