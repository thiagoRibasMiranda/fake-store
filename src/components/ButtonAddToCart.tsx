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
  const { cartItens, saveCartItem } = React.useContext(CartItensContext) as CartItensContextType;

  function handleClick(id: number): void | null {
    if (cartItens.some((item) => item.id === id)) {
      return null;
    }
    return saveCartItem(id);
  }

  return (
    <Button colorScheme="teal" variant="ghost" onClick={() => handleClick(productId)}>
      Add to Cart
    </Button>
  );
}
