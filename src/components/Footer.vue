<template>
  <div class="Footer">
    <div class="Footer__summary">
      <label>
        <input type="checkbox" :checked="!markAll" @change="markAll" /> check All
      </label>
      <p>check All</p>
      <p>{{totalItems}} total items</p>
      <p>{{totalItemsLeft}} items left</p>
    </div>
    <hr />
    <div class="Footer__Buttons">
      <button class="Footer__Buttons--all">all</button>
      <button class="Footer__Buttons--active">active</button>
      <button class="Footer__Buttons--completed">completed</button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "Footer",
  computed: {
    ...mapState({
      shoppingList: state => state.shoppingList
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
  methods:{
      ...mapActions({
        markAll:"markAll"  
      }),

    

  }
  
};
</script>

<style lang="scss">
.Footer {
  width: 50%;
  .Footer__sumary {
    display: flex;
  }
  .Footer__Buttons {
    display: flex;
    justify-content: center;
  }
}
</style>
