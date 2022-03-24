import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';

const UselessTextInput = () => {
    const [text, onChangeText] = React.useState("Useless Text");
    const [number, onChangeNumber] = React.useState(null);
  
    return (
      <SafeAreaView>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={phoneNumber}
        />
        <TextInput
          style={styles.input}
          onChangeText={setPhoneNumber}
          value={phoneNumber}
          placeholder="Phone Number"
          keyboardType="numeric"
        />
        <Button title="Send SMS" onPress={

          fetch("https://dev.stedi.me"+phoneNumber,{
            method: 'POST',
            headers:{//metadata
            Accept: "application/text",
          "Content-Type":"application/text"
        }
        })
        }>
        </Button>
      </SafeAreaView>
    );
  };

export default function Login(props){
    return(
        <View style={StyleSheet.login}>
            <Text>This is the Login Screen</Text>
            <Button title="Log In" onPress={()=>props.setUserLoggedIn(true)}></Button>
        </View>
    );
}

const sendSMS = (phoneNumber) => {
    fetch('https://dev.stedi.me/twofactorlogin/'+phoneNumber, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
  });
}

const verifyOTP = (phoneNumber, oneTimePassword) => {fetch('https://dev.stedi.me/twofactorlogin/', {
method: 'POST',
headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        phoneNumber,
        oneTimePassword,
      })
});
}

const styles = StyleSheet.create({
    login: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        backgroundColor: 'green',
        height: '12%',
        alignItems: 'flex-end',
        paddingBottom: 5,
        paddingLeft: 10,
        paddingRight: 10,
        
      },
})