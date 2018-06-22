<template>
<div>
  <input type="file" @change="onFileChanged">
  <button @click="onUpload">Upload!</button>
</div>
</template>
<script>
import axios from 'axios'
export default {
  data () {
    return {
      selectedFile: ''
    }
  },
  methods: {
    onFileChanged: function (event) {
      this.selectedFile = event.target.files[0]
    },
    onUpload: function () {
      const formData = new FormData()
      formData.append('myFile', this.selectedFile, this.selectedFile.name)
      axios.post('my-domain.com/file-upload', formData)
    }
  }
}
</script>
