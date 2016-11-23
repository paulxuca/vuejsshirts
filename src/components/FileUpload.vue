<template>
  <div class="itemNavigator">
    <div class="fileUpload">
      <input type="file" @change="onFileSelect"/>
    </div>
  </div>  
</template>

<script>
  import { uploadPhoto } from 'src/api/designer';

  export default {
    name: 'file-upload',
    methods: {
      onFileSelect(e) {
        const files = e.target.files || e.dataTransfer.files;
        const postData = new window.FormData();
        postData.append('file', files[0]);
        uploadPhoto(postData);
      },
    },
  };
</script>

<style scoped>
  .fileUpload {
    display: flex;
    height: 100%;
    width: 100%;
    flex: 1;
    justify-content: center;
    align-items: center;
  }
</style>