import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';
import PhotoGalleryComponent from './PhotoGalleryComponent';


export default class PhotoGallery extends Component {

  render() {
    return (
      <View style={{flex:1, backgroundColor: '#f3f3f3'}}>
        <PhotoGalleryComponent />
          <ActionButton
      buttonColor="#fe851a"
      size={65}
    buttonTextStyle={{fontSize:35,fontWeight:'bold'}}
    />
      </View>
    );
  }

}

const styles = StyleSheet.create({
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },
});
