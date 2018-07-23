
import React, { Component } from 'react';
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  Picker,
  Dimensions
} from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label ,Button } from 'native-base';
import RadioGroup from 'react-native-custom-radio-group';
import Radio, {RadioButton} from 'react-native-simple-radio-button';
import {ExistingCustomer} from './radioGroupList.js'
var radio_props = [
{label: '1', value: 1 },
{label: '2', value: 2 },
{label: '3', value: 3 },
{label: '4', value: 4 },
{label: '5', value: 5 },
];

export default class CustomerEntryForm extends Component {

state = {
     value: 0,
  };
  render() {
    return (

      <ScrollView style={styles.container}>
        <Form style={styles.formContainer}>
            <Item style={styles.inputBrd} floatingLabel>
              <Label style={styles.clrLabel}>Enter Your Name</Label>
              <Input />
            </Item>
            <Item style={styles.inputBrd} floatingLabel >
              <Label style={styles.clrLabel}>Enter Your Address</Label>
              <Input />
            </Item>
            <Item style={styles.inputBrd} floatingLabel>
              <Label style={styles.clrLabel}>Mobile Number</Label>
              <Input />
            </Item>
            <Item style={styles.inputBrd} floatingLabel >
              <Label style={styles.clrLabel}>Email id</Label>
              <Input />
            </Item>
            <Item  style={styles.inputBrd} floatingLabel >
              <Label style={styles.clrLabel}>Your Eb Number</Label>
              <Input />
            </Item>
            <Item >
              <View style={styles.pickerContainer}>
                <Picker style={[styles.picker]} >
                  <Picker.Item style={styles.clrLabel} label="Select" value="" />
                  <Picker.Item style={styles.clrLabel} label="Monthly Bill" value="Monthly-Bill" />
                  <Picker.Item style={styles.clrLabel} label="Bi-Monthly Bill" value="Bi-Monthly-Bill" />
                </Picker>
                <View style={styles.arrowWrapper}>
                  <Text style={styles.arrow}>&#9660;</Text>
                </View>
              </View>
            </Item>
            <Item  style={styles.inputBrd} floatingLabel >
              <Label style={styles.clrLabel}>Area Available In Sq.Ft</Label>
              <Input />
            </Item>
            <Item style={{borderBottomWidth: 0, borderBottomColor: '#ffffff'}}>
              <View style={styles.ExistingCustomerContainer}>
                <Text style={styles.selectText}> Is Existing Customer? </Text>
                <RadioGroup buttonContainerStyle= {{width: 100, padding: 10, margin: 10 ,borderColor: '#ffad97' }} buttonContainerActiveStyle={{backgroundColor: '#fe851a'}} radioGroupList={ExistingCustomer}/>
              </View>
            </Item>
            <Item style={{borderBottomWidth: 0, borderBottomColor: '#ffffff'}}>
              <View style={styles.CustomerRatingContainer}>
                <Text style={styles.radioText}> Rating Of Customer </Text>
                  <Radio
                    radio_props={radio_props}
                    initial={0}
                    formHorizontal={true}
                    buttonColor={'#ffad97'}
                      onPress={(value) => {this.setState({value:value})}}
                      labelStyle={{fontSize: 18, color: '#445870', marginRight: 20}}
                      animation={false}
                  />

              </View>
            </Item>
            <Item  style={styles.inputBrd} floatingLabel >
              <Label style={styles.clrLabel}>Competitor Company</Label>
              <Input />
            </Item>
            <Item  style={styles.inputBrd} floatingLabel >
              <Label style={styles.clrLabel}>Remarks</Label>
              <Input />
            </Item>


          </Form>
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
    backgroundColor: '#fff'
  },
  pickerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: '#ffad97',
    paddingVertical: 5,
    marginTop: 20,

    borderRadius: 5,
  },
  clrLabel:{
    color : '#445870',

  },
    inputBrd:{
      paddingTop: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#ffad97',
    },
    formContainer:{

      paddingHorizontal: 25,
    },
    picker: {
    width: '100%',
    height: 44,
    color: '#445870',
    borderWidth: 0,
  },

  arrowWrapper: {

    flex: 10,
    height: 40,
    marginLeft: -47,
    justifyContent: 'center',
      borderWidth: 0,
  },

  arrow: {
    textAlign: 'center',
    color: '#ffad97',
  },
  ExistingCustomerContainer:{
    marginTop: 15,
  },
  selectText:{
    fontSize: 18,
    color: '#445870',
    marginVertical: 10,
    opacity: 0.9
  },
  radioText:{
    fontSize: 18,
    color: '#445870',
    marginVertical: 20,
    opacity: 0.9
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
