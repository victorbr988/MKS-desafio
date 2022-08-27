const state = {
  data: [],
  loading: false,
  cartProducts: []
}

export const testAppUseSelector = (callback: Function) => callback(state)