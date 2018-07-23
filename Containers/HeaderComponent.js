
import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { Container, Header, Left, Body, Right, Button, Title } from 'native-base';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Drawer } from 'native-base';
import drawerButton from '../Navigation/AppNavigation'


export default class HeaderComponent extends Component {

  render() {
    return (
      <Header
            style={{ backgroundColor: '#e74c3c',paddingTop: 35,paddingBottom: 30,flex: 1,flexGrow: 1}}
            androidStatusBarColor="#fe851a">

            <Left style={{flex:1}}>
              <Button transparent
              onPress={this.props.onMenuPress}>
                <Icon name='menu' style={styles.iconStyle} />
              </Button>
            </Left>
            <Body style={{flex:1,alignItems: 'center'}}>
              <Title>Hey,Kesav</Title>
            </Body>
            <Right style={{flex:1}}>
              <Button transparent>
                <Icon name='add-alert' style={styles.iconStyle} />
              </Button>
            </Right>
      </Header>
    );
  }
}

const styles = StyleSheet.create({
  iconStyle: {
    color: '#fff',
    fontSize: 25,
    marginTop: 8
  },
});
