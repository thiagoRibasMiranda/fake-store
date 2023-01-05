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
      let totalItem = 0;
      let total = 0;
      await Promise.all(arrItens.map(async (i) => {
        const item = await getProductById(i.id);
        totalItem += (i.qtd * Number(item.price));
        total += totalItem;
      }));
      setTotalOrder(total);
    }
    fetchData();
  }, [cartItens]);

  return (
    <Text>{`Total: ${totalOrder.toFixed(2)}`}</Text>
  );
}
