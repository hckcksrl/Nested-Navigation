import React, { Component } from "react";
import { View, Text, StyleSheet, CameraRoll } from "react-native";
import PropTypes from "prop-types";
import { withNavigationFocus } from "react-navigation";
import { LibraryImage } from "./LibraryImage";
import { Permissions } from "expo";

class Library extends Component {
  constructor() {
    super();
    this.state = {
      images: null,
      pickphotos: null,
      loading: true
    };
  }
  componentDidUpdate() {
    const { screenProps } = this.props;
    if (this.props.isFocused) {
      screenProps(this.props.navigation.state.key);
    }
  }

  componentDidMount = async () => {
    const { groupTypes } = this.props;
    const { edges } = await CameraRoll.getPhotos({
      first: 100,
      groupTypes: groupTypes,
      assetType: "Photos"
    });
    this.setState({
      images: edges,
      pickphotos: edges[0],
      loading: false
    });
  };

  async componentWillMount() {
    const permission = await Permissions.getAsync(Permissions.CAMERA_ROLL);
    if (permission.status !== "granted") {
      if (permission.status === "denied") {
        return false;
      } else {
        const newPermission = await Permissions.askAsync(
          Permissions.CAMERA_ROLL
        );
        if (newPermission.status === "granted") {
          return true;
        }
      }
    }
  }

  render() {
    if (this.state.loading === false) {
      return <LibraryImage {...this.state} />;
    } else {
      return (
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <Text>Loading</Text>
        </View>
      );
    }
  }
}

Library.propTypes = {
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

export default withNavigationFocus(Library);
