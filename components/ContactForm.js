import {
  ScrollView,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Alert,
  Button,
  SafeAreaView,
  View,
  Text
} from 'react-native'

import { useState } from 'react'
import { ValidateEmailField } from './validators/ValidateEmailField'

const submitButtonAction = () => {
  Alert.alert('Submit button was pressed.')
}

const ContactForm = () => {

  const [userName, onchangeUserName] = useState('')
  const [phoneNumber, onchangePhoneNumber] = useState('')
  const [message, onchangeMessage] = useState('')
  const [email, onchangeEmail] = useState('')

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text>Contact us if you have any queries.</Text>
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
            <Button
              onPress={submitButtonAction}
              disabled={userName === '' || !ValidateEmailField(email) || message === ''}
              color="blue"
              title={'Contact Us!'}
            // onPressIn={}
            // onPressOut={}
            // onLongPress={}
            // delayLongPress={}
            />
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
  }
})