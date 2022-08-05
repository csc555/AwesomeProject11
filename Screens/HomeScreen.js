import React from 'react';
import {View, Text, StyleSheet, TextInput, SafeAreaView} from 'react-native';
const HomeScreen = ({navigation}) => {
  const [text, onChangeText] = React.useState('Useless Text');
  const [number, onChangeNumber] = React.useState(null);
  return (
    <View
      name="container"
      style={{backgroundColor: 'lightgray', height: '100%'}}>
      <Text style={styles.titleText}>Soy Carmen, Encantada</Text>
      <Text style={styles.subtitulo}>Login</Text>
      <SafeAreaView>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          placeholder="Usuario"
          keyboardType="text"
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
          placeholder="Tlf"
          keyboardType="numeric"
        />
      </SafeAreaView>
    </View>
  );
};
const styles = StyleSheet.create({
  baseText: {
    fontFamily: 'Cochin',
  },
  titleText: {
    fontSize: 50,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: '20%',
    color: 'blue',
  },
  subtitulo: {
    textAlign: 'center',
    marginTop: '18%',
    fontSize: 20,
    color: 'blue',
  },
  input: {
    backgroundColor: 'white',
    margin: '5%',
  },
});
export default HomeScreen;
