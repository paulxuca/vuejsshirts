<template>
  <div class="itemNavigator">
    <ul class="itemList">
      <li
        v-for="font in text"
        v-on:click="fabricMethod('addText', textInput, font.family)"
      >
        <span
          :style="{ fontFamily: font.family }"
        >
          {{textInput}}
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  import { text } from './text';

  export default {
    name: 'text-navigator',
    props: [
      'fabricMethod',
    ],
    computed: {
      ...mapGetters({
        textInput: 'textInput',
      }),
    },
    data() {
      return {
        text,
      };
    },
  };
</script>

<style scoped>
li {
  padding: 0 20px;
  font-size: 20px;
  color: white;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

li:hover {
  background-color: rgba(0, 0, 0, 0.1);
}
</style>
