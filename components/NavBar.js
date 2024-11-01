import { View, Pressable, StyleSheet, useColorScheme } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'

const NavBar = () => {
  const isDark = useColorScheme() === 'dark'
  return (
    <NavigationContainer>

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
    </NavigationContainer>
  )
}

export default NavBar

const styles = StyleSheet.create({
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
})