import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import * as firebase from 'firebase';
import * as store from 'firebase/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyD_nJuObsymuk82AkQRzitv6H7Tdao_0Wg",
  authDomain: "health-share-a0bc6.firebaseapp.com",
  databaseURL: "https://health-share-a0bc6.firebaseio.com",
  projectId: "health-share-a0bc6",
  storageBucket: "health-share-a0bc6.appspot.com",
  messagingSenderId: "516403798393",
  appId: "1:516403798393:web:5292aecba3e580a3364fa8"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
db = firebase.firestore();

export default class FbConnect extends React.Component{

  testObject = {
    id: '123',
    idLider: '234',
    idCliente: '345',
    question_1: {
      number: '1',
      active: 'true',
      score: '5',
    } ,
    question_2: {
      number: '2',
      active: 'false',
      score: '4',
    } ,
    question_3: {
      number: '3',
      active: 'true',
      score: '5',
    }
  }

  logObject = () => {
    console.log(this.testObject.id);
  };

  sendSurvey = async () => {
    //console.log(this.testObject.id);
    //object = JSON.parse(this.testObject);
    //console.log("Object to send", this.testObject);
    try{
      const response = await db.collection('encuestas').where('idLider', '==', '234').where('idCliente', '==', '345').update(this.testObject);
      console.log(response);
    }catch(e){
      console.error(e);
    } 
  }

  render(){
    return (
      <View style = {styles.container}>
        <Button 
          title = "Send survey"
          onPress = {this.sendSurvey}
        />
        <Button 
          title = "Log object info"
          onPress = {this.logObject}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
