import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';

let App;
export default App = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getMovies = async () => {
    try {
      const response = await fetch('https://reactnative.dev/movies.json');
      const json = await response.json();
      setData(json.movies);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <View style={{flex: 1, padding: 24}}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          style={{fontSize: '20'}}
          data={data}
          keyExtractor={({id}, index) => id}
          renderItem={({item}) => (
            <Text style={styles.listText}>
              {item.id}
              {'.'}
              {item.title}, {item.releaseYear}
            </Text>
          )}
        />
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  listText: {
    fontFamily: 'Cochin',
    fontSize: 30,
    textAlign: 'justify',
    alignItems: 'center',
    color: 'black',
    marginTop: '5%',
  },
});
