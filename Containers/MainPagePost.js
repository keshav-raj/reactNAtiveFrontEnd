
import React, { Component } from 'react';
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import { Card, ListItem, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialIcons';



export default class MainPagePost extends Component {

  render() {
    return (
      <ScrollView style={styles.container}>
      <Card
      elevation={5}
      style={styles.cardStyle}
        image={require('../images/solar1.jpg')}>
        <Text style={styles.cardText}>
      Solar Plant Will Save You Upto 50% Of Your Current Bill ?
        </Text>

        <TouchableOpacity style={styles.navBarLeftButton}>
           <Text style={[styles.buttonText,styles.themeColor]}>  Read Now</Text>
            <Icon name='play-arrow' style={[styles.iconStyle,styles.themeColor]} />
        </TouchableOpacity>
      </Card>
      <Card
      elevation={5}
        style={styles.cardStyle}
        image={require('../images/solar2.jpg')}>
        <Text style={styles.cardText}>
      Solar Plant Will Save You Upto 50% Of Your Current Bill ?
        </Text>

        <TouchableOpacity style={styles.navBarLeftButton}>
           <Text style={[styles.buttonText,styles.themeColor]}>  Read Now</Text>
            <Icon name='play-arrow' style={[styles.iconStyle,styles.themeColor]} />
        </TouchableOpacity>
      </Card>
      <Card
      elevation={5}
      style={styles.cardStyle}
        image={require('../images/solar1.jpg')}>
        <Text style={styles.cardText}>
      Solar Plant Will Save You Upto 50% Of Your Current Bill ?
        </Text>

        <TouchableOpacity style={styles.navBarLeftButton}>
           <Text style={[styles.buttonText,styles.themeColor]}>  Read Now</Text>
            <Icon name='play-arrow' style={[styles.iconStyle,styles.themeColor]} />
        </TouchableOpacity>
      </Card>
      <Card
      elevation={5}
        style={styles.cardStyle}
        image={require('../images/solar2.jpg')}>
        <Text style={styles.cardText}>
      Solar Plant Will Save You Upto 50% Of Your Current Bill ?
        </Text>

        <TouchableOpacity style={styles.navBarLeftButton}>
           <Text style={[styles.buttonText,styles.themeColor]}>  Read Now</Text>
            <Icon name='play-arrow' style={[styles.iconStyle,styles.themeColor]} />
        </TouchableOpacity>
      </Card>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  iconStyle: {
    fontSize: 18,
  },
  navBarLeftButton: {
  paddingLeft: 8,
  width: 100,
  flex: 1,
  flexDirection: 'row',
  flexGrow: 1,
  alignItems: 'center',
  justifyContent: 'flex-end',
  alignSelf: 'flex-end'
},
cardText:{
  marginBottom:10,
  color: '#4e4e4e',
  fontSize: 12,

},
themeColor:{
  color: '#fe851a',
},
container:{
  backgroundColor: '#fff',
},
cardStyle:{

  borderRadius: 10,
  shadowColor: '#000',
  shadowOffset: { width: 5, height: 10 },
  shadowOpacity: 1.0,
  shadowRadius: 5,
  backgroundColor: '#fff',
}
});
