/* eslint no-param-reassign: 0 */
import { getProducts, getArt } from 'src/api/designer';

const actionTypes = {
  FETCH: 'FETCH',
  FETCH_PRODUCTS_SUCCESS: 'FETCH_PRODUCTS_SUCCESS',
  FETCH_ART_SUCCESS: 'FETCH_ART_SUCCESS',
  FETCH_ERROR: 'FETCH_ERROR',
};

const moduleState = {
  actionState: {
    isAction: false,
    actionError: false,
    currentActor: false,
  },
  art: {
    arts: null,
  },
  product: {
    products: null,
  },
};

const getters = {
  arts: state => state.art.arts,
  products: state => state.product.products,
};

const actions = {
  fetchArt({ commit }, term) {
    commit(actionTypes.FETCH, 'art');
    getArt(term)
      .then(icons => commit(actionTypes.FETCH_ART_SUCCESS, icons))
      .catch(err => commit(actionTypes.FETCH_ERROR, err));
  },
  fetchProducts({ commit }) {
    commit(actionTypes.FETCH, 'products');
    getProducts()
      .then(prods => commit(actionTypes.FETCH_PRODUCTS_SUCCESS, prods))
      .catch(err => commit(actionTypes.FETCH_ERROR, err));
  },
};

const mutations = {
  [actionTypes.FETCH](state, entity) {
    state.actionState.isAction = true;
    state.actionState.currentActor = entity;
  },
  [actionTypes.FETCH_PRODUCTS_SUCCESS](state, productData) {
    state.actionState.isAction = false;
    state.product.products = productData;
  },
  [actionTypes.FETCH_ART_SUCCESS](state, icons) {
    state.art.arts = icons;
    state.actionState.isAction = false;
  },
  [actionTypes.FETCH_ERROR](state, error) {
    state.actionState.actionError = error;
    state.actionState.isAction = false;
  },
};

export default {
  state: moduleState,
  getters,
  actions,
  mutations,
};
