import {
  Text,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  Button
} from 'react-native'

import { useState } from 'react'


const LoginFormEx = () => {

  const [userName, onchangeUserName] = useState('')
  const [passWord, onchangePassWord] = useState('')

  const [userState, setUserState] = useState(true);

  const submitButtonAction = () => {
    setUserState(!userState);
  }

  return (
    <KeyboardAvoidingView
      style={styles.textContainer}
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
          />
        </ScrollView>)}
        {!userState && (<ScrollView>
          <Text style={{marginBottom: 20}}>
            You are now logged in!
            <Text style={{fontWeight: 'bold'}}> Welcome!</Text>
          </Text>
          <Button
            color="maroon"
            onPress={submitButtonAction}
            title={userState ? 'Login' : 'Logout'}
          />
        </ScrollView>)}
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

export default LoginFormEx


//Style Sheet
const styles = StyleSheet.create({
  textContainer: {
    flex: 1,
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