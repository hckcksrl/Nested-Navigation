// import { Platform, StatusBar } from "react-native";
// import { createStackNavigator, createSwitchNavigator } from "react-navigation";
// import SignUp from "../../Route/Login/SignUp";
// import SignIn from "../../Route/Login/SignIn";
// import tabNavigation from "../Navigation/AppNavigation";
// import PictureNavigation from "../Navigation/PictureNavigation";

// const headerStyle = {
//   marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
// };

// export const SignedOut = createStackNavigator({
//   SignUp: {
//     screen: SignUp,
//     navigationOptions: {
//       title: "Sign Up",
//       headerStyle
//     }
//   },
//   SignIn: {
//     screen: SignIn,
//     navigationOptions: {
//       title: "Sign In",
//       headerStyle
//     }
//   }
// });

// export const SignedIn = createStackNavigator(
//   {
//     Tabs: {
//       screen: tabNavigation,
//       navigationOptions: {
//         header: null,
//         headerStyle
//       }
//     },
//     TakePhoto: {
//       screen: PictureNavigation,
//       navigationOptions: {
//         title: "Photo",
//         headerStyle
//       }
//     }
//   },
//   {
//     tabBarOptions: {
//       style: {
//         paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
//       }
//     }
//   }
// );

// export const createRootNavigator = (signedIn = false) => {
//   return createSwitchNavigator(
//     {
//       SignedIn: {
//         screen: SignedIn
//       },
//       SignedOut: {
//         screen: SignedOut
//       }
//     },
//     {
//       initialRouteName: signedIn ? "SignedIn" : "SignedOut"
//     }
//   );
// };
