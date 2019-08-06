<template>
  <div class="Main">
    <div class="Main__input">
      <input
        type="text"
        placeholder=" add name of item"
        key="newItem-input"
        v-model="newItem"
        @keyup.enter="createItem()"
      />
      <button @click="createItem()">
        <img src="../../public/icons/add.svg" alt />
      </button>
    </div>
    <hr />
    <div class="Main__li" v-for="item in filteredList" :key="item.id">
      <ul>
        <template v-if="!item.editing">
          <div class="Main__li--list">
            <li :class="{'edit' : item.editing}">
              <input type="checkbox" v-model="item.complete" />
              <p :class="{ 'complete' : item.complete, 'edit' : item.editing}">{{item.name}}</p>
            </li>
          </div>
          <div class="Main__li--buttons">
            <button class="Main__li--delete" @click="deleteItem(item.id)">
              <img src="../../public/icons/delete.svg" alt />
            </button>
            <button class="Main__li--edit" @click="editingItem(item.name,item.id)">
              <img src="../../public/icons/pencil-edit-button.svg" alt />
            </button>
          </div>
        </template>
        <template v-else>
          <input
            class="input__editing"
            type="text"
            :class="{ 
              'complete' : item.complete, 
              'edit' : item.editing
              }"
            v-model="beforeEditItemCache"
          />
          <div class="Main__btns--editing">
            <button class="Main__li--editing" @click="doneEditItem(item)">
              <img src="../../public/icons/check.svg" alt />
            </button>
            <button class="Main__li--editing" @click="beforeEditItem(item)">
              <img src="../../public/icons/close.svg" alt />
            </button>
          </div>
        </template>
      </ul>
    </div>
  </div>
</template>

<script>
import store from "../store";
import { mapState, mapActions, mapGetters } from "vuex";

export default {
  name: "Main",
  store,
  data() {
    return {
      newItem: "",
      itemCreate: false,
      beforeEditItemCache: ""
    };
  },
  computed: {
    filteredList() {
      return this.shoppingList.filter(item =>
        item.name.toLowerCase().includes(this.newItem.toLowerCase())
      );
    },
    ...mapGetters({
      shoppingList: "itemsFiltered"
    }),
    ...mapState({
      actionsText: state => state.actionsText
    })
  },

  methods: {
    ...mapActions({
      addItem: "addItem",
      changeShow: "changeShow",
      removeItem: "removeItem",
      editItem: "editItem",
      changeTextmodal: "changeTextmodal",
      checking: "checking"
    }),
    createItem() {
      this.actionsText = "balta";
      //if(this.newItem.name.trim() === "")

      //  let er = /^[a-z]{3,}$/i;
      //   let rta = er.test(this.newItem);
      //    rta === true
      //      ? (this.addItem({ item: this.newItem }),this.cleanInput())
      //      : (this.changeTextmodal(),this.changeShow(),this.cleanInput())
      // let number = /[1-9]/
      // let rta = number.test(this.newItem);
      //this.changeShow()
      //if(this.newItem == "")console.log("no hay nada")
      //else if(rta === true )console.log("solo letras")
      //else if(this.newItem.length != 3)console.log("te faltan letras")
      //else this.addItem({ item: this.newItem }),this.cleanInput()
      this.addItem({ item: this.newItem });
      this.changeTextmodal();
      this.cleanInput();
    },
    cleanInput() {
      this.newItem = "";
    },
    deleteItem(id) {
      this.changeShow();
      this.removeItem({ id });
      this.changeTextmodal();
    },
    editingItem(name, id) {
      this.beforeEditItemCache = name;
      //con esta iteracion, no podremos editar varios item a la vez.
      this.shoppingList.forEach(item => (item.editing = false));
      this.editItem({ id });
    },
    doneEditItem(item) {
      item.name = this.beforeEditItemCache;
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
  margin: 2%;
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
      font-weight: bold;
      color: $blue-vue;
      margin-left: 10px;
    }
    button {
      background-color: $green-vue;
      width: 35px;
      height: 35px;
      margin: 10px;
      border-radius: 5px;
      border-width: 4px;
      display: flex;
      justify-content: center;
      img {
        height: 20px;
        width: 20px;
      }
    }
  }
  .Main__li {
    .Main__li--list {
      width: 50%;
      font-weight: bold;
      color: $blue-vue;
      li {
        display: flex;
        justify-content: flex-start;
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
      border-width: 4px;
      display: flex;
      justify-content: center;
      img {
        height: 20px;
        width: 20px;
      }
    }
    .Main__li--edit {
      background-color: $green-vue;
    }
    .Main__li--delete {
      background-color: $blue-vue;
    }
    .input__editing {
      margin-top: 22px;
      border-radius: 5px;
      height: 35px;
      font-size: 18px;
      padding-left: 10px;
      width: 50%;
    }
    .Main__li--buttons {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      width: 50%;
    }
    .Main__btns--editing {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      width: 50%;
    }
    .Main__li--editing {
      background-color: $blue-vue;
    }
  }
}
.complete {
  text-decoration: line-through;
  color: $red-complete;
}
.edit {
  text-decoration: underline;
  color: $red-complete;
}
</style>

