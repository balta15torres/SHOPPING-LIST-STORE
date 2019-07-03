<template>
  <div class="Main">
    <div class="Main__input">
      <input
        type="text"
        placeholder=" add name of item"
        key="newItem-input"
        v-model="newItem"
        @keyup.enter="createItem"
      />
      <button @click="createItem">
        <img src="../../public/icons/add.svg" alt />
      </button>
    </div>
    <hr />
    <div class="Main__li" v-for="item in shoppingList" :key="item.id">
      <ul>
        <div class="Main__li--list">
          <li>
            <input type="checkbox" v-model="item.complete" />
            <p :class="{ complete : item.complete == true}">{{item.name}}</p>
          </li>
        </div>
        <div class="Main__li--buttons">
          <button class="Main__li--delete" @click="deleteItem(item.id)">
            <img src="../../public/icons/delete.svg" alt />
          </button>
          <button class="Main__li--edit" v-if="!item.editing" @click="editingItem(item.id)">
            <img src="../../public/icons/pencil-edit-button.svg" alt />
          </button>
          <input
            type="text"
            v-else
            v-model="item.name"
            @keyup.enter="doneEditItem(item)"
            @blur="doneEditItem(item)"
            @keyup.esc="beforeEditItem(item)"
          />
        </div>
      </ul>
    </div>
    <hr />
  </div>
</template>

<script>
import store from "../store";
import { mapState, mapActions } from "vuex";

const actionsTextMapping = {
  add: "illo añade algo a la lista!",
  delete: "eo seguro que quieres borrarlo?"
};

export default {
  name: "Main",
  store,
  data() {
    return {
      newItem: "",
      currentAction: null,
      beforeEditItemCache: ""
    };
  },
  computed: {
    ...mapState({
      shoppingList: state => state.shoppingList
    }),
    modalText() {
      return actionsTextMapping[this.currentAction];
    }
  },
  methods: {
    ...mapActions({
      addItem: "addItem",
      changeShow: "changeShow",
      removeItem: "removeItem",
      editItem: "editItem"
      // completeItem:"completeItem"
    }),
    createItem() {
      this.currentAction = "add";
      if (this.newItem.trim().length == 0) this.changeShow();
      this.addItem({ item: this.newItem });
      this.cleanInput();
    },
    cleanInput() {
      this.newItem = "";
    },
    deleteItem(id) {
      this.removeItem({ id });
      this.changeShow();
    },
    editingItem(id) {
      this.editItem({ id });
    },
    doneEditItem(item) {
      item.editing = false;
    },
    beforeEditItem(item) {
      item.editing = false;
    }
  }
};
</script>

<style lang="scss">
.Main {
  width: 50%;
  ul {
    display: flex;
    padding-left: 0;
  }

  .Main__input {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    input {
      border-radius: 5px;
      height: 30px;
      width: 75%;
    }
    button {
      background-color: $green-vue;
      width: 35px;
      height: 35px;
      margin: 10px;
      border-radius: 5px;
    }
  }
  .Main__li {
    .Main__li--list {
      width: 50%;
      li {
        display: flex;
        justify-content: flex-start;
        // background-color: blue;
        font-size: 20px;
        p {
          padding-left: 20px;
        }
      }
    }
    button {
      height: 35px;
      width: 35px;
      margin: 10px;
      border-radius: 5px;
      img {
        height: 20px;
        width: 18px;
      }
    }
    .Main__li--edit {
      background-color: $green-vue;
    }
    .Main__li--delete {
      background-color: $blue-vue;
    }
    .Main__li--buttons {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      width: 50%;
      // background-color: red;
    }
  }
}
.complete {
  text-decoration: line-through;
  color: rgb(139, 1, 1);
}
</style>

