import React from "react";
import { Dimensions, Button } from "react-native";
import { createAppContainer, createStackNavigator } from "react-navigation";
import Home from "../Navigation/HomeNavigation";
import MyPage from "../Navigation/MyPageNavigation";
import Notificate from "../Navigation/NotificateNavigation";
import Icon from "react-native-vector-icons/MaterialIcons";
import tabNavigation from "./AppNavigation";
import PictureNavigation from "./PictureNavigation";

const RootNavigation = createStackNavigator(
  {
    Tabs: {
      screen: tabNavigation,
      navigationOptions: ({ navigation }) => ({
        header: null,

        headerLeft: (
          <Button
            title="Cancel"
            color="black"
            onPress={() => navigation.goBack(null)}
          />
        )
      })
    },
    TakePhoto: {
      screen: PictureNavigation,
      navigationOptions: ({ navigation }) => ({
        header: null,

        headerLeft: (
          <Button
            title="Cancel"
            color="black"
            onPress={() => navigation.goBack(null)}
          />
        )
      })
    }
  },
  {
    mode: "modal"
  }
);

const AppRootNavigator = createAppContainer(RootNavigation);

export default AppRootNavigator;
