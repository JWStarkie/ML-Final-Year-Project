"use strict";

import React from "react";
import { Image, View, Text } from "react-native";
import { Button } from "react-native-elements";
import { FontAwesome } from "@expo/vector-icons";

export default class ImagePreview extends React.Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text
          style={{
            textAlign: "center",
            fontSize: 20,
            color: "#3A88E9",
            padding: 15
          }}
        >
          Would you like to help improve our application by uploading your
          picture to our training portal?
        </Text>
        <Image
          style={{ width: 200, height: 200 }}
          source={{ uri: navigation.state.params.imageUrl }}
        />
        <View style={{ height: 10 }} />
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
        />
      </View>
    );
  }
}
