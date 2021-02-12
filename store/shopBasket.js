export const state = () => ({
  productsOnBasket: [],
  isBasketopen: false,
  counterProducts: 0,
  isValidForm: true,
  showSuccessBasacket: false,
  tyrAddDoubleProduct: false,
});

export const mutations = {
  addProductOnBascket(state, newProduct) {
    state.productsOnBasket.push(newProduct);
    state.counterProducts = state.productsOnBasket.length;
  },
  deletProductOnBascket(state, id) {
    state.productsOnBasket = state.productsOnBasket.filter(elem => elem.id !== id);
    state.counterProducts = state.productsOnBasket.length;
  },
  clearBasket(state) {
    state.productsOnBasket = [];
    state.counterProducts = 0
  },
  basketHalder(state) {
    state.isBasketopen = !state.isBasketopen;
  },
  tyrAddDoubleProductHandler(state, newValue) {
    state.tyrAddDoubleProduct = newValue;
  },
  formHandler(state, newValid) {
    state.isValidForm = newValid;
  },
  successBasackethandler(state, isShow) {
    state.showSuccessBasacket = isShow;
  },
};
//s - сокращение для слова state
export const getters = {
  getProductsOnBasket: s => s.productsOnBasket,
  getStateBasketProduct: s => s.isBasketopen,
  getCounterProducts: s => s.counterProducts,
  getIsValidForm: s => s.isValidForm,
  getShowSuccessBasacket: s => s.showSuccessBasacket,
  getTyrAddDoubleProduct: s => s.tyrAddDoubleProduct,
};