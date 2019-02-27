import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Shop = () => {
  <View style={styles.container}>
    <Text style={styles.text}>내 쇼핑</Text>
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

export default Shop;
