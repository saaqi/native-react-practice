import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  useColorScheme,
  // ImageBackground,
  // useWindowDimensions,
} from 'react-native'
// const { width, height, fontScale } = useWindowDimensions();

import SectionListEx from './rn-components/SectionList'

const WelcomeScreen = () => {
  const colorScheme = useColorScheme();
  return (
    <SafeAreaView style={[
      styles.container,
      {
        backgroundColor: colorScheme === 'dark' ? '#333' : 'white',
        color: colorScheme === 'dark' ? '#fefefe' : '#333',
      }
    ]}>
      {/* <ImageBackground
          source={require('../assets/moroccan-flower.png')}
          resizeMode='repeat'
        > */}
      <View style={styles.innerContainer}>
        <Text style={{
          paddingBottom: 10,
          color: colorScheme === 'dark' ? '#fefefe' : '#333',
        }}>
          Welcome to Saaqi's! We're thrilled to have you join our culinary journey. Discover delicious dishes, place orders with ease, and stay updated on our latest offerings.
        </Text>

        <SectionListEx />

      </View>
      {/* </ImageBackground> */}
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

})