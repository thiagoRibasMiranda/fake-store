import * as React from 'react';
import { Grid, Text } from '@chakra-ui/react';
import { Header } from '../components/Header';
import { CartItem } from '../components/CartItem';
import { CartItemType, CartItensContext, CartItensContextType } from '../context/cartItensContext';

export function ShoppingCart(): JSX.Element {
  const { cartItens } = React.useContext(CartItensContext) as CartItensContextType;

  return (
    <div>
      <Header />
      <Grid templateRows="repeat(5, 1fr)" gap={2} p="2">
        {
          cartItens
            ? (cartItens.map((item: CartItemType) => (
              <CartItem id={item.id} qtd={item.qtd} key={item.id} />)))
            : (<Text>Your cart is empty</Text>)
        }
      </Grid>
    </div>
  );
}
