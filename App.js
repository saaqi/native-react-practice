import { SafeAreaView, useColorScheme, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
// import { createNa  tiveStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import WelcomeScreen from './components/WelcomeScreen'
import LoginForm from './components/LoginForm';


export default function App() {
  const colorScheme = useColorScheme()
  // const Stack = createNativeStackNavigator()
  const BottomTab = createBottomTabNavigator()
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
        {/* <Stack.Navigator
          initialRouteName='Welcome'
          screenOptions={{
            // headerShown: false,
            headerStyle: { backgroundColor: isDark ? '#333' : '#fefefe' },
            headerTintColor: isDark ? '#fefefe' : '#333',
            headerTitleAlign: 'center',
            headerTitleStyle: { fontWeight: 'bold' }
          }}
        >
          <Stack.Screen
            options={{
              title: 'Welcome to Saaqi\'s',
              headerTitle: (props) => <HeaderLogo {...props} />,
            }}
            name="Welcome"
            component={WelcomeScreen}
          />
          <Stack.Screen
            options={{ title: 'Login To You Account!' }}
            name="Login"
            component={LoginForm}
          />
        </Stack.Navigator> */}
        <BottomTab.Navigator>
          <BottomTab.Screen name="Welcome" component={WelcomeScreen} />
          <BottomTab.Screen name="Login" component={LoginForm} />
        </BottomTab.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
}
