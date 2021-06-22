import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import RareAnimals from '../screens/RareAnimals';
import CategoryDetail from '../screens/CategoryDetail';

const RareAnimalsStack = createStackNavigator()

function RareAnimalsStackScreen() {
  return (
    <RareAnimalsStack.Navigator>
      <RareAnimalsStack.Screen name="RareAnimals" component={RareAnimals} />
      <RareAnimalsStack.Screen name="CategoryDetail" component={CategoryDetail} />
    </RareAnimalsStack.Navigator>
  );
}

export default RareAnimalsStackScreen;