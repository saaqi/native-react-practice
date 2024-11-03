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