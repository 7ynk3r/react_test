it('renders correctly', () => {});

// import { View, Button, Text } from 'react-native';
// import React from 'react';
//
// // Note: test renderer must be required after react-native.
// import renderer from 'react-test-renderer';
// import ShallowRenderer from 'react-test-renderer/shallow';
//
// const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));
// const MyText = (props) => <Text {...props}/>;
//
// const MyView = (props) => <View {...props}/>;
// const MySubComponent = (props) => <MyView {...props}/>
// const MyComponent = () => (
//   <View>
//     <View/>
//     <MyView/>
//     <MySubComponent/>
//   </View>
// );
//
// it('renders correctly', () => {
//   const tree = renderer.create(<MyComponent />);
//   expect(tree).toMatchSnapshot();
// });
//
// it('renders correctly', () => {
//   const renderer = new ShallowRenderer();
//   renderer.render(<MyComponent />);
//   const result = renderer.getRenderOutput();
//   expect(result).toMatchSnapshot();
// });
//
// class MyComponent2 extends React.Component {
//   state = { count: 0 };
//   onPress = () => {
//     const { count } = this.state;
//     this.setState({ count: count+1 })
//   };
//   render = () => (
//     <Button
//       title={`count ${this.state.count}`}
//       onPress={this.onPress}
//     />
//   );
// }
//
// it('renders correctly', () => {
//   const renderer = new ShallowRenderer();
//   renderer.render(<MyComponent2 />);
//   const result0 = renderer.getRenderOutput();
//   expect(result0).toMatchSnapshot();
//
//   result0.props.onPress();
//   const result1 = renderer.getRenderOutput();
//   expect(result1).toMatchSnapshot();
// });
