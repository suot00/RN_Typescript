import React from 'react';
import {Dimensions, Image, StyleSheet, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

const {width, height} = Dimensions.get('window');

export const assets = [
  require('../assets/3.jpg'),
  require('../assets/2.jpg'),
  require('../assets/4.jpg'),
  require('../assets/5.jpg'),
  require('../assets/1.jpg'),
];

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'black',
  },
  pictures: {
    width: width * assets.length,
    height,
    flexDirection: 'row',
  },
  picture: {
    width,
    height,
    overflow: 'hidden',
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    width: undefined,
    height: undefined,
  },
});

const SwiperScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView snapToInterval={width} decelerationRate="fast" horizontal>
        {assets.map(source => (
          <View key={source} style={styles.picture}>
            <Image style={styles.image} {...{source}} />
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default SwiperScreen;
