import {
  ScrollView,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Alert,
  Text,
  Pressable,
  SafeAreaView,
  View
} from 'react-native'

import { useState } from 'react'

const submitButtonAction = () => {
  Alert.alert('Submit button was pressed.')
}

const TextInputEx = () => {

  const [userName, onchangeUserName] = useState('')
  const [phoneNumber, onchangePhoneNumber] = useState('')
  const [message, onchangeMessage] = useState('')
  const [email, onchangeEmail] = useState('')

  return (
    <SafeAreaView>
      <View style={styles.container}>
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
              placeholder='Full Name'
              keyboardType='default'
              value={userName}
              onFocus={() => { Alert.alert('First Input Field is in focus.') }}
              onBlur={() => { Alert.alert('First Input Field is blurred.') }}
              clearButtonMode='always'
            />
            <TextInput
              style={styles.inputField}
              onChangeText={onchangeEmail}
              placeholder='Email Address'
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
              placeholder='Message'
              keyboardType='default'
              value={message}
              multiline={true}
            />
            <Pressable
              onPress={submitButtonAction}
            // onPressIn={}
            // onPressOut={}
            // onLongPress={}
            // delayLongPress={}
            >
              <Text style={styles.submitButton}>Submit</Text>
            </Pressable>
          </ScrollView>
        </KeyboardAvoidingView>
      </View>
    </SafeAreaView>
  )
}

export default TextInputEx


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
    marginBottom: 5,
    height: 100
  },

  submitButton: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: 'blue',
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    borderRadius: 10,
    marginTop: 10
  }
})