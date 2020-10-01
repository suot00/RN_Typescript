import React from 'react';

import {createDrawerNavigator} from '@react-navigation/drawer';

import {ListCourseStackNavigator} from './StackNavigator';
import {SettingStackNavigator} from './StackNavigator';
import TabNavigator from './TabNavigator';
// import StackNavigator from './StackNavigator';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={TabNavigator} />
      <Drawer.Screen name="ListCourse" component={ListCourseStackNavigator} />
      <Drawer.Screen name="Setting" component={SettingStackNavigator} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
// import React from 'react';
// import {Text} from 'react-native';
// export default class DrawerNavigator extends React.Component {
//   render() {
//     return <Text>drawer</Text>;
//   }
// }
