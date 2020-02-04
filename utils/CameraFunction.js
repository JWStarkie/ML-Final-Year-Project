"use strict";

import React, { Component } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { Camera } from "expo-camera";

import { FontAwesome } from "@expo/vector-icons";

import NavigationService from "./NavigationService";

export default class CameraFunction extends Component {
  state = {
    hasPermission: null,
    type: Camera.Constants.Type.back,
    takePictureFunction: null
  };

  async componentDidMount() {
    const { status } = await Camera.requestPermissionsAsync();
    const { navigation } = this.props;
    this.setState({ hasPermission: status === "granted" });
    this.setState({
      takePictureFunction: navigation.state.params.takePictureFunction
    });
  }

  render() {
    const { hasPermission } = this.state;
    // const { navigation } = this.props;
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
              {/* <TouchableOpacity
                style={{
                  alignSelf: "flex-end",
                  alignItems: "center",
                  backgroundColor: "transparent"
                }}
                onPress={this.takePicture}
              >
                <FontAwesome
                  name="camera"
                  style={{
                    color: "#fff",
                    fontSize: 40,
                    backgroundColor: "#000",
                    padding: 10
                  }}
                />
              </TouchableOpacity> */}
              {this.state.takePictureFunction ? (
                <View
                  style={{
                    flex: 1,
                    backgroundColor: "transparent",
                    flexDirection: "row",
                    justifyContent: "center"
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
              ) : null}
            </View>
          </Camera>
        </View>
      );
    }
  }
  takePicture = async () => {
    if (this.camera) {
      await this.camera
        .takePictureAsync({ skipProcessing: true })
        .then(data => {
          NavigationService.navigate("ImagePreview", {
            imageUri: data.uri
          });
        });
    }
  };
}
