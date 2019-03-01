import React from "react";
import { Dimensions } from "react-native";
import { createMaterialTopTabNavigator } from "react-navigation";
import Cameras from "../../Route/Camera";
import Library from "../../Route/Library";
import Icon from "react-native-vector-icons/MaterialIcons";

const PictureNavigation = createMaterialTopTabNavigator(
  {
    Camera: {
      screen: Cameras,
      navigationOptions: {
        tabBarLabel: "Camera",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="camera" color={tintColor} size={24} />
        )
      }
    },
    Library: {
      screen: Library,
      navigationOptions: {
        tabBarLabel: "Library",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="image" color={tintColor} size={24} />
        )
      }
    }
  },
  {
    tabBarPosition: "bottom",
    lazy: true,
    initialRouteName: "Camera",
    swipeEnabled: true,
    animationEnabled: false,
    tabBarOptions: {
      tabStyle: {
        width: Dimensions.get("window").width / 2,
        height: Dimensions.get("window").height / 14,
        justifyContent: "center",
        alignItems: "center"
      },
      labelStyle: {
        fontSize: 10
      },
      activeTintColor: "red",
      inactiveTintColor: "black",
      style: {
        backgroundColor: "white"
      },
      indicatorStyle: { height: 0 },
      upperCaseLabel: false,
      showLabel: false,
      scrollEnabled: true,
      showIcon: true
    }
  }
);

export default PictureNavigation;
