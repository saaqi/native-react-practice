import { View, Text, StyleSheet, Image, useColorScheme } from "react-native"

function Header() {
  const isDark = useColorScheme() === 'dark';
  return (
    <View style={[
      styles.headerContainer,
      {
        backgroundColor: isDark ? '#333' : '#eee',
      }
    ]}>
      <Text style={[
        styles.headerTitle,
        {
          color: isDark ? '#fefefe' : '#333'
        }
      ]}>
        Saaqi's
      </Text>
      <Image
        source={require('../assets/snack-icon.png')}
        style={styles.headerLogo}
        accessible={true}
        accessibilityLabel={"Saaqi's Logo"}
      />
      <Text style={styles.navigationButton}>
        Search
      </Text>
    </View>
  )
}

export default Header;


//Style Sheet
const styles = StyleSheet.create({
  headerContainer: {
    justifyContent: 'flex-start',
    backgroundColor:'#eee',
    width: '100%',
    boxShadow: '0px 2px 4px rgba(0,0,0, 0.3)',
    paddingVertical: 10,
    paddingHorizontal: 20,
    zIndex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  headerTitle: {
    fontWeight: 'bold',
    fontSize: 24,
    textAlign:'center',
    alignSelf: 'center'
  },

  navigationButton: {
    alignSelf: 'center'
  },

  headerLogo: {
    resizeMode: 'contain',
    height: 30,
    width: 30,
    alignSelf: 'center',
  }

})