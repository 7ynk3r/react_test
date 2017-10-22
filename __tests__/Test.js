import { View, Button, Text } from 'react-native';
import React from 'react';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import ShallowRenderer from 'react-test-renderer/shallow';

// const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const data = {
  user: 'joe',
  items: [{
    id: 1,
    name: 'item 1',
    price: 1,
  },{
    id: 2,
    name: 'item 2',
    price: 2,
  }],
}

const Cart = ({ cart }) => (
  <View>
    <User user={ cart.user } />
    <Items items={ cart.items } />
  </View>
);

const User = ({ user }) => <Text>{ user }</Text>;

class Items extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.calculateState(props.items);
  }
  calculateState = (items) => ({
    items,
    total: items.map(item => item.value)
      .reduce((a, b) => a + b, 0),
  })
  deleteItem = ({ id }) => {
    const items = this.state.items.filter(item => item.id !== id);
    this.setState(this.calculateState(items));
  }
  render = () => (
    <View>
      { this.state.items.map(item => (
        <Item
          key={ item.id }
          item={ item }
          onDelete={ () => this.deleteItem(item) }
        />
      ))}
      <Total total={ this.state.total }/>
    </View>
  )
}

const Total = ({ total }) => <Text>Total { total }</Text>

const Item = ({ item, onDelete }) => (
  <View>
    <Text>{ item.name }</Text>
    <Text>{ item.price }</Text>
    <Button title='Delete' onPress={ onDelete }/>
  </View>
);

it('renders correctly', () => {
  const cart = {
    user: 'joe',
    items: [{
      id: 1, name: 'item 1', value: 7,
    }, {
      id: 2, name: 'item 2', value: 4,
    }]
  };
  const tree = renderer.create(<Cart cart={ cart }/>);
  expect(tree).toMatchSnapshot();
});


it('renders empty correctly', () => {
  const renderer = new ShallowRenderer();
  const items = [];

  renderer.render(<Items items={ items }/>);
  const result0 = renderer.getRenderOutput();
  expect(result0).toMatchSnapshot();
});

it('renders one item correctly', () => {
  const renderer = new ShallowRenderer();
  const items = [{
    id: 1, name: 'item 1', value: 7,
  }];

  renderer.render(<Items items={ items }/>);
  const result0 = renderer.getRenderOutput();
  expect(result0).toMatchSnapshot();
});

it('renders one item deleted correctly', () => {
  const renderer = new ShallowRenderer();
  const items = [{
    id: 1, name: 'item 1', value: 7,
  }, {
    id: 2, name: 'item 2', value: 4,
  }];

  renderer.render(<Items items={ items }/>);
  const result0 = renderer.getRenderOutput();
  expect(result0).toMatchSnapshot();

  // delete item 2 item.
  result0.props.children[0][0].props.onDelete();
  const result1 = renderer.getRenderOutput();
  expect(result1).toMatchSnapshot();
});
