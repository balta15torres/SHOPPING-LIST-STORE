<template>
  <div class="ModalWindow">
    <div class="ModalWindow__poput">
      {{actionsText}}
      <div class="ModalWindow__poput--btns">
        <button @click="ModalCancel" v-if="isAdding">
          <img src="../../public/icons/check.svg" alt />
        </button>
        <div v-else>
          <button @click="ModalCancel">
            <img src="../../public/icons/delete.svg" alt />
          </button>
          <button @click="ModalCancel">
            <img src="../../public/icons/close.svg" alt />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "ModalWindow",
  props: {
    actionsText: {
      type: String
    }
  },
  computed: {
    isAdding() {
      return this.currentAction === "add";
    },
    ...mapState({
      currentAction: state => state.currentAction
    })
  },
  methods: {
    ...mapActions({
      changeShow: "changeShow"
    }),
    ModalCancel() {
      this.changeShow();
    }
  }
};
</script>
<style lang="scss">
.ModalWindow {
  align-items: center;
  background-color: $blue-modal;
  bottom: 0;
  display: flex;
  justify-content: space-evenly;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 10;
}
.ModalWindow__poput {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 0 8px 0 rgb(255, 255, 255);
  width: 400px;
  height: 100px;
  background-color: $green-vue;
}
.ModalWindow__poput--btns {
  button {
    margin: 8px;
    width: 35px;
    height: 35px;
    border-radius: 5px;
    background-color: $blue-vue;
    img {
      width: 15px;
      margin-top: 3px;
    }
  }
}
</style>


