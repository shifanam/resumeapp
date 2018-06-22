<template>
  <div class="row">
    <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12">
      <div class="col-xs-6 col-sm-6 col-lg-6 col-md-6">
        <div id="app" class="apps" v-bind:style="{ backgroundColor: color}">
          <h1></h1>
          <p></p>
        </div>
        <div class="color">
          <input type="text" v-bind:style="{ color: color}" v-model="color" maxlength="7" placeholder="#000000"/>
          <input type="color" v-model="color"/>
        </div>
      </div>
      <div class="col-xs-6 col-sm-6 col-lg-6 col-md-6"></div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      color: '#673AB7'
    }
  }
}
</script>
<style>
@import url('https://fonts.googleapis.com/css?family=Proza+Libre|Fira+Mono');
body {
  height: 100%;
  margin: 0;
  padding: 0;
}

.apps {
  width:50%;
  height:100%;
  border: #000;
  border:0px solid #000;
  float: right;
  color: #000;
  margin-right: 5%;
  font: 1em sans-serif;
  border-radius: 1em;
  box-shadow: 0 4px 20px 0 rgba(0,0,0,0.2);
}

#app {
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
#app input {
  padding: 1rem 1rem;
  font-size: 2rem;
  border: 0;
  border-radius: 3px;
  background: #fff;
}

h1 {
  font-family: 'Proza Libre', sans-serif;
  color: #000;
  font-weight: 300;
}

input[type="color"]{
  width:40px;
  border:1px solid black;
  margin:0px;
  padding:0px !important;
  height:40px;
}
</style>
