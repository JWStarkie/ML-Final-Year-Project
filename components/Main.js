"use strict";

import React, { Component } from "react";
import { StatusBar, Image, StyleSheet, View, Text } from "react-native";
import ViewPager from "@react-native-community/viewpager";
import Dots from "react-native-dots-pagination";
import { FontAwesome } from "@expo/vector-icons";
import { Button } from "react-native-elements";

import logo from "assets/icon.png";

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 0
    };
  }

  onPageSelected = e => {
    this.setState({
      active: e.nativeEvent.position
    });
  };

  render() {
    return (
      <View style={styles.pageView}>
        <StatusBar hidden={true} />
        <View style={styles.headerSpace}>
          <Image source={logo} style={{ height: 150, width: 150 }} />
        </View>
        <ViewPager
          style={styles.viewPagerSlider}
          initialPage={0}
          onPageSelected={this.onPageSelected}
        >
          <View style={styles.viewStyle} key="0">
            <Text style={styles.textStyle}>
              Welcome to the Learn My Car app. You can use this to find your
              vehicle using a few pictures and an internet connection!
            </Text>
          </View>
          <View style={styles.viewStyle} key="1">
            <Text style={styles.textStyle}>
              Take a picture of your steering wheel and then your vehicle middle
              console... {"\n"}
              {"\n"}
              You will received a request to access your device camera.{"\n"}
              {"\n"}
              Please accept this request to use the app...
            </Text>
          </View>
          <View style={styles.viewStyle} key="2">
            <Text style={styles.textStyle}>
              Confirm we've guessed your vehicle correctly...
            </Text>
          </View>
          <View style={styles.viewStyle} key="3">
            <Text style={styles.textStyle}>
              Then use your camera to view the Augmented Reality features in
              real-time{"\n"}OR{"\n"}view your user manual in PDF...
            </Text>
          </View>
          <View style={styles.viewStyle} key="4">
            <Text style={styles.textStyle}>
              Are you ready to get started...
            </Text>
            <View style={styles.additionalView}>
              <Button
                icon={
                  <FontAwesome name="arrow-right" size={15} color="white" />
                }
                iconRight
                title="To Camera Set-up  "
                type="solid"
                raised={true}
                onPress={() => this.props.navigation.navigate("ML")}
              />
            </View>
          </View>
        </ViewPager>
        <View style={styles.footerSpace}>
          <View style={styles.fontA} />
          <View>
            <Dots
              length={5}
              active={this.state.active}
              activeColor={"#3A88E9"}
            />
          </View>
          <View style={styles.fontA} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  additionalView: {
    width: "75%",
    justifyContent: "center"
  },
  fontA: {
    color: "#3A88E9",
    fontSize: 40,
    alignSelf: "flex-end"
  },
  pageView: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "#fff"
  },
  headerSpace: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  footerSpace: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    paddingBottom: 30
  },
  viewPagerSlider: {
    flex: 2
  },
  viewStyle: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  textStyle: {
    textAlign: "center",
    fontSize: 20,
    color: "#3A88E9",
    padding: 50
  }
});
