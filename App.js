import { SafeAreaView, useColorScheme, Image } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'

// import DrawerNav from './components/navigators/DrawerNav'
// import StackNav from './components/navigators/StackNav'
import BottomTabNav from './components/navigators/BottomTabNav'

export default function App() {
  const colorScheme = useColorScheme()
  const isDark = colorScheme === 'dark'
  const HeaderLogo = () => {
    return (
      <Image
        source={require('./assets/snack-icon.png')}
        style={{
          resizeMode: 'contain',
          height: 30,
          width: 30,
          alignSelf: 'center',
        }}
        accessible={true}
        accessibilityLabel={"Saaqi's Logo"}
      />
    )
  }

  return (
    <NavigationContainer>
      <SafeAreaView style={{
        flex: 1,
        backgroundColor: isDark ? '#333' : 'white',
        color: isDark ? '#fefefe' : '#333',
      }}>
        {/* <DrawerNav /> */}
        {/* <StackNav /> */}
        <BottomTabNav />
      </SafeAreaView>
    </NavigationContainer>
  );
}
