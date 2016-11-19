<template>
  <div class="itemNavigator">
    <ul class="itemList">
      <li class="item" v-for="itemName in items">{{itemName}}</li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'item-navigator',
    props: ['selectedNavigatorTab'],
    data() {
      return {
        items: ['Gilden Soft', 'Giden Not Soft'],
      };
    },
  };
</script>

<style scoped>
  .item {
    color: white;
    margin: 0 20px;
    display: inline;
    font-size: 14px;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
  
  .itemList {
    height: 100%;
    position: relative;
    display: flex;
    align-items: center;
    margin: 0;
    padding: 0;
  }

  .itemNavigator {
    flex: 1;
    position: relative;
    overflow-x: scroll;
    overflow-y: hidden;
  }
</style>