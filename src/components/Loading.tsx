import * as React from 'react';
import {
  Center,
  Heading,
} from '@chakra-ui/react';

export function Loading(): JSX.Element {
  return (
    <Center>
      <Heading as="h3" size="lg">Loading</Heading>
    </Center>
  );
}
