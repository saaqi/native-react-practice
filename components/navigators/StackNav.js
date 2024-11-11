import { useColorScheme } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import WelcomeScreen from '../WelcomeScreen'
import BottomTabNav from './BottomTabNav'

const StackNav = () => {

  const Stack = createNativeStackNavigator()
  const colorScheme = useColorScheme()
  const isDark = colorScheme === 'dark'

  return (
    <Stack.Navigator
      initialRouteName="Welcome"
      screenOptions={{
        headerShown: false,
        headerStyle: { backgroundColor: isDark ? '#333' : '#fefefe' },
        headerTintColor: isDark ? '#fefefe' : '#333',
        headerTitleAlign: 'center',
        headerTitleStyle: { fontWeight: 'bold' }
      }}
    >
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen options={{ title: 'Main Application' }} name="BottomTabNav" component={BottomTabNav} />
    </Stack.Navigator>
  )
}

export default StackNav
