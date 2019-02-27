import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  TextInput,
  Text,
  SafeAreaView
} from "react-native";
import {
  createAppContainer,
  createMaterialTopTabNavigator
} from "react-navigation";
import Icon from "react-native-vector-icons/MaterialIcons";
import Popular from "../../Screen/Home/Popular";
import Picture from "../../Screen/Home/Picture";
import Recent from "../../Screen/Home/Recent";
import Dictionary from "../../Screen/Home/Dictionary";

const topTabNavigator = createMaterialTopTabNavigator(
  {
    Popular: {
      screen: Popular,
      navigationOptions: {
        tabBarLabel: ({ tintColor }) => (
          <Text style={{ color: tintColor }}>인기</Text>
        )
      }
    },
    Picture: {
      screen: Picture,
      navigationOptions: {
        tabBarLabel: ({ tintColor }) => (
          <Text style={{ color: tintColor }}>사진</Text>
        )
      }
    },
    Recent: {
      screen: Recent,
      navigationOptions: {
        tabBarLabel: ({ tintColor }) => (
          <Text style={{ color: tintColor }}>최신</Text>
        )
      }
    },
    Dictionary: {
      screen: Dictionary,
      navigationOptions: {
        tabBarLabel: ({ tintColor }) => (
          <Text style={{ color: tintColor }}>도감</Text>
        )
      }
    }
  },
  {
    order: [Popular, Picture, Dictionary, Recent],
    swipeEnabled: true,
    animationEnabled: false,
    tabBarOptions: {
      tabStyle: {
        width: Dimensions.get("window").width / 2,
        height: Dimensions.get("window").height / 11,
        justifyContent: "center",
        alignItems: "center"
      },
      labelStyle: {
        fontSize: 15
      },
      activeTintColor: "red",
      inactiveTintColor: "black",
      style: {
        backgroundColor: "white"
      },
      indicatorStyle: { height: 0 },
      upperCaseLabel: false,
      scrollEnabled: true
    }
  }
);

const TopNavigation = createAppContainer(topTabNavigator);

class Home extends Component {
  constructor() {
    super();
    this.state = {
      inputholder: "text input"
    };
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.container}>
          <View style={styles.header}>
            <View style={styles.icon}>
              <Icon name="home" color="red" size={30} />
            </View>
            <View style={styles.text_input}>
              <TextInput
                placeholder={this.state.inputholder}
                style={{
                  borderRadius: 10,
                  backgroundColor: "#f2f2f2",
                  height: 10,
                  padding: 20
                }}
              />
            </View>
          </View>
          <View style={styles.center}>
            <TopNavigation />
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    borderBottomWidth: 2,
    flex: 0.1,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center"
  },
  icon: {
    flex: 0.2,
    alignItems: "center"
  },
  text_input: {
    flex: 1
  },
  center: {
    flex: 1
  }
});

export default Home;
