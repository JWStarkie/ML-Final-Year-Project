"use strict";

import React from "react";
import { Image, View, Text } from "react-native";
import { Button } from "react-native-elements";
import { FontAwesome } from "@expo/vector-icons";

import NavigationService from "utils/NavigationService.js";

export default class ResultsPage extends React.Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text style={{ textAlign: "center", color: "#333", marginBottom: 5 }}>
          Image URL: {JSON.stringify(navigation.state.params.imageUrl)}
        </Text>
        <Image
          style={{ width: 200, height: 200 }}
          source={{ uri: navigation.state.params.imageUrl }}
        />
        <Text style={{ textAlign: "center", color: "#333", marginBottom: 5 }}>
          Predicted Make: {JSON.stringify(navigation.state.params.prediction)}
        </Text>
        <Text
          style={{
            textAlign: "center",
            fontSize: 20,
            color: "#3A88E9",
            padding: 15
          }}
        >
          Is this your vehicle make?
        </Text>
        <Button
          icon={<FontAwesome name="check-circle" size={15} color="white" />}
          iconRight
          title="Yes "
          type="solid"
          raised={true}
        />
        <View style={{ height: 10 }} />
        <Button
          icon={<FontAwesome name="times-circle" size={15} color="white" />}
          iconRight
          title="No "
          type="solid"
          raised={true}
          onPress={() =>
            NavigationService.navigate("ImagePreview", {
              imageUrl: navigation.state.params.imageUrl
            })
          }
        />
      </View>
    );
  }
}
