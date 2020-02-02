'use strict';

import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from './components/Main'
import NotFound from './components/NotFound'
import ML from './components/ML'
import AR from './components/AR'


const PageStack = createStackNavigator({
  Main: Main,
  NotFound: NotFound,
  ML: ML,
  AR: AR,
}, 
{
  intitialRouteName: 'Main',
});

class App extends React.Component {
  render() {
    return (
      <View>
        <Text>Home Screen</Text>
      </View>
    );
    
  }
}

export default createAppContainer(PageStack);

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

  // state = {
  //   myState: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, used do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, qui nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore e fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt inulpa qui officia deserunt mollit anim id est laborum.'
  // }

  // updateState = () => this.setState({ myState: "I've been updated!" })
    // return (
    //   <View style={styles.container}>
    //     <Text style={styles.texts} onPress={this.updateState}> {this.state.myState} </Text>
    //   </View>)
