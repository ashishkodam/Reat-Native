import { createStackNavigator } from "react-navigation-stack";

import Home from "../screens/home";
import ReviewDetails from "../screens/reviewDetails";
import { createAppContainer } from "react-navigation";

const screens = {
  Home: { screen: Home },
  ReviewDetails: { screen: ReviewDetails },
};
const homeStack = createStackNavigator(screens);

export default createAppContainer(homeStack);
