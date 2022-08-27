import { useState } from "react";
import toast from "react-hot-toast";
import { FiX } from "react-icons/fi";
import { useAppDispatch, useAppSelector } from "../redux/";
import { removeProductCart, setDecrementPrice, setIncrementPrice, } from "../redux/Slices/reducer";
import { ProductsTypes } from "../redux/types";
import { ProductsCarts } from "../styles/productsCart";

export const CartProduct: React.FC<{product: ProductsTypes}> = ({product}) => {
  const [totalProducts, setTotalProducts] = useState<number>(1)
  const cartProducts = useAppSelector(({ products }) => products.cartProducts)
  const dispatch = useAppDispatch()

  function  destroyProductClicked() {
    const findProduct = cartProducts.indexOf(product)
    const filter = cartProducts.filter((_product, index) => index !== findProduct)
    return filter
  };

  function increment() {
    setTotalProducts((prev) => prev + 1);
    dispatch(setIncrementPrice(Number(product.price)));
  };

  function decrement() {
    if(totalProducts > 1) {
      setTotalProducts((prev) => prev - 1);
      dispatch(setDecrementPrice(Number(product.price)));
    };
  };


  return (
    <ProductsCarts data-testid='cart-product'>
      <div key={product.id}>
       <section id="close-modal"
        onClick={() => {
          const totalPrice = totalProducts * Number(product.price)
          dispatch(setDecrementPrice(totalPrice))
          setTotalProducts(1)
          toast.success('Produto removido')
          dispatch(removeProductCart(destroyProductClicked()))
        }}
       >
          <FiX />
        </section>
        <section id="image-section">
          <img id="product-photo" src={product.photo} alt={`imagem de um ${product.name}`} />
        </section>
        <section className="section">
          <h1>{product.name}</h1> 
        </section>
        <section id="section-replace-qtd">
          <section id="replace-qtd">
            <button id="decrement" onClick={decrement}>-</button>
            <p>{totalProducts}</p>
            <button id="increment" onClick={increment}>+</button>   
          </section>
          <h2>{`R$ ${product.price}`}</h2>
        </section>  
        <section id="close-modal-new"
          onClick={() => {
            const totalPrice = totalProducts * Number(product.price)
            dispatch(setDecrementPrice(totalPrice))
            setTotalProducts(1)
            toast.success('Produto removido')
            dispatch(removeProductCart(destroyProductClicked()))
          }}
        >
          <FiX />
        </section>
      </div>
    </ProductsCarts>
  );
};
