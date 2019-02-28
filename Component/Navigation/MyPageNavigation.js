import React from "react";
import { Dimensions, Text } from "react-native";
import { createMaterialTopTabNavigator } from "react-navigation";
import Profile from "../../Screen/MyPage/Profile";
import Shop from "../../Screen/MyPage/Shop";

const MyPage = createMaterialTopTabNavigator(
  {
    Profile: {
      screen: Profile,
      navigationOptions: {
        tabBarLabel: ({ tintColor }) => (
          <Text style={{ color: tintColor }}>프로필</Text>
        )
      }
    },
    Shop: {
      screen: Shop,
      navigationOptions: {
        tabBarLabel: ({ tintColor }) => (
          <Text style={{ color: tintColor }}>쇼핑</Text>
        )
      }
    }
  },
  {
    lazy: true,
    initialRouteName: "Profile",
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

export default MyPage;
