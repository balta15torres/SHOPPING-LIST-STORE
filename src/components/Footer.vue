<template>
  <div class="Footer">
    <hr />
    <div class="Footer__summary">
      <label>
        <input type="checkbox" @change="markAll()" />
        {{text}}
      </label>
      <p>{{totalItems}} total items</p>
      <p>{{totalItemsLeft}} items left</p>
      <button
        v-if="totalItemsLeft < totalItems"
        class="Main__li--botnDeleteAll"
        @click="deleteMarked"
      >delete Marked</button>
    </div>
    <hr />
    <div class="Footer__Buttons">
      <button :class="{ active:filter == 'all'}" @click="setFilter('all')">All</button>
      <button :class="{ active:filter == 'active'}" @click="setFilter('active')">Active</button>
      <button :class="{ active:filter == 'complete'}" @click="setFilter('complete')">Completed</button>
    </div>
   
  </div>
</template>

<script>
import { mapActions, mapState, mapGetters } from "vuex";
export default {
  name: "Footer",
  data() {
    return {
      filter: "all",
      text: "check All"
    };
  },
  computed: {
    ...mapState({
      shoppingList: state => state.shoppingList
    }),
    ...mapGetters({
      itemsFiltered: "itemsFiltered"
    }),
    totalItems() {
      return this.shoppingList.length;
    },
    totalItemsLeft() {
      const filterComplete = this.shoppingList.filter(
        item => item.complete === false
      ).length;
      return filterComplete;
    }
  },
  methods: {
    ...mapActions({
      removeItem: "removeItem",
      updateFilter: "updateFilter",
      changeShow: "changeShow",
      changeTextmodal:"changeTextmodal"
    }),
    setFilter(filter) {
      //this.updateFilter({ filter });
      this.filter = filter;
       this.shoppingList.forEach(item =>!item.complete ? console.log("no hay") : this.updateFilter({ filter }));
    },
    markAll() {
      this.shoppingList.forEach(item => (item.complete = event.target.checked));
    },
    deleteMarked() {
      this.changeShow()
      this.changeTextmodal();
      this.shoppingList.filter(item =>
        item.complete ? this.removeItem(item) : ""
      );
    }
  }
};
</script>

<style lang="scss">
.Footer {
  margin: 2%;
  font-weight:bold;
  color: $blue-vue;
  .Footer__summary {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 40px;
    margin-top:20px;
    margin-bottom: 20px;
    p {
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: $green-vue;
      border: 1px outset #dddddd;
      border-radius: 5px;
      height: 35px;
      width: 25%;
    }
    .Main__li--botnDeleteAll {
      height: 39px;
      width: 25%;
      border-radius: 5px;
      background-color:$red-complete;
      font-size: 15px;
      font-weight:bold;
      color: $blue-vue;
      border-width: 4px;
    }
  }
  .Footer__Buttons {
    margin: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    .active {
      background-color: $green-vue;
      color:$blue-vue;
    }
    button {
      border-radius: 5px;
      background-color: $blue-vue;
      color: $green-vue;
      margin-right: 15px;
      height: 40px;
      font-weight:bold;
      border-width: 4px;
    }
  }
}
</style>
