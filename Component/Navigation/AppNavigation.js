import React, { Component } from "react";
import { Dimensions, View, TextInput, StyleSheet } from "react-native";
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

const styles = StyleSheet.create({
  header: {
    flex: 0.1,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center"
  },
  icon: {
    flex: 0.2,
    alignItems: "center",
    justifyContent: "center"
  },
  searchSection: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e5e5e5",
    borderRadius: 10,
    height: 30
  },
  searchIcon: {
    paddingLeft: 10,
    flex: 0.15,
    justifyContent: "center",
    alignItems: "center"
  },
  input: {
    flex: 1,
    backgroundColor: "transparent",
    color: "#424242"
  },
  setting: {
    flex: 0.2,
    alignItems: "center"
  }
});

export default tabNavigation;
