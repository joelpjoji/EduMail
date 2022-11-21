import React from 'react';
import {
  SafeAreaView,
  TouchableOpacity,
  Image,
  StyleSheet,
  Text,
  Button,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const ViewMail = props => {
  const {route} = props;
  const {params} = route;
  const {item} = params;
  const {image, name, email, subject, body} = item;

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.emailHeader}>
        <View style={styles.emailHeader}>
          <Text style={styles.emailTittle}>{name}</Text>
        </View>
      </View>
      <View style={styles.emailInfos}>
        <Image style={styles.emailPicture} source={{uri: item.image}} />
        <View style={styles.emailInfosDetails}>
          <Text style={styles.emailFrom}>{email}</Text>
        </View>
      </View>
      <Text style={styles.subject}>{subject}</Text>

      <Text style={styles.emailConteudo}> {body} </Text>
      <View style={styles.emailFooter}>
        <TouchableOpacity
          style={styles.footerButtons}
          onPress={() => navigation.navigate('NewMail')}>
          <Text style={styles.textoFooter}>Reply</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.footerButtons}
          onPress={() => navigation.navigate('NewMail')}>
          <Text style={styles.textoFooter}>Reply All</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.footerButtons}
          onPress={() => navigation.navigate('NewMail')}>
          <Text style={styles.textoFooter}>Forward</Text>
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
  emailTittle: {
    fontSize: 24,
    fontWeight: '500',
    paddingRight: 10,
  },
  subject: {
    fontSize: 20,
    fontWeight: '500',
    paddingRight: 10,
  },
  emailTag: {
    paddingRight: 5,
    paddingLeft: 7,
    alignContent: 'flex-end',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'gray',
  },
  emailInfos: {
    flexDirection: 'row',
    height: 100,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  emailPicture: {
    height: 45,
    width: 45,
    borderRadius: 25,
    backgroundColor: 'gray',
  },
  emailInfosDetails: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    width: '90%',
    marginStart: 10,
  },
  emailFrom: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    fontSize: 18,
  },
  emailIcon: {
    marginLeft: 20,
    marginRight: 5,
  },
  emailConteudo: {
    flex: 1,
    fontSize: 16,
    fontWeight: '500',
    alignSelf: 'flex-start',
    marginTop:20,
  },
  emailFooter: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  footerButtons: {
    flex: 3,
    flexDirection: 'column',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 33,
    paddingVertical: 10,
    marginHorizontal: 5,
  },
  footerIcon: {
    color: '#b9b9b9',
    alignSelf: 'center',
  },
  textoFooter: {
    flexWrap: 'wrap',
    textAlign: 'center',
    fontWeight: '500',
  },
});

export default ViewMail;
