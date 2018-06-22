<template>
<div class="main">
  <div class="row">
    <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12">
      <div class="row">
        <div class="col-xs-6 col-sm-6 col-lg-6 col-md-6 card">
          <div class="card1">
            <div class="row">
              <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12">
                <label for="name">Enter Your Name</label>
                <input type="text" name="name" placeholder="" id="name" value="" required v-model="name">{{name}}
              </div>
            </div>
            <div class="row">
              <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12">
                <label for="email">Enter Your Email</label>
                <input type="email" name="email" placeholder="" id="email" value="" required v-model="email">{{email}}
              </div>
            </div>
            <div class="row">
              <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12">
                <label for="phone">Enter Your Phone</label>
                <input type="phone" name="phone" placeholder="" id="phone" value="" required v-model="phone">{{phone}}
              </div>
            </div>
            <div class="row">
              <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12">
                <label for="address">Enter Your Address</label>
                <input type="textarea" name="address" placeholder="" id="address" value="" required v-model="address">{{address}}
              </div>
            </div>
            <br>
            <div class="row">
              <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12">
                <div class="btn-medium" v-on:click="add_Details()">SAVE</div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xs-6 col-sm-6 col-lg-6 col-md-6"></div>
      </div>
    </div>
  </div>
</div>
</template>
<script>
export default {
  data () {
    return {
      name: '',
      email: '',
      phone: '',
      address: ''
    }
  },
  methods: {
    add_Details: function () {
      var name = this.name
      var address = this.address
      var email = this.email
      var phone = this.phone
      this.emailVal(email)
      this.phoneVal(phone)
      this.store(name, email, phone, address)
      this.resume()
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
    phoneVal: function (phone) {
      let phoneformat = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
      if (phone.match(phoneformat)) {
        return true
      } else {
        alert('Phone must contains  :10 numbers!..')
        return false
      }
    },
    store: function (name, email, phone, address) {
      this.$localStorage.set('name', name)
      this.$localStorage.set('email', email)
      this.$localStorage.set('phone', phone)
      this.$localStorage.set('address', address)
    },
    resume: function () {
      let stName = this.$localStorage.get('name')
      // alert(stName)
      let stEmail = this.$localStorage.get('email')
      // alert(stEmail)
      let stPhone = this.$localStorage.get('phone')
      // alert(stPhone)
      let stAddress = this.$localStorage.get('address')
      // alert(stAddress)
      if (stName && stEmail && stPhone && stAddress) {
        alert('add details success')
        this.$router.push({path: '/resume'})
        return true
      } else {
        alert('must fill all the fields')
        return false
      }
    }
  }
}
</script>

<style>
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
  background-color: blue;
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
