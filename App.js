import { SafeAreaView, useColorScheme, Image } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
// import { createNativeStackNavigator } from '@react-navigation/native-stack'
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createDrawerNavigator } from '@react-navigation/drawer'

// import Ionicons from '@expo/vector-icons/Ionicons'

import WelcomeScreen from './components/WelcomeScreen'
import LoginForm from './components/LoginForm';


export default function App() {
  const colorScheme = useColorScheme()
  // const Stack = createNativeStackNavigator()
  // const BottomTab = createBottomTabNavigator()
  const DrawerNav = createDrawerNavigator()
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
            options={{ title: 'Login To Your Account!' }}
            name="Login"
            component={LoginForm}
          />
        </Stack.Navigator> */}
        {/* <BottomTab.Navigator
        screenOptions={
          ({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName
              if (route.name === "Welcome to Saaqi's") {
                iconName = focused ? "home" : "home-outline"
              } else {
                iconName = focused ? "log-in" : "log-in-outline"
              }
              return <Ionicons name={iconName} size={size} color={color} />
            },
            tabBarActiveTintColor: '#333',
            tabBarInActiveTintColor: '#666'
          })
         }
        >
          <BottomTab.Screen name="Welcome to Saaqi's" component={WelcomeScreen} />
          <BottomTab.Screen name="Login to your Account!" component={LoginForm} />
        </BottomTab.Navigator> */}
        <DrawerNav.Navigator
          userLegacyImplementation
          initialRouteName="Welcome to Saaqi's"
          screenOptions={{
            drawerPosition: 'left',
            drawerType: 'front',
            drawerActiveTintColor : 'blue',
            drawerInactiveTintColor: '#333',
            // drawerStyle: {
            //   backgroundColor: isDark ? '#333' : '#fefefe',
            //   color: isDark ? '#fefefe' : '#333',
            // },
            // drawerIcon: () => <HeaderLogo />,
          }}
        >
          <DrawerNav.Screen name="Welcome to Saaqi's" component={WelcomeScreen} />
          <DrawerNav.Screen name="Login to your Account!" component={LoginForm} />
        </DrawerNav.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
}
