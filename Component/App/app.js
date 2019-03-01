import React, { Component } from "react";
import { View, StyleSheet, TextInput, SafeAreaView } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import AppRootNavigator from "../Navigation/RootNavigation";
import { NavigationActions } from "react-navigation";

class AppContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputholder: null,
      naviProps: null
    };
  }

  handleChange = (state, props) => {
    this.setState({
      inputholder: state,
      naviProps: props
    });
  };

  render() {
    return (
      <SafeAreaView style={styles.container} forceInset={{ top: "never" }}>
        {this.state.inputholder === "Popular" ||
        this.state.inputholder === "Picture" ||
        this.state.inputholder === "Recent" ||
        this.state.inputholder === "Dictionary" ? (
          <View style={styles.header}>
            <View style={styles.icon}>
              <Icon
                name="home"
                color="red"
                size={30}
                onPress={() => {
                  this.state.naviProps.navigate("Popular");
                }}
              />
            </View>
            <View style={styles.searchSection}>
              <Icon style={styles.searchIcon} name="search" size={20} />
              <TextInput
                style={styles.input}
                placeholder="검색"
                onChangeText={searchString => {
                  this.setState({ searchString });
                }}
              />
            </View>
            <View style={styles.setting}>
              <Icon name="settings" size={30} color="grey" />
            </View>
          </View>
        ) : null}

        <AppRootNavigator screenProps={this.handleChange} />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  header: {
    flex: 0.1,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center"
  },
  icon: {
    flex: 0.2,
    alignItems: "center",
    justifyContent: "center"
  },
  searchSection: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e5e5e5",
    borderRadius: 10,
    height: 30
  },
  searchIcon: {
    paddingLeft: 10,
    flex: 0.15,
    justifyContent: "center",
    alignItems: "center"
  },
  input: {
    flex: 1,
    backgroundColor: "transparent",
    color: "#424242"
  },
  setting: {
    flex: 0.2,
    alignItems: "center"
  }
});

export default AppContainer;
