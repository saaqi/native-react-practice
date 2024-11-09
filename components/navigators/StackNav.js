import { useColorScheme } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import WelcomeScreen from '../WelcomeScreen'
import LoginForm from '../LoginForm';
import ContactForm from '../ContactForm'
import SubscribeScreen from '../SubscribeScreen'

const StackNav = () => {

  const Stack = createNativeStackNavigator()
  const colorScheme = useColorScheme()
  const isDark = colorScheme === 'dark'

  return (
    <Stack.Navigator
      initialRouteName="Welcome to Saaqi's"
      screenOptions={{
        // headerShown: false,
        headerStyle: { backgroundColor: isDark ? '#333' : '#fefefe' },
        headerTintColor: isDark ? '#fefefe' : '#333',
        headerTitleAlign: 'center',
        headerTitleStyle: { fontWeight: 'bold' }
      }}
    >
      <Stack.Screen name="Welcome to Saaqi's" component={WelcomeScreen} />
      <Stack.Screen options={{ title: 'Login To Your Account now or else!' }} name="Login to your Account!" component={LoginForm} />
      <Stack.Screen name="Contact Form" component={ContactForm} />
      <Stack.Screen name="Subscribe to our Newsletter" component={SubscribeScreen} />
    </Stack.Navigator>
  )
}

export default StackNav
