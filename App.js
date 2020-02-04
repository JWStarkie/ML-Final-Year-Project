"use strict";

import * as React from "react";

import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import NavigationService from "./utils/NavigationService";
import CameraFunction from "./utils/CameraFunction";

import Main from "./components/Main";
import NotFound from "./components/NotFound";
import ML from "./components/ML";
import AR from "./components/AR";
import ImagePreview from "./components/ImagePreview";

const PageStack = createStackNavigator(
  {
    Main: Main,
    NotFound: NotFound,
    ML: ML,
    AR: AR,
    CameraFunction: CameraFunction,
    ImagePreview: ImagePreview
  },
  {
    defaultNavigationOptions: {
      headerShown: false
    }
  },
  {
    intitialRouteName: "Main"
  }
);

const AppContainer = createAppContainer(PageStack);

export default class App extends React.Component {
  render() {
    return (
      <AppContainer
        ref={navigatorRef => {
          NavigationService.setTopLevelNavigator(navigatorRef);
        }}
      />
    );
  }
}
