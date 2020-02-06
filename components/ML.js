"use strict";

import React from "react";
import { Button, View } from "react-native";

// Env files with Keys
// import { API_KEY } from "react-native-dotenv";

// To access the keys and use
// console.log(API_KEY);

import NavigationService from "utils/NavigationService.js";
import AzureConnection from "utils/AzureConnection.js";

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
          title="Test Function"
          onPress={() => AzureConnection.predictVehicleMake()}
        />
        <Button
          title="Camera Set Up - Predict Vehicle"
          onPress={() =>
            NavigationService.navigate("AzureConnection", {
              trainNewVehicle: false
            })
          }
        />
        <Button
          title="Camera Set Up - Train on New Vehicle"
          onPress={() =>
            NavigationService.navigate("CameraFunction", {
              trainNewVehicle: true
            })
          }
        />
      </View>
    );
  }
}
