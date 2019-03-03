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
        headerBackTitle: true
      })
    }
  },
  {
    mode: "card"
  }
);

const AppRootNavigator = createAppContainer(RootNavigation);

export default AppRootNavigator;

// createSwitchNavigator{
//     SignedOut{
//         SignIn
//         SignOut
//     }
//     SignedIn{
//         Tabs{
//             Home{
//                 Popular
//                 Picture
//                 Dictionary
//                 Recent
//             }
//             MyPage{
//                 Profile
//                 Shop
//             }
//             Notificate{
//                 Notification
//                 Following
//                 Event
//             }
//             Photo{
//                 View
//             }
//         }
//         TakePhoto{
//             Camera
//             Library
//         }
//     }
// }
