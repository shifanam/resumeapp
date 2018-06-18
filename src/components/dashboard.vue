<template>
<div class="row">
  <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12">
    <div class="row">
      <div class="col-xs-2 col-sm-2 col-lg-2 col-md-2">
        <div class="sidenave">
        <div class="row">
          <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12">
            <ul>
              <li>
                <img src="../assets/jl.jpg" height="70px" width="100px"/>
                </li>
                <li>
                  <a href="landing.html">
                    <div class="btn-medium" onclick="">HOME</div>
                  </a>
                </li>
                <li>
                  <a href='http://localhost:8080/#/login'>
                    <div class="btn-medium" onclick="">ABOUT</div>
                  </a>
                </li>
                <li>
                  <a href="profile.html">
                    <div class="btn-medium" onclick="">PROFILE</div>
                  </a>
                </li>
                <li class="">
                  <a href="#">
                    <div class="btn-medium logout" onclick="">LOGOUT</div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          </div>
      </div>
      <div class="col-xs-10 col-sm-10 col-lg-10 col-md-10">
        <div class="nave">
          <div class="row">
            <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<style scoped>
body {
  background-image: url("../assets/ppp.jpeg");
  background-repeat: no-repeat;
  background-color: #fff;
  margin-top: -1%;
  margin-left: -1%;
  width:100%;
  margin-bottom: 0;
  text-decoration: none;
}

.nave {
  display: block;
  height: 10px;
  width: 100%;
  margin-left: -40px;
  text-decoration: none;
  border: solid #fff;
  background-color: #fff;
  box-shadow: 0px 0px 4px 0px rgba(0,0,2,0.5);
}

ul, li {
  list-style-type: none;
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

.logout {
  float:right;
}

.btn-medium {
  background-color:#2196f3;
  font-size: 14px;
  font-family: 'Roboto';
  text-align :center;
  color:white;
  width:90px;
  padding:10px;
  cursor: pointer;
  border-radius: 0.3em;
  text-decoration: none;
}

.btn-medium:hover, .btn-medium:focus {
  background: #00cacc;
  letter-spacing: 7px;
}

.sidenave {
  height: 100%;
  width: 150px;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color:#fff;
  overflow-x: hidden;
  padding:12px;
  border: solid #fff;
  box-shadow: 0px 0px 4px 0px rgba(0,0,2,0.5);
}
.sidenave ul {
  list-style-type: none;
}
.sidenave ul li {
  padding: 20px 0px 20px 0px;
  color: #fff;
  cursor: pointer;
  }

.sidenave ul a:hover {
  color:#fff;
  color: #f1f1f1;
}
.img {
  height:50px;
  width:50px;
  border-radius: 50%;
  float: left;
  object-fit: cover;
}
</style>
