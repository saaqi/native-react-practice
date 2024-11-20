import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
} from 'react-native'

import SectionListEx from './rn-components/SectionList'

const MenuScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>

        <Text style={{
          paddingBottom: 10,
          fontSize: 18,
          textAlign: 'center',
        }}>
          Welcome to Saaqi's! We're thrilled to have you join our culinary journey. Discover delicious dishes, place orders with ease, and stay updated on our latest offerings.
        </Text>
        <SectionListEx />
      </View>
    </SafeAreaView>
  )
}
export default MenuScreen

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