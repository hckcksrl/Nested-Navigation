import React from "react";
import { createAppContainer, createStackNavigator } from "react-navigation";
import Icon from "react-native-vector-icons/MaterialIcons";
import tabNavigation from "./AppNavigation";
import PictureNavigation from "./PictureNavigation";

const RootNavigation = createStackNavigator(
  {
    Tabs: {
      screen: tabNavigation,
      navigationOptions: ({ navigation }) => ({
        header: null
      })
    },
    TakePhoto: {
      screen: PictureNavigation,
      navigationOptions: ({ navigation }) => ({
        // headerLeft: (
        //   <Icon
        //     name="close"
        //     color="black"
        //     size={24}
        //     onPress={() => {
        //       navigation.goBack(null);
        //     }}
        //   />
        // )
        headerBackTitle: true
      })
    }
  },
  {
    mode: "modal"
  }
);

const AppRootNavigator = createAppContainer(RootNavigation);

export default AppRootNavigator;
