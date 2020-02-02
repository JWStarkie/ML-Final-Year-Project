"use strict";

import * as React from "react";
import { Text, View } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Main from "./components/Main";
import NotFound from "./components/NotFound";
import ML from "./components/ML";
import AR from "./components/AR";
import CameraFunction from "./components/CameraFunction";

const PageStack = createStackNavigator(
  {
    Main: Main,
    NotFound: NotFound,
    ML: ML,
    AR: AR,
    CameraFunction: CameraFunction
  },
  {
    intitialRouteName: "Main"
  }
);

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
