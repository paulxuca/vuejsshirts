

<template>
  <div class="artNavigator__search">
    <input
      class="artTerm__input"
      type="text"
      :placeholder="canAddElements ? 'Search' : 'Select a product first!'"
      v-model="searchTerm"
      v-on:keyup="throttledFetch"
      :disabled="!canAddElements"
    />
  </div>
</template>

<script>
  import { mapActions } from 'vuex';
  import debounce from 'lodash.debounce';

  export default {
    data() {
      return {
        searchTerm: '',
      };
    },
    props: [
      'canAddElements',
    ],
    methods: {
      ...mapActions([
        'fetchArt',
      ]),
      throttledFetch: debounce(function() { // eslint-disable-line
        this.fetchArt(this.searchTerm);
      }, 1000),
    },
    name: 'art-navigator-search',
  };
</script>

<style>
.artNavigator__search {
  display: flex;
  align-items: center;
}
.indicator {
  color: white;
  font-size: 12px;
  font-weight: 600;
}
.artTerm__input {
  float: right;
  margin: 12px;
  padding: 5px 10px;
  border: 1px solid black;
  border-radius: 100px;
  color: rgb(198, 206, 218);
  font-size: 13px;
  background-color: #1F2532;
}

.artTerm__input:focus {
    outline: 0;
}
</style>