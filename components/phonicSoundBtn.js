import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { Audio } from "expo-av";

export default class PhonicSoundBtn extends Component {
    constructor() {
        super();
        this.state = {
            pressedBtnIndex: ""
        }
    }
    playSound = async (soundChunk) => {
        await Audio.Sound.createAsync(
            {
                uri: 'https://curriculum.whitehatjr.com/Visual+Project+Asset/PRO_VD/Phones/phones/' + soundChunk + '.mp3'
            },
            {
                shouldPlay: true
            }
        );
    };
    render() {
        return (
            <View>
                <TouchableOpacity style={this.props.btnIndex === this.state.pressedBtnIndex ? [styles.chunkButton, {backgroundColor: "yellow"}] : [styles.chunkButton, {backgroundColor: "red"}]} onPress={() => {
                    this.setState({
                        pressedBtnIndex: this.props.btnIndex
                    });
                    this.playSound(this.props.soundChunk);
                }}>
                    <Text style={this.props.btnIndex === this.state.pressedBtnIndex ? [styles.chunkButtonTxt, {color: "red"}] : [styles.chunkButtonTxt, {color: "yellow"}]}>
                        {this.props.wordChunk}
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    chunkButton: {
        width: '60%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        borderRadius: 10,
        margin: 5
    },
    chunkButtonTxt: {
        justifyContent: 'center',
        alignSelf: 'center',
        fontSize: 25
    }
})