import { Fragment, useEffect } from "react";
import { setAllProducts, setLoading } from "../redux/Slices/reducer";
import { ProductsTypes } from "../redux/types";
import {useAppDispatch, useAppSelector} from '../redux';
import { Main } from '../styles/products';
import { LoadingPanel } from './CardSkeletonGroup';
import { ProductCard } from './ProductCard';
import { Footer } from "../styles/footer";

interface StateTypes {
  products: {
    data: ProductsTypes[],
    loading: boolean
  }
}
export const Products: React.FC = () => {

  const dispatch = useAppDispatch();
  const allProducts = useAppSelector(({ products }: StateTypes) => products.data);
  const isLoading = useAppSelector(({ products }: StateTypes) => products.loading)

  useEffect(() => {
    async function getProducts() {
      dispatch(setLoading(true))
      const response = await fetch('https://mks-frontend-challenge-api.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=id&orderBy=ASC');
      const responseJson = await response.json();
      dispatch(setAllProducts(responseJson.products))
      dispatch(setLoading(false))
      return responseJson;
    } 
    getProducts()
  },[dispatch])

  return (
    <Fragment>
      <Main>
        {isLoading && <LoadingPanel /> }
        <section>
          {allProducts.map((product) => (
            <ProductCard
              product={product}
            />
          ))}
        </section>
      </Main>
      <Footer>
        <p> MKS sistemas © Todos os direitos reservados</p>
      </Footer>
    </Fragment>
    
  );
};
