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
                <div class="container text-center">
                  <div style="width:100%">
   
   <form action="">
                    <label for="">
                      <h4 class="fw-bold">Ou voulez-vous faire livrer</h4>
                    </label>
                  <di class="row">
                    <div class="col-md-12">
                        <input type="text" class="form-control p-4 pl-3 shadow-lg" style="width:85%" placeholder="Delivery to CIty Name">
                     <div class="col" style="display: flex;">
                    <input type="text" class="form-control p-4 mt-3 mr-3 shadow-lg" style="margin-left:-10px;width:97%; border:2px solid #524582"  placeholder="Pickup From Shop"><span style="background-color:#524582;border-radius: 50%;;height:25px; position:relative; margin-top:30px; width:24px"><img style="height:20px; width:20px; border-radius:50px" src="../assets/tick.svg" alt=""></span>

                     </div>
                        <input type="text" class="form-control p-4 pl-3 mt-3 shadow-lg" style="width:85%" placeholder="Delivery to CIty Name">
                  
                    </div>
                  </di>
                  </form>
                </div>
                  </div>

</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="container div text-center">
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
                  <router-link to="email" class="nav-link left"><img src="../assets/Vector1.svg" alt="">
                  </router-link>
                </li>
                <li>
                  <router-link to="address" class="nav-link right"><img src="../assets/Vector.svg" alt=""> </router-link>
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
  background-color: #fff;
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
  border-radius: 9px;
  padding: 10px
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
