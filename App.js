import { SafeAreaView } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'

// import DrawerNav from './components/navigators/DrawerNav'
// import StackNav from './components/navigators/StackNav'
import BottomTabNav from './components/navigators/BottomTabNav'

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaView style={{flex: 1}}>
        {/* <DrawerNav /> */}
        {/* <StackNav /> */}
        <BottomTabNav />
      </SafeAreaView>
    </NavigationContainer>
  );
}
