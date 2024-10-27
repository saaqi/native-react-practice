import { SafeAreaView, useColorScheme } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Header from './components/Header'
import WelcomeScreen from './components/WelcomeScreen'
import LoginForm from './components/LoginForm';


export default function App() {
  const colorScheme = useColorScheme()
  const Stack = createNativeStackNavigator()
  return (
    <>
      <NavigationContainer>
        <SafeAreaView style={{
          flex: 1,
          backgroundColor: colorScheme === 'dark' ? '#333' : 'white',
          color: colorScheme === 'dark' ? '#fefefe' : '#333',
        }}>

          <Header />
          <Stack.Navigator
            initialRouteName='Welcome'
            screenOptions={{
              // headerShown: false,
              headerStyle: {
                backgroundColor: '#eee'
              }
            }}
          >
            <Stack.Screen
              options={{ title: 'Welcome to Saaqi\'s' }}
              name="Welcome"
              component={WelcomeScreen}
            />
            <Stack.Screen
              options={{ title: 'Login To You Account!' }}
              name="Login"
              component={LoginForm}
            />
          </Stack.Navigator>
        </SafeAreaView>
      </NavigationContainer>
    </>
  );
}
