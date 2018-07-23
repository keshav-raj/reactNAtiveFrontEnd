
import React, { Component } from 'react';
import {
  View,
  ScrollView,
  Text,
  Image,
  StyleSheet,

} from 'react-native';
import RadioGroup from 'react-native-custom-radio-group';
import { Container, Header, Content, Form, Item, Input, Label ,Button } from 'native-base';
import {CustomerDrop, ConvertDeals} from './radioGroupList.js'

export default class CustomerDetail extends Component {

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.headerAttachContainer}>
          <View style={styles.baseContainer}>
            <Image  source={require('../images/user.jpg')}
             style={styles.userImage}/>
           <View style={styles.infoContainer}>
             <Text style={styles.textStyleHead}>
               Keshav Raj
             </Text>
             <Text style={styles.textStyleHead}>
              +91 8056037995
             </Text>
             <Text style={styles.textStyleHead}>
               Cust id : 15678
             </Text>
           </View>

          </View>

        </View>
        <View style={styles.contentContainer}>
          <Form style={styles.formContainer}>
          <Item style={{borderBottomWidth: 0, borderBottomColor: '#ffffff'}}>
            <View style={styles.ExistingCustomerContainer}>
              <Text style={styles.selectText}> Convert To Deals ? </Text>
              <RadioGroup buttonContainerStyle= {{width: 100, padding: 10, margin: 10 ,borderColor: '#ffad97' }} buttonContainerActiveStyle={{backgroundColor: '#fe851a'}} radioGroupList={ConvertDeals}/>
            </View>
          </Item>
          <Item style={{borderBottomWidth: 0, borderBottomColor: '#ffffff'}}>
            <View style={styles.ExistingCustomerContainer}>
              <Text style={styles.selectText}> Customer Dropped ? </Text>
              <RadioGroup buttonContainerStyle= {{width: 100, padding: 10, margin: 10 ,borderColor: '#ffad97' }} buttonContainerActiveStyle={{backgroundColor: '#fe851a'}} radioGroupList={CustomerDrop}/>
            </View>
          </Item>
          <Item style={styles.inputBrd} floatingLabel>
            <Label style={styles.clrLabel}>Reason For Drop</Label>
            <Input />
          </Item>
        </Form>
        </View>
        <View style={styles.btnContainer}>
          <Button style={styles.buttonLogin} >
            <Text style={styles.btnText}>Submit </Text>
          </Button>
        </View>

      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff'
  },
  headerAttachContainer:{
    backgroundColor: '#fe851a',

  },
  baseContainer:{
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  userImage:{
    width: 100,
    height: 100,
    borderRadius: 100/2
  },
  textStyleHead:{
    color: '#ffffff',
    fontSize: 20,
    textAlign: 'center',
  },
 infoContainer:{
   marginVertical: 15
 },
 ExistingCustomerContainer:{
   marginTop: 15,
 },
 selectText:{
   fontSize: 18,
   color: '#445870',
   marginVertical: 10,
   fontWeight: 'bold',
 },

 contentContainer:{

   paddingHorizontal: 15,
 },
 clrLabel:{
   color : '#445870',

 },
 inputBrd:{
   paddingTop: 10,
   marginLeft: 30,
   borderBottomWidth: 1,
   borderBottomColor: '#ffad97',
 },
 btnContainer:{

   alignSelf: 'center',
   marginTop: 35,
   marginBottom: 50,
 },
 buttonLogin:{
   backgroundColor: '#fe851a',
   paddingVertical: 8,
   paddingHorizontal: 40,
   borderRadius: 5,
 },
 btnText:{
   color: '#fff',
   fontSize: 20
 },

});
