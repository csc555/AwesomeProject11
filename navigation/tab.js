import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AboutScreen from '../Screens/AboutScreen';
import HomeScreen from '../Screens/HomeScreen';
import ListScreen from '../Screens/ListScreen';
import Icon from 'react-native-vector-icons/FontAwesome';

const Tab = createBottomTabNavigator();

export const BottomTab = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Nosotros"
        component={AboutScreen}
        options={{
          tabBarIcon: ({size, color}) => (
            <Icon name={'heart'} color={'blue'} size={25} />
          ),
        }}
      />
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({size, color}) => (
            <Icon name={'home'} color={'blue'} size={30} />
          ),
        }}
      />
      <Tab.Screen
        name="List"
        component={ListScreen}
        options={{
          tabBarIcon: ({size, color}) => (
            <Icon name={'search'} color={'blue'} size={25} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
