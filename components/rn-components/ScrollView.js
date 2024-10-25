import { Text, ScrollView, StyleSheet } from 'react-native'

const bodyText = 
`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id arcu sed nulla pretium lobortis at non mauris. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id arcu sed nulla pretium lobortis at non mauris 

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id arcu sed nulla pretium lobortis at non maurisLorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id arcu sed nulla pretium lobortis at non mauris

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id arcu sed nulla pretium lobortis at non maurisLorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id arcu sed nulla pretium lobortis at non mauris

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id arcu sed nulla pretium lobortis at non maurisLorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id arcu sed nulla pretium lobortis at non mauris`;

const ScrollViewEx = () => {
  return (
    <ScrollView 
    style={styles.textContainer}
      horizontal={false} 
      indicatorStyle={'#333'} 
    >
      <Text numberOfLines={18}>
        {bodyText}
      </Text>
    </ScrollView>
  )
}

export default ScrollViewEx


//Style Sheet
const styles = StyleSheet.create({
  textContainer: {
    flex: 1,
    marginBottom: 10,
  }
})