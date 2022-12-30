/* eslint-disable react/function-component-definition */
import * as React from 'react';
import CartItensProvider from './cartItensContext';

interface Props{
  children: React.ReactNode
}
const GlobalContext: React.FC<Props> = ({ children }) => (
  <CartItensProvider>{children}</CartItensProvider>
);

export default GlobalContext;
