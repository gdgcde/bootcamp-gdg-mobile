import { createStackNavigator, createAppContainer } from "react-navigation";
import LoginScreen from "./src/pages/Login";
import HomeScreen from "./src/pages/Home";

const MainNavigator = createStackNavigator({
  Login: { screen: LoginScreen },
  Home: { screen: HomeScreen }
});

const App = createAppContainer(MainNavigator);

export default App;
