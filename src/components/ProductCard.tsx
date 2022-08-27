import { ProductsTypes } from "../redux/types";
import shoppingBag from '../Icons/shopping-bag.svg';
import { useAppDispatch } from "../redux";
import { setIncrementPrice, setProductsInCart } from "../redux/Slices/reducer";
import toast from "react-hot-toast";

export const ProductCard: React.FC<{product: ProductsTypes}> = ({product}) => {
  const dispatch = useAppDispatch();
  return (
    <div key={product.id}>
      <section id="image-section">
        <img id="product-photo" src={product.photo} alt={`imagem de um ${product.name}`} />
      </section>
      <section className="section">
        <h1>{product.name}</h1>
        <h2>{`R$ ${product.price}`}</h2>
      </section>
      <p>{product.description}</p>
      <button
        onClick={() => {
          toast.success('Produto adicionado')
          dispatch(setProductsInCart(product));
          dispatch(setIncrementPrice(Number(product.price)))
        }}
      >
        <img src={shoppingBag} alt="ícone de uma bolsa de compras" />
        Comprar
      </button>
    </div>
  );
};
