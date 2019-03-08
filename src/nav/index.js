import { createStackNavigator, createAppContainer } from "react-navigation";
import LoginScreen from "../pages/Login";
import HomeScreen from "../pages/Home";

const MainNavigator = createStackNavigator({
  Login: { screen: LoginScreen },
  Home: { screen: HomeScreen }
});

const AppNavigator = createAppContainer(MainNavigator);

export default AppNavigator;
