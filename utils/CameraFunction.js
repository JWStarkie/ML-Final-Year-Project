"use strict";

import React, { Component } from "react";
import { ActivityIndicator, Text, View, TouchableOpacity } from "react-native";
import { Camera } from "expo-camera";

import { FontAwesome } from "@expo/vector-icons";

import AzureConnection from "utils/AzureConnection.js";

import NavigationService from "./NavigationService";

export default class CameraFunction extends Component {
  state = {
    hasPermission: null,
    type: Camera.Constants.Type.back,
    processing: null
  };

  async componentDidMount() {
    const { status } = await Camera.requestPermissionsAsync();
    this.setState({ hasPermission: status === "granted" });
  }

  render() {
    const { hasPermission } = this.state;
    if (hasPermission === null) {
      return <View />;
    } else if (hasPermission === false) {
      return (
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <Text
            style={{
              textAlign: "center",
              color: "#333",
              marginBottom: 5
            }}
          >
            No authorisation to access to camera, please give this application
            permission to continue!! You must now do this through your setting
            or restart the application!!
          </Text>
        </View>
      );
    } else {
      return (
        <View style={{ flex: 1 }}>
          <Camera
            ref={ref => {
              this.camera = ref;
            }}
            style={{ flex: 1 }}
            type={this.type}
          >
            <View
              style={{
                flex: 1,
                backgroundColor: "transparent",
                flexDirection: "row",
                justifyContent: "center",
                margin: 25
              }}
            >
              <TouchableOpacity
                style={{
                  flex: 1,
                  justifyContent: "flex-end",
                  alignItems: "center",
                  backgroundColor: "transparent",
                  marginBottom: 5
                }}
                onPress={this.takePicture}
              >
                {this.state.processing ? (
                  <ActivityIndicator
                    size="large"
                    color="#0000ff"
                    animating={this.state.processing}
                  />
                ) : null}
                <FontAwesome
                  name="camera"
                  style={{
                    color: "#fff",
                    fontSize: 40,
                    backgroundColor: "#000",
                    padding: 10
                  }}
                />
              </TouchableOpacity>
            </View>
          </Camera>
        </View>
      );
    }
  }
  takePicture = async () => {
    this.setState({ processing: true });
    if (this.camera) {
      if (this.props.navigation.state.params.trainNewVehicle) {
        console.log("Train new vehicle");
        await this.camera
          .takePictureAsync({ skipProcessing: true })
          .then(data => {
            NavigationService.navigate("ImagePreview", {
              imageUri: data.uri,
              totrain: this.props.navigation.state.params.trainNewVehicle
            });
          });
      } else {
        console.log("Predict Vehicle");
        await this.camera
          .takePictureAsync({ skipProcessing: true })
          .then(data => {
            AzureConnection.predictVehicleMake();
            /*             NavigationService.navigate("ImagePreview", {
              imageUri: data.uri,
              totrain: this.props.navigation.state.params.trainNewVehicle
            }); */
          });
      }
    }
  };
}
