<template>
  <div class="editorControls">
    <div class="editorControlsContainer">
      <ul class="controlsList">
        <li
          v-for="control in controls"
          @click="controlHandler(control)"
        >
          <i :class="control.icon" />
        </li>
      </ul>
      <swatches
        v-model="colors"
        class="colorPicker"
        :class="{ active: toggleColorPicker }"
      />
    </div>
  </div>
</template>

<script>
  import { Swatches } from 'vue-color';
  import { controls, defaultColor } from './editor';

  export default {
    name: 'editor-controls',
    props: [
      'fabricMethod',
    ],
    components: {
      swatches: Swatches,
    },
    methods: {
      controlHandler: function(control) { // eslint-disable-line
        if (control.control) {
          this.fabricMethod(control.control);
        } else if (control.noControl) {
          this.toggleColorPicker = !this.toggleColorPicker;
        }
      },
      onColorChange: function(color) { // eslint-disable-line
        this.colors = color;
      },
    },
    data() {
      return {
        toggleColorPicker: false,
        controls,
        colors: defaultColor,
      };
    },
  };
</script>

<style scoped>
  .colorPicker.active {
    display: block;
  }

  .colorPicker {
    display: none;
    position: absolute;
    top: 105px;
    left: 0px;
    box-shadow: none;
    border:1px solid #EEE;
  }

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
