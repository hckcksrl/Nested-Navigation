import React from "react";
import { Platform, StatusBar } from "react-native";
import {
  createStackNavigator,
  createBottomTabNavigator,
  createSwitchNavigator
} from "react-navigation";
import { FontAwesome } from "react-native-vector-icons";
import SignUp from "../../Route/Login/SignUp";
import SignIn from "../../Route/Login/SignIn";
import Home from "../../Route/Login/Home";
import Profile from "../../Route/Login/Profile";
import tabNavigation from "../Navigation/AppNavigation";
import PictureNavigation from "../Navigation/PictureNavigation";

const headerStyle = {
  marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
};

export const SignedOut = createStackNavigator({
  SignUp: {
    screen: SignUp,
    navigationOptions: {
      title: "Sign Up",
      headerStyle
    }
  },
  SignIn: {
    screen: SignIn,
    navigationOptions: {
      title: "Sign In",
      headerStyle
    }
  }
});

export const SignedIn = createStackNavigator(
  {
    Tabs: {
      screen: tabNavigation,
      navigationOptions: {
        header: null
      }
    },
    TakePhoto: {
      screen: PictureNavigation,
      navigationOptions: {
        header: null
      }
    }
  },
  {
    tabBarOptions: {
      style: {
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
      }
    }
  }
);

export const createRootNavigator = (signedIn = false) => {
  return createSwitchNavigator(
    {
      SignedIn: {
        screen: SignedIn
      },
      SignedOut: {
        screen: SignedOut
      }
    },
    {
      initialRouteName: signedIn ? "SignedIn" : "SignedOut"
    }
  );
};
