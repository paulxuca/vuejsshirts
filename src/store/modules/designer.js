/* eslint no-param-reassign: 0 */
const actionTypes = {
  CHANGE_PRODUCT_INDEX: 'CHANGE_PRODUCT_INDEX',
};

const moduleState = {
  product: {
    selectedIndex: null,
  },
};

const getters = {
  currentProductIndex: state => state.product.selectedIndex,
};

const actions = {
  changeProductIndex({ commit, state }, newIndex) {
    if (state.product.selectedIndex !== newIndex) {
      commit(actionTypes.CHANGE_PRODUCT_INDEX, newIndex);
    }
  },
};

const mutations = {
  [actionTypes.CHANGE_PRODUCT_INDEX](state, newIndex) {
    state.product.selectedIndex = newIndex;
  },
};

export default {
  state: moduleState,
  getters,
  actions,
  mutations,
};
