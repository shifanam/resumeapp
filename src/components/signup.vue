<template>
<div class="main">
  <div class="row">
    <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12">
      <div class="row">
        <div class="col-xs-8 col-sm-8 col-lg-8 col-md-8 design">
          <h1>Design Your Self</h1>
        </div>
        <div class="col-xs-4 col-sm-4 col-lg-4 col-md-4 sign">
          <div class="row">
            <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12">
              <img  src="../assets/signup.jpg" height="80px" width="100px"/>
            </div>
          </div>
          <div class="row">
            <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12">
              <label for="email">Enter Email</label>
              <input type="email" name="email" id="email" placeholder="example@gmail.com" v-model="email" required>
            </div>
          </div>
          <br>
          <div class="row">
            <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12">
              <label for="password">Enter Password</label>
              <input type="password" name="password" id="password" placeholder="password" value="" v-model="password" required>
            </div>
          </div>
          <br>
          <div class="row">
            <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12">
              <div class="row">
                <div class="col-xs-2 col-sm-2 col-lg-2 col-md-2">
                  <label class="check">
                    <input type="checkbox" id="checkbox"  v-on:click="myFunction()" checked="checked" name=check1 v-model="checkbox">
                    <span class="checkmark"></span>
                  </label>
                </div>
                <div class="col-xs-10 col-sm-10 col-lg-10 col-md-10">
                  <div class="show">
                    show password
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br><br>
          <div class="row">
            <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12">
              <div class="btn-medium" v-on:click="form_validation()">SIGNUP</div>
            </div>
          </div>
          <br>
          <div class="row">
            <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12">
              <div class="lo">
                <i>click here to</i>
                  <a v-bind:href="url">Login</a>
              </div>
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
      password: '',
      email: '',
      checkbox: '',
      url: 'http://localhost:8080/#/login'
    }
  },
  methods: {
    myFunction: function () {
      var x = document.getElementById('password')
      if (x.type === 'password') {
        x.type = 'text'
      } else {
        x.type = 'password'
      }
    },
    form_validation: function () {
      var email = this.email
      var password = this.password
      this.emailVal(email)
      this.passVal(password)
      this.testValidation(email, password)
      this.store(email, password)
    },
    emailVal: function (email) {
      var mailformat = /[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}/igm
      if (email.match(mailformat)) {
        return true
      } else {
        alert('Enter valid email!..')
        return false
      }
    },
    passVal: function (password) {
      let passformat = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,16}$/
      if (password.match(passformat)) {
        return true
      } else {
        alert('Password should contain :atleast 1 alphabet,digit,special character and total 8-16 characters!..')
        return false
      }
    },
    store: function (email, password) {
      this.$localStorage.set('email', email)
      this.$localStorage.set('pass', password)
    },
    testValidation: function (email, password) {
      if (this.emailVal(email) === true && this.passVal(password) === true) {
        this.$router.push({path: '/login'})
      }
    }
  }
}
</script>
<style>
.main {
  background-image: url("../assets/bgs.jpeg");
  background-repeat: no-repeat;
  background-color: #fff;
  margin-top: -1%;
  margin-left: -1%;
  width:100%;
  margin-bottom: 0;
  text-decoration: none;
  background-attachment: fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  background-size: cover;
}

.nave-bar {
  background-color:none;
  display: block;
  height: 30px;
  width: 100%;
  text-decoration: none;
}

ul, li {
  list-style: none;
  display: block;
  overflow: hidden;
  margin: 0;
  padding-left: 12px;
  padding-top: 18px;
  float: left;
  top: 0;
  color: #fff;
  cursor: pointer;
}

a {
  text-decoration: none;
}

.s {
  width:1em;
  height:2em;

}
.sign {
  width: 30%;
  height:100%;
  border:0px solid #000;
  background-image: url("../assets/bots.jpeg");
  background-color: #fff;
  padding-left: 5%;
  padding-top: 5%;
  padding-bottom: 5%;
  float: right;
  font: 1em sans-serif;
  border-radius: 1em;
  margin-right: 5%;
  box-shadow: 0 4px 20px 0 rgba(0,0,0,0.2);
  margin-top: -15%;
}
.sign:hover {
  box-shadow: 0 8px 22px 0 rgba(0,0,0,0.2);
}

input, text {
  font-size: 1em;
  display: block;
  width: 80%;
  padding:1em 1em 1em 0;
  background: none;
  background-image: none;
  border: none;
  border-bottom: 1px solid #8e8e8e;
  color: #000;
  text-align:left;
  border-radius: 0;
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
  width: 80%;
}

