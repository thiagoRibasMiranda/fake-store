import * as React from 'react';
import { Flex, Grid, Text } from '@chakra-ui/react';
import { Header } from '../components/Header';
import { CartItem } from '../components/CartItem';
import { CartItemType, CartItensContext, CartItensContextType } from '../context/cartItensContext';
import { TotalOrder } from '../components/TotalOrder';

export function ShoppingCart(): JSX.Element {
  const { cartItens } = React.useContext(CartItensContext) as CartItensContextType;

  return (
    <div>
      <Header />
      <Grid templateRows="repeat(1, 1fr)" gap={2} p="2">
        {
          cartItens
            ? (cartItens.map((item: CartItemType) => (
              <CartItem id={item.id} qtd={item.qtd} key={item.id} />)))
            : (<Text>Your cart is empty</Text>)
        }
      </Grid>
      <Flex justify="flex-end" p="10" pr="75">
        <TotalOrder />
      </Flex>
    </div>
  );
}
