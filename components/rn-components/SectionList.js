// Import necessary modules
import { SectionList, Text, View, StyleSheet, Pressable } from 'react-native';
import menuData from './sectionMenuItems.json';
import { useState } from 'react'

const SectionListEx = () => {
  const [menuState, setMenuState] = useState(false);
  const [buttonStyle, setButtonStyle] = useState('submitButton');

  const submitButtonAction = () => {
    setMenuState(!menuState);
  };

  const pressInButtonStyle = () => {
    setButtonStyle('submitButtonPressed');
  };

  const pressOutButtonStyle = () => {
    setButtonStyle('submitButton');
  };

  const renderItem = ({ item }) => (
    <View style={styles.listStyles}>
      <Text style={styles.listItemName}>{item.name}</Text>
      <Text style={styles.listItemPrice}>{item.price}</Text>
    </View>
  );

  const renderSectionHeader = ({ section: { title } }) => (
    <Text style={styles.sectionHeader}>{title}</Text>
  );

  const menuHeader = () => <Text style={styles.menuHeader}>Our Menu</Text>;
  const menuFooter = () => <Text style={styles.menuFooter}>All Rights Reserved 2024</Text>;
  const Separator = () => <View style={styles.separator}></View>;

  return (
    <View style={styles.listContainer}>
      <Pressable
        onPress={submitButtonAction}
        onPressIn={pressInButtonStyle}
        onPressOut={pressOutButtonStyle}
      >
        <Text style={styles[buttonStyle]}>
          {menuState ? 'Hide Menu' : 'Show Menu'}
        </Text>
      </Pressable>
      {menuState && (
        <SectionList
          sections={menuData.menu}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          renderSectionHeader={renderSectionHeader}
          ItemSeparatorComponent={Separator}
          ListHeaderComponent={menuHeader}
          ListFooterComponent={menuFooter}
        />
      )}
    </View>
  );
};

// StyleSheet for styling the components
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
    alignSelf: 'center',
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
    alignSelf: 'center',
  },
  menuHeader: {
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
    paddingBottom: 10,
  },
  sectionHeader: {
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
    backgroundColor: '#333',
    paddingVertical: 5,
    borderRadius: 15,
    marginBottom: 10,
    color: '#fefefe',
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
    marginRight: 20,
  },
  separator: {
    borderBottomWidth: 1,
    borderColor: '#666',
    paddingTop: 1,
  },
});

export default SectionListEx;