.check {
  display: block;
  position: relative;
  padding-left: 25px;
  padding-bottom: 12px;
  border:0px solid #000;
  cursor: pointer;
  font-size: 15px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.check input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
}

.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 20px;
  width: 20px;
  border: solid #2196f3;
  background-color: #eee;
}

.check:hover input ~ .checkmark {
  background-color: #aaa;
}

.check input:checked ~ .checkmark {
  background-color: #fff;
}

.checkmark:after {
  border: solid #122636;
  content: "";
  position: absolute;
  display: none;
}

.check input:checked ~ .checkmark:after {
  display: block;
}

.check .checkmark:after {
  left:6px;
  top: 3px;
  width: 4px;
  height: 8px;
  border:solid #2196f3;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}

.show {
  margin-top: -1px;
  margin-left: -30px;
  float: left;
}

img {
  float: center;
  margin-left: -21%;
}

label {
  float: left;
}

.lo {
  color:#aaa;
  margin-top: -0.5px;
  margin-left: -30px;
  font-size: 0.8em;
}

.lo  a {
  color:rgb(221, 10, 10);
  font-size: 0.9em;
  text-decoration: none;
}

.design {
  font-size: 10%;
  font-family: 'Orbitron', sans-serif;
  color: #fff;
  margin-top: 13%;
  margin-left: 30px;
}

@media (min-width: 320px) and (max-width: 480px) {
  body {
    background-image: url("../assets/bgs.jpeg");
    background-repeat: no-repeat;
    background-color: #fff;
    margin-top: -1%;
    margin-left: -1%;
    width:100%;
    margin-bottom: 0;
    text-decoration: none;
    background-attachment: fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    background-size: cover;
  }

  .nave-bar {
    background-color:none;
    display: block;
    height: 30px;
    width: 100%;
    text-decoration: none;
  }

  ul, li {
    list-style: none;
    display: block;
    overflow: hidden;
    margin: 0;
    padding-left: 12px;
    padding-top: 18px;
    float: left;
    top: 0;
    color: #fff;
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }

  .s {
    width:1em;
    height:2em;

  }
  .sign {
    width: 30%;
    height:100%;
    border:0px solid #000;
    background-image: url("../assets/bots.jpeg");
    background-color: #fff;
    padding-left: 5%;
    padding-top: 5%;
    padding-bottom: 5%;
    float: right;
    font: 1em sans-serif;
    border-radius: 1em;
    margin-right: 5%;
    box-shadow: 0 4px 20px 0 rgba(0,0,0,0.2);
    margin-top: -15%;
  }
  .sign:hover {
    box-shadow: 0 8px 22px 0 rgba(0,0,0,0.2);
  }

  input, text {
    font-size: 1em;
    display: block;
    width: 80%;
    padding:1em 1em 1em 0;
    background: none;
    background-image: none;
    border: none;
    border-bottom: 1px solid #8e8e8e;
    color: #000;
    text-align:left;
    border-radius: 0;
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
    width: 80%;
  }

  .check {
    display: block;
    position: relative;
    padding-left: 25px;
    padding-bottom: 12px;
    border:0px solid #000;
    cursor: pointer;
    font-size: 15px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  .check input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
  }

  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 20px;
    width: 20px;
    border: solid #2196f3;
    background-color: #eee;
  }

  .check:hover input ~ .checkmark {
    background-color: #aaa;
  }

  .check input:checked ~ .checkmark {
    background-color: #fff;
  }

  .checkmark:after {
    border: solid #122636;
    content: "";
    position: absolute;
    display: none;
  }

  .check input:checked ~ .checkmark:after {
    display: block;
  }

  .check .checkmark:after {
    left:6px;
    top: 3px;
    width: 4px;
    height: 8px;
    border:solid #2196f3;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }

  .show {
    margin-top: -1px;
    margin-left: -30px;
    float: left;
  }

  img {
    float: center;
    margin-left: -21%;
  }

  label {
    float: left;
  }

  .lo {
    color:#aaa;
    margin-top: -0.5px;
    margin-left: -30px;
    font-size: 0.8em;
  }

  .lo  a {
    color:rgb(221, 10, 10);
    font-size: 0.9em;
    text-decoration: none;
  }

  .design {
    font-size: 10%;
    font-family: 'Orbitron', sans-serif;
    color: #fff;
    margin-top: 13%;
    margin-left: 30px;
  }
}
</style>
