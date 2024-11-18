import { Text, StyleSheet, FlatList, View, ActivityIndicator } from 'react-native'
import { useEffect, useState } from 'react'

const FlatListEx = () => {

  const menuHeader = () => <Text style={styles.menuHeader}>Our Menu</Text>
  const menuFooter = () => <Text style={styles.menuFooter}>All Rights Reserved 2024</Text>
  const Separator = () => <View style={styles.separator}></View>

  const Foods = ({ name, price, category }) => {
    return (
      <View style={styles.listStyles}>
        <Text style={styles.listItemName}>{name} ({category.title}) </Text>
        <Text style={styles.listItemPrice}>{price}</Text>
      </View>
    )
  }

  const renderItem = ({ item }) =>
    <Foods
      name={item.title}
      category={item.category}
      price={`$` + item.price}
    />

  const [isLoading, setLoading] = useState(true)
  const [menuList, setMenuList] = useState([])

  const getMenu = async () => {
    try {
      const response = await fetch(
        // '../assets/menu-items.json'
        'https://raw.githubusercontent.com/Meta-Mobile-Developer-PC/Working-With-Data-API/main/menu-items-by-category.json'
      )
      const json = await response.json()
      setMenuList(json.menu)
    } catch (e) {
      console.error(e)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getMenu()
  }, [])

  return (
    <View style={styles.listContainer}>
      {isLoading ? (<ActivityIndicator />) : (
        <FlatList
          data={menuList}
          // keyExtractor={(item, index) => item + index}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          ItemSeparatorComponent={Separator}
          ListHeaderComponent={menuHeader}
          ListFooterComponent={menuFooter}
        />
      )}
    </View>
  )
}

export default FlatListEx

//Style Sheet
const styles = StyleSheet.create({

  listContainer: {
    flex: 1,
  },

  listStyles: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  menuHeader: {
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center'
  },

  menuFooter: {
    textAlign: 'center',
    paddingTop: 10,
    paddingBottom: 20,
    backgroundColor: '#eee',
    marginTop: 10,
  },

  listItemName: {
    paddingBottom: 5,
    flex: .33
  },

  listItemPrice: {
    paddingBottom: 5,
    marginRight: 20,
    textAlign: 'right',
    flex: .33
  },

  separator: {
    borderBottomWidth: 1,
    borderColor: '#666',
    paddingTop: 1
  }

})