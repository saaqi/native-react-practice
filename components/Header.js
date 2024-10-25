import { View, Text, StyleSheet, Image } from "react-native";

function Header() {
  return ( 
    <View style={styles.headerContainer}>
      <Image 
        source={require('../assets/snack-icon.png')}
        style={styles.headerLogo}
        accessible={true}
        accessibilityLabel={"Saaqi's Logo"}
      />
      <Text style={styles.headerTitle}>
        Saaqi's
      </Text>
    </View>
  )
}

export default Header;


//Style Sheet
const styles = StyleSheet.create({
  headerContainer: {
    flex: 0.1,
    justifyContent: 'flex-start',
    backgroundColor:'#eee', 
    width: '100%', 
    boxShadow: '0px 2px 4px rgba(0,0,0, 0.3)',
    paddingVertical: 10,
    zIndex: 1,
    flexDirection: 'row',
  },

  headerTitle: {
    fontWeight: 'bold', 
    fontSize: 24, 
    textAlign:'center',
    flex: .6,
    alignSelf: 'center'
  },

  headerLogo: {
    resizeMode: 'contain', 
    height: 'auto', 
    width: 'auto',
    flex: .2
  }

})