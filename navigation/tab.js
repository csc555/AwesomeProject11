import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AboutScreen from '../Screens/AboutScreen';
import HomeScreen from '../Screens/HomeScreen';
import ListScreen from '../Screens/ListScreen';

const Tab = createBottomTabNavigator();

export const BottomTab = ()=> {
    return(
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="About" component={AboutScreen} />
            <Tab.Screen name="List" component={ListScreen} />
        </Tab.Navigator>
    );

}
