import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductsState, ProductsTypes } from "../types";

const initialState: ProductsState = {
  data: [],
  loading: false,
  cartProducts: [],
  totalPrice: 0
};

export const setProducts = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setAllProducts: (state, action: PayloadAction<ProductsTypes[]>) => {
      state.data = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setProductsInCart: (state, action: PayloadAction<ProductsTypes>) => {
      state.cartProducts.push(action.payload);
    },
    removeProductCart: (state, action: PayloadAction<ProductsTypes[]>) => {
      state.cartProducts = action.payload;
    },
    setIncrementPrice: (state, action: PayloadAction<number>) => {
      state.totalPrice += action.payload;
    },
    setDecrementPrice: (state, action: PayloadAction<number>) => {
      state.totalPrice -= action.payload;
    }
  }
});

const { actions, reducer } = setProducts

export const {
  setAllProducts,
  setLoading,
  setProductsInCart,
  removeProductCart,
  setIncrementPrice,
  setDecrementPrice
} = actions;

export default reducer;
