import React from 'react';
import {
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  TextInput,
  Button,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const NewMail = props => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.emailHeader}>
        <View style={styles.emailHeader}>
          <Text style={styles.compose}>Compose</Text>
        </View>
      </View>
      <View style={styles.emailInfos}>
        <View style={styles.emailInfosDetails}>
          <TextInput style={styles.emailFrom} placeholder={' To:'}></TextInput>
        </View>
      </View>
      <TextInput style={styles.subject} placeholder={' Subject:'}></TextInput>

      <TextInput
        style={styles.emailbody}
        placeholder={' Body:'}
        numberOfLines={5}></TextInput>
      <View style={styles.emailFooter}>
        <TouchableOpacity
          style={styles.buttons}
          onPress={() => navigation.navigate('Home')}>
          <Text style={styles.textoFooter}>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    color: 'white',
  },
  emailHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  compose: {
    fontSize: 24,
    fontWeight: '500',
    paddingRight: 10,
    borderRadius: 20,
  },
  subject: {
    fontSize: 20,
    paddingRight: 10,
    borderWidth: 1,
    borderRadius: 20,
  },
  emailInfos: {
    flexDirection: 'row',
    height: 100,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  emailInfosDetails: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginStart: 0,
  },
  emailFrom: {
    fontSize: 18,
    borderWidth: 1,
    borderRadius: 20,
    width: '100%',
  },
  emailIcon: {
    marginLeft: 20,
    marginRight: 5,
  },
  emailbody: {
    fontSize: 20,
    alignSelf: 'flex-start',
    marginTop: 20,
    borderWidth: 1,
    borderRadius: 20,
    width: '100%',
  },
  emailFooter: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 150,
  },
  buttons: {
    justifyContent: 'space-evenly',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 33,
    paddingVertical: 10,
    marginHorizontal: 5,
    width: '50%',
  },
  footerIcon: {
    color: '#b9b9b9',
    alignSelf: 'center',
  },
  textoFooter: {
    fontSize: 20,

    flexWrap: 'wrap',
    textAlign: 'center',
    fontWeight: '500',
  },
});

export default NewMail;
