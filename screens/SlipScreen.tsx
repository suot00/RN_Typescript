import React from 'react';
import {Image, StyleSheet, View, TouchableOpacity, Text} from 'react-native';
import CardFlip from 'react-native-card-flip';

const SlipScreen = () => {
  var urlDomain = 'http://pibokid.com/asset/iow/birds/';
  var urlWordImgArr = [
    '1_nest.jpg',
    '10_eagle.jpg',
    '12_humingbird.jpg',
    '20_pelican.jpg',
  ];
  var Rdom = urlWordImgArr[Math.floor(Math.random() * urlWordImgArr.length)];
  return (
    <View style={styles.container}>
      <CardFlip style={styles.cardContainer} ref={card => (this.card = card)}>
        <TouchableOpacity
          activeOpacity={1}
          style={[styles.card]}
          onPress={() => this.card.flip()}>
          <Image
            source={{
              uri: urlDomain + Rdom,
              cache: 'only-if-cached',
            }}
            style={{width: 420, height: 470}}
          />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={1}
          style={[styles.card, styles.card2]}
          onPress={() => this.card.flip()}>
          <Text style={styles.label}>Bull Dog</Text>
        </TouchableOpacity>
      </CardFlip>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  cardContainer: {
    width: 420,
    height: 470,
  },
  card: {
    width: 420,
    height: 470,
    backgroundColor: '#FE474C',
    borderRadius: 5,
    shadowColor: 'rgba(0,0,0,0.5)',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.5,
  },
  card2: {
    backgroundColor: 'red',
  },
  label: {
    lineHeight: 470,
    textAlign: 'center',
    fontSize: 55,
    fontFamily: 'System',
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
});

export default SlipScreen;
