<template>
  <div class="itemNavigator">
    <!--<input type="text" class="artTermInput" />-->
    <ul class="itemList">
      <li
        class="item" v-for="(art, index) in arts"
        v-on:click="fabricMethod('addImg', art.preview_url)"
      >
        <div
          class="icon"
          :style="{ backgroundImage: 'url(' + art.preview_url + ')' }"
        />
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  import { mapActions } from 'vuex';

  export default {
    name: 'art-navigator',
    props: [
      'arts',
      'fabricMethod',
    ],
    methods: {
      ...mapActions(['fetchArt']),
    },
  };
</script>

<style scoped>
  .itemList {
    background-color: white;
  }

  .item {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
  }

  .itemList li:hover {
    transform: scale(1.1);
    transition: 0.25s ease;

  }

  .icon {
    height: 100px;
    width: 100px;
    background-position: center;
    background-size: cover;
    margin: 20px;
  }
</style>
