import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { Audio } from "expo-av";

export default class phonicSoundBtn extends Component {
    render() {
        return (
            <View>
                <TouchableOpacity onPress={() => {
                    this.playSound(this.props.soundChunk);
                }}>
                    <Text>
                        {this.props.wordChunk}
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
    playSound = async (soundChunk) => {
        var soundLink = 'https://s3-whitehatjrcontent.whjr.online/phones/' + soundChunk + '.mp3';
        await Audio.Sound.createAsync({
            uri: soundLink,
            shouldPlay: true
        });
    }
}