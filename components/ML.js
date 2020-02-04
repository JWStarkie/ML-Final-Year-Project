"use strict";

import React from "react";
import { Button, View } from "react-native";

import NavigationService from "utils/NavigationService.js";

export default class ML extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
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
