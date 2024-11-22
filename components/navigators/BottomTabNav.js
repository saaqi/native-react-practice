import { Image } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from '@expo/vector-icons/Ionicons'

import MenuScreen from '../MenuScreen'
import ContactForm from '../ContactForm'
import SubscribeScreen from '../SubscribeScreen'
import SetupAsyncStorage from '../SetupAsyncStorage'
import SetupSQLite from '../SetupSQLite'

const BottomTabNav = () => {

  const HeaderLogo = () => {
    return (
      <Image
        source={require('../../assets/snack-icon.png')}
        style={{
          height: 30,
          width: 30,
          alignSelf: 'center',
        }}
        resizeMode={'contain'}
        accessible={true}
        accessibilityLabel={"Saaqi's Logo"}
      />
    )
  }

  const BottomTab = createBottomTabNavigator()
  return (
    <BottomTab.Navigator
      initialRouteName="Menu"
      screenOptions={
        ({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName
            if (route.name === "Menu") {
              iconName = focused ? "grid" : "grid-outline"
            }
            else if (route.name === "Contact") {
              iconName = focused ? "chatbubbles" : "chatbubbles-outline"
            }
            else if (route.name === "Subscribe") {
              iconName = focused ? "mail" : "mail-outline"
            }
            else if (route.name === "Async Storage") {
              iconName = focused ? "hammer" : "hammer-outline"
            }
            else if (route.name === "Menu SQLite") {
              iconName = focused ? "menu" : "menu-outline"
            }
            return <Ionicons name={iconName} size={size} color={color} />
          },
          tabBarActiveTintColor: 'blue',
          tabBarInActiveTintColor: '#666',
          headerTitleAlign: 'center',
          headerTitle: () => <HeaderLogo />,
        })
      }
    >
      <BottomTab.Screen
        name="Menu"
        options={{ title: "Menu" }}
        component={MenuScreen}
      />
      <BottomTab.Screen
        name="Contact"
        options={{ title: "Contact" }}
        component={ContactForm}
      />
      <BottomTab.Screen
        name="Subscribe"
        options={{ title: "Newsletter" }}
        component={SubscribeScreen}
      />
      <BottomTab.Screen
        name="Async Storage"
        options={{ title: "Preferences" }}
        component={SetupAsyncStorage}
      />
      <BottomTab.Screen
        name="Menu SQLite"
        options={{ title: "Menu Live" }}
        component={SetupSQLite}
      />
    </BottomTab.Navigator>
  )
}

export default BottomTabNav