import { screen, render, waitFor  } from '@testing-library/react';
import App from '../App';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
// import { products } from './helpers/mockProducts';
import React, { ReactNode } from 'react';
import {store} from '../redux'
// import { useAppDispatch } from '../redux';
// import { setAllProducts } from '../redux/Slices/reducer';

const renderWithProvider = (component: ReactNode) => { 
  render(
  <Provider store={store}>
    {component}
  </Provider>
)}

describe('Página home da aplicação', () => {
  describe('Verifica se o Header da aplicação possui os elementos corretos', () => {
    it('verifica se o header possui uma Logo chamada "MKS sistemas"', () => {
      renderWithProvider(<App />);

      const logo = screen.getByRole('heading', {
        name: /MKS sistemas/i,
        level: 1
      });
      expect(logo).toBeInTheDocument();
    })
    it('verifica se o header possui um botão para abrir o carrinho de compras', () => {
      renderWithProvider(<App />);

      const buttonOpenCheckout = screen.getByTestId('add-product-cart');

      expect(buttonOpenCheckout).toBeInTheDocument();
    })
    it('verifica se ao clicar no botão, é aberto um modal', () => {
      renderWithProvider(<App />);

      const buttonOpenCheckout = screen.getByTestId('add-product-cart');

      userEvent.click(buttonOpenCheckout)

      const titleModal = screen.getByRole('heading', {
        name: /Carrinho de compras/i,
        level: 1
      });
      expect(titleModal).toBeInTheDocument();
    });
  });

  describe('Verifica se os produtos são renderizados corretamente', () => {

    it('testa se o card de produtos possui imagem, título, descrição e preço', async () => {
      renderWithProvider(<App />);

      const imageProduct = await screen.findByRole('img', {
        name: /imagem de um Iphone 11/i
      })
      const titleProduct = await screen.findByRole('heading', {
        name: /Iphone 11 128 GB/i,
        level: 1
      })
      const descriptionProduct = await screen.findAllByText("Grave vídeos 4K, faça belos retratos e capture paisagens inteiras com o novo sistema de câmera dupla.");
      
      const priceProduct = await screen.findByRole('heading', {
        name: 'R$ 5000.00',
        level: 2
      })

      const buttonAddToCart = await screen.findAllByRole('button', {
        name: /Comprar/i
      })

      await waitFor(()=> {
        expect(imageProduct).toBeInTheDocument()
      })
      await waitFor(()=> {
        expect(titleProduct).toBeInTheDocument()
      })
      await waitFor(()=> {
        expect(descriptionProduct[0]).toBeInTheDocument()
      })
      await waitFor(()=> {
        expect(priceProduct).toBeInTheDocument()
      })
      await waitFor(()=> {
        expect(buttonAddToCart[0]).toBeInTheDocument()
      })
    })
  })

  describe('verifica se os produtos são adicionados ao carrinho', () => {
    it('testa se ao clicar no produto, ele é adicionado ao carrinho', async () => {
      renderWithProvider(<App />)
      const buttonAddToCart = await screen.findAllByRole('button', {
        name: /Comprar/i
      })

      userEvent.click(buttonAddToCart[0])
      const buttonOpenCheckout = screen.getByTestId('add-product-cart');
      userEvent.click(buttonOpenCheckout)

      const productCart = screen.getByTestId('cart-product')
      

      await waitFor(() => {
        expect(productCart).toBeInTheDocument();
      })
    })
  })

  describe('Verifica se o footer está no padrão correto', () => {
    it('Testa se o footer possui uma mensagem de direitos autorais', () => {
      renderWithProvider(<App />);
      const copyright = 'MKS sistemas © Todos os direitos reservados';

      const getByCopyright = screen.getByText(copyright)

      expect(getByCopyright).toBeInTheDocument();
    })
  })
});