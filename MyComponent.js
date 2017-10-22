import React from 'react';
import { View } from 'react-native';

export const MyView = (props) => <View {...props}/>;
export const MySubComponent = (props) => <MyView {...props}/>
export const MyComponent = () => (
  <View>
    <View/>
    <MyView/>
    <MySubComponent/>
  </View>
);

export default MyComponent;
