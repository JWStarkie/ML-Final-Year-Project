import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const presComponent = (props) => {
    return (
        <View>
            <Text onPress={props.updateState}>
                {props.myState}
            </Text>
        </View>
    )
}

export default presComponent;