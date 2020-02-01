'use strict';


import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class extends React.Component {

  state = {
    myState: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, used do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, qui nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore e fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt inulpa qui officia deserunt mollit anim id est laborum.'
  }

  updateState = () => this.setState({ myState: "I've been updated!" })

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.texts} onPress={this.updateState}> {this.state.myState} </Text>
      </View>
    )
  }
}

// To convert to EC5 functions if unexpected behaviour happens
// class Home extends Component {
//   constructor() {
//     super()
//     this.updateState = this.updateState.bind(this)
//   }
//   updateState() {
//     //
//   }
//   render() {
//     //
//   }
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f1f1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texts: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
});
