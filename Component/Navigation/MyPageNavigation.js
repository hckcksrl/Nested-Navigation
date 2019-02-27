import React, { Component } from "react";
import { View, StyleSheet, Dimensions, Text } from "react-native";
import {
  createAppContainer,
  createMaterialTopTabNavigator
} from "react-navigation";
import Profile from "../../Screen/MyPage/Profile";
import Shop from "../../Screen/MyPage/Shop";

const topTabNavigator = createMaterialTopTabNavigator(
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
    swipeEnabled: true,
    animationEnabled: false,
    tabBarOptions: {
      tabStyle: {
        width: Dimensions.get("window").width / 2,
        height: Dimensions.get("window").height / 10,
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

const TopNavigation = createAppContainer(topTabNavigator);

class MyPage extends Component {
  render() {
    return (
      <View style={styles.container}>
        {/* <TopNavigation /> */}
        <Text>dd</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default MyPage;
