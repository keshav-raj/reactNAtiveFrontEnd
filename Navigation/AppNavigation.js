import React from 'react'

import { Text, Animated, Easing, StyleSheet, } from 'react-native'
import { StackNavigator, DrawerNavigator } from 'react-navigation'
import LoginScreen from '../Containers/LoginScreen'
import SignupScreen from '../Containers/SignupScreen'
import ForgottenPasswordScreen from '../Containers/ForgottenPasswordScreen'
import Screen1 from '../Containers/Screen1'
import Home from '../Containers/Home'
import Screen2 from '../Containers/Screen2'
import Screen3 from '../Containers/Screen3'
import DrawerContainer from '../Containers/DrawerContainer'
import CustomerEntry from '../Containers/CustomerEntry';
import CustomerList from '../Containers/CustomerList';
import CustomerDetail from '../Containers/CustomerDetail';
import CustomerEntryForm from '../Containers/CustomerEntryForm';
import PhotoGallery from '../Containers/PhotoGallery';


import Icon from 'react-native-vector-icons/MaterialIcons';

// https://github.com/react-community/react-navigation/issues/1254
const noTransitionConfig = () => ({
  transitionSpec: {
    duration: 0,
    timing: Animated.timing,
    easing: Easing.step0
  }
})

// drawer stack
const DrawerStack = DrawerNavigator({
  Home: { screen: Home , navigationOptions: { title: 'HEY, kESHAV' } },
  CustomerEntry: { screen: CustomerEntry, navigationOptions: { title: 'Customer Entry' } },
  CustomerEntryForm: { screen: CustomerEntryForm, navigationOptions: { title: 'Customer Entry' } },
  PhotoGallery: { screen: PhotoGallery, navigationOptions: { title: 'Project Photos' } },
  CustomerList: { screen: CustomerList },
  CustomerDetail: { screen: CustomerDetail },
  screen1: { screen: Screen1 },
  screen2: { screen: Screen2 },
  screen3: { screen: Screen3 },
}, {
  gesturesEnabled: false,
  contentComponent: DrawerContainer
})

 const drawerButton = (navigation) =>
  <Text
    style={{padding: 15, color: 'white'}}
    onPress={() => {
      // Coming soon: navigation.navigate('DrawerToggle')
      // https://github.com/react-community/react-navigation/pull/2492
      if (navigation.state.index === 0) {
        navigation.navigate('DrawerOpen')
      } else {
        navigation.navigate('DrawerClose')
      }
    }
  }><Icon name='menu' style={styles.iconStyle} /></Text>

 const notifyIcon = () =>
  <Text
    style={{padding: 15, color: 'white'}}
  ><Icon name='add-alert' style={styles.iconStyle} /></Text>


const DrawerNavigation = StackNavigator({
  DrawerStack: { screen: DrawerStack }
}, {
  headerMode: 'float',
  navigationOptions: ({navigation}) => ({
    headerStyle: {backgroundColor: '#fe851a',elevation:0},
    headerTitleStyle : {alignSelf: 'center'},
    headerTintColor: 'white',
    gesturesEnabled: false,
    headerLeft: drawerButton(navigation),
    headerRight: notifyIcon(),
  })
})

// login stack
const LoginStack = StackNavigator({
  loginScreen: { screen: LoginScreen },
  signupScreen: { screen: SignupScreen },
  forgottenPasswordScreen: { screen: ForgottenPasswordScreen, navigationOptions: { title: 'Forgot Password' } }
}, {
  headerMode: 'float',
  navigationOptions: {
    headerStyle: {backgroundColor: 'rgba(0,0,0,0)'},

    headerTintColor: '#fe851a'
  }
})

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  loginStack: { screen: LoginStack },
  drawerStack: { screen: DrawerNavigation }
}, {
  // Default config for all screens
  headerMode: 'none',
  title: 'Main',
  initialRouteName: 'loginStack',
  transitionConfig: noTransitionConfig
})

const styles = StyleSheet.create({
  iconStyle: {
    color: '#fff',
    fontSize: 25,
    marginTop: 8,


  },
});

export default PrimaryNav
