import * as React from 'react';
import {
  Text,
} from '@chakra-ui/react';

export interface Props {
  text: string;
}

export function App({ text }: Props): JSX.Element {
  return (
    <Text>
      { text }
    </Text>
  );
}
