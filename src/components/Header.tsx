import * as React from 'react';
import {
  Center,
  Flex,
  Heading,
} from '@chakra-ui/react';
import { ButtonCartShopping } from './ButtonCartShopping';

export function Header(): JSX.Element {
  return (
    <Flex justify="space-between" width="100%" p="2" px="6" background="gray.100">
      <Center>
        <Heading as="h3" size="lg" color="blue.900">Fake Store</Heading>
      </Center>
      <ButtonCartShopping />
    </Flex>
  );
}
