import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  Image,
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';


const Home = ({navigation}) => {
  const [isLoading, setLoading] = useState(true);
  const [Email, setEmail] = useState(null);
  const url = 'https://api.npoint.io/e60531de9f99638dfa1e';
  const {navigate} = navigation;

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(json => setEmail(json))
      .catch(error => console.error(error))
      .finally(() => setLoading(false));
  }, []);
  //console.log(Email);

  return (
    <View style={styles.container}>
      <Text style={styles.baseText}>
        Edu
        <Text style={styles.innerText}>Mail</Text>
      </Text>
      <FlatList
        data={Email}
        keyExtractor={(item, index) => item.id}
        renderItem={({item}) => (
          <TouchableOpacity
            style={styles.listItem}
            onPress={() => {
              navigate('ViewMail', {item: item});
            }}>
            <Image
              source={{uri: item.image}}
              style={{width: 60, height: 60, borderRadius: 30}}
            />
            <View style={{alignItems: 'center', flex: 1}}>
              <Text style={{fontWeight: 'bold'}}>{item.name}</Text>
              <Text>{item.subject}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F7',
    marginTop: 10,
  },
  baseText: {
    fontSize: 30,
    elevation: 20,
    padding: 10,
    fontWeight: 'bold',
  },
  innerText: {
    color: 'blue',
  },
  listItem: {
    margin: 8,
    padding: 5,
    backgroundColor: '#FFF',
    width: '90%',
    flex: 1,
    alignSelf: 'center',
    flexDirection: 'row',
    borderRadius: 5,
  },
});

export default Home;
