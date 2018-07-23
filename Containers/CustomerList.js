
import React, { Component } from 'react';
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  TouchableOpacity,

} from 'react-native';
import { Container, Header, Item, Input, Icon, List, ListItem, Left, Body, Right, Thumbnail,} from 'native-base';

const list = [
  {
    name: 'Amy Farha',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Vice President'
  },
  {
    name: 'Chris Jackson',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman'
  },
  {
    name: 'Amy Farha',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Vice President'
  },
  {
    name: 'Chris Jackson',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman'
  },

]

export default class CustomerList extends Component {
  render() {
    const { navigation } = this.props
    return (
      <View style={styles.container}>
        <View style={styles.headerAttachContainer}>
          <View style={styles.searchContainer}>
            <Item style={styles.searchBar}  >
                     <Icon name="ios-search" />
                     <Input placeholder="Search" />
                   </Item>

          </View>

        </View>
        <ScrollView>
          <View style={{justifyContent: 'center',width: '100%',alignItems: 'center',marginTop: 10}}>
            <List style={styles.listContainer}>

               <ListItem avatar style={styles.listItem} onPress={() => navigation.navigate('CustomerDetail')}>
                 <Left>
                   <Thumbnail source={require('../images/user.jpg')}  />
                 </Left>
                 <Body style={styles.listItemBody}>
                   <Text style={styles.customerName}>Keshav Raj</Text>
                 </Body>
               </ListItem>


               <ListItem avatar style={styles.listItem} onPress={() => navigation.navigate('CustomerDetail')}>
                 <Left>
                   <Thumbnail source={require('../images/logo.png')} />
                 </Left>
                 <Body style={styles.listItemBody}>
                   <Text style={styles.customerName}>Gowtham</Text>
                 </Body>
               </ListItem>


               <ListItem avatar style={styles.listItem} onPress={() => navigation.navigate('CustomerDetail')}>
                 <Left>
                   <Thumbnail source={require('../images/logo.png')} />
                 </Left>
                 <Body style={styles.listItemBody}>
                   <Text style={styles.customerName}>Ranjith</Text>
                 </Body>
               </ListItem>
               <ListItem avatar style={styles.listItem} onPress={() => navigation.navigate('CustomerDetail')}>
                 <Left>
                   <Thumbnail source={require('../images/user.jpg')}  />
                 </Left>
                 <Body style={styles.listItemBody}>
                   <Text style={styles.customerName}>Keshav Raj</Text>
                 </Body>
               </ListItem>


               <ListItem avatar style={styles.listItem} onPress={() => navigation.navigate('CustomerDetail')}>
                 <Left>
                   <Thumbnail source={require('../images/logo.png')} />
                 </Left>
                 <Body style={styles.listItemBody}>
                   <Text style={styles.customerName}>Gowtham</Text>
                 </Body>
               </ListItem>


               <ListItem avatar style={styles.listItem} onPress={() => navigation.navigate('CustomerDetail')}>
                 <Left>
                   <Thumbnail source={require('../images/logo.png')} />
                 </Left>
                 <Body style={styles.listItemBody}>
                   <Text style={styles.customerName}>Ranjith</Text>
                 </Body>
               </ListItem>
               <ListItem avatar style={styles.listItem} onPress={() => navigation.navigate('CustomerDetail')}>
                 <Left>
                   <Thumbnail source={require('../images/user.jpg')}  />
                 </Left>
                 <Body style={styles.listItemBody}>
                   <Text style={styles.customerName}>Keshav Raj</Text>
                 </Body>
               </ListItem>


               <ListItem avatar style={styles.listItem} onPress={() => navigation.navigate('CustomerDetail')}>
                 <Left>
                   <Thumbnail source={require('../images/logo.png')} />
                 </Left>
                 <Body style={styles.listItemBody}>
                   <Text style={styles.customerName}>Gowtham</Text>
                 </Body>
               </ListItem>


               <ListItem avatar style={styles.listItem} onPress={() => navigation.navigate('CustomerDetail')}>
                 <Left>
                   <Thumbnail source={require('../images/logo.png')} />
                 </Left>
                 <Body style={styles.listItemBody}>
                   <Text style={styles.customerName}>Ranjith</Text>
                 </Body>
               </ListItem>
               <ListItem avatar style={styles.listItem} onPress={() => navigation.navigate('CustomerDetail')}>
                 <Left>
                   <Thumbnail source={require('../images/user.jpg')}  />
                 </Left>
                 <Body style={styles.listItemBody}>
                   <Text style={styles.customerName}>Keshav Raj</Text>
                 </Body>
               </ListItem>


               <ListItem avatar style={styles.listItem} onPress={() => navigation.navigate('CustomerDetail')}>
                 <Left>
                   <Thumbnail source={require('../images/logo.png')} />
                 </Left>
                 <Body style={styles.listItemBody}>
                   <Text style={styles.customerName}>Gowtham</Text>
                 </Body>
               </ListItem>


               <ListItem avatar style={styles.listItem} onPress={() => navigation.navigate('CustomerDetail')}>
                 <Left>
                   <Thumbnail source={require('../images/logo.png')} />
                 </Left>
                 <Body style={styles.listItemBody}>
                   <Text style={styles.customerName}>Ranjith</Text>
                 </Body>
               </ListItem>

             </List>

          </View>

        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff'
  },
  headerAttachContainer:{
    backgroundColor: '#fe851a'
  },
  searchContainer:{
    margin: 10,
    padding: 5,
    justifyContent: 'center',
    },
  searchBar:{
    backgroundColor: 'white',
    padding: 5,
    height: 50,
    borderRadius: 5
  },
    listContainer:{
  backgroundColor: '#ffffff',
  borderWidth: 1,
  borderColor: '#e0e7ee',
  width: '90%',
  borderRadius: 5,
},
listItem:{
  padding: 5,
  margin: 5,
  borderBottomWidth: 1,
  borderBottomColor: 'rgba(44, 62, 80,0.6)',
},
listItemBody:{
  borderWidth: 0,
  borderColor: 'rgba(0,0,0,0)'
},
customerName:{
  fontSize:18,
  color:'#445870',
  lineHeight:18,
  fontWeight: 'bold'
}
});
