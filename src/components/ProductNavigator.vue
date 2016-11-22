<template>
  <div class="itemNavigator">
    <ul class="itemList">
      <li
        class="item"
        v-for="(item, index) in products"
      >
        <div
          class="itemNavigatorItem"
          :class="{ active: selectedProductIndex === index }"
          v-on:click="changeProduct(index)"
          :style="{ backgroundImage: 'url(' + item.photo + ')' }" />
        <span>{{item.name}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
  import { mapActions } from 'vuex';

  export default {
    name: 'product-navigator',
    props: [
      'selectedNavigatorTab',
      'changeProduct',
      'selectedProductIndex',
      'products',
    ],
    created: function() { // eslint-disable-line
      this.fetchProducts();
    },
    methods: {
      ...mapActions(['fetchProducts']),
    },
  };
</script>

<style>
  .itemList {
    height: 100%;
    position: relative;
    display: flex;
    align-items: center;
    margin: 0;
    list-style: none;
    padding: 0;
  }

  .itemNavigator {
    flex: 1;
    position: relative;
    overflow-x: scroll;
    overflow-y: hidden;
  }
</style>

<style scoped>
  .itemNavigatorItem {
    flex: 1;
    background-position: center;
    background-size: cover;
    border: 1.5px solid black;
    border-radius: 3px;
    margin-top: 10px;
  }

  .itemNavigatorItem.active {
    border-color: rgb(47, 123, 189);
  }

  .itemNavigatorItem:hover {
    opacity: 0.7;
  }

  .item {
    margin: 0 20px;
    flex: 1;
    display: flex;
    flex-direction: column;
    max-width: 200px;
    height: 80%;
  }

  .item span {
    color: white;
    margin-top: 10px;
    color: rgba(255, 255, 255, 0.8);
    font-size: 12px;
    text-align: center;
  }
</style>
