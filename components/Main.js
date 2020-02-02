"use strict";

import React from "react";
import { Button, View, Text } from "react-native";
import NotFound from "./NotFound";
import ML from "./ML";

export default class Main extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text style={{ textAlign: "center", color: "#333", marginBottom: 5 }}>
          Hello Main
        </Text>
        <Button
          title="Go to NotFound Page"
          onPress={
            () =>
              this.props.navigation.navigate("NotFound", {
                itemId: 86,
                otherParam: "anything you want here"
              }) // passing parameters to other pages
          }
        />
        <Button
          title="Go to MachineLearning Page"
          onPress={() => this.props.navigation.navigate("ML")}
        />
      </View>
    );
  }
}
