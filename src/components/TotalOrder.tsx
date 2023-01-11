import * as React from 'react';
import { Center, Spinner, Text } from '@chakra-ui/react';
import getProductById from '../services/getProductById';
import { CartItensContext, CartItensContextType } from '../context/cartItensContext';

export function TotalOrder(): JSX.Element {
  const { cartItens } = React.useContext(CartItensContext) as CartItensContextType;
  const [totalOrder, setTotalOrder] = React.useState(0);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const arrItens = cartItens;
    async function fetchData(): Promise<void> {
      setLoading(true);
      let total = 0;
      await Promise.all(arrItens.map(async (i) => {
        const item = await getProductById(i.id);
        total += (i.qtd * Number(item.price));
      }));
      setTotalOrder(total);
      setLoading(false);
    }
    fetchData();
  }, [cartItens]);

  return (
    <Center width="10%">
      {loading ? (<Spinner />) : (<Text>{`Total: ${totalOrder.toFixed(2)}`}</Text>)}
    </Center>
  );
}
