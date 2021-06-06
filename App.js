import React, { Component } from 'react';
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import ListScreen from './src/screens/ListScreen';
import NewScreen from './src/screens/NewScreen';
import ViewScreen from './src/screens/ViewScreen';
import LoginScreen from './src/screens/LoginScreen';
import SignupScreen from './src/screens/SignupScreen';
import HomeScreen from './src/screens/HomeScreen';
import EventScreen from './src/screens/EventScreen';
import AboutScreen from './src/screens/AboutScreen';
import AchievementScreen from './src/screens/AchievementScreen';


const RootStack = createStackNavigator(
  {
    Signup: SignupScreen,
    Login: LoginScreen,
    View: ViewScreen,
    New: NewScreen,
    List: ListScreen,
    Home: HomeScreen,
    Event: EventScreen,
    About: AboutScreen,
    Achievement: AchievementScreen,
  },
  {
    initialRouteName: 'Login'
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends Component {
  render() {
    return (
       <AppContainer />
    );
  }
}
