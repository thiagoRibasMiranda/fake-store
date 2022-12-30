import * as React from 'react';
import {
  ChakraProvider,
} from '@chakra-ui/react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GlobalContext from './context';
import { Home } from './pages/Home';

export function App(): JSX.Element {
  return (
    <ChakraProvider>
      <GlobalContext>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </GlobalContext>
    </ChakraProvider>
  );
}
