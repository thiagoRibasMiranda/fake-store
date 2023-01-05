import * as React from 'react';
import {
  Center,
  CloseButton,
} from '@chakra-ui/react';
import { CartItensContext, CartItensContextType } from '../context/cartItensContext';

interface Props {
  itemId: number,
}

export function ButtonDeleteItem(props: Props): JSX.Element {
  const { itemId } = props;
  const {
    deleteCartItem,
  } = React.useContext(CartItensContext) as CartItensContextType;

  const handleClick = (id: number): void => {
    deleteCartItem(id);
  };

  return (
    <Center>
      <CloseButton size="md" onClick={() => handleClick(itemId)} />
    </Center>
  );
}
