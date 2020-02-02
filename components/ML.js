"use strict";

import React from "react";
import { View, Text } from "react-native";

export default class ML extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text style={{ textAlign: "center", color: "#333", marginBottom: 5 }}>
          Hello ML
        </Text>
      </View>
    );
  }
}
