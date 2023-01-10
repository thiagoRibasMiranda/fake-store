/* eslint-disable react/function-component-definition */
/* eslint-disable react/jsx-no-constructed-context-values */

import * as React from 'react';

export type CartItemType = {
  id: number;
  qtd: number;
};

export type CartItensContextType = {
  cartItens: CartItemType[];
  saveCartItem: (id: number) => void;
  updateCartItem: (cartItem: CartItemType) => void;
  deleteCartItem: (id: number) => void;
};

interface CartItensProviderProps{
  children: React.ReactNode
}

export const CartItensContext = React.createContext<CartItensContextType | null>(null);

const CartItensProvider: React.FC<CartItensProviderProps> = ({ children }) => {
  const [cartItens, setCartItens] = React.useState<CartItemType[]>([]);

  const saveCartItem = (id: number): void => {
    const newCartItem: CartItemType = {
      id,
      qtd: 1,
    };
    setCartItens([...cartItens, newCartItem]);
  };

  const updateCartItem = (cartItem: CartItemType): void => {
    const newArr = cartItens.map((obj) => {
      if (obj.id === cartItem.id) {
        return { ...obj, qtd: cartItem.qtd };
      }
      return obj;
    });
    setCartItens(newArr);
  };

  const deleteCartItem = (id: number): void => {
    const newArr = cartItens.filter((obj) => obj.id !== id);
    setCartItens(newArr);
  };

  return (
    <CartItensContext.Provider
      value={{
        cartItens,
        saveCartItem,
        updateCartItem,
        deleteCartItem,
      }}
    >
      {children}
    </CartItensContext.Provider>
  );
};

export default CartItensProvider;
