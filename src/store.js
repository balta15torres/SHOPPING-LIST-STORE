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
    CHANGE_EDITING(state,chan){
      state.shoppingList.editing = chan
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
      const newLis = [...state.shoppingList.filter(item => item.id !== id)]
      //console.log(newLis)
      commit("FILL_SHOPPINGLIST", newLis)
    },
    editItem({ commit, state }){
      let { shoppingList } = state
      let array = shoppingList
      //console.log(shoppingList)
     const names = array.filter(elemt=>elemt.editing = true)
    console.log(names)
   
      
      
     commit("CHANGE_EDITING", names  )
    }
  }
});
