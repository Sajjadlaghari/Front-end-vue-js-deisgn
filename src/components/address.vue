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
              <label for="">
                <h4 class="fw-bold">Quelle est votre addresse</h4>
              </label>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum excepturi, temporibus iure architecto
                sed dolore? Ad.</p>
              <div>
                <form action="" cclass="number" style="display:flex">
                  <div class="input-group mb-3">
                    <div class="input-group-prepend">


                    </div>
                    <input type="text" class="form-control" placeholder="Addess Here">
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="container div">
      </div>
  
 
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
                  <router-link to="detail" class="nav-link left"><img src="../assets/Vector1.svg" alt="">
                  </router-link>
                </li>
                <li>
                  <router-link to="verifyDetails" class="nav-link right"><img src="../assets/Vector.svg" alt=""> </router-link>
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
  name: 'comment',
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

.input-group {
  border: 1px solid black;
  background-color: none;
  border-radius: 10px;
  padding: 6px;
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
