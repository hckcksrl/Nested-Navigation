import React, { Component } from "react";
import { View, StyleSheet, Dimensions, Text } from "react-native";
import { createAppContainer, createBottomTabNavigator } from "react-navigation";
import Home from "../Navigation/HomeNavigation";
import MyPage from "../Navigation/MyPageNavigation";
import Notificate from "../Navigation/NotificateNavigation";
import Icon from "react-native-vector-icons/MaterialIcons";

const tabNavigation = createBottomTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarLabel: "Home"
        // tabBarIcon: ({ tintColor }) => (
        //   <Icon name="home" color={tintColor} size={24} />
        // )
      }
    },
    MyPage: {
      screen: MyPage,
      navigationOptions: {
        tabBarLabel: "MyPage"
        // tabBarIcon: ({ tintColor }) => (
        //   <Icon name="contact" color={tintColor} size={24} />
        // )
      }
    },
    Notification: {
      screen: Notificate,
      navigationOptions: {
        tabBarLabel: "Notificate"
        // tabBarIcon: ({ tintColor }) => (
        //   <Icon name="notifications" color={tintColor} size={24} />
        // )
      }
    }
  }
  // {
  //   tabBarOptions: {
  //     tabStyle: {
  //       width: Dimensions.get("window").width / 3,
  //       height: Dimensions.get("window").height / 12,
  //       justifyContent: "center",
  //       alignItems: "center"
  //     },
  //     activeTintColor: "red",
  //     inactiveTintColor: "black",
  //     style: {
  //       backgroundColor: "black"
  //     },
  //     indicatorStyle: { height: 0 },
  //     showIcon: true,
  //     upperCaseLabel: false,
  //     showLabel: false
  //   }
  // }
);

const AppNavigation = createAppContainer(tabNavigation);

class AppContainer extends Component {
  render() {
    return <AppNavigation />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default AppContainer;
