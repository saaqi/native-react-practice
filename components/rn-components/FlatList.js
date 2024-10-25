import { Text, StyleSheet, FlatList, View } from 'react-native'

const menuHeader = () => <Text style={styles.menuHeader}>Our Menu</Text>
const menuFooter = () => <Text style={styles.menuFooter}>All Rights Reserved 2024</Text>

const listItmes = [
{ name: 'Hummus', price: '5.00', id: '1A' },
  { name: 'Moutabal', price: '$.00', id: '2B' },
  { name: 'Falafel', price: '7.50', id: '3C' },
  { name: 'Marinated Olives', price: '5.00', id: '4D' },
  { name: 'Kofta', price: '5.00', id: '5E' },
  { name: 'Eggplant Salad', price: '8.50', id: '6F' },
  { name: 'Lentil Burger', price: '10.00', id: '7G' },
  { name: 'Smoked Salmon', price: '14.00', id: '8H' },
  { name: 'Kofta Burger', price: '11.00', id: '9I' },
  { name: 'Turkish Kebab', price: '15.50', id: '10J' },
  { name: 'Fries', price: '3.00', id: '11K' },
  { name: 'Buttered Rice', price: '3.00', id: '12L' },
  { name: 'Bread Sticks', price: '3.00', id: '13M' },
  { name: 'Pita Pocket', price: '3.00', id: '14N' },
  { name: 'Lentil Soup', price: '3.75', id: '15O' },
  { name: 'Greek Salad', price: '6.00', id: '16Q' },
  { name: 'Rice Pilaf', price: '4.00', id: '17R' },
  { name: 'Baklava', price: '3.00', id: '18S' },
  { name: 'Tartufo', price: '3.00', id: '19T' },
  { name: 'Tiramisu', price: '5.00', id: '20U' },
  { name: 'Panna Cotta', price: '5.00', id: '21V' },
].map((item, index) => ({ ...item, id: `desserts-${index}` }));

const Foods = ({name, price}) => {
  return (
    <View style={styles.listStyles}>
      <Text style={styles.listItemName}>{name}</Text>
      <Text style={styles.listItemPrice}>{price}</Text>
    </View>
  )
}

const Separator = () => <View style={styles.separator}></View>

const renderItem = ({item}) => <Foods name={item.name} price={`$` + item.price} />

const FlatListEx = () => {
  return (
    <View style={styles.listContainer}>
      <FlatList 
        data={listItmes} 
        // keyExtractor={(item, index) => item + index}
        keyExtractor={(item) => item.id}
        renderItem={renderItem} 
        ItemSeparatorComponent={Separator}
        ListHeaderComponent={menuHeader}
        ListFooterComponent={menuFooter}
      />
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
  },

  listItemPrice: {
    paddingBottom: 5,
    marginRight: 20
  },

  separator: {
    borderBottomWidth: 1,
    borderColor: '#666',
    paddingTop: 1
  }
  
})