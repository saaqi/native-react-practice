import {
  Text,
  StyleSheet,
  SectionList,
  View,
  Pressable,
} from 'react-native'
import { useState } from 'react'


const menuItemsToDisplay = [
  {
    title: 'Appetizers',
    data: [
      { name: 'Hummus', price: '$5.00' },
      { name: 'Moutabal', price: '$5.00' },
      { name: 'Falafel', price: '$7.50' },
      { name: 'Marinated Olives', price: '$5.00' },
      { name: 'Kofta', price: '$5.00' },
      { name: 'Eggplant Salad', price: '$8.50' },
    ].map((item, index) => ({ ...item, id: `appetizer-${index}` })),
  },
  {
    title: 'Main Dishes',
    data: [
      { name: 'Lentil Burger', price: '$10.00' },
      { name: 'Smoked Salmon', price: '$14.00' },
      { name: 'Kofta Burger', price: '$11.00' },
      { name: 'Turkish Kebab', price: '$15.50' },
    ].map((item, index) => ({ ...item, id: `main-dished-${index}` })),
  },
  {
    title: 'Sides',
    data: [
      { name: 'Fries', price: '$3.00', id: '11K' },
      { name: 'Buttered Rice', price: '$3.00' },
      { name: 'Bread Sticks', price: '$3.00' },
      { name: 'Pita Pocket', price: '$3.00' },
      { name: 'Lentil Soup', price: '$3.75' },
      { name: 'Greek Salad', price: '$6.00' },
      { name: 'Rice Pilaf', price: '$4.00' },
    ].map((item, index) => ({ ...item, id: `sides-${index}` })),
  },
  {
    title: 'Desserts',
    data: [
      { name: 'Baklava', price: '$3.00' },
      { name: 'Tartufo', price: '$3.00' },
      { name: 'Tiramisu', price: '$5.00' },
      { name: 'Panna Cotta', price: '$5.00' },
    ].map((item, index) => ({ ...item, id: `desserts-${index}` })),
  },
];

const menuHeader = () => <Text style={styles.menuHeader}>Our Menu</Text>
const menuFooter = () => <Text style={styles.menuFooter}>All Rights Reserved 2024</Text>
const Separator = () => <View style={styles.separator}></View>
const Foods = ({name, price}) => {
  return (
    <View style={styles.listStyles}>
      <Text style={styles.listItemName}>{name}</Text>
      <Text style={styles.listItemPrice}>{price}</Text>
    </View>
  )
}
const renderItem = ({item}) => <Foods name={item.name} price={item.price} />
const renderSectionHeader = ({ section: {title} }) => (
  <Text style={styles.sectionHeader}>{title}</Text>
)


const SectionListEx = () => {

  const [buttonStyle, setButtonStyle] = useState('submitButton');
  const [menuState, setMenuState] = useState(true);

  const submitButtonAction = () => {
    setMenuState(!menuState);
  }

  const pressInButtonStyle = () => {
    setButtonStyle('submitButtonPressed');
  }

  const pressOutButtonStyle = () => {
    setButtonStyle('submitButton');
  }

  return (
    <View style={styles.listContainer}>
      <Pressable
        onPress={submitButtonAction}
        onPressIn={pressInButtonStyle}
        onPressOut={pressOutButtonStyle}
        // onLongPress={}
        // delayLongPress={}
      >
        <Text style={styles[buttonStyle]}>
          {menuState ? 'Hide Menu' : 'Show Menu'}
        </Text>
      </Pressable>
      {menuState && (<SectionList
        // keyExtractor={(item, index) => item + index}
        keyExtractor={(item) => item.id}
        sections={menuItemsToDisplay}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
        ItemSeparatorComponent={Separator}
        ListHeaderComponent={menuHeader}
        ListFooterComponent={menuFooter}
      />)}
    </View>
  )
}

export default SectionListEx

//Style Sheet
const styles = StyleSheet.create({

  listContainer: {
    flex: 1,
  },

  listStyles: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  submitButton: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: 'blue',
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    borderRadius: 10,
    marginVertical: 10,
    width: '50%',
    // marginHorizontal: 'auto',
    alignSelf: 'center'
  },

  submitButtonPressed: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: 'lightblue',
    textAlign: 'center',
    color: '#333',
    fontWeight: 'bold',
    borderRadius: 10,
    marginVertical: 10,
    width: '50%',
    alignSelf: 'center'
  },

  menuHeader: {
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
    paddingBottom: 10
  },

  sectionHeader: {
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
    backgroundColor: '#333',
    paddingVertical: 5,
    borderRadius:15,
    marginBottom: 10,
    color: '#fefefe'
  },

  menuFooter: {
    textAlign: 'center',
    paddingTop: 10,
    paddingBottom: 20,
    // backgroundColor: '#eee',
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