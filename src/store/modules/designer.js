/* eslint no-param-reassign: 0 */
import { getProducts, getArt } from 'src/api/designer';

const actionTypes = {
  FETCH: 'FETCH',
  FETCH_PRODUCTS_SUCCESS: 'FETCH_PRODUCTS_SUCCESS',
  FETCH_ART_SUCCESS: 'FETCH_ART_SUCCESS',
  FETCH_ERROR: 'FETCH_ERROR',
  CHANGE_TEXT_TERM: 'CHANGE_TEXT_TERM',
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
  editor: {
    textInput: '',
  },
};

const getters = {
  arts: state => state.art.arts,
  products: state => state.product.products,
  textInput: state => state.editor.textInput,
};

const actions = {
  changeTextTerm({ commit }, e) {
    commit(actionTypes.CHANGE_TEXT_TERM, e.target.value);
  },
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
  [actionTypes.CHANGE_TEXT_TERM](state, term) {
    state.editor.textInput = term;
  },
};

export default {
  state: moduleState,
  getters,
  actions,
  mutations,
};
