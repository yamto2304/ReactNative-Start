import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Category from '../screens/CategoryDetail';
import Categories from '../screens/Categories';

const CategoriesStack = createStackNavigator();

function CategoryStackScreen(){
  return (
    <CategoriesStack.Navigator>
      <CategoriesStack.Screen name="Categories" component={Categories} />
      <CategoriesStack.Screen name="Category" component={Category} />
    </CategoriesStack.Navigator>
  )
}

export default CategoryStackScreen;