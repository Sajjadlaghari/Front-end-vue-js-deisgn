<template>

  <div class="container ">

    <!-- For demo purpose -->
    <div class="row mb-4">
      <div class="col-lg-6 mx-auto text-center">
      </div>
    </div> <!-- End -->
    <div class="row">
      <div class="col-lg-6 mx-auto">
        <div class="card">
          <div class="card-header shadow-lg border-radius">

            <div class=" ">
              <!-- Credit card form tabs -->
              <ul role="tablist" class="nav  nav-pills rounded nav-fill ">
                <li><span class="name">Payment <br></span></li>
              </ul>

            </div> <!-- End -->
            <hr />
            <div class="">
              <!-- Credit card form tabs -->
              <ul role="tablist" class="nav  nav-pills  ">
                <li class="nav-item">Total <br> <h2 class="name"><h3 class="fw-bold" style="font-weight:bold"> 50$</h3></h2></li>
                <li class="nav-item"> </li>
                <li class="nav-item float-end" style="position:absolute;right:5%"> <img src="../assets/bx_money.svg" alt=""> </li>
              </ul>

            </div> <!-- End -->
            <br>
            <div class="" >
              <!-- Credit card form tabs -->
              <ul role="tablist" class="nav  nav-pills rounded nav-fill">
                <select name="" id="" class="form-control  mt-2">
                  <option value="" class="form-control">Payment Type</option>
                  <option value="">Payment Type</option>
                 <h4>Options</h4>
                </select>

                <input type="text" class="form-control p-4 mt-4" placeholder="Promo Code Here">
                <input type="text" class="form-control p-4 mt-4" placeholder="Id Here">
              
                <span style="width:100%" class="flavour mt-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore cum iste illo?
                    Minima illo deserunt nobis consequatur quisquam quasi cumque veritatis omnis nesciunt ipsum delectus
                    tenetur, quam, eveniet quo adipisci. Lorem ipsum dolor sit amet, maiores officia blanditiis quae
                    veniam, perferendis mollitia ad, itaque, iusto eius alias quis nostrum. Quae?</span>
              

              </ul>
              
            </div> <!-- End -->


            <div class="  pt-1 pr-2 pb-2">
              <!-- Credit card form tabs -->
              <ul role="tablist" class="nav  nav-pills rounded nav-fill ">
                
              </ul>

            </div> <!-- End -->
            <div class="  pt-2  pr-2 pb-2">
              <!-- Credit card form tabs -->
              <ul role="tablist" class="nav  nav-pills rounded nav-fill ">

                <li class="nav-item">
                </li>
                <li class="nav-item"> </li>
                <li class="nav-item"> <button class="btn btn-success" style="background-color: #524582;">Pay</button>
                </li>

              </ul>

            </div> <!-- End -->
          </div>
        </div>
      </div>
    </div>


</div>

<div class="containee pr-5">
  <div class="container pr-5">
    <div class="cotainer mr-5 mb-5" style="position:absolute;bottom:-1%;width:90%">
      <div class="row">
        <div class="col-md-10">
        </div>
      </div>
    </div>
  </div>
</div>
 
 
            <div class="cotainer mr-5 mb-5" style="position:relative;bottom:-1%;width:60%;left:18%">
      <div class="row">
        <div class="col-md-11">
          <nav class="navbar ">

            <a class="nav-link"><p class="mb-5" style="background-color: none!important; color:#fff"><img
                  src="../assets/Frame.svg" style="height:35px;" alt=""></p></a>
            <form class="form-inline mt-5">

              <p>
              <ul class="nav-item" style="position:relative;left:5%">
                <li>
                  <router-link to="verifyDetails" class="nav-link left"><img src="../assets/Vector1.svg" alt="">
                  </router-link>
                </li>
                <li>
                  <router-link to="payment" class="nav-link right"><img src="../assets/Vector.svg" alt=""> </router-link>
                </li>
              </ul>
              </p>
            </form>
          </nav>
        </div>
      </div>
    </div>  


</template>

<script>
export default {
  name: 'verifyDetails',
  props: {
    msg: String
  }
}
</script>
<style>
.name {
  font-weight: bold;
  padding-left: 10px;
}

.flavour {
  font-size: 12px;
  margin-left: 8px;
}

.card-header {
  background: #fff;
  border: none !important;
}


.nav-item li .right {
  background-color: #5AB9AE;
  border-radius: 8px;
}

.nav-item li .right {
  background-color: #5AB9AE;
  border-radius: 8px;
}


.nav-pills .nav-link {
  color: #555
}

.nav-pills .nav-link.active {
  color: white
}

input[type="radio"] {
  margin-right: 5px
}

.bold {
  font-weight: bold
}
</style>
