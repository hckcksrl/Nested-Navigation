import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "react-native-elements";
import PropTypes from "prop-types";
import { withNavigationFocus } from "react-navigation";
import { onSignOut } from "../../Component/App/auth";

class Profile extends Component {
  componentDidUpdate() {
    const { screenProps } = this.props;
    if (this.props.isFocused) {
      screenProps(this.props.navigation.state.key);
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Button
          backgroundColor="#03A9F4"
          title="SIGN OUT"
          onPress={() =>
            onSignOut().then(() => this.props.navigation.navigate("SignedOut"))
          }
        />
      </View>
    );
  }
}
Profile.propTypes = {
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

export default withNavigationFocus(Profile);
