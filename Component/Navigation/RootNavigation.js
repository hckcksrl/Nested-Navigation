import { Platform, StatusBar } from "react-native";
import { createStackNavigator, createSwitchNavigator } from "react-navigation";
import tabNavigation from "./AppNavigation";
import PictureNavigation from "./PictureNavigation";
import SignIn from "../../Route/Login/SignIn";
import SignUp from "../../Route/Login/SignUp";

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
        header: null,
        headerStyle
      }
    },
    TakePhoto: {
      screen: PictureNavigation,
      navigationOptions: {
        title: "Photo",
        headerStyle
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
