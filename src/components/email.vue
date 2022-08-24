<template>
<div class="container-fluid">
  
  <div class="container menu">
    <div class="container pt-5" >
      <img src="../assets/logo.png" style="height:40px" alt=""></div>
    <!----------------------OUR Menu------------------- -->
    <div class="container d-flex justify-content-center b-5" id="menu" style="margin-top:10%">
     
     <div class="container">
       <div class="row text-cener">
        <div class="col-md-3"></div>
        <div class="col-md-5">
          <label for="" ><h4 class="fw-bold">Quel est  ton e-mail</h4></label>
           <div>
              <form action="" cclass="number" style="display:flex" >
      <div class="input-group mb-3">
  <div class="input-group-prepend">
    <button style="border:none;background-color: #fff; border:none;" type="button">
      <img src="../assets/gmail.png" alt=""></button>
    
  </div>
  <input type="text" class="form-control" placeholder="Email Here" >
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
        <nav class="navbar ">
  <a class="nav-link"><button class="btn " style="background-color: #5AB9AE; color:#fff"><i class="fa-solid fa-cart-circle-plus"></i>Cart</button></a>
  <form class="form-inline">
    
   <ul class="nav-item">
          <li >
            <router-link to="phone"  class="nav-link left"><i class="fa-solid fa-arrow-up" style="color:#5AB9AE"></i>
            </router-link>
          </li>
          <li>
            <router-link to="detail" class="nav-link right"><i class="fa-solid fa-arrow-down" style="color:white"></i>
            </router-link>
          </li>
          </ul>
  </form>
</nav>
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
.cart
{
  margin-top: 40px
}
.input-group
{
   border: 1px solid black;
    background-color: #fff;
    border-radius: 10px;
    padding: 6px;
}
.div
{
      margin-left: -109px;
}
.navbar
{
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
.nav-item li
{
  background-color: #fff;
}

.nav-item li .right {
  background-color: #5AB9AE;
  border-radius: 8px;
}

.nav-item li .left{
  border-radius: 10px!important;
}

input[type="text"]{
border:none;
border-radius: 30px;
}
.container-fluid
{
background-color: #F7F7F7;
  height:100vh;
}
#id
{
  margin-bottom: 300px;

}
.btn 
{
  background-color:#5c41f4;
  border: none;
  color:white
}
.heading
{
   color:#5c41f4;
}
</style>
