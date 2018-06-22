<template>
<div class="main">
  <div class="row">
    <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12">
      <div class="row">
        <div class="col-xs-6 col-sm-6 col-lg-6 col-md-6 card">
          <h1>Design your resume</h1>
          <div id="app" class="card1" v-bind:style="{ backgroundColor: color}">
            <div class="row">
              <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12">
                <label for="name">Name</label>
                <input type="text" name="name" placeholder="" id="name" value="name" required v-model="name">
              </div>
            </div>
            <div class="row">
              <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12">
                <label for="email">Email</label>
                <input type="email" name="email" placeholder="" id="email" value="email" required v-model="email">
              </div>
            </div>
            <div class="row">
              <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12">
                <label for="phone">Phone</label>
                <input type="phone" name="phone" placeholder="" id="phone" value="phone" required v-model="phone">
              </div>
            </div>
            <div class="row">
              <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12">
                <label for="address">Address</label>
                <input type="textarea" name="address" placeholder="" id="address" value="address" required v-model="address">
              </div>
            </div>
          </div>
        </div>
        <div class="col-xs-6 col-sm-6 col-lg-6 col-md-6 cards">
          <div class=row>
            <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 color">
              <label for="">choose color</label>
              <input type="color" v-model="color"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>
<script>
export default {
  data () {
    return {
      name: this.$localStorage.get('name'),
      email: this.$localStorage.get('email'),
      phone: this.$localStorage.get('phone'),
      address: this.$localStorage.get('address'),
      color: '#3AB79A'
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Proza+Libre|Fira+Mono');
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

.color label {
  margin-left: 300px;
  margin-top: 60px;
}

h1 {
  font-family: 'Proza Libre', sans-serif;
  color: #fff;
  font-weight: 300;
}

input[type="color"]{
  width:40px;
  border:1px solid black;
  margin:5px;
  padding:0px !important;
  height:40px;
  margin-top: 60px;
  float: right;
}
.main {
  background-image: url("");
  background-repeat: no-repeat;
  background-color: #fff;
  margin-top: -1%;
  margin-left: -1%;
  width:100%;
  margin-bottom: 0;
  background-attachment: fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  background-size: cover;
}
.card {
  background-color: #8e8e8e;
  border-radius: 1em;
  box-shadow: 0 4px 20px 0 rgba(0,0,0,0.2);
  margin-left: 10%;
}
.card1 {
  background-color: aquamarine;
  border-radius: 1em;
  box-shadow: 0 4px 20px 0 rgba(0,0,0,0.2);
  padding-left: 5%;
  padding-right: 5%;
  padding-top: 6%;
  padding-bottom: 6%;
}
input, text {
  font-size: 1em;
  display: block;
  width: 93%;
  padding:1em 1em 1em 0;
  background: none;
  background-image: none;
  border: none;
  border-bottom: 1px solid #8e8e8e;
  color: #000;
  border-radius: 0;
  -webkit-transition: border-color .25s ease, box-shadow .25s ease;
  -moz-transition: border-color .25s ease, box-shadow .25s ease;
  transition: border-color .25s ease, box-shadow .25s ease;
}
.btn-medium {
  background-color:#2196f3;
  font-size: 14px;
  font-family: 'Roboto';
  text-align :center;
  color: white;
  width:90px;
  padding:10px;
  cursor: pointer;
  border-radius: 0.3em;
  text-decoration: none;
  box-shadow: 0 4px 2px 0 rgba(0.1,0.1,0.1,0.2);
}

.btn-medium:hover, .btn-medium:focus {
  background: #2196f3;
  letter-spacing: 7px;
  box-shadow: 2px 2px 2px 2px rgba(1,0,0,0.1);
}

.btn-medium {
  display: block;
  width: 92%;
}
</style>
