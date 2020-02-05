"use strict";

import React from "react";
import { Button, View } from "react-native";

// Env files with Keys
// import EnvKeys from "../environment";

// To access the keys and use
// const key = EnvKeys.getAnotherApiKey();
// console.log("key:" + key);

import NavigationService from "utils/NavigationService.js";

export default class ML extends React.Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <Button
          title="Camera Set Up"
          onPress={() =>
            NavigationService.navigate("CameraFunction", {
              takePictureFunction: false
            })
          }
        />
        <Button
          title="Camera Set Up & Take Picture"
          onPress={() =>
            NavigationService.navigate("CameraFunction", {
              takePictureFunction: true
            })
          }
        />
      </View>
    );
  }
}
