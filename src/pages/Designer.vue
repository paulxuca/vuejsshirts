<template>
  <div class="designPage">
    <div class="designNavigator">

    </div>
    <div class="designContainer">
      <editor />
    </div>
  </div>
</template>

<script>
  import Editor from '../components/Editor';

  export default {
    components: { Editor },
    name: 'designer',
  };
</script>

<style scoped>
  .designPage {
    flex: 1;
    flex-direction: column;
    display: flex;
  }

  .designNavigator {
    flex: 1;
    border-bottom: 1px solid #dce0e0;
    max-height: 50px;
  }

  .designContainer {
    flex: 1;
    display: flex;
  }
</style>
