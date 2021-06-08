import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CategoryListItem from './components/CategoryListItem';

import StopWatch from './assets/stopwatch.png';

var titleDemo = "Title demo";

export default function App() {
  return (
    <View style={styles.container}>
      <CategoryListItem title="Item 1" StopWatch={StopWatch} />
      <CategoryListItem title= {titleDemo} />
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
    paddingRight: 16,
    paddingLeft: 16,
  },
});
