import React from "react";
import { Dimensions, Text, View } from "react-native";
import { createMaterialTopTabNavigator } from "react-navigation";
import Popular from "../../Screen/Home/Popular";
import Picture from "../../Screen/Home/Picture";
import Recent from "../../Screen/Home/Recent";
import Dictionary from "../../Screen/Home/Dictionary";

const Home = createMaterialTopTabNavigator(
  {
    Popular: {
      screen: Popular,
      navigationOptions: {
        tabBarLabel: ({ tintColor }) => (
          <Text style={{ color: tintColor }}>인기</Text>
        )
      }
    },
    Picture: {
      screen: Picture,
      navigationOptions: {
        tabBarLabel: ({ tintColor }) => (
          <Text style={{ color: tintColor }}>사진</Text>
        )
      }
    },
    Recent: {
      screen: Recent,
      navigationOptions: {
        tabBarLabel: ({ tintColor }) => (
          <Text style={{ color: tintColor }}>최신</Text>
        )
      }
    },
    Dictionary: {
      screen: Dictionary,
      navigationOptions: {
        tabBarLabel: ({ tintColor }) => (
          <Text style={{ color: tintColor }}>도감</Text>
        )
      }
    }
  },
  {
    lazy: true,
    initialRouteName: "Popular",
    swipeEnabled: true,
    animationEnabled: true,
    tabBarOptions: {
      tabStyle: {
        width: Dimensions.get("window").width / 4,
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

export default Home;
