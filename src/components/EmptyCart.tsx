import * as React from 'react';
import {
  Center,
  Heading,
} from '@chakra-ui/react';

export function EmptyCart(): JSX.Element {
  return (
    <div>
      <Center>
        <Heading as="h4" size="lg">Your Cart Is Empty</Heading>
      </Center>
      <Center>
        <Heading as="h5" size="sm">Looks like you haven&lsquo;t add any item to your cart yet</Heading>
      </Center>
    </div>
  );
}
