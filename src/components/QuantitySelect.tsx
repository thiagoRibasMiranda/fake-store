import * as React from 'react';
import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from '@chakra-ui/react';
import { CartItensContext, CartItensContextType } from '../context/cartItensContext';

interface Props {
  itemId: number,
  itemQtd: number,
}

export function QuantitySelect(props: Props): JSX.Element {
  const { itemId, itemQtd } = props;
  const { updateCartItem } = React.useContext(CartItensContext) as CartItensContextType;

  const handleChange = (qtd: string): void => {
    const formatedQtd = Number(qtd);
    updateCartItem({ id: itemId, qtd: formatedQtd });
  };

  return (
    <NumberInput
      onChange={(value) => handleChange(value)}
      value={itemQtd}
      max={50}
      width="15%"
    >
      <NumberInputField />
      <NumberInputStepper>
        <NumberIncrementStepper />
        <NumberDecrementStepper />
      </NumberInputStepper>
    </NumberInput>
  );
}
