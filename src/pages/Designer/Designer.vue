<template>
  <div class="designPage">
    <div class="designNavigator">

    </div>
    <div class="designContainer">
      <div class="designSection">
      </div>
      <div class="designSection">
        <canvas
          id="fabric"
        />
      </div>
      <div class="designSection" />      
    </div>
    <div
      class="designNavigatorSlideIn"
      v-bind:class="{ active: selectedNavigatorTab }"      
    >
      <item-navigator
        :selected-navigator-tab="selectedNavigatorTab"
      />
    </div>
    <design-navigator
      :select-navigator-tab="selectNavigatorTab"
      :selected-navigator-tab="selectedNavigatorTab"
    />
  </div>
</template>

<script>
  import DesignNavigator from 'components/DesignNavigator';
  import ItemNavigator from 'components/ItemNavigator';

  const FabricJS = require('fabric').fabric;

  let fabric;

  export default {
    components: { DesignNavigator, ItemNavigator },
    name: 'designer',
    data() {
      return {
        selectedNavigatorTab: '',
        fabricInstance: fabric,
      };
    },
    mounted: () => {
      fabric = new FabricJS.Canvas('fabric', { height: 600, width: 400 });
    },
    methods: {
      selectNavigatorTab(newTab) {
        if (newTab === this.selectedNavigatorTab) {
          this.selectedNavigatorTab = '';
        } else {
          this.selectedNavigatorTab = newTab;
        }
      },
    },
  };
</script>

<style>
  .designNavigator {
    flex: 1;
    background-color: #1F2532;
    max-height: 55px;
    display: flex;
    z-index: 2;
  }
</style>

<style scoped>
  .designNavigatorSlideIn {
    position: relative;
    height: 200px;
    width: 100%;
    bottom: 0px;
    transform: translateY(200px);
    z-index: 1;
    background-color: rgba(37, 44, 58, 0.988235);
    transition: all 0.2s ease;
    display: flex;   
  }

  .designNavigatorSlideIn.active {
    transform: translateY(0px);
  }

  .designPage {
    flex: 1;
    flex-direction: column;
    display: flex;
  }

  .designContainer {
    flex: 1;
    display: flex;
  }

  .designSection {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
