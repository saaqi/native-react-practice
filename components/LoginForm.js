import {
  Text,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  Button,
  SafeAreaView,
  useColorScheme,
} from 'react-native'

import { useState } from 'react'


const LoginForm = () => {

  const [userName, onchangeUserName] = useState('')
  const [passWord, onchangePassWord] = useState('')

  const [userState, setUserState] = useState(true);

  const submitButtonAction = () => {
    setUserState(!userState);
  }

  const colorScheme = useColorScheme();

  return (

    <SafeAreaView style={[
      styles.container,
      {
        backgroundColor: colorScheme === 'dark' ? '#333' : 'white',
        color: colorScheme === 'dark' ? '#fefefe' : '#333',
      }
    ]}>
      <Text style={{
        padding: 20,
        color: colorScheme === 'dark' ? '#fefefe' : '#333',
      }}>
        Welcome to Saaqi's! We're thrilled to have you join our culinary journey. Discover delicious dishes, place orders with ease, and stay updated on our latest offerings.
      </Text>
      <KeyboardAvoidingView
        style={styles.innerContainer}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <ScrollView
          horizontal={false}
          indicatorStyle={'#333'}
          keyboardDismissMode="on-drag"
        >
          {userState && (<ScrollView>
            <TextInput
              style={styles.inputField}
              onChangeText={onchangeUserName}
              placeholder='User Name or E-Mail'
              keyboardType='default'
              value={userName}
              clearButtonMode='always'
            />
            <TextInput
              style={styles.inputField}
              onChangeText={onchangePassWord}
              placeholder='Passsword'
              secureTextEntry='true'
              keyboardType='default'
              value={passWord}
            />

            <Button
              color="blue"
              onPress={submitButtonAction}
              title={userState ? 'Login' : 'Logout'}
              disabled={userName === '' || passWord === ''}
            />
          </ScrollView>)}
          {!userState && (<ScrollView>
            <Text style={{ marginBottom: 20 }}>
              You are now logged in!
              <Text style={{ fontWeight: 'bold' }}> Welcome!</Text>
            </Text>
            <Button
              color="maroon"
              onPress={submitButtonAction}
              title={userState ? 'Login' : 'Logout'}
            />
            
          </ScrollView>)}
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default LoginForm


//Style Sheet
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  innerContainer: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    marginBottom: 10,
    marginTop: 10
  },

  inputField: {
    borderColor: '#999',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },

})