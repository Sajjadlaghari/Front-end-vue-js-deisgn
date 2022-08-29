<template>

  <div class="container">
 
<!-- For demo purpose -->
    <div class="row mb-4">
 <div class="col-lg-8 mx-auto text-center">
      </div>
    </div> <!-- End -->
    <div class="row">
      <div class="col-lg-6 mx-auto">
        <div class="card">
          <div class="card-header shadow-lg border-radius">
            <div class="">
              <!-- Credit card form tabs -->
              <ul role="tablist" class="nav nav-fill p-3" style="">
                <li class="nav-item"><h6 clas="fw-bold" style="font-weight:bold;position:absolute"> Verify the details</h6></li>
                      <li class="nav-item"> </li>
                      <li class="nav-item" style="position:absolute ;right:4%"> Edit </li>
              </ul>
                   
            </div> <!-- End -->
            <hr />
                <div class="  pr-2">
              <!-- Credit card form tabs -->
              <ul role="tablist" class="nav  nav-pills rounded nav-fill ">
                <li><img src="../assets/menu1.png" style="width:50px" alt=""></li>
                  <p><span class="name">BIBimBap <br></span>
                  <span class="flavour">Orignal Flavour &nbsp;&nbsp; <span style="color:blue">See Options</span> </span></p>
              </ul>
                   
            </div> <!-- End -->
            <hr />

              <div class=" pr-2">
              <!-- Credit card form tabs -->
              <ul role="tablist" class="nav  nav-pills rounded nav-fill ">
                <li><h1 style="border-radius:7px;background: #524582;"><img src="../assets/deleviey.svg" style="height:20px;width:40px" alt=""></h1></li>
                  <p><span class="name">Dilevery to Location <br></span>
                  <span class="flavour">On 2 july &nbsp;&nbsp; <br>&nbsp;&nbsp;&nbsp;<span style="font-weight:bold;font-size:13px"> 20$</span></span>
                  </p>
              </ul>
                   
            </div> <!-- End -->
            <hr />

                          <div class=" pb-2">
              <!-- Credit card form tabs -->
              <ul role="tablist" class="nav  nav-pills  ">
                  <span class="name">Dilevery Instructions<br></span>
                   
                <span style="width:100%" class="flavour mt-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore cum iste illo?
                    Minima illo deserunt nobis consequatur quisquam quasi cumque veritatis omnis nesciunt ipsum delectus
                    tenetur, quam, eveniet quo adipisci. Lorem ipsum dolor sit amet, maiores officia blanditiis quae
                    veniam, perferendis mollitia ad, itaque, iusto eius alias quis nostrum. Quae?
                    
                  <div class="form-group mt-3"> 
                    <input type="checkbox" style="background-color: #5AB9AE;" name="check" placeholder="Card Owner Name" >&nbsp;<label for="username">
                   I agree terms and conditions</label> 
                  </div>
                    
                    </span>
              

              </ul>
                   
            </div> <!-- End -->
                          <div class="  pt-2  pr-2 pb-2">
              <!-- Credit card form tabs -->
              <ul role="tablist" class="nav  nav-pills rounded nav-fill ">
                  
                                  <li class="nav-item"> <p>
                    <span class="flavour" style="font-size:14px">Total <br></span>
                    <span class="name" style="font-size:30px">50$</span>
                  </p></li>
                      <li class="nav-item"> </li>
                      <li class="nav-item"> <button class="btn btn-success" style="background-color: #524582;">Proceed to Payment</button> </li>



               
              </ul>
                   
            </div> <!-- End -->
          </div>
        </div>
      </div>
    </div>
     <div class="cotainer mr-5 mb-5" style="position:absolute;bottom:-1%;width:90%">
      <div class="row">
        <div class="col-md-11">
        
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
                  <router-link to="address" class="nav-link left"><img src="../assets/Vector1.svg" alt="">
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
.name
{
  font-weight: bold;
    padding-left: 10px;
}
.flavour
{
  font-size: 12px;
    margin-left: 8px;
}
.card-header
{
      background: #fff;
    border: none!important;
}
.nav-item li {
  display: inline-block;
  position: relative;
  left: 79%;
  top: -47px
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
