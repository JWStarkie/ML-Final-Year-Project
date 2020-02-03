"use strict";

import React from "react";
import { Image, View, Text } from "react-native";
// import NavigationService from "./utils/NavigationService";

export default class ImagePreview extends React.Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text style={{ textAlign: "center", color: "#333", marginBottom: 5 }}>
          itemId: {JSON.stringify(navigation.state.params.imageUri)}
        </Text>
        <Image
          style={{ width: 200, height: 200 }}
          source={{ uri: navigation.state.params.imageUri }}
        />
      </View>
    );
  }
}
