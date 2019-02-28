import React, { Component } from "react";
import { Dimensions, View } from "react-native";
import { createBottomTabNavigator } from "react-navigation";
import Home from "../Navigation/HomeNavigation";
import MyPage from "../Navigation/MyPageNavigation";
import Notificate from "../Navigation/NotificateNavigation";
import Icon from "react-native-vector-icons/MaterialIcons";

const tabNavigation = createBottomTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarLabel: "Home",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="home" color={tintColor} size={24} />
        )
      }
    },
    MyPage: {
      screen: MyPage,
      navigationOptions: {
        tabBarLabel: "MyPage",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="person" color={tintColor} size={24} />
        )
      }
    },
    Notification: {
      screen: Notificate,
      navigationOptions: {
        tabBarLabel: "Notificate",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="notifications" color={tintColor} size={24} />
        )
      }
    },
    AddPhoto: {
      screen: View,
      navigationOptions: {
        tabBarLabel: "AddPhoto",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="camera" color={tintColor} size={24} />
        ),
        tabBarOnPress: ({ navigation }) => {
          navigation.navigate("TakePhoto");
        }
      }
    }
  },
  {
    lazy: true,
    tabBarOptions: {
      tabStyle: {
        width: Dimensions.get("window").width / 4,
        height: Dimensions.get("window").height / 12,
        justifyContent: "center",
        alignItems: "center"
      },
      activeTintColor: "red",
      inactiveTintColor: "black",
      style: {
        backgroundColor: "white"
      },
      indicatorStyle: { height: 0 },
      showIcon: true,
      upperCaseLabel: false,
      showLabel: false
    }
  }
);

export default tabNavigation;
