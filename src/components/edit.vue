<template>	
	<div class="container">
		<h1 class="fw-bold p-3 text-center" style="background-color:lightgray">Update User Record</h1>
		<div class="row">
			<div class="col-md-6 shadow p-3">
				<img src="https://media.istockphoto.com/photos/button-on-computer-keyboard-picture-id1146311500?k=20&m=1146311500&s=612x612&w=0&h=EHyoBC0L4IQlsYg0_IIlUM1puz2AikW8W5y_cgp7Cho=" class="img-fluid" style="height:340px; width:700px">
			</div>
			<div class="col-md-6">
				<div class="mb-3">
					<label for="exampleInputEmail1" class="form-label">Name</label>
					<input type="text" class="form-control" v-model='signup.name'
						id="exampleInputEmail1" v-on:keyup="getformdata()" placeholder="Enter First Name Here" aria-describedby="emailHelp">
						<span class="text-danger" id="fnameMsg"></span>
				</div>
				<div class="mb-3">
					<label for="exampleInputPassword1" class="form-label">Email Address</label>
					<input type="email" placeholder="Enter Email Address Here" class="form-control" v-on:keyup="getformdata()"  v-model='signup.email'
						id="exampleInputPassword1">
						<span class="text-danger" id="emailMsg"></span>
				</div>
				<button type="submit" :disabled="disable" class="btn btn-primary" v-on:click="update()">Add
					User</button>
			</div>
		</div>
	</div>
</template>


<script >
	export default {
		name:'edit',

			data() {
		return {

			  disable:false,
              id:null,
			signup: {
				name: null,
				email: null,
			}
		}
	},


		methods:
		{
			getformdata() 
		   {
              console.log(this.signup.email);
                if(this.signup.name=="")
		   	    {
		   	    	this.disable=true;
		   	    	$('#fnameMsg').html('<h6>Plase Enter  Name</h6>')     	
		   	    }
                else if(this.signup.name!="")
		   	    {
		   	    	this.disable=false;
		   	    	$('#fnameMsg').html('<h6></h6>')     	
		   	    }
		   	    if(this.signup.email=="")
		   	   {
		   	     	this.disable=true;
		   	     	$('#emailMsg').html('<h6>Plase Enter Email Address </h6>') 
		   	    }
                 else if(this.signup.email!="")
		   	   {
		   	     	this.disable=false;
		   	     	$('#emailMsg').html('<h6></h6>') 
		   	    }
		   	    else if(this.signup.name!=null && this.signup.email!=null)
		   	    {
		   	      	this.disable=false;
		   	    }		   	    					
			},

            update()
            {
                	localStorage.setItem("User-info",JSON.stringify(this.signup))
		   	        console.log(localStorage.getItem("User-info"));
					console.log(this.signup);
					this.axios.put('http://127.0.0.1:8000/api/update/'+this.id,this.signup)
					.then(response=>{
						console.log(response);
                        this.$router.push({name:'registration'});
					})
            }
		},

		mounted()
		{
            this.id=this.$route.params.id;
            console.log(this.id)
			this.axios.get('http://127.0.0.1:8000/api/view_user/'+this.id)
			.then(response=>{
				this.signup=response.data;
			})
		}
	}
</script>


<style>

</style>