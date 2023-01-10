import * as React from 'react';
import { Text } from '@chakra-ui/react';
import getProductById from '../services/getProductById';
import { CartItensContext, CartItensContextType } from '../context/cartItensContext';

export function TotalOrder(): JSX.Element {
  const { cartItens } = React.useContext(CartItensContext) as CartItensContextType;
  const [totalOrder, setTotalOrder] = React.useState(0);

  React.useEffect(() => {
    const arrItens = cartItens;
    async function fetchData(): Promise<void> {
      let total = 0;
      await Promise.all(arrItens.map(async (i) => {
        const item = await getProductById(i.id);
        total += (i.qtd * Number(item.price));
      }));
      setTotalOrder(total);
    }
    fetchData();
  }, [cartItens]);

  return (
    <Text>{`Total: ${totalOrder.toFixed(2)}`}</Text>
  );
}
