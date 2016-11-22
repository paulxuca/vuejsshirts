<template>
  <div class="editorControls">
    <div class="editorControlsContainer">
      <ul class="controlsList">
        <li
          v-for="control in controls"
          v-on:click="fabricMethod(control.control)"
        >
          <i :class="control.icon" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import { controls } from './controls';

  export default {
    name: 'editor-controls',
    props: [
      'fabricMethod',
    ],
    data() {
      return {
        controls,
      };
    },
  };
</script>

<style scoped>
  .editorControls {
    width: 100%;
    flex: 1;
    border-bottom: 1px solid #EEE;
    max-height: 50px;
    display: flex;
    justify-content: center;
  }

  .editorControlsContainer {
    flex: 1;
    display: flex;
  }

  .controlsList {
    padding: 0px;
    flex: 1;
    margin: 0px;
    display: flex;
    align-items: center;
  }

  .controlsList li {
    display: inline;
    border-right: 1px solid #EEE;
    height: 100%;
    display: flex;
    min-width: 50px;
    justify-content: center;
    align-items: center;
  }

  .controlsList li:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
</style>
