import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    shoppingList: [
      {
        id: 0, name: "manzana", editing: false, complete: false
      },
      {
        id: 1, name: "pera", editing: false, complete: false
      },
      {
        id: 2, name: "platano", editing: false, complete: false
      },
    ],
    showModal: false,
    filter: "all"
  },
  //mutauions sera donde registramos los eventos para cambiar el state
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
    }
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
      //console.log(newList)
      commit("FILL_SHOPPINGLIST", newList)
    },
    changeShow({ commit, state }) {
      const newShowModal = !state.showModal
      //console.log(newShowModal)
      commit("CHANGE_SHOWMODAL", newShowModal)
    },
    cancelModal({ commit, state }) {
      const changeModal = !state.newShowModal
      //console.log(newShowModal)
      commit("CANCEL_MODAL", changeModal)
    },
    removeItem({ commit, state }, { id }) {
      //console.log({ id })
      const newLis = [...state.shoppingList.filter(item => item.id  !== id)]
      //console.log(newLis)
      commit("FILL_SHOPPINGLIST", newLis)
    },
    editItem({ commit }, { id }) {
      commit("CHANGE_EDITING", id)
    },
    markAll({ commit }) {
      commit("MARK_ALL_COMPLETE")
    },
    updateFilter({ commit }, { filter } ){
      commit("SET_FILTER" ,filter)
    }
  },
  getters: {
    itemsFiltered(state) {
      console.log(state.filter)
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
