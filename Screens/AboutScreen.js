import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
const AboutScreen = ({navigation}) => {
  return (
    <View>
      <Text>About</Text>
      <Text>Sobre Nosotros</Text>
      <Icon name={'rocket'} color={'blue'} size={30} />
    </View>
  );
};

export default AboutScreen;
