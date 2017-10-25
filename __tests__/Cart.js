import { View, Button, Text } from 'react-native';
import React from 'react';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import ShallowRenderer from 'react-test-renderer/shallow';

import { Cart, Items, User } from '../Cart';

describe('User', () => {
  const user = {
    name: 'joe',
    email: 'joe@mail.com',
  };

  it('renders deep correctly', () => {
    const tree = renderer.create(<User user={ user }/>);
    expect(tree).toMatchSnapshot();
  });

  it('renders shallow correctly', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<User user={ user }/>);
    const tree = renderer.getRenderOutput();
    expect(tree).toMatchSnapshot();
  });
})

describe('Cart', () => {
  const cart = {
    user: {
      name: 'joe',
      email: 'joe@mail.com',
    },
    items: [{
      id: 1, name: 'item 1', price: 7,
    }, {
      id: 2, name: 'item 2', price: 4,
    }]
  };

  it('renders deep correctly', () => {
    const tree = renderer.create(<Cart cart={ cart }/>);
    expect(tree).toMatchSnapshot();
  });

  it('renders shallow correctly', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<Cart cart={ cart }/>);
    const tree = renderer.getRenderOutput();
    expect(tree).toMatchSnapshot();
  });
});

describe('Items', () => {
  it('renders zero items correctly', () => {
    const renderer = new ShallowRenderer();
    const items = [];

    renderer.render(<Items items={ items }/>);
    const result0 = renderer.getRenderOutput();
    expect(result0).toMatchSnapshot();
  });

  it('renders one item correctly', () => {
    const renderer = new ShallowRenderer();
    const items = [{
      id: 1, name: 'item 1', price: 7,
    }];

    renderer.render(<Items items={ items }/>);
    const result0 = renderer.getRenderOutput();
    expect(result0).toMatchSnapshot();
  });

  it('renders two items and deletes correctly', () => {
    const renderer = new ShallowRenderer();
    const items = [{
      id: 1, name: 'item 1', price: 7,
    }, {
      id: 2, name: 'item 2', price: 4,
    }];

    renderer.render(<Items items={ items }/>);
    const result0 = renderer.getRenderOutput();
    expect(result0).toMatchSnapshot();

    // access the first item and call `onDelete`.
    result0.props.children[0][0].props.onDelete();
    const result1 = renderer.getRenderOutput();
    expect(result1).toMatchSnapshot();
  });
});
