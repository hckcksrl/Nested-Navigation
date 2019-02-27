import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

class Popular extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>인기</Text>
      </View>
    );
  }
}

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

export default Popular;
