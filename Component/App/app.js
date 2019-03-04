import React, { Component } from "react";
import { SafeAreaView } from "react-native";
import { isSignedIn } from "./auth";
import { createAppContainer } from "react-navigation";
import { createRootNavigator } from "../Navigation/RootNavigation";

class AppContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signedIn: false,
      checkedSignIn: false
    };
  }

  handleChange = (state, props) => {
    // this.setState({
    //   inputholder: state,
    //   naviProps: props
    // });
  };

  componentDidMount() {
    isSignedIn()
      .then(res => this.setState({ signedIn: res, checkedSignIn: true }))
      .catch(err => alert("An error occurred"));
  }

  render() {
    const { checkedSignIn, signedIn } = this.state;

    // If we haven't checked AsyncStorage yet, don't render anything (better ways to do this)
    if (!checkedSignIn) {
      return null;
    }

    const Layout = createRootNavigator(signedIn);
    const AppNavigation = createAppContainer(Layout);
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <AppNavigation screenProps={this.handleChange} />
      </SafeAreaView>
    );
  }
}

export default AppContainer;

// <SafeAreaView style={styles.container} forceInset={{ top: "never" }}>
//         {this.state.inputholder === "Popular" ||
//         this.state.inputholder === "Picture" ||
//         this.state.inputholder === "Recent" ||
//         this.state.inputholder === "Dictionary" ? (
//           <View style={styles.header}>
//             <View style={styles.icon}>
//               <Icon
//                 name="home"
//                 color="red"
//                 size={30}
//                 onPress={() => {
//                   this.state.naviProps.navigate("Popular");
//                 }}
//               />
//             </View>
//             <View style={styles.searchSection}>
//               <Icon style={styles.searchIcon} name="search" size={20} />
//               <TextInput
//                 style={styles.input}
//                 placeholder="검색"
//                 onChangeText={searchString => {
//                   this.setState({ searchString });
//                 }}
//               />
//             </View>
//             <View style={styles.setting}>
//               <Icon name="settings" size={30} color="grey" />
//             </View>
//           </View>
//         ) : null}

//         <AppRootNavigator screenProps={this.handleChange} />
//       </SafeAreaView>

// import React from "react";
// import { createRootNavigator } from "./route";
// import { isSignedIn } from "./auth";
// import { createAppContainer } from "react-navigation";

// export default class AppContainer extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       signedIn: false,
//       checkedSignIn: false
//     };
//   }

//   componentDidMount() {
//     isSignedIn()
//       .then(res => this.setState({ signedIn: res, checkedSignIn: true }))
//       .catch(err => alert("An error occurred"));
//   }

//   render() {
//     const { checkedSignIn, signedIn } = this.state;

//     // If we haven't checked AsyncStorage yet, don't render anything (better ways to do this)
//     if (!checkedSignIn) {
//       return null;
//     }

//     const Layout = createRootNavigator(signedIn);
//     const AppNavigation = createAppContainer(Layout);
//     return <AppNavigation />;
//   }
// }
