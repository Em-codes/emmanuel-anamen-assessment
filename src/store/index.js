import Vue from "vue";
import Vuex from "vuex";
import jobs from "./jobs";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loading: false,
    searchLoading: false,
    mobileNav: false,
  },
  getters: {
    loadingState: (state) => state.loading,
    searchLoadingState: (state) => state.searchLoading,
    mobileNavState: (state) => state.mobileNav
  },
  mutations: {
    SET_LOADING: (state, loading) => (state.loading = loading),
    SET_SEARCH_LOADING: (state, loading) => (state.loading = loading),
    TOGGLE_NAVBAR: (state) => state.mobileNav = !state.mobileNav,
    SET_NAVBAR: (state, data) => state.mobileNav = data
  },
  actions: {},
  modules: {
    jobs,
  },
});