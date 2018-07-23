
import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { Container, Header, Left, Body, Right, Button, Title } from 'native-base';
import HeaderComponent from './HeaderComponent';
import MainPagePost from './MainPagePost';

export default class Home extends Component {


  render() {
    return (
      <View style={styles.container}>
        <MainPagePost />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {

  },
});
