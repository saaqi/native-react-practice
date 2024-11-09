import {
  ScrollView,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Alert,
  Pressable,
  SafeAreaView,
  View,
  Text
} from 'react-native'

import { useState } from 'react'
import { ValidateEmailField } from './validators/ValidateEmailField'

const ContactForm = () => {

  const [userName, onchangeUserName] = useState('')
  const [phoneNumber, onchangePhoneNumber] = useState('')
  const [message, onchangeMessage] = useState('')
  const [email, onchangeEmail] = useState('')

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={{ marginBottom: 20 }}>Contact us if you have any queries.</Text>
        <KeyboardAvoidingView
          style={styles.textContainer}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
          <ScrollView
            horizontal={false}
            indicatorStyle={'#333'}
            keyboardDismissMode="on-drag"
          >
            <TextInput
              style={styles.inputField}
              onChangeText={onchangeUserName}
              placeholder='Full Name *'
              keyboardType='default'
              value={userName}
              onFocus={() => { Alert.alert('First Input Field is in focus.') }}
              onBlur={() => { Alert.alert('First Input Field is blurred.') }}
              clearButtonMode='always'
            />
            <TextInput
              style={styles.inputField}
              onChangeText={onchangeEmail}
              placeholder='Email Address *'
              keyboardType='email-address'
              value={email}
            />
            <TextInput
              style={styles.inputField}
              onChangeText={onchangePhoneNumber}
              placeholder='Phone#'
              keyboardType='name-phone-pad'
              value={phoneNumber}
              maxLength={10}
            />
            <TextInput
              style={styles.messageField}
              onChangeText={onchangeMessage}
              placeholder='Message *'
              keyboardType='default'
              value={message}
              multiline={true}
            />
            <Text style={{ color: 'orange', marginVertical: 10 }}>
              {
                userName === '' ? 'Please Enter your Full Name to continue' :
                  !ValidateEmailField(email) ? 'Please Enter your correct Email Address to continue' :
                    message === '' ? 'Please Enter your message to continue' :
                ''
              }
            </Text>
            <Pressable
              onPress={() => Alert.alert('Welcome to our Newsletter.')}
              disabled={userName === '' || !ValidateEmailField(email) || message === ''}
            >
              <Text
                style={
                  userName === '' || !ValidateEmailField(email) || message === ''
                  ? styles.subButtonDisabled : styles.subButton}
              >
                Contact Us!
              </Text>
            </Pressable>
          </ScrollView>
        </KeyboardAvoidingView>
      </View>
    </SafeAreaView>
  )
}

export default ContactForm


//Style Sheet
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },

  textContainer: {
    flex: 1,
    marginBottom: 10,
  },

  inputField: {
    borderColor: '#999',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },

  messageField: {
    borderColor: '#999',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    height: 100
  },

  subButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 10,
  },

  subButtonDisabled: {
    backgroundColor: 'grey',
    padding: 10,
    borderRadius: 5,
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 10,
  },
})