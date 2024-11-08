import * as React from 'react'
import { useState } from 'react'
import {
  View,
  Text,
  Image,
  StyleSheet,
  Pressable,
  TextInput,
  KeyboardAvoidingView,
  Alert,
  Platform,
} from 'react-native'

import { ValidateEmailField } from './validators/ValidateEmailField';


const SubscribeScreen = () => {
  const [email, setEmail] = useState('')
  const ValidEmailButton = () => {
    if (ValidateEmailField(email)) {
      return (
        <Pressable onPress={() => { Alert.alert('Thanks for subscribing, stay tuned!') }}>
          <Text style={styles.subButton}>Subscribe</Text>
        </Pressable>
      )
    } else {
      return (
        <Text style={styles.subButtonDisabled}>Subscribe</Text>
      )
    }
  }
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={require('../assets/snack-icon.png')} style={styles.logo} />
      </View>
      <KeyboardAvoidingView KeyboardAvoidingView style={{ width: '100%' }} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <View style={{ alignItems: 'center' }}>
          <Text style={styles.welcomeText}>
            Subscribe to our Newsletter for our latest delicious recipes!
          </Text>
          <TextInput
            style={styles.inputField}
            onChangeText={setEmail}
            placeholder='Enter your Email Address'
            keyboardType='email-address'
            value={email}
          />
          <ValidEmailButton />
        </View>
      </KeyboardAvoidingView>
    </View>
  )
};

export default SubscribeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  imageContainer: {
    flex: .4,
    marginBottom: 40
  },
  logo: {
    flex: 1,
    width: 1000,
    height: 1170,
    resizeMode: 'contain',
  },
  welcomeText: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 40,
  },
  inputField: {
    borderColor: '#999',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    width: 300,
  },
  subButton: {
    backgroundColor: 'darkgreen',
    padding: 10,
    borderRadius: 5,
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 10,
    width: 300,
  },
  subButtonDisabled: {
    backgroundColor: 'grey',
    padding: 10,
    borderRadius: 5,
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 10,
    width: 300,
  },
})
