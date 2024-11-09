import {
  Text,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
  View,
  Platform,
  SafeAreaView,
  useColorScheme,
  Pressable
} from 'react-native'

import { useState } from 'react'


const LoginForm = () => {

  const [userName, onchangeUserName] = useState('')
  const [passWord, onchangePassWord] = useState('')

  const [userState, setUserState] = useState(true);
  const colorScheme = useColorScheme();

  return (

    <SafeAreaView style={[
      styles.container,
      {
        backgroundColor: colorScheme === 'dark' ? '#333' : 'white',
        color: colorScheme === 'dark' ? '#fefefe' : '#333',
      }
    ]}>
      <KeyboardAvoidingView
        style={styles.innerContainer}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <ScrollView
          horizontal={false}
          indicatorStyle={'#333'}
          keyboardDismissMode="on-drag"
        >
          {userState && (
            <View>
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
              <Text style={{ color: 'orange', marginVertical: 10 }}>
                {
                  userName === '' ? 'Please Enter your Email or Username to continue' :
                  passWord === '' ? 'Please Enter your Password to continue' : ''
                }
              </Text>
            </View>
          )}

          {!userState && (<Text style={{
            color: colorScheme === 'dark' ? '#fefefe' : '#333',
            marginBottom: 20
          }}>
            Welcome to Saaqi's! We're thrilled to have you join our culinary journey. Discover delicious dishes, place orders with ease, and stay updated on our latest offerings.
          </Text>)}

          <Pressable onPress={() => setUserState(!userState)} disabled={userName === '' || passWord === ''}>
            <Text style={userName === '' || passWord === '' ? styles.subButtonDisabled : styles.subButton}>
              {userState ? 'Login' : 'Logout'}
            </Text>
          </Pressable>
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