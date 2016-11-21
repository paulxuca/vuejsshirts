<template>
  <div class="designPage">
    <div class="designNavigator">

    </div>
    <div class="designContainer">
      <div class="designSection">
      </div>
      <div class="designSection">
        <div
          class="designCanvasImage"
          :style="{ backgroundImage: 'url(' + currentProductImage +')' }"
        >
          <canvas
            id="fabric"
          />
        </div>
      </div>
      <div class="designSection" />      
    </div>
    <div
      class="designNavigatorSlideIn"
      v-bind:class="{ active: selectedNavigatorTab }"      
    >
      <item-navigator
        class="navigator"
        :class="{ displayNavigator: selectedNavigatorTab === 'product' }"
        :selected-navigator-tab="selectedNavigatorTab"
        :change-product="changeProduct"
        :selected-product-index="selectedProductIndex"
        :products="products"
      />
    </div>
    <design-navigator
      :select-navigator-tab="selectNavigatorTab"
      :selected-navigator-tab="selectedNavigatorTab"
    />
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';

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
        selectedProductIndex: undefined,
        fabricInstance: fabric,
      };
    },
    mounted: () => {
      fabric = new FabricJS.Canvas('fabric', { height: 600, width: 400 });
    },
    computed: {
      ...mapGetters({
        products: 'products',
      }),
      currentProduct: function() { // eslint-disable-line
        if (this.selectedProductIndex + 1) {
          return this.products[this.selectedProductIndex];
        }
        return undefined;
      },
      currentProductImage: function() { // eslint-disable-line
        if (this.currentProduct) {
          return this.currentProduct.photo;
        }
        return '';
      },
    },
    methods: {
      selectNavigatorTab(newTab) {
        if (newTab === this.selectedNavigatorTab) {
          this.selectedNavigatorTab = '';
        } else {
          this.selectedNavigatorTab = newTab;
        }
      },
      changeProduct(newProductIndex) {
        if (newProductIndex !== this.selectedProductIndex) {
          this.selectedProductIndex = newProductIndex;
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
  .navigator {
    display: none;
  }

  .displayNavigator {
    display: block;
  }

  .designNavigatorSlideIn {
    position: absolute;
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
    transform: translateY(-55px);
  }

  .designPage {
    flex: 1;
    overflow: hidden;
    position: relative;
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
  
  .designCanvasImage {
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    height: 100%;
  }

</style>