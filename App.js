import React from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native';
import CategoryListItem from './components/CategoryListItem';

import StopWatch from './assets/stopwatch.png';
import Whale from './assets/whale.png';
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [
        { id: 1, name: 'Item 1', image: StopWatch },
        { id: 2, name: 'Item 2', image: Whale },
        // { id: 3, name: 'Item 3', image: StopWatch },
        // { id: 4, name: 'Item 4', image: StopWatch },
        // { id: 5, name: 'Item 5', image: StopWatch },
      ]
    };
  }

  render() {
    const { categories } = this.state;
    return (
      // <ScrollView style={{ paddingLeft: 16, paddingRight: 16, paddingTop: 32, }} /*contentContainerStyle={{ backgroundColor: '#fff' }} */>
      // { <CategoryListItem title="Item 1" StopWatch={StopWatch} />
      //   <CategoryListItem title={titleDemo} /> }

      // { {categories.map(category => (
      //     <CategoryListItem key={category.id} category={category} />
      //   ))} }
      // </ScrollView>

      <FlatList
        data={categories}
        renderItem={({ item }) => <CategoryListItem category={item} />}
        keyExtractor={(item) => `${item.id}`}
        contentContainerStyle={{ paddingLeft: 16, paddingRight: 16, paddingTop: 32,}}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
    paddingTop: 32,
    paddingRight: 16,
    paddingLeft: 16,
  },
});
