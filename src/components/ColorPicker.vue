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
    box-shadow: inset 1px 1px 6px rgba(0, 0, 0, 0.15), inset -1px -1px 0 rgba(255, 255, 255, 0.25);
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