import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, SafeAreaView } from 'react-native';
import myStr from './MapList.json'

function MapList() {

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerText}>Little Lemon</Text>
      {myStr.map((menuItem, index) => {
        return (
          <View key={menuItem.id || 'menuItem#' + index} style={styles.innerContainer}>
            <Text style={styles.itemText}>{'Menu Item: ' + menuItem.name}</Text>
            <Text style={styles.itemText}>{'Price: ' + menuItem.price}</Text>
            <Text style={styles.itemText}>{'Type: ' + menuItem.type}</Text>
          </View>
        );
      })}
    </SafeAreaView>
  );
}

export default MapList


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4CE14',
  },
  innerContainer: {
    paddingHorizontal: 40,
    paddingVertical: 20,
    backgroundColor: '#F4CE14',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  itemText: {
    color: '#495E57',
    fontSize: 22,
  },
  headerText: {
    color: '#495E57',
    fontSize: 30,
    textAlign: 'center',
  },
});