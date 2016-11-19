<template>
  <div id="editorComponent">
    <canvas v-fabric />
  </div>
</template>

<script>
  import Fabric from './Fabric';

  export default {
    name: 'editor',
    directives: { Fabric },
  };
</script>

<style scoped>
  #editorComponent {
    flex: 1;
    position: relative;
    
  }
</style>