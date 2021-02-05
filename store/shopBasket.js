export const state = () => ({
  productsOnBasket: [],
  isBasketopen: false,
  counterProducts: 0,
  isValidForm: true,
  showSuccessBasacket: false,
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
  basketHalder(state) {
    state.isBasketopen = !state.isBasketopen;
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
};