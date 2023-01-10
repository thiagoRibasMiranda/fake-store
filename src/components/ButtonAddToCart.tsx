import * as React from 'react';
import {
  Button,
} from '@chakra-ui/react';
import { CartItensContext, CartItensContextType } from '../context/cartItensContext';

interface Props {
  productId: number,
}

export function ButtonAddToCart(props: Props): JSX.Element {
  const { productId } = props;
  const {
    cartItens,
    saveCartItem,
    updateCartItem,
  } = React.useContext(CartItensContext) as CartItensContextType;

  function handleClick(id: number): void | null {
    const cartItem = cartItens.find((item) => item.id === id);
    if (cartItem) {
      const cartItemUpdate = { id, qtd: cartItem.qtd + 1 };
      return updateCartItem(cartItemUpdate);
    }
    return saveCartItem(id);
  }

  return (
    <Button colorScheme="blue" variant="ghost" onClick={() => handleClick(productId)}>
      Add to Cart
    </Button>
  );
}
