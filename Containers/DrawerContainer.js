import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {Container , Content ,List, ListItem, Left, Body, Right, Thumbnail} from 'native-base';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { NavigationActions } from 'react-navigation'

export default class DrawerContainer extends React.Component {

  logout = () => {
    // This will reset back to loginStack
    // https://github.com/react-community/react-navigation/issues/1127
    const actionToDispatch = NavigationActions.reset({
      index: 0,
      key: null,  // black magic
      actions: [NavigationActions.navigate({ routeName: 'loginStack' })]
    })
    this.props.navigation.dispatch(actionToDispatch)
  }

  render() {
    const { navigation } = this.props
    return (

          <Container style={styles.container}>
      <Content>
      <List style={styles.userProfile}>
          <ListItem avatar>
            <Left>
              <Thumbnail source={require('../images/user.jpg')} />
            </Left>
            <Body style={styles.userProfileBody}>
              <Text>Keshav Raj</Text>
              <Text style={styles.textColor} note>abc@gmail.com</Text>
            </Body>
          </ListItem>
        </List>
        <List >

            <ListItem icon style={styles.drawerList} onPress={() => navigation.navigate('CustomerEntry')}>
              <Left>
                <Icon name='person' style={[styles.iconStyle,styles.themeColor]} />
              </Left>
              <Body   style={styles.drawerListBody}>
                <Text

                     style={[styles.fns14,styles.textColor]}>Customer Entry</Text>
              </Body>
            </ListItem>

            <ListItem icon style={styles.drawerList} onPress={() => navigation.navigate('CustomerList')}>
              <Left>
                <Icon name='search' style={[styles.iconStyle,styles.themeColor]} />
              </Left>
              <Body   style={styles.drawerListBody}>
                <Text

                  style={[styles.fns14,styles.textColor]}>Search Customers</Text>
              </Body>
            </ListItem>

            <ListItem icon style={styles.drawerList}>
              <Left>
                <Icon name='loyalty' style={[styles.iconStyle,styles.themeColor]} />
              </Left>
              <Body   style={styles.drawerListBody}>
                <Text style={[styles.fns14,styles.textColor]}>Deals</Text>
              </Body>
            </ListItem>

            <ListItem icon style={styles.drawerList}>
              <Left>
                <Icon name='remove-red-eye' style={[styles.iconStyle,styles.themeColor]} />
              </Left>
              <Body   style={styles.drawerListBody}>
                <Text style={[styles.fns14,styles.textColor]}>Site Visit</Text>
              </Body>
            </ListItem>

            <ListItem icon style={styles.drawerList}  onPress={() => navigation.navigate('PhotoGallery')}>
              <Left>
                <Icon name='photo' style={[styles.iconStyle,styles.themeColor]} />
              </Left>
              <Body   style={styles.drawerListBody}>
                <Text style={[styles.fns14,styles.textColor]}>Project Photo</Text>
              </Body>
            </ListItem>

            <ListItem icon style={styles.drawerList}>
              <Left>
                <Icon name='timeline' style={[styles.iconStyle,styles.themeColor]} />
              </Left>
              <Body   style={styles.drawerListBody}>
                <Text style={[styles.fns14,styles.textColor]}>User Timeline</Text>
              </Body>
            </ListItem>

          </List>
          <View style={styles.container}>
            <Text
              onPress={() => navigation.navigate('screen1')}
              style={styles.uglyDrawerItem}>
              Screen 1
            </Text>
            <Text
              onPress={() => navigation.navigate('screen2')}
              style={styles.uglyDrawerItem}>
              Screen 2
            </Text>
            <Text
              onPress={() => navigation.navigate('screen3')}
              style={styles.uglyDrawerItem}>
              Screen 3
            </Text>
            <Text
              onPress={this.logout}
              style={styles.uglyDrawerItem}>
              Log Out
            </Text>
          </View>
      </Content>
    </Container>


    )
  }
}

const styles = StyleSheet.create({

  container: {
    paddingTop: 10,
    flex: 1,
    backgroundColor: '#ffffff',
  },
  userProfileBody:{
    borderBottomWidth: 0,
  },
  iconStyle: {
    fontSize: 25,
  },
themeColor:{
  color: '#fe851a',
},
drawerListBody:{
  borderBottomWidth: 0,
},
drawerList:{
  borderBottomWidth: 1,
  borderBottomColor: '#f2f2f2',
  paddingVertical: 5,
  paddingHorizontal: 5,
  margin: 5
},
textColor:{
  color:'#a8a8a8',
},
fns14:{
  fontSize: 14
},
uglyDrawerItem: {
  fontSize: 18,
  fontWeight: 'bold',
  color: '#E73536',
  padding: 15,
  margin: 5,
  borderRadius: 2,
  borderColor: '#E73536',
  borderWidth: 1,
  textAlign: 'center'
}
});
