import { View, Button, Text } from 'react-native';
import React from 'react';

export const Cart = ({ cart }) => (
  <Container>
    <User user={ cart.user } />
    <Items items={ cart.items } />
  </Container>
);

export const Container = (props) => <View { ...props } />

export const User = ({ user }) => (
  <Title>{ user.name + ' - ' + user.email }</Title>
);

export const Title = (props) => <Text { ...props } />

export class Items extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.calculateState(props.items);
  }
  calculateState = (items) => ({
    items,
    total: items.map(item => item.price)
      .reduce((a, b) => a + b, 0),
  })
  deleteItem = ({ id }) => {
    const items = this.state.items.filter(item => item.id !== id);
    this.setState(this.calculateState(items));
  }
  render = () => (
    <Container>
      { this.state.items.map(item => (
        <Item
          key={ item.id }
          item={ item }
          onDelete={ () => this.deleteItem(item) }
        />
      ))}
      <Total total={ this.state.total }/>
    </Container>
  )
}

const Total = ({ total }) => <Text>Total { total }</Text>

const Item = ({ item, onDelete }) => (
  <Container>
    <Text>{ item.name }</Text>
    <Text>{ item.price }</Text>
    <Button title='Delete' onPress={ onDelete }/>
  </Container>
);

export default Cart;
