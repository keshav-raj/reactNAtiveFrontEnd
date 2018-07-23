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

export default class CustomerEntry extends Component {
  render() {
      const { navigation } = this.props
    return (

      <View style={styles.container}>
        <View style={styles.wrapper}>
          <View style={styles.textContainer}>
              <Text style={styles.radioText}> Select Type </Text>
          </View>
          <Item style={{marginTop: -25}} >

            <View style={styles.pickerContainer}>

              <Picker style={[styles.picker]} >
                <Picker.Item style={styles.clrLabel} label="Select" value="" />
                <Picker.Item style={styles.clrLabel} label="Individual" value="Individual" />
                <Picker.Item style={styles.clrLabel} label="Industry" value="Industry" />
                <Picker.Item style={styles.clrLabel} label="Government" value="Government" />
              </Picker>
              <View style={styles.arrowWrapper}>
                <Text style={styles.arrow}>&#9660;</Text>
              </View>
            </View>
          </Item>
        </View>
        <View style={styles.btnContainer}  >
          <Button style={styles.buttonLogin} onPress={() => navigation.navigate('CustomerEntryForm')} >
            <Text style={styles.btnText}>Proceed </Text>
          </Button>
        </View>

      </View>
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

  radioText:{
    fontSize: 18,
    color: '#445870',
    marginVertical: 20,
    fontWeight: 'bold'
  },
  btnContainer:{

    alignSelf: 'center',
    marginTop: 35,
    marginBottom: 50,

  },
  buttonLogin:{
    backgroundColor: '#fe851a',
    paddingVertical: 8,
    paddingHorizontal: 60,
    borderRadius: 5,

  },
  btnText:{
    color: '#fff',
    fontSize: 20
  },
  wrapper:{
    paddingHorizontal: 30,

  },

});
