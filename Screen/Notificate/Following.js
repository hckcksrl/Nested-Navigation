import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import PropTypes from "prop-types";
import { withNavigationFocus } from "react-navigation";

class Following extends Component {
  componentDidUpdate() {
    const { screenProps } = this.props;
    if (this.props.isFocused) {
      screenProps(this.props.navigation.state.key);
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>팔로잉</Text>
      </View>
    );
  }
}
Following.propTypes = {
  screenProps: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    fontSize: 30,
    color: "red"
  }
});

export default withNavigationFocus(Following);
