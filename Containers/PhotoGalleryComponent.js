import React, { Component } from 'react';
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  Dimensions
} from 'react-native';
import ImageComponent from './ImageComponent';

export default class PhotoGalleryComponent extends Component {
  render() {
    return (
      <ScrollView>
   <View style={styles.container}>
     <View style={styles.imgContainer}>
       <ImageComponent imgsrc={require('../images/solar1.jpg')} />
     </View>
     <View style={styles.imgContainer}>
       <ImageComponent imgsrc={require('../images/solar2.jpg')} />
     </View>
     <View style={styles.imgContainer}>
       <ImageComponent imgsrc={require('../images/solar3.jpg')} />
     </View>
     <View style={styles.imgContainer}>
       <ImageComponent imgsrc={require('../images/solar4.jpg')} />
     </View>
     <View style={styles.imgContainer}>
       <ImageComponent imgsrc={require('../images/solar8.jpg')} />
     </View>
     <View style={styles.imgContainer}>
       <ImageComponent imgsrc={require('../images/solar6.jpg')} />
     </View>
     <View style={styles.imgContainer}>
       <ImageComponent imgsrc={require('../images/solar7.jpg')} />
     </View>
     <View style={styles.imgContainer}>
       <ImageComponent imgsrc={require('../images/solar8.jpg')} />
     </View>
     <View style={styles.imgContainer}>
       <ImageComponent imgsrc={require('../images/solar1.jpg')} />
     </View>
     <View style={styles.imgContainer}>
       <ImageComponent imgsrc={require('../images/solar2.jpg')} />
     </View>
     <View style={styles.imgContainer}>
       <ImageComponent imgsrc={require('../images/solar3.jpg')} />
     </View>
     <View style={styles.imgContainer}>
       <ImageComponent imgsrc={require('../images/solar4.jpg')} />
     </View>
     <View style={styles.imgContainer}>
       <ImageComponent imgsrc={require('../images/solar1.jpg')} />
     </View>
     <View style={styles.imgContainer}>
       <ImageComponent imgsrc={require('../images/solar2.jpg')} />
     </View>
     <View style={styles.imgContainer}>
       <ImageComponent imgsrc={require('../images/solar3.jpg')} />
     </View>
     <View style={styles.imgContainer}>
       <ImageComponent imgsrc={require('../images/solar4.jpg')} />
     </View>
     <View style={styles.imgContainer}>
       <ImageComponent imgsrc={require('../images/solar8.jpg')} />
     </View>
     <View style={styles.imgContainer}>
       <ImageComponent imgsrc={require('../images/solar6.jpg')} />
     </View>
     <View style={styles.imgContainer}>
       <ImageComponent imgsrc={require('../images/solar7.jpg')} />
     </View>
     <View style={styles.imgContainer}>
       <ImageComponent imgsrc={require('../images/solar8.jpg')} />
     </View>
     <View style={styles.imgContainer}>
       <ImageComponent imgsrc={require('../images/solar1.jpg')} />
     </View>
     <View style={styles.imgContainer}>
       <ImageComponent imgsrc={require('../images/solar2.jpg')} />
     </View>
     <View style={styles.imgContainer}>
       <ImageComponent imgsrc={require('../images/solar3.jpg')} />
     </View>
     <View style={styles.imgContainer}>
       <ImageComponent imgsrc={require('../images/solar4.jpg')} />
     </View>

   </View>
 </ScrollView>
    );
  }
}


const styles = StyleSheet.create({
  container: {
     flex: 1,
     flexDirection: 'row',
     flexWrap: 'wrap',
     backgroundColor: '#ffffff'
   },
   imgContainer:{
     margin: 5,
     width: (Dimensions.get('window').width/2)-10,
     height: 150,

   },
});
