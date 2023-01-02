import * as React from 'react';
import {
  Button,
  Icon,
  Box,
  Text,
  Center,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { CartItensContext, CartItensContextType } from '../context/cartItensContext';

export function ButtonCartShopping(): JSX.Element {
  const { cartItens } = React.useContext(CartItensContext) as CartItensContextType;
  const [totalItens, setTotalItens] = React.useState(0);

  React.useEffect(() => {
    const sumItens = cartItens.reduce((acc, obj) => (acc + obj.qtd), 0);
    setTotalItens(sumItens);
  }, [cartItens]);

  return (
    <Button p="0" m="0" w="5" h="5" bg="none">
      <Link to="/cart">
        <Icon viewBox="0 0 576 512" color="blue.800">
          <path
            fill="currentColor"
            d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"
          />
        </Icon>
        <Box display="inline-flex" position="absolute" justifyContent="center" alignItems="center" top="-1" right="-1" w="2.5" h="2.5" borderRadius="100" bg="red.500" color="white">
          <Center>
            <Text as="p" fontSize="xs">
              {totalItens}
            </Text>
          </Center>
        </Box>
      </Link>
    </Button>
  );
}
