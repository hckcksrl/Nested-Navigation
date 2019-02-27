import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Picture = () => {
  <View style={styles.container}>
    <Text style={styles.text}>사진</Text>
  </View>;
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

export default Picture;
