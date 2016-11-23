<template>
  <div class="artNavigator__search">
    <input
      class="artTerm__input"
      type="text"
      :placeholder="canAddElements ? 'Add text' : 'Select a product first!'"
      :value="textInput"
      @input="changeTextTerm"
      :disabled="!canAddElements"
    />
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex';

  export default {
    name: 'text-navigator-input',
    computed: {
      ...mapGetters({
        text: 'textInput',
      }),
    },
    props: [
      'canAddElements',
    ],
    methods: {
      ...mapActions([
        'changeTextTerm',
      ]),
    },
  };
</script>

<style scoped>
  
</style>
