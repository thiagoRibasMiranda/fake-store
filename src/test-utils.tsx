/* eslint-disable @typescript-eslint/explicit-function-return-type */
import * as React from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { ChakraProvider, theme } from '@chakra-ui/react';

// eslint-disable-next-line react/require-default-props
function AllProviders({ children }: { children?: React.ReactNode }) {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
}

const customRender = (ui: React.ReactElement, options?: RenderOptions) => {
  render(ui, { wrapper: AllProviders, ...options });
};

export { customRender as render };
