import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Dimensions
} from "react-native";
import PropTypes from "prop-types";
import { withNavigationFocus } from "react-navigation";

const images = [
  { key: 0, url: require("../../assets/1.jpg") },
  { key: 1, url: require("../../assets/2.jpg") },
  { key: 2, url: require("../../assets/3.jpg") },
  { key: 3, url: require("../../assets/4.jpg") }
];

class Popular extends Component {
  componentDidUpdate() {
    console.log(Dimensions.get("ç").width);
    console.log(Dimensions.get("screen").height);
    const { screenProps } = this.props;
    if (this.props.isFocused) {
      screenProps(this.props.navigation.state.key, this.props.navigation);
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView on>
          {images.map((image, key) => {
            return (
              <View
                style={{ flex: 1, width: Dimensions.get("window").width - 50 }}
                key={key}
              >
                <Image source={image.url} />
              </View>
            );
          })}
        </ScrollView>
      </View>
    );
  }
}

Popular.propTypes = {
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

export default withNavigationFocus(Popular);
