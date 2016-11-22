<template>
  <div class="artNavigatorSearch">
    <input
      class="artTermInput"
      type="text"
      :placeholder="canAddElements ? 'Add text' : 'Select a product first!'"
      v-model="textInput"
      :disabled="!canAddElements"
    />
  </div>
</template>

<script>

  export default {
    name: 'text-navigator-input',
    data() {
      return {
        textInput: '',
      };
    },
    props: [
      'canAddElements',
    ],
    methods: {

    },
  };
</script>

<style scoped>
  
</style>
