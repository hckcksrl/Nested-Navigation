import React, { Component } from "react";
import {
  ScrollView,
  View,
  Text,
  Dimensions,
  StyleSheet,
  TouchableWithoutFeedback
} from "react-native";

class TabBarHeader extends Component {
  render() {
    const { routes, index } = this.props.navigation.state;
    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.scrollContainer}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.contentContainer}
        >
          {routes.map((route, key) => {
            const color =
              index === key ? styles.activeTintColor : styles.inactiveTintColor;
            const indicateColor =
              index === key
                ? styles.activeindicateColor
                : styles.inactiveindicateColor;

            return (
              <View style={styles.tabView} key={key}>
                <TouchableWithoutFeedback
                  onPress={() =>
                    this.props.navigation.navigate(`${route.routeName}`)
                  }
                >
                  <View
                    style={{
                      flex: 1,
                      justifyContent: "center",
                      alignItems: "center",
                      paddingHorizontal: 10
                    }}
                  >
                    <Text style={color}>{route.routeName}</Text>
                  </View>
                </TouchableWithoutFeedback>
                <View
                  style={{
                    flex: 0.1,
                    flexDirection: "row"
                  }}
                >
                  <View style={indicateColor} />
                </View>
              </View>
            );
          })}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: Dimensions.get("window").height / 14,
    borderBottomWidth: 1,
    justifyContent: "space-between",
    borderBottomColor: "#efefef"
  },
  scrollContainer: {
    flex: 1,
    flexDirection: "row"
  },
  contentContainer: {
    flex: 1,
    justifyContent: "space-evenly"
  },
  tabView: {
    alignItems: "center",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column"
  },
  activeTintColor: {
    color: "red"
  },
  inactiveTintColor: {
    color: "black"
  },
  activeindicateColor: {
    flex: 1,
    backgroundColor: "red",
    paddingHorizontal: 5
  },
  inactiveindicateColor: {
    flex: 1,
    paddingHorizontal: 5
  }
});

export default TabBarHeader;
