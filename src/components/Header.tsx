import * as React from 'react';
import {
  Center,
  Flex,
  Heading,
} from '@chakra-ui/react';
import { ButtonCartShopping } from './ButtonCartShopping';

export function Header(): JSX.Element {
  return (
    <Flex justify="space-between" p="2" borderBottom="1px" borderColor="gray.200">
      <Center>
        <Heading as="h3" size="sm" color="blue.800">Fake Store</Heading>
      </Center>
      <ButtonCartShopping />
    </Flex>
  );
}
