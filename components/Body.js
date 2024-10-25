import { StyleSheet, View, Text, ImageBackground } from 'react-native'
import ScrollViewEx from './rn-components/ScrollView'
import FlatListEx from './rn-components/FlatList'
import SectionListEx from './rn-components/SectionList'
import TextInputEx from './rn-components/TextInput'
import LoginFormEx from './LoginForm'

const Body = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/moroccan-flower.png')}
        resizeMode='repeat'
      >
        <View style={styles.innerContainer}>
          <Text style={{paddingBottom: 10}}>
            Welcome to Saaqi's! We're thrilled to have you join our culinary journey. Discover delicious dishes, place orders with ease, and stay updated on our latest offerings.
          </Text>
          <LoginFormEx />
        </View>
    </ImageBackground>
    </View>
  )
}
export default Body

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