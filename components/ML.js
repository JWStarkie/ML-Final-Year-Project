"use strict";

import React from "react";
import { Button, View } from "react-native";

export default class ML extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Button
          title="Camera Set Up"
          onPress={() => this.props.navigation.navigate("CameraFunction")}
        />
      </View>
    );
  }
}
