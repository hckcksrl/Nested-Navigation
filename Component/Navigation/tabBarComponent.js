import React, { Component } from "react";
import { View, Text, Dimensions, StyleSheet, TextInput } from "react-native";
import PropTypes from "prop-types";
import TabBarHeader from "./tabBarHeader";
import Icon from "react-native-vector-icons/MaterialIcons";

class TabBarComponent extends Component {
  render() {
    const { key } = this.props.navigation.state;
    if (key === "Home") {
      return (
        <View style={styles.container}>
          <View style={styles.header}>
            <View style={styles.icon}>
              <Icon name="home" color="red" size={30} />
            </View>
            <View style={styles.section}>
              <Icon style={styles.textIcon} name="search" size={20} />
              <TextInput style={styles.textinput} placeholder="검색" />
            </View>
            <View style={styles.setting}>
              <Icon name="settings" size={30} color="grey" />
            </View>
          </View>
          <TabBarHeader {...this.props} />
        </View>
      );
    } else {
      return <TabBarComponent {...this.props} />;
    }
  }
}

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get("window").height / 7,
    justifyContent: "space-between"
  },
  header: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row"
  },
  section: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e5e5e5",
    borderRadius: 10,
    height: 30
  },
  icon: {
    flex: 0.2,
    alignItems: "center",
    justifyContent: "center"
  },
  textIcon: {
    paddingLeft: 10,
    flex: 0.15,
    justifyContent: "center",
    alignItems: "center"
  },
  textinput: {
    flex: 1,
    backgroundColor: "transparent",
    color: "#424242"
  },
  setting: {
    flex: 0.2,
    alignItems: "center"
  }
});

export default TabBarComponent;
