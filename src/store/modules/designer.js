/* eslint no-param-reassign: 0 */
import mock from 'src/mock/designer';

const actionTypes = {
  FETCH_PRODUCTS: 'FETCH_PRODUCTS',
  FETCH_PRODUCTS_SUCCESS: 'FETCH_PRODUCTS_SUCCESS',
  FETCH_PRODUCTS_ERROR: 'FETCH_PRODUCTS_ERROR',
};

const moduleState = {
  isAction: false,
  product: {
    products: null,
  },
};

const getters = {
  products: state => state.product.products,
};

const actions = {
  fetchProducts({ commit }) {
    let products;
    commit(actionTypes.FETCH_PRODUCTS);
    if (process.env.NODE_ENV === 'development') {
      products = mock.product.products;
    }
    commit(actionTypes.FETCH_PRODUCTS_SUCCESS, products);
  },
};

const mutations = {
  [actionTypes.FETCH_PRODUCTS](state) {
    state.isAction = true;
  },
  [actionTypes.FETCH_PRODUCTS_SUCCESS](state, productData) {
    state.isAction = false;
    state.product.products = productData;
  },
};

export default {
  state: moduleState,
  getters,
  actions,
  mutations,
};
