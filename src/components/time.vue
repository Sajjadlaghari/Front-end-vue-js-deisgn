<template>
  <div class="container-fluid">

    <div class="container menu">
      <div class="container pt-5">
        <img src="../assets/logo.png" style="height:40px" alt="">
      </div>
      <!----------------------OUR Menu------------------- -->
      <div class="container d-flex justify-content-center b-5" id="menu" style="margin-top:10%">

        <div class="container">
          <div class="row text-cener">
            <div class="col-md-3"></div>
            <div class="col-md-5">
              <div>
                <form action="" cclass="number" style="display:flex">
                  <select name="" id="" class="p-2 mr-3"
                    style="border:none;border-radius: 10px; margin-right:5px;width:100px;border:none;background-color:#fff">
                    <option value="">Monday</option>
                    <option value="">Tuesday</option>
                    <option value="">Wednesday</option>
                    <option value="">Thursday</option>
                    <option value="">Friday</option>
                    <option value="">Sturday</option>
                    <option value="">Sunday</option>
                  </select>
                  <select name="" class="p-2 pl-3 pr-3" id=""
                    style="border:none;border-radius: 10px; margin-right:5px;width:100px;border:1px solid black;background-color:#F7F7F7">
                    <option value="">00:00</option>
                  </select>
                  <span style="font-weight:bold;padding-top:5px"><img src="../assets/line.png" alt=""></span>

                  <select name="" class="p-2 ml-2 mr-1" id=""
                    style="border:none;border-radius: 10px; margin-right:5px;width:100px;border:1px solid black;background-color:#F7F7F7">
                    <option value="">00:00</option>
                  </select>

                  <select name="" class="p-2" id=""
                    style="border:none;border-radius: 10px; margin-right:5px;width:100px;border:1px solid black;background-color: #F7F7F7;">
                    <option value="">AM</option>
                    <option value="">PM</option>

                  </select>

                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
    </div>
    <div class="cotainer mr-5 mb-5" style="position:absolute;bottom:-1%;width:90%">
      <div class="row">
        <div class="col-md-11">
          <nav class="navbar ">

            <a class="nav-link"><p class="mb-5" style="background-color: none!important; color:#fff"><img
                  src="../assets/Frame.svg" style="height:35px;" alt=""></p></a>
            <form class="form-inline mt-5">

              <p>
              <ul class="nav-item" style="position:relative;">
                <li>
                  <router-link to="/" class="nav-link left"><img src="../assets/Vector1.svg" alt="">
                  </router-link>
                </li>
                <li>
                  <router-link to="menu1" class="nav-link right"><img src="../assets/Vector.svg" alt=""> </router-link>
                </li>
              </ul>
              </p>
            </form>
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'time',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.cart {
  margin-top: 40px
}

.div {
  margin-left: -109px;
}

.navbar {
  margin-top: 7%;
  margin-left: 17%;
}

.ul .li {
  display: inline-block;
  padding-left: 10px;
}

.nav-item li {
  display: inline-block;
  position: relative;
}

.nav-item li {
  background-color: #fff;
}

.nav-item li .right {
  background-color: #5AB9AE;
  border-radius: 8px;
}

.nav-item li .left {
  border-radius: 10px !important;
}

input[type="text"] {
  border: none;
  border-radius: 30px;
  background-color: rgb(239, 241, 243);
}

.container-fluid {
  background-color: #F7F7F7;
  height: 100vh;
}

#id {
  margin-bottom: 300px;

}

.btn {
  background-color: #5c41f4;
  border: none;
  color: white
}

.heading {
  color: #5c41f4;
}
</style>
