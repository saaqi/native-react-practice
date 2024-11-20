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
  Pressable,
  ImageBackground,
  Image,
  // useWindowDimensions
} from 'react-native'
import { useState } from 'react'

const WelcomeScreen = ({ navigation }) => {
  const isDark = useColorScheme() === 'dark';
  const [userName, onchangeUserName] = useState('')
  const [passWord, onchangePassWord] = useState('')
  // const { width, height } = useWindowDimensions()
  const backGroundImage = isDark ? require('../assets/dark_leather.png') : require('../assets/white_leather.png')
  return (
    <SafeAreaView style={[
      styles.container,
      {
        color: isDark ? '#fefefe' : '#333',
      }
    ]}>
      <ImageBackground
        source={backGroundImage}
        resizeMode='repeat'
        style={styles.bgImage}
      >
        <View style={styles.innerContainer}>
          <Image
            // source={require('../assets/snack-icon.png')}
            source={{ uri: '../assets/snack-icon.png' }}
            style={{
              height: 150,
              width: 150,
              alignSelf: 'center',
            }}
            resizeMode={'contain'}
            accessible={true}
            accessibilityLabel={"Saaqi's Logo"}
          />
          <Text style={{
            paddingVertical: 20,
            color: isDark ? '#fefefe' : '#333',
            fontSize: 18,
            textAlign: 'center',
          }}>
            Welcome to Saaqi's! We're thrilled to have you join our culinary journey. Discover delicious dishes, place orders with ease, and stay updated on our latest offerings.
          </Text>

          <KeyboardAvoidingView
            style={styles.innerContainer}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          >
            <ScrollView
              horizontal={false}
              // indicatorStyle={'#333'}
              keyboardDismissMode="on-drag"
            >
              <TextInput
                style={[styles.inputField, {
                  color: isDark ? '#fefefe' : '#333'
                }]}
                onChangeText={onchangeUserName}
                placeholder='User Name or E-Mail'
                keyboardType='default'
                value={userName}
                clearButtonMode='always'
              />
              <TextInput
                style={[styles.inputField, {
                  color: isDark ? '#fefefe' : '#333',
                  // borderColor: isDark ? '#fefefe' : '#333',
                }]}
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
              <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Pressable
                  onPress={() => navigation.push('BottomTabNav')}
                  disabled={userName === '' || passWord === ''}
                  style={{ flex: 0.49 }}
                >
                  <Text style={userName === '' || passWord === '' ? styles.subButtonDisabled : styles.subButton}>
                    Login
                  </Text>
                </Pressable>
                <Pressable
                  onPress={() => navigation.push('BottomTabNav')}
                  disabled={userName === '' || passWord === ''}
                  style={{flex: 0.49}}
                >
                  <Text style={userName === '' || passWord === '' ? styles.subButtonDisabled : styles.subButton}>
                    Sign Up
                  </Text>
                </Pressable>
              </View>
            </ScrollView>
          </KeyboardAvoidingView>
        </View>
      </ImageBackground>
    </SafeAreaView>
  )
}

export default WelcomeScreen

//Style Sheet
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    padding: 20,
    flex: 1,
  },

  bgImage: {
    flex: 1,
    width: '100%',
    height: '100%',
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