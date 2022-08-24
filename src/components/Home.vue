<template>
	<div class="container-fluid layout">
          <div class="container pt-3" >
      <img src="../assets/logo.png" style="height:40px" alt=""></div>
		  <main>
        <section class="layout">
            <div class="container pb-4 text-center">
                 <div class="main">
                        <div class="main">
                            <img src="" alt="">
                            <h2 class="logo" >
                              <p class="p"> BiBimCart</p>
                            </h2>
                            <h5>Au Delice De Seoul</h5>
                        </div>
                              <ul class="icon">
                            <li class="icon-li"><img src="../assets/insta.png" alt=""></li>
                            <li class="icon-li"><img src="../assets/whatsapp.png" alt=""></li>
                            <li class="icon-li fb"><p class="fb"><img src="../assets/fb.png" alt=""></p></li>
                        </ul>
                        <p style="width:400px;font-size:14px;margin-left:23%;margin-top:-20px;color:white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum numquam molestiae voluptate voluptatum ipsa itaque explicabo quis quos esse assumenda. Totam voluptatum eaque hic facilis id molestias eveniet ipsam ad!</p>
                        <h6 class="h6 shadow-lg">Cammandez maintenant</h6>
                 </div>
                   
      <ul class="nav-item">
        <li ><router-link to="#" class="nav-link left"><i class="fa-solid fa-arrow-up" style="color:#5AB9AE" ></i></router-link></li>
        <li><router-link to="menu1"  class="nav-link right"><i class="fa-solid fa-arrow-down" style="color:white"></i></router-link></li>
      </ul>

            </div>
        </section>
      
    </main>
	</div>

</template>


<script >
	export default {
		name:'Home'
	}
</script>

<style>

        .layout {
            background-image: url("../assets/Vector\ \(5\).png");
            background-size: cover;
            background-repeat: no-repeat;
            background-position: bottom;
            width: 100%;
            height: 100vh;
            background-attachment: fixed;
        }
        .icon
        {
            margin-left: -220px;
            margin-top: -15px;
        }
        .icon .icon-li
        {
            display:inline-block;
            padding: 10px;
        }
        .icon-li .fb
        {
            width:40px;
            height: 40px;
            padding:5px;
            border-radius: 50%;
            background-color: #fff;
        }

        .child {
            min-height: 90vh;
        }
        .h6
        {
            font-weight: bold;
                width: 30%;
                border: 1px  solid;
        padding-top: 10px;
        padding: 14px;
        margin-left: 26%;
        background-color: #fff;
        border-radius: 8px;
        border:none;
        }
        .logo
        {
            width: 130px;
            height: 130px;
            background-color: #fff;
            position: absolute;
            left: 38%;
            border-radius: 50%;
        }
        .p
        {
              margin-top: 55px;
              font-weight: bold;
              font-size:20px
        }
        h5
        {
            margin-top: 13%;
            margin-right: 18%;
            position: relative;
            color: #fff;
            font-weight: bold;
        }
          .nav-item li
{
  display: inline-block;
  position: relative;
  left: 40%;
 
}
.nav-item li .right
{
  background-color: #5AB9AE;
  border-radius: 8px;
}
</style>