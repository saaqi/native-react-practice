import { StyleSheet, SafeAreaView } from 'react-native';
import Header from './components/Header'
import Body from './components/Body'


export default function App() {

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Body />
    </SafeAreaView>
  );
}


//Style Sheet
const styles = StyleSheet.create({
  container: {
    alignItems:"center",
    flex: 1
  }
})