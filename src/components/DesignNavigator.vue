<template>
  <div class="designNavigator">
    <div class="designNavigatorContainer">
      <ul class="navigationList">
        <li v-on:click="selectNavigatorTab('product')" v-bind:class="{ active: selectedNavigatorTab === 'product' }">Product</li>        
        <li v-on:click="selectNavigatorTab('art')" v-bind:class="{ active: selectedNavigatorTab === 'art' }">Art</li>
        <li v-on:click="selectNavigatorTab('text')" v-bind:class="{ active: selectedNavigatorTab === 'text' }">Text</li>
        <li v-on:click="selectNavigatorTab('upload')" v-bind:class="{ active: selectedNavigatorTab === 'upload' }">Upload</li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'design-navigator',
    props: ['selectNavigatorTab', 'selectedNavigatorTab'],
  };
</script>

<style scoped>
  .designNavigatorContainer {
    flex: 1;
    display: flex;
    align-items: center;
    margin: 10px;
  }
  
  .navigationList li{
    user-select: none;
    display: inline;
    font-weight: 600;
    margin: 0 20px;
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 2px;
    cursor: pointer;
    color: rgba(255, 255, 255, 0.5);    
  }

  .navigationList li.active {
    color: rgba(255, 255, 255, 1);    
  }
</style>