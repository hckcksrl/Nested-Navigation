import React, { Component } from "react";
import { View, StyleSheet, Dimensions, Text } from "react-native";
import {
  createAppContainer,
  createMaterialTopTabNavigator
} from "react-navigation";
import Notifi from "../../Screen/Notificate/Notifi";
import Following from "../../Screen/Notificate/Following";
import Event from "../../Screen/Notificate/Event";

const Notificate = createMaterialTopTabNavigator(
  {
    Notificate: {
      screen: Notifi,
      navigationOptions: {
        tabBarLabel: ({ tintColor }) => (
          <Text style={{ color: tintColor }}>알림</Text>
        )
      }
    },
    Following: {
      screen: Following,
      navigationOptions: {
        tabBarLabel: ({ tintColor }) => (
          <Text style={{ color: tintColor }}>팔로잉</Text>
        )
      }
    },
    Event: {
      screen: Event,
      navigationOptions: {
        tabBarLabel: ({ tintColor }) => (
          <Text style={{ color: tintColor }}>이벤트</Text>
        )
      }
    }
  },
  {
    initialRouteName: "Notificate",
    lazy: true,
    swipeEnabled: true,
    animationEnabled: false,
    tabBarOptions: {
      tabStyle: {
        width: Dimensions.get("window").width / 3,
        height: Dimensions.get("window").height / 14,
        justifyContent: "center",
        alignItems: "center"
      },
      labelStyle: {
        fontSize: 15
      },
      activeTintColor: "red",
      inactiveTintColor: "black",
      style: {
        backgroundColor: "white"
      },
      indicatorStyle: { height: 0 },
      upperCaseLabel: false,
      scrollEnabled: true
    }
  }
);

export default Notificate;
