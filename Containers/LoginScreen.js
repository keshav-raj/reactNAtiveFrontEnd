import React from 'react'
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView
} from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label, Button } from 'native-base';

export default class LoginScreen extends React.Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.logoContainer}>
          <Image style={styles.logo}
            source={require('../images/logo.png')}
            />
        </View>
        <View style={styles.formContainer}>
          <Form style={styles.formContainerInput}>
         <Item style={styles.inputBrd} floatingLabel>
           <Label style={{ color: "#445870" }}>Username</Label>
           <Input  />
         </Item>
         <Item  style={styles.inputBrd}  floatingLabel >
           <Label style={{ color: "#445870" }}>Password</Label>
           <Input secureTextEntry/>
         </Item>
       </Form>
       <View style={styles.btnContainer}>
         <Button style={styles.buttonLogin}
            onPress={() => this.props.navigation.navigate('drawerStack')}
          >
           <Text style={styles.btnText}>Log In </Text>
         </Button>
       </View>
       <TouchableOpacity style={styles.creatAccTextContainer}>
         <Text style={styles.creatAccText}
            onPress={() => this.props.navigation.navigate('signupScreen')}>Not an existing customer ?</Text>
       </TouchableOpacity>
       <TouchableOpacity style={styles.creatAccTextContainer}>
         <Text style={styles.creatAccText}
          onPress={() => this.props.navigation.navigate('forgottenPasswordScreen')}>Forgot Password</Text>
       </TouchableOpacity>
        </View>

    </ScrollView>

    )
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
