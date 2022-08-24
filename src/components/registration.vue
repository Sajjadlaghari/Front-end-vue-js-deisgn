<template>	
	<div class="container">
		<h1 class="fw-bold p-3 text-center" style="background-color:lightgray">Registration Form</h1>
		<div class="row">
			<div class="col-md-6 shadow p-3">
				<img src="https://pecpk.org/wp-content/uploads/2021/02/Registration-and-stamp-duty-fees-1.jpg" class="img-fluid" style="height:340px; width:700px">
				
			</div>
			<div class="col-md-6">
				<div class="mb-3">
					<label for="exampleInputEmail1" class="form-label">Name</label>
					<input type="text" class="form-control" v-model='signup.name'
						id="exampleInputEmail1" v-on:blur="getformdata()" placeholder="Enter First Name Here" aria-describedby="emailHelp">
						<span class="text-danger" id="fnameMsg"></span>
				</div>

				<div class="mb-3">
					<label for="exampleInputPassword1" class="form-label">Email Address</label>
					<input type="email" placeholder="Enter Email Address Here" class="form-control" v-on:blur="getformdata()" v-model='signup.email'
						id="exampleInputPassword1">
						<span class="text-danger" id="emailMsg"></span>
				</div>
				<button type="submit" :disabled="disable" class="btn btn-primary" v-on:click="addData()">Add
					User</button>
			</div>
		</div>
	</div>


	<div class="container mt-5">
		<table class="table table-striped table-bordered mt-4">
			<thead>
				<tr>
					<th>User Name</th>
					<th>User Email</th>
					<th>Update</th>
					<th>Delete</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="user in users" v-bind:key="id">
				    <td>{{user.name}}</td>
				    <td>{{user.email}}</td>
				    <td><router-link :to="'/edit/'+user.id" class="btn btn-primary">edit</router-link></td>
				    <td><router-link :to="'/delete/'+user.id" class="btn btn-danger">delete</router-link></td>
				</tr>
			</tbody>

		</table>
	</div>
</template>


<script >
	export default {
		name:'registration',

		data() {
			return {

			  disable:false,
			  users:null,
			
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
		   	    if(this.signup.name==null)
		   	    {
		   	    	this.disable=true;
		   	    	$('#fnameMsg').html('<h6>Plase Enter First Name</h6>')     	
		   	    }
		   	    else if(this.signup.email==null)
		   	   {
		   	     		this.disable=true;
		   	     	$('#emailMsg').html('<h6>Plase Enter Email Address </h6>') 
		   	    }
		   	    else if(this.signup.name!=null && this.signup.email!=null)
		   	    {
		   	      	this.disable=false;
		   	    }		   	    					
			},

			addData()
			{
					localStorage.setItem("User-info",JSON.stringify(this.signup))
		   	        console.log(localStorage.getItem("User-info"));
					console.log(this.signup);
					this.axios.post('http://127.0.0.1:8000/api/insert',this.signup)
					.then(response=>{
						console.log(response);
						this.signup="";
						this.getdata();
					})
			},

			getdata()
			{
				this.axios.get('http://127.0.0.1:8000/api/view_user')
				.then(response=>{
					console.log(response.data);
					this.users=response.data;
				})
			}
		},

		mounted()
		{
			this.getdata();
			var user=JSON.parse(localStorage.getItem('User-info'));
			
		}
	}
</script>


<style>

</style>