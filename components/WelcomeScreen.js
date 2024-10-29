import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  useColorScheme,
  ImageBackground,
  Pressable
  // useWindowDimensions,
} from 'react-native'
// const { width, height, fontScale } = useWindowDimensions();

import SectionListEx from './rn-components/SectionList'

const WelcomeScreen = ({ navigation }) => {
  const isDark = useColorScheme() === 'dark';
  const backGroundImage = isDark ? require('../assets/moroccan-flower-dark.png') : require('../assets/moroccan-flower.png')
  return (
    <SafeAreaView style={[
      styles.container,
      {
        color: isDark ? '#fefefe' : '#333',
      }
    ]}>
      <View style={[
        styles.headerContainer,
        {
          backgroundColor: isDark ? '#333' : '#eee',
        }
      ]}>
        <View style={[
          {
            color: isDark ? '#fefefe' : '#333',
            flexDirection: 'row',
            gap: 20,
            alignContent: 'center',
            justifyContent: 'center',
            flex: 1,
            padding: 10
          }
        ]}>
          <Pressable onPress={() => navigation.navigate('Welcome')}>
            <Text style={{ color: isDark ? '#fefefe' : '#333' }}>Welcome!</Text>
          </Pressable>
          <Pressable onPress={() => navigation.navigate('Login')}>
            <Text style={{ color: isDark ? '#fefefe' : '#333' }}>Login</Text>
          </Pressable>
        </View>
      </View>
      <ImageBackground
        source={backGroundImage}
        resizeMode='repeat'
        style={styles.bgImage}
      >
        <View style={styles.innerContainer}>
          <Text style={{
            paddingBottom: 10,
            color: isDark ? '#fefefe' : '#333',
            fontSize: 18,
            textAlign: 'center',
          }}>
            Welcome to Saaqi's! We're thrilled to have you join our culinary journey. Discover delicious dishes, place orders with ease, and stay updated on our latest offerings.
          </Text>
          <SectionListEx />
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

  headerContainer: {
    justifyContent: 'flex-start',
    backgroundColor: '#eee',
    width: '100%',
    boxShadow: '0px 2px 4px rgba(0,0,0, 0.3)',
    paddingVertical: 10,
    paddingHorizontal: 20,
    zIndex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  innerContainer: {
    paddingHorizontal: 20,
    paddingTop: 20,
    flex: 1,
  },

  bgImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  }

})