import React from "react";
import { Dimensions, Text, View } from "react-native";
import { createMaterialTopTabNavigator } from "react-navigation";
import Popular from "../../Screen/Home/Popular";
import Picture from "../../Screen/Home/Picture";
import Recent from "../../Screen/Home/Recent";
import Dictionary from "../../Screen/Home/Dictionary";
import TabBarComponent from "./tabBarComponent";

const Home = createMaterialTopTabNavigator(
  {
    인기: {
      screen: Popular,
      navigationOptions: {
        tabBarLabel: ({ tintColor }) => (
          <Text style={{ color: tintColor }}>인기</Text>
        )
      }
    },
    사진: {
      screen: Picture,
      navigationOptions: {
        tabBarLabel: ({ tintColor }) => (
          <Text style={{ color: tintColor }}>사진</Text>
        )
      }
    },
    최신: {
      screen: Recent,
      navigationOptions: {
        tabBarLabel: ({ tintColor }) => (
          <Text style={{ color: tintColor }}>최신</Text>
        )
      }
    },
    도감: {
      screen: Dictionary,
      navigationOptions: {
        tabBarLabel: ({ tintColor }) => (
          <Text style={{ color: tintColor }}>도감이란다</Text>
        )
      }
    }
    // fasdfds: {
    //   screen: View,
    //   navigationOptions: {
    //     tabBarLabel: ({ tintColor }) => (
    //       <Text style={{ color: tintColor }}>도감이란다</Text>
    //     )
    //   }
    // },
    // sdfg: {
    //   screen: View,
    //   navigationOptions: {
    //     tabBarLabel: ({ tintColor }) => (
    //       <Text style={{ color: tintColor }}>도감이란다</Text>
    //     )
    //   }
    // },
    // eㅁㄴㅇㅁgsfdgdsfㄴㅇㅁ: {
    //   screen: View,
    //   navigationOptions: {
    //     tabBarLabel: ({ tintColor }) => (
    //       <Text style={{ color: tintColor }}>도감이란다</Text>
    //     )
    //   }
    // },
    // eㅁㄴㅇㅁsgdgdfgsfdgdsfㄴㅇㅁ: {
    //   screen: View,
    //   navigationOptions: {
    //     tabBarLabel: ({ tintColor }) => (
    //       <Text style={{ color: tintColor }}>도감이란다</Text>
    //     )
    //   }
    // }
  },
  {
    tabBarComponent: props => {
      return <TabBarComponent {...props} />;
    },
    lazy: true,
    initialRouteName: "인기",
    swipeEnabled: true,
    animationEnabled: true,
    tabBarPosition: "top"
    // tabBarOptions: {
    //   tabStyle: {
    //     height: Dimensions.get("window").height / 14,
    //     width: Dimensions.get("window").width / 4
    //   },
    //   labelStyle: {
    //     fontSize: 20,
    //     width: "auto",
    //     display: "flex",
    //     flexDirection: "row",
    //     justifyContent: "space-around"
    //   },
    //   activeTintColor: "red",
    //   inactiveTintColor: "black",
    //   style: {
    //     backgroundColor: "white"
    //   },
    //   indicatorStyle: {
    //     backgroundColor: "red"
    //   },
    //   upperCaseLabel: false,
    //   scrollEnabled: true
    // }
  }
);

export default Home;
