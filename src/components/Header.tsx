import CartIcon from '../Icons/Cart.svg';
import { HeaderPage } from '../styles/header';
import { ModalTypes } from '../App';
import { useAppSelector } from '../redux';

export const Header: React.FC<ModalTypes> = ({ setIsOpen }) => {

  const cartProducts = useAppSelector(({ products }) => products.cartProducts)

  return (
    <HeaderPage>
      <section>
        <h1>MKS <span>sistemas</span></h1>
      </section>
      <section>
        <button
          data-testid='add-product-cart'
          onClick={() => setIsOpen(true)}
        >
          <img src={CartIcon} width='16px' height='16px' alt="Imagem de um carrinho de compraas cinza" />
          {cartProducts.length}
        </button>
      </section>
    </HeaderPage>
  );
};
