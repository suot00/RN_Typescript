import React from 'react';
import {
  TouchableOpacity,
  StatusBar,
  FlatList,
  View,
  StyleSheet,
  Text,
  Button,
  Image,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
function Item({item}) {
  const navigation = useNavigation();
  return (
    <View style={styles.listItem}>
      <Image source={{uri: item.photo}} style={styles.img} />
      <View style={styles.itemct}>
        <Text style={styles.TextName}>{item.name}</Text>
        <Text>{item.position}</Text>
      </View>

      <TouchableOpacity style={styles.btnlearn}>
        {/* <Text>{item.name}</Text> */}
        {/* <Button onPress={() => Alert.alert(item.id.toString())} title="Learn" /> */}
        <Button
          onPress={() => navigation.navigate('DetailCourse', {item: item})}
          title="Learn"
        />
        {/* <GoToButton screenName="DetailCourse" /> */}
      </TouchableOpacity>
    </View>
  );
}
const ListCourseScreen = () => {
  const state = {
    data: [
      {
        id: 1,
        name: 'Chủ đề',
        email: 'miyah.myles@gmail.com',
        position: 'Animals',
        photo:
          'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=707b9c33066bf8808c934c8ab394dff6',
      },
      {
        id: 2,
        name: 'June Cha',
        email: 'june.cha@gmail.com',
        position: 'Fruits',
        photo: 'https://randomuser.me/api/portraits/women/44.jpg',
      },
      {
        id: 3,
        name: 'Iida Niskanen',
        email: 'iida.niskanen@gmail.com',
        position: 'Sea_Animals',
        photo: 'https://randomuser.me/api/portraits/women/68.jpg',
      },
      {
        id: 4,
        name: 'Renee Sims',
        email: 'renee.sims@gmail.com',
        position: 'Pet',
        photo: 'https://randomuser.me/api/portraits/women/65.jpg',
      },
      {
        id: 5,
        name: 'Jonathan Nu\u00f1ez',
        email: 'jonathan.nu\u00f1ez@gmail.com',
        position: 'Clerical',
        photo: 'https://randomuser.me/api/portraits/men/43.jpg',
      },
      {
        id: 6,
        name: 'Sasha Ho',
        email: 'sasha.ho@gmail.com',
        position: 'Administrative Assistant',
        photo:
          'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?h=350&auto=compress&cs=tinysrgb',
      },
      {
        id: 7,
        name: 'Abdullah Hadley',
        email: 'abdullah.hadley@gmail.com',
        position: 'Marketing',
        photo:
          'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=a72ca28288878f8404a795f39642a46f',
      },
      {
        id: 8,
        name: 'Thomas Stock',
        email: 'thomas.stock@gmail.com',
        position: 'Product Designer',
        photo: 'https://randomuser.me/api/portraits/women/68.jpg',
      },
      {
        id: 9,
        name: 'Veeti Seppanen',
        email: 'veeti.seppanen@gmail.com',
        position: 'Product Designer',
        photo: 'https://randomuser.me/api/portraits/men/97.jpg',
      },
      {
        id: 10,
        name: 'Bonnie Riley',
        email: 'bonnie.riley@gmail.com',
        position: 'Marketing',
        photo: 'https://randomuser.me/api/portraits/women/26.jpg',
      },
    ],
  };

  return (
    <View style={styles.container}>
      <FlatList
        style={{flex: 1}}
        data={state.data}
        renderItem={({item}) => <Item item={item} />}
        keyExtractor={item => item.email}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  listItem: {
    margin: 10,
    padding: 10,
    backgroundColor: '#FFF',
    width: '95%',
    flex: 1,
    alignSelf: 'center',
    flexDirection: 'row',
    borderRadius: 5,
  },
  btnlearn: {
    height: 50,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {width: 60, height: 60, borderRadius: 30},
  TextName: {fontWeight: 'bold', fontSize: 20, marginBottom: 5},
  itemct: {alignItems: 'center', flex: 1},
});
export default ListCourseScreen;
