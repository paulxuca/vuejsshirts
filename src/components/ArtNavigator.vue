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
  .item {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .itemList li:hover {
    transform: scale(1.1);
    transition: 0.3s ease-in;

  }
  .icon {
    filter: brightness(10) invert(1);
    -webkit-filter: brightness(10) invert(1);
    height: 100px;
    width: 100px;
    background-position: center;
    background-size: cover;
    margin: 20px;
  }
</style>
