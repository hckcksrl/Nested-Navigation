import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Notifi = () => {
  <View style={styles.container}>
    <Text style={styles.text}>알림</Text>
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

export default Notifi;
