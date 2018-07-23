import React, { Component } from 'react';

import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView
} from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label, Button } from 'native-base';

export default class SignUpComponent extends Component {
//   static navigationOptions = {
//     header: null
// }
  render() {
    return (
      <KeyboardAvoidingView  behavior="padding" style={styles.container}>
        <View style={styles.logoContainer}>
          <Image style={styles.logo}
            source={require('../images/logo.png')}
            />
        </View>
        <View style={styles.formContainer}>
          <Form style={styles.formContainerInput}>
         <Item style={styles.inputBrd} Inline
           Label>
           <Label style={{ color: "#445870" }}>Username</Label>
           <Input  />
         </Item>
         <Item  style={styles.inputBrd}  InlineLabel >
           <Label style={{ color: "#445870" }}>Password</Label>
           <Input secureTextEntry/>
         </Item>
       </Form>
       <View style={styles.btnContainer}>
         <Button style={styles.buttonLogin}>
           <Text style={styles.btnText}>Register </Text>
         </Button>
       </View>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
 flex:1
  },
  logoContainer:{
    flex: 1,
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',

  },
  logo:{

  },
  formContainer:{
    flex: 1,
    paddingHorizontal: 25,
  },

  inputBrd:{
    paddingTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ffad97',
  },
  btnContainer:{

    alignSelf: 'center',
    marginTop: 35,
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
  creatAccTextContainer:{
    marginTop: 10,
    paddingVertical: 10,
    alignSelf: 'center',

  },
  creatAccText:{
    color: '#fe851a',
    fontSize: 10,
    textAlign: 'center',
  }
});
