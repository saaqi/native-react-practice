import { StyleSheet, SafeAreaView, useColorScheme, useWindowDimensions } from 'react-native';
import Header from './components/Header'
import Body from './components/Body'


export default function App() {
  const colorScheme = useColorScheme();
  return (
    <SafeAreaView style={[
      styles.container,
      {
        backgroundColor: colorScheme === 'dark' ? '#333' : 'white',
        color: colorScheme === 'dark' ? '#fefefe' : '#333',
      }
    ]}>
      <Header />
      <Body />
    </SafeAreaView>
  );
}


//Style Sheet
const styles = StyleSheet.create({
  container: {
    alignItems:"center",
    flex: 1,
  }
})