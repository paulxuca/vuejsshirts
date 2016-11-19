<template>
  <canvas id="c" />
</template>

<script>
  import Vue from 'vue';
  
  const fabricjs = require('fabric').fabric;

  let fabric; // eslint-disable-line

  // console.log(document.getElementById('c')); // eslint-disable-line

  // const fabric = new fabricjs.Canvas('c'); // eslint-disable-line

  export default Vue.directive('fabric', {
    bind: (el) => {
      fabric = new fabricjs.Canvas(el);
    },
  });
</script>