import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    shoppingList: [
      { "id": 0, "name": "pera", "editing": false, "complete": false },
      { "id": 1, "name": "manzana", "editing": false, "complete": false },
      { "id": 2, "name": "melon", "editing": false, "complete": false },
    ],
    showModal: false,
    filter: "all",
  },
  mutations: {
    FILL_SHOPPINGLIST(state, list) {
      state.shoppingList = list
    },
    CHANGE_SHOWMODAL(state, change) {
      state.showModal = change
    },
    CANCEL_MODAL(state, chang) {
      state.showModal = chang
    },
    CHANGE_EDITING(state, id) {
      state.shoppingList = state.shoppingList.map(item => item.id === id ? { ...item, editing: true } : item)
    },
    MARK_ALL_COMPLETE(state) {
      state.shoppingList = state.shoppingList.map(
        item => item.complete === false ? { ...item, complete: !item.complete } : item)
    },
    SET_FILTER(state, filter) {
      state.filter = filter
    },
  },
  actions: {
    addItem({ commit, state }, { item }) {
      const newItem = {
        id: Math.random(),
        name: item,
        editing: false,
        complete: false
      }
      const newList = [...state.shoppingList, newItem]
      commit("FILL_SHOPPINGLIST", newList)
    },
    changeShow({ commit, state }) {
      const newShowModal = !state.showModal
      commit("CHANGE_SHOWMODAL", newShowModal)
    },
    cancelModal({ commit, state }) {
      const changeModal = !state.newShowModal
      commit("CANCEL_MODAL", changeModal)
    },
    removeItem({ commit, state }, { id }) {
      const newLis = [...state.shoppingList.filter(item => item.id !== id)]
      commit("FILL_SHOPPINGLIST", newLis)
    },
    editItem({ commit }, { id }) {
      commit("CHANGE_EDITING", id)
    },
    markAll({ commit }) {
      commit("MARK_ALL_COMPLETE")
    },
    updateFilter({ commit }, { filter }) {
      commit("SET_FILTER", filter)
    },
  },
  getters: {
    itemsFiltered(state) {
      if (state.filter == "all") {
        return state.shoppingList;
      } else if (state.filter == "active") {
        return state.shoppingList.filter(item => !item.complete)
      } else if (state.filter == "complete") {
        return state.shoppingList.filter(item => item.complete);
      }
      return state.shoppingList;
    }
  }
});
