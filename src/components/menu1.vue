<template>
<div class="container-fluid">
  
  <div class="container menu">
    <div class="container pt-5" >
      <img src="../assets/logo.png" style="height:40px" alt=""></div>
    <!----------------------OUR Menu------------------- -->
    <div class="container pb-5" id="menu">
      <h4 class="text-center heading" style="font-weight: bold; padding-top:70px">Quant souhaite-vous acheter</h4>
      <p class="text-center heading" style="font-weight: bold;">Choisissez un jour de ramessage</p>
   
      <div class="row mt-5">
        

        <div class="col-md-4 col-sm-12 col-xs-12 col-lg-4">
          <div class="card cartt" >
            <div class="card-body text-center">
              <h5 class="card-title top"><img src="../assets/menu1.png" class=" img-fluid" alt=""></h5>
              <h5 class="card-subtitle text-left p-3" style="font-weight:bold">BiBimBap</h5>
              <p class="card-text text-left">On the Insert tab, the galleries include itemsOn the Insert tab, the
                galleries include itemsOn the Insert tab, the galleries include itemsOn the Insert tab, include items
              </p>
              <p class="text-right">
                <button class="btn btn-primary">9.00$</button></p>

            </div>
          </div>
        </div>
        
        <div class="col-md-4 col-sm-12 col-xs-12 col-lg-4">
          <div class="card cartt">
            <div class="card-body text-center">
              <h5 class="card-title top"><img src="../assets/menu1.png" class=" img-fluid" alt=""></h5>
              <h5 class="card-subtitle text-left p-3" style="font-weight:bold">BiBimBap</h5>
              <p class="card-text text-left">On the Insert tab, the galleries include itemsOn the Insert tab, the
                galleries include itemsOn the Insert tab, the galleries include itemsOn the Insert tab, include items
              </p>
              <p class="text-right">
                <button class="btn btn-primary">9.00$</button></p>

            </div>
          </div>
        </div>

        <div class="col-md-4 col-sm-12 col-xs-12 col-lg-4">
          <div class="card cartt">
            <div class="card-body text-center card-img-top"  >
              <h5 class="card-title top">
                <img  src="../assets/menu1.png" class=" img-fluid " alt="">
                </h5>
              <h5 class="card-subtitle text-left p-3" style="font-weight:bold">BiBimBap</h5>
              <p class="card-text text-left">On the Insert tab, the galleries include itemsOn the Insert tab, the
                galleries include itemsOn the Insert tab, the galleries include itemsOn the Insert tab, include items
              </p>
              <p class="text-right">
                <button class="btn btn-primary">9.00$</button></p>

            </div>
          </div>
        </div>
      </div>

    <div class="row mt-5">
        

        <div class="col-md-4 col-sm-12 col-xs-12 col-lg-4">
          <div class="card cartt">
            <div class="card-body text-center">
              <h5 class="card-title top"><img src="../assets/menu1.png" class=" img-fluid" alt=""></h5>
              <h5 class="card-subtitle text-left p-3" style="font-weight:bold">BiBimBap</h5>
              <p class="card-text text-left">On the Insert tab, the galleries include itemsOn the Insert tab, the
                galleries include itemsOn the Insert tab, the galleries include itemsOn the Insert tab, include items
              </p>
              <p class="text-right">
                <button class="btn btn-primary">9.00$</button></p>

            </div>
          </div>
        </div>
        
        <div class="col-md-4 col-sm-12 col-xs-12 col-lg-4">
          <div class="card cartt" >
            <div class="card-body text-center">
              <h5 class="card-title top"><img src="../assets/menu1.png" class=" img-fluid" alt=""></h5>
              <h5 class="card-subtitle text-left p-3" style="font-weight:bold">BiBimBap</h5>
              <p class="card-text text-left">On the Insert tab, the galleries include itemsOn the Insert tab, the
                galleries include itemsOn the Insert tab, the galleries include itemsOn the Insert tab, include items
              </p>
              <p class="text-right">
                <button class="btn btn-primary">9.00$</button></p>

            </div>
          </div>
        </div>

        <div class="col-md-4 col-sm-12 col-xs-12 col-lg-4">
          <div class="card cartt" >
            <div class="card-body text-center card-img-top"  >
              <h5 class="card-title top">
                <img  src="../assets/menu1.png" class=" img-fluid " alt="">
                </h5>
              <h5 class="card-subtitle text-left p-3" style="font-weight:bold">BiBimBap</h5>
              <p class="card-text text-left">On the Insert tab, the galleries include itemsOn the Insert tab, the
                galleries include itemsOn the Insert tab, the galleries include itemsOn the Insert tab, include items
              </p>
              <p class="text-right">
                <button class="btn btn-primary">9.00$</button></p>

            </div>
          </div>
        </div>
      </div>


      <ul class="nav-item">
        <li ><router-link to="/" class="nav-link left"><i class="fa-solid fa-arrow-up" style="color:#5AB9AE" ></i></router-link></li>
        <li><router-link to="menu2"  class="nav-link right"><i class="fa-solid fa-arrow-down" style="color:white"></i></router-link></li>
      </ul>
    </div>
  </div>
</div>




</template>

<script>
export default {
  name: 'menu1',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container-fluid
{
  background-color: #F7F7F7;
}
  .nav-item li
{
  display: inline-block;
  position: relative;
  left: 99%;
  top:-47px
}
.nav-item li .right
{
  background-color: #5AB9AE;
  border-radius: 8px;
}

@media only screen and (max-width: 1300px) and (min-width: 600px)  
{
  .nav-item li
{
  display: inline-block;
  position: relative;
  left: 50%;
  top:40px
}
.nav-item li .right
{
  background-color: #5AB9AE;
  border-radius: 8px;
}

}
#id
{
  margin-bottom: 300px;

}
.top
{
    margin-top: -88px;
}
.btn 
{
  background-color:#524582;
  border: none;
  color:white
}
.heading
{
   color:#524582;
}
.col-md-4
{
  margin-top: 38px;
}

.col-sm-4
{
  margin-top: 60px;
}
.cartt
{
  width: 90%;
  border-radius: 16px;
}

</style>
