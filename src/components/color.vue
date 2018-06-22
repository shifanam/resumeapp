<template>
  <color-picker v-model="color" @change="onChange"></color-picker>
</template>
<script>
import { VueColorpicker } from 'vue-pop-colorpicker'
export default {
  components: {
    'color-picker': VueColorpicker
  },
  data () {
    return {
      color: '#fff'
    }
  },
  methods: {
    onChange (color) {
      console.log(color)
    }
  }
}
</script>
