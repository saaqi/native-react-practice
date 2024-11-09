import { createDrawerNavigator } from '@react-navigation/drawer'

import WelcomeScreen from '../WelcomeScreen'
import LoginForm from '../LoginForm';
import ContactForm from '../ContactForm'
import SubscribeScreen from '../SubscribeScreen'

const DrawerNav = () => {
  const DrawerNav = createDrawerNavigator()
  return (
    <DrawerNav.Navigator
      userLegacyImplementation
      initialRouteName="Welcome"
      screenOptions={{
        drawerPosition: 'left',
        drawerType: 'front',
        drawerActiveTintColor: 'blue',
        drawerInactiveTintColor: '#333',
        headerTitleAlign: 'center',
        // drawerIcon: () => <HeaderLogo />,
        // drawerStyle: {
        //   backgroundColor: isDark ? '#333' : '#fefefe',
        //   color: isDark ? '#fefefe' : '#333',
        // },
      }}
    >
      <DrawerNav.Screen
        name="Welcome"
        options={{ title: "Welcome to Saaqi's" }}
        component={WelcomeScreen}
      />
      <DrawerNav.Screen name="Login"
        options={{ title: "Login to your Account!" }}
        component={LoginForm}
      />
      <DrawerNav.Screen name="Contact"
        options={{ title: "Contact Form" }}
        component={ContactForm}
      />
      <DrawerNav.Screen name="Subscribe"
        options={{ title: "Subscribe to our Newsletter" }}
        component={SubscribeScreen}
      />
    </DrawerNav.Navigator>
  )
}

export default DrawerNav
