<template>
  <div class="PoputInit">
    <div class="poput">
      <p>add item to your super list!!</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "PoputInit"
};
</script>
<style lang="scss">
.PoputInit {
      height: 300px;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: $green-vue;
      border: 2px outset #dddddd;
      border-radius: 5px;
      font-size: 35px;
      font-weight:bold;
      margin:2%;
     .poput{
         color: $blue-vue;
         padding-left: 3%;
         padding-right: 3%;
     } 
  
}
</style>
