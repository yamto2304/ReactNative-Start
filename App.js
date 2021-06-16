import React from 'react';
import 'react-native-gesture-handler';
import { StyleSheet, View, Text, Button } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Categories from './screens/Categories';
import Category from './screens/CategoryDetail';

const Stack = createStackNavigator();
export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Categories" component={Categories} options={{title:'Home'}}/>
          <Stack.Screen name="Category" component={Category} />
        </Stack.Navigator>
      </NavigationContainer>
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
