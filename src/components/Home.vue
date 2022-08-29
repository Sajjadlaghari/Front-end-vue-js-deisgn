<template>
    <div class="container-fluid layout" style="height:100vh; position:fixed">
        <div class="container pt-3">
            <img src="../assets/logo.png" style="height:40px" alt="">
        </div>
        <main>
            <section class="layout">
                <div class="container pb-4 text-center">
                    <div class="main">
                        <div class="main">
                            <img src="" alt="">
                            <h2 class="logo">
                                <p class="p"> BiBimCart</p>
                            </h2>
                            <h5  class="h5 text-center">Au Delice De Seoul</h5>
                        </div>
                        <ul class="icon">
                            <li class="icon-li"><img src="../assets/insta.png" alt=""></li>
                            <li class="icon-li"><img src="../assets/whatsapp.png" alt=""></li>
                            <li class="icon-li fb">
                                <p class="fb"><img src="../assets/fb.png" alt=""></p>
                            </li>
                        </ul>
                        <p class="text text-center">Lorem ipsum
                            dolor sit amet consectetur adipisicing elit. Cum numquam molestiae voluptate voluptatum ipsa
                            itaque explicabo quis quos esse assumenda. Totam voluptatum eaque hic facilis id molestias
                            eveniet ipsam ad!</p>
                        <h6 class="h6 shadow-lg">Cammandez maintenant</h6>
                    </div>
                </div>
            </section>
        </main>
        <div class="cotainer mr-5 mb-5">
                <div class="row">
                    <div class="col-md-11">
                             <nav class="navbar ">
                            <a class="nav-link"><button class="btn " style="background-color:  color:#fff"></button></a>
                            <form class="form-inline">

                                <p>
                                <ul class="nav-item"
                                    style="position:relative;">
                                    <li>
                                        <router-link to="#" class="nav-link left"><img src="../assets/Vector1.svg"
                                                alt="">
                                        </router-link>
                                    </li>
                                    <li>
                                        <router-link to="time" class="nav-link right"><img src="../assets/Vector.svg"
                                                alt=""> </router-link>
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


<script >
export default {
    name: 'Home'
}
</script>

<style scoped>
.container-fluid {
    background-image: url("../assets/Vector\ \(5\).png");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    max-width:100%;
    max-height: 100vh;
}

h5 {
    margin-top: 20% !important;
}

.text {
    width: 400px;
    font-size: 14px;
    margin-left: 23%;
    margin-top: -20px;
    color: white
}


@media only screen and (max-width: 947px) and (min-width: 767px) {
    h5 {
        margin-top: 21% !important;
        margin-left: 44px;

    }

    .icon {
        margin-left: -19% !important;
    }

    .text {
        width: 400px;
        font-size: 14px;
        margin-left: 100px;
        margin-top: -20px;
        color: white
    }

}



@media only screen and (max-width: 767px) and (min-width: 527px) {
    h5 {
        margin-top: 30% !important;
        margin-left: 44px;

    }

    .icon {
        margin-left: -19% !important;
    }

    .text {
        width: 400px;
        font-size: 14px;
        margin-left: 100px;
        margin-top: -20px;
        color: white
    }

    .main {
        margin-top: 98px;
    }

}

@media only screen and (max-width: 543px) and (min-width: 250px) {
    h5 {
        margin-top: 30% !important;
           margin-left: 10%;

    }

    .logo {
        margin-top: -5px !important;
        width: 98px !important;
        height: 92px !important;
    }

    .p {
        margin-top: 35px !important;
        font-size: 18px !important;

    }

    .layout {
        width: 100%;

    }

    .icon {
        margin-left: -19% !important;
        
    }

    .text {
        width: 300px;
        margin-left: 20%;
        color: white;
        
     margin-top: -33px;
    margin-bottom: 52px;

    }

    .main {
        margin-top: 98px;
    }

}


.main {
    margin-top: -22px;
    margin-bottom: 51px;
}
.icon {
    margin-left: -220px;
        margin-top: -43px;
}

.icon .icon-li {
    display: inline-block;
    padding: 10px;
}

.icon-li .fb {
    width: 40px;
    height: 40px;
    padding: 5px;
    border-radius: 50%;
    background-color: #fff;
}

.right {
    background-color: #5AB9AE;
    border-radius: 10px;
    padding: 15px
}


.left {
    background-color: #fff;
    border-radius: 10px;
    padding: 15px
}

.ul .li {
    background-color: #fff;
    display: inline-block;
    padding: 13px
}

.ul {
    margin-left: 72%
}



.h6 {
    font-weight: bold;
    width: 30%;
    border: 1px solid;
    padding-top: 10px;
    padding: 14px;
    margin-left: 26%;
    background-color: #fff;
    border-radius: 8px;
    border: none;
}

.logo {
    width: 130px;
    height: 130px;
    background-color: #fff;
    position: absolute;
    left: 38%;
    border-radius: 50%;
}

.p {
    margin-top: 55px;
    font-weight: bold;
    font-size: 20px
}

h5 {
    margin-top: 13%;
    margin-right: 18%;
    position: relative;
    color: #fff;
    font-weight: bold;
}
</style>