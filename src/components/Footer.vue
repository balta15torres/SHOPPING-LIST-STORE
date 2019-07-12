<template>
  <div class="Footer">
    <div class="Footer__summary">
      <label>
        <input type="checkbox" @change="markAll" />
        {{text}}
      </label>
      <p>{{totalItems}} total items</p>
      <p>{{totalItemsLeft}} items left</p>
    </div>
    <hr />
    <div class="Footer__Buttons">
      <button :class="{ active:filter == 'all'}" @click="setFilter('all')">All</button>
      <button :class="{ active:filter == 'active'}" @click="setFilter('active')">Active</button>
      <button :class="{ active:filter == 'complete'}" @click="setFilter('complete')">Completed</button>
    </div>
    <hr />
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
      markAll: "markAll",
      updateFilter: "updateFilter"
    }),
    setFilter(filter) {
      this.updateFilter({ filter });
      this.filter = filter;
    },
    markAll() {
      this.shoppingList.forEach(item => (item.complete = event.target.checked));
    }
  }
};
</script>

<style lang="scss">
.Footer {
  width: 50%;
  .Footer__summary {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .Footer__Buttons {
    margin: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    .active {
      background-color: #42b983;
      color: black;
    }
    button {
      border-radius: 5px;
      background-color: #35495e;
      color: #42b983;
      margin-right: 15px;
      height: 35px;
    }
  }
}
</style>
