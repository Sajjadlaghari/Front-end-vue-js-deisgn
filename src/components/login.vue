<template>
	
	<div class="container">
		<h1 class="fw-bold p-3 text-center" style="background-color:lightgray">LOGIN HERE</h1>
		<div class="row">
			<div class="col-md-6 shadow">
				<img src="https://www.certifiedfinancialguardian.com/images/blog-wp-login.png" class="img-fluid" style="height:270px; width:600px">
				
			</div>
			<div class="col-md-6">
				
				<div class="shadow p-5">
					<span class="text-danger" id="msg">

					</span>
				  <div class="mb-3">
				    <label for="exampleInputEmail1" class="form-label">Email address</label>
				    <input type="email" v-model="login.email" placeholder="USERNAME" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
				    
				  </div>
				  <div class="mb-3">
				    <label for="exampleInputPassword1" class="form-label">Password</label>
				    <input type="password" v-model="login.password" placeholder="PASSWORD" class="form-control" id="exampleInputPassword1">
				  </div>
				 
				  <button type="submit" class="btn btn-primary" v-on:click="check()">Login</button>
				</div>

			</div>
		</div>
	</div>
</template>


<script >
	export default {
		name:'Login',

		data()
		{
			return{
				login:
				{
					email:null,
					password:null,
				}
			}
		},

		methods:{
			check()
			{
				if(this.login.email!="sajjad@gmail.com" && this.login.password!="12345")
				{
					$("#msg").html("<h6>Invalid Username Or password</h6>");
				}
				else if(this.login.email!="" && this.login.password!="")
				{
					$("#msg").html("<h6></h6>");
				}

				this.axios.get('http://127.0.0.1:8000/api/login/'+this.login)
				.then(response=>{
					
				})
			}
		},

		mounted()
		{
			var user=JSON.parse(localStorage.getItem('User-info'));
			if(user)
			{
				this.$router.push({name:'home'});
			}
		}
	}
</script>


<style>

</style>