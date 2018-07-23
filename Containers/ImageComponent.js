
import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
} from 'react-native';

export default class MyComponent extends Component {
  render() {
    return (
      <Image
        source={this.props.imgsrc}
        style={styles.imageStyle}
        />
    );
  }
}

const styles = StyleSheet.create({
  imageStyle: {
    width: '90%',
    height: 150,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center'
  },
});
