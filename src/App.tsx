import * as React from 'react';
import {
  ChakraProvider,
} from '@chakra-ui/react';
import { Home } from './pages/Home';
import GlobalContext from './context';

export function App(): JSX.Element {
  return (
    <ChakraProvider>
      <GlobalContext>
        <Home />
      </GlobalContext>
    </ChakraProvider>
  );
}
