import { createStackNavigator, createAppContainer } from "react-navigation";
import Container from "../../Route/Login/SignIn";

const LogStack = createStackNavigator({
  Login: {
    screen: Container,
    navigationOptions: {
      header: null
    }
  }
});

const LogNavigation = createAppContainer(LogStack);

export default LogNavigation;
