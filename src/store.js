import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

const actionsTextMapping = {
  delete: "Are you sure you want to delete it?",
  add: "add items to your list!"
};

export default new Vuex.Store({
  state: {
    shoppingList: [
      { "id": 0, "name": "pera", "editing": false, "complete": false },
      { "id": 1, "name": "manzana", "editing": false, "complete": false },
      { "id": 2, "name": "melon", "editing": false, "complete": false },
    ],
    showModal: false,
    filter: "all",
    currentAction: null,
    actionsText: ""
  },
  mutations: {
    FILL_SHOPPINGLIST(state, list) {
      state.shoppingList = list
    },
    CHANGE_SHOWMODAL(state, change) {
      state.showModal = change
    },
    CHANGE_ACTIONSTEXT(state, chan) {
      state.actionsText = chan
    },
    CANCEL_MODAL(state, chang) {
      state.showModal = chang
    },
    CHANGE_EDITING(state, id) {
      state.shoppingList = state.shoppingList.map(item => item.id === id ? { ...item, editing: true } : item)
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
      state.currentAction = "add";
      commit("FILL_SHOPPINGLIST", newList)
    },
    changeShow({ commit, state }) {
      const newShowModal = !state.showModal
      commit("CHANGE_SHOWMODAL", newShowModal)
    },
    changeTextmodal({ commit, state }) {
      const newActionsText = actionsTextMapping[state.currentAction]
      commit("CHANGE_ACTIONSTEXT", newActionsText)
    },
    cancelModal({ commit, state }) {
      const changeModal = !state.newShowModal
      commit("CANCEL_MODAL", changeModal)
    },
    removeItem({ commit, state }, { id }) {
      const newLis = [...state.shoppingList.filter(item => item.id !== id)]
      state.currentAction = "delete";
      commit("FILL_SHOPPINGLIST", newLis)
    },
    editItem({ commit }, { id }) {
      commit("CHANGE_EDITING", id)
    },
    updateFilter({ commit }, { filter }) {
      commit("SET_FILTER", filter)
    },
  },
  getters: {
    itemsFiltered(state) {
      // (state.filter == "all") ? state.shoppingList:
      //   (state.filter == "active") ? state.shoppingList.filter(item => !item.complete):
      //     (state.filter == "complete") ? state.shoppingList.filter(item => item.complete) :
      //       state.shoppingList;
      if (state.filter == "all") {
        return state.shoppingList;
      } else if (state.filter == "active") {
        return state.shoppingList.filter(item => !item.complete)
      } else if (state.filter == "complete") {
        return state.shoppingList.filter(item => item.complete);
      }
      return state.shoppingList;
    },
  }
});
