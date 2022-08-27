import { CheckoutProduct } from "../styles/checkout";
import { FiX } from 'react-icons/fi'
import { ModalTypes } from "../App";
import { useAppSelector } from "../redux";
import { CartProduct } from "./CartProduct";
import toast from "react-hot-toast";

export const Checkout: React.FC<ModalTypes> = ({isOpen, setIsOpen}) => {

  const cartItems = useAppSelector(({products}) => products.cartProducts)
  const totalPriceProducts = useAppSelector(({products}) => products.totalPrice)

  return (
    <CheckoutProduct<Boolean | any> open={isOpen}>
      <header>
        <h1>Carrinho <span>de compras</span></h1>
        <div
          onClick={() => setIsOpen(false)}
        >
          <FiX />
        </div>
      </header>
      <section>
        <main>
            {cartItems.map((product) => <CartProduct product={product} />)}
        </main>
        <footer>
          <section>
            <h1>Total <span>R${totalPriceProducts}</span></h1>
          </section>
          <button
            onClick={() => toast.error('Trabalhando nisso 🚧')}
          >
            Finalizar compra
          </button>
        </footer>
      </section>
      
    </CheckoutProduct>
  );
};
