import React from 'react';
import { View } from 'react-native';
import Cart from './Cart';

const cart = {
  user: {
    name: 'joe',
    email: 'joe@mail.com',
  },
  items: [{
    id: 1,
    name: 'item 1',
    price: 1,
  },{
    id: 2,
    name: 'item 2',
    price: 2,
  },{
    id: 3,
    name: 'item 3',
    price: 3,
  }],
};

export default () => (
  <View style={{margin:50}}>
    <Cart cart={cart}/>
  </View>
);
