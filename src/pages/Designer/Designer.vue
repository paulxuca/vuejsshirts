<template>
  <div class="designPage">
    <div class="designNavigator">

    </div>
    <editor-controls :fabric-method="fabricMethod" />
    <div class="designContainer">
      <div class="designSection">
      </div>
      <div
        class="designSection"
        style="position: relative; min-width: 500px;"
      >
        <div
          class="designCanvas__image"
          :style="{ backgroundImage: 'url(' + currentProductImage +')', backgroundColor: selectedProductColor }"
        >
          <canvas
            id="fabric"
          />
        </div>
      </div>
      <div class="designSection" />      
    </div>
    <color-picker
      :current-product-colors="currentProductColors"
      :select-product-color="selectProductColor"
    />
    <div
      class="designNavigator__slideIn"
      v-bind:class="{ active: selectedNavigatorTab }"      
    >
      <div class="designNavigator__controls">
        <div class="designNavigator__controlsButtons">
          <button class="closeButton" v-on:click="selectedNavigatorTab = ''">
            <span>Close</span>
          </button>
        </div>
        <div class="designNavigator__interact">
          <art-navigator-search
            :class="{ hidden: selectedNavigatorTab !== 'art' }"
            :can-add-elements="canAddElements"
          />
          <text-navigator-input
            :class="{ hidden: selectedNavigatorTab !== 'text' }"
            :can-add-elements="canAddElements"
          />
        </div>
      </div>
      <product-navigator
        class="navigator"
        :class="{ displayNavigator: selectedNavigatorTab === 'product' }"
        :selected-navigator-tab="selectedNavigatorTab"
        :change-product="changeProduct"
        :selected-product-index="selectedProductIndex"
        :products="products"
      />
      <art-navigator
        class="navigator"
        :arts="art"
        :fabric-method="fabricMethod"
        :class="{ displayNavigator: selectedNavigatorTab === 'art' }"
      />
      <text-navigator
        class="navigator"
        :fabric-method="fabricMethod"
        :class="{ displayNavigator: selectedNavigatorTab === 'text' }"
      />
      <file-upload
        class="navigator"
        :class="{ displayNavigator: selectedNavigatorTab === 'upload' }"
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
  import ProductNavigator from 'components/ProductNavigator';
  import ArtNavigator from 'components/ArtNavigator';
  import FileUpload from 'components/FileUpload';
  
  import TextNavigator from 'components/TextNavigator/TextNavigator';

  import ArtNavigatorSearch from 'components/ArtNavigatorSearch';
  import TextNavigatorInput from 'components/TextNavigatorInput';

  import EditorControls from 'components/EditorControls/EditorControls';
  import ColorPicker from 'components/ColorPicker';
  
  import Fabric from './Fabric';

  const FabricJS = require('fabric').fabric;

  let fabric;

  export default {
    components: {
      DesignNavigator,
      ProductNavigator,
      ArtNavigator,
      ArtNavigatorSearch,
      TextNavigatorInput,
      EditorControls,
      TextNavigator,
      ColorPicker,
      FileUpload,
    },
    name: 'designer',
    data() {
      return {
        selectedNavigatorTab: '',
        selectedProductColor: 'white',
        selectedProductIndex: undefined,
      };
    },
    mounted: function() { // eslint-disable-line
      window.addEventListener('keydown', this.onKeyDown, false);
      const fabricObj = new FabricJS.Canvas('fabric', { height: 500, width: 400 });
      fabric = new Fabric(fabricObj);
    },
    computed: {
      ...mapGetters({
        products: 'products',
        art: 'arts',
      }),
      currentProduct() {
        if (this.selectedProductIndex + 1) {
          return this.products[this.selectedProductIndex];
        }
        return undefined;
      },
      currentProductColors() {
        if (this.currentProduct) {
          return this.currentProduct.colors;
        }
        return undefined;
      },
      currentProductImage() {
        if (this.currentProduct) {
          return this.currentProduct.product;
        }
        return '';
      },
      canAddElements() {
        if (this.currentProduct) return true;
        return false;
      },
    },
    methods: {
      onKeyDown(e) {
        switch (e.keyCode) {
          case 8:
          case 46:
            this.fabricMethod('deleteActive');
            break;
          default:
            break;
        }
      },
      selectProductColor(color) {
        this.selectedProductColor = color;
      },
      fabricMethod(method, ...args) {
        fabric.methods()[method](...args);
      },
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
  .productOverlay {
    position: absolute;
  }

  .hidden {
    display: none;
  }

  .closeButton {
    background-color: transparent;
    border: none;
    color: white;
    opacity: 0.7;
    text-transform: uppercase;
    font-weight: 500;
    letter-spacing: 1px;
    font-size: 10px;
  }

  .closeButton:hover {
    opacity: 1;
  }

  .closeButton:focus {
    outline: 0;
  }

  .designNavigator__controlsButtons {
    justify-content: center;
    flex: 1;
    display: flex;
    max-width: 100px;
    border-left: 1px solid rgb(28, 34, 45);
  }

  .designNavigator__controls {
    flex-direction: row-reverse;    
    position: absolute;
    display: flex;
    height: 50px;
    width: 100%;
    top: -50px;
    background: #1F2532;
    border-bottom: 1px solid rgb(28, 34, 45);
    border-top: 1px solid rgb(28, 34, 45);
  }

  .navigator {
    display: none;
  }

  .displayNavigator {
    display: block;
  }

  .designNavigator__slideIn {
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

  .designNavigator__slideIn.active {
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
  
  .designCanvas__image {
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    position: relative;
    transition: 0.25s ease;
  }
</style>