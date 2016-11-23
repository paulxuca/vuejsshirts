<template>
  <div class="colorPicker">
    <ul class="colorList">
      <li
        v-for="color in currentProductColors"
        class="colorItem"
        v-on:click="selectProductColor(color.color)"
        :style="{ backgroundColor: color.color }"
      />
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'color-picker',
    props: [
      'currentProductColors',
      'selectProductColor',
    ],
  };
</script>

<style scoped>
  .colorList {
    position: relative;
    margin: 0px;
    bottom: 20px;
    padding: 0px;
    height: 100%;
    display: flex;
    justify-content: center;
    list-style: none;
  }

  .colorItem {
    margin: 0 5px;
    display: inline-block;
    height: 20px;
    width: 20px;
    border: 1px solid #EEE;
    border-radius: 100px;
  }

  .colorItem:hover {
    transform: scale(1.1);
  }

  .colorPicker {
    flex: 1;
    max-height: 30px;
  }
</style>