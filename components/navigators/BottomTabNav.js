import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from '@expo/vector-icons/Ionicons'

import WelcomeScreen from '../WelcomeScreen'
import LoginForm from '../LoginForm';
import ContactForm from '../ContactForm'
import SubscribeScreen from '../SubscribeScreen'

const BottomTabNav = () => {
  const BottomTab = createBottomTabNavigator()
  return (
    <BottomTab.Navigator
      screenOptions={
        
        ({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName
            if (route.name === "Welcome") {
              iconName = focused ? "home" : "home-outline"
            } else if (route.name === "Login") {
              iconName = focused ? "log-in" : "log-in-outline"
            } else if (route.name === "Contact") {
              iconName = focused ? "chatbubbles" : "chatbubbles-outline"
            } else if (route.name === "Subscribe") {
              iconName = focused ? "mail" : "mail-outline"
            }
            return <Ionicons name={iconName} size={size} color={color} />
          },
          tabBarActiveTintColor: 'blue',
          tabBarInActiveTintColor: '#666',
          headerTitleAlign: 'center',
        })
      }
    >
      <BottomTab.Screen
        name="Welcome"
        options={{ title: "Welcome to Saaqi's" }}
        component={WelcomeScreen}
      />
      <BottomTab.Screen name="Login"
        options={{ title: "Login to your Account!" }}
        component={LoginForm}
      />
      <BottomTab.Screen name="Contact"
        options={{ title: "Contact Form" }}
        component={ContactForm}
      />
      <BottomTab.Screen name="Subscribe"
        options={{ title: "Subscribe to our Newsletter" }}
        component={SubscribeScreen}
      />
    </BottomTab.Navigator>
  )
}

export default BottomTabNav