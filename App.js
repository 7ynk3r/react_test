import React from 'react';
import { View } from 'react-native';

const MyView = (props) => <View {...props}/>;
const MySubComponent = (props) => <MyView {...props}/>
const MyComponent = () => (
  <View>
    <View/>
    <MyView/>
    <MySubComponent/>
  </View>
);

export default MyComponent;
