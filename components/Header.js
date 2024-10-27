import { View, Text, StyleSheet, Image } from "react-native";

function Header() {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerTitle}>
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
    // flex: .6,
    alignSelf: 'center'
  },

  navigationButton: {
    // flex: .2,
    alignSelf: 'center'
  },

  headerLogo: {
    resizeMode: 'contain',
    height: 30,
    width: 30,
    alignSelf: 'center',
    // flex:  .2,
    // marginLeft: 'auto'
  }

})