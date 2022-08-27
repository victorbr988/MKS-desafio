import React, { Fragment, useState } from 'react';
import GlobalStyle from './styles/globalStyles';
import { Header } from './components/Header';
import { Products } from './components/Products';
import { Checkout } from './components/Checkout';

export interface ModalTypes {
  isOpen?: boolean;
  setIsOpen: (value: boolean) => void;
}

const App: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  return (
    <Fragment>
      <GlobalStyle />
      <Header
        setIsOpen={setIsOpen}
      />
      <Products/>
      <Checkout
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
    </Fragment>
  );
};


export default App;
