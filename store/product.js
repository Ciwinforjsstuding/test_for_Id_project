export const state = () => ({
  products: [],
  productsCategory: [],
  currentCategory: 1,
});

export const mutations = {
  initProduct(state, products) {
    state.products = products;
  },
  initProductCategory(state, productsCategory) {
    state.productsCategory = productsCategory;
  },
  changeCategory(state, newCategory) {
    state.currentCategory = newCategory;
  }
};

export const actions = {
  async fetchProductForCategory({ commit, state }) {
    const res = await fetch(`https://frontend-test.idaproject.com/api/product?category=${state.currentCategory}`);
    const products = await res.json();
    commit("initProduct", products);
  },
  async fetchCategory({ commit }) {
    const res = await fetch("https://frontend-test.idaproject.com/api/product-category");
    const productsCategory = await res.json();
    commit("initProductCategory",productsCategory);
  }
};

//s - сокращение для слова state
export const getters = {
  getProducts: s => s.products,
  getProductsCategory: s => {
    return s.productsCategory
  },
  getCurrentCategory: s => {
    return s.currentCategory
  },
};