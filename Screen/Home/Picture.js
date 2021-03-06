import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import PropTypes from "prop-types";
import { withNavigationFocus } from "react-navigation";

class Picture extends Component {
  componentDidUpdate() {
    const { screenProps } = this.props;
    if (this.props.isFocused) {
      screenProps(this.props.navigation.state.key, this.props.navigation);
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>사진</Text>
      </View>
    );
  }
}

Picture.propTypes = {
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

export default withNavigationFocus(Picture);
