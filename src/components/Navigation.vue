<template>
  <div class="navigation">
    <router-link to="/">Home</router-link>
    <router-link to="/designer">Designer</router-link>
    
  </div>
</template>

<script>
  export default {
    name: 'navigation',
  };
</script>


<style scoped>
  .navigation {
    flex: 1;
    max-height: 50px;
    border-bottom: 1px solid #dce0e0;
    box-shadow: 0 1px 2px 0 rgba(0,0,0,.08);
  }
</style>