<template>
</template>


<script >
	export default {
		name:'Delete',

		data() {
		    return {
            id:null,
		}
	},
		mounted()
		{
            this.id=this.$route.params.id;
            console.log(this.id)
			this.axios.delete('http://127.0.0.1:8000/api/delete/'+this.id)
			.then(response=>{
				this.signup=response.data;
                this.$router.push({name:'registration'});

			})
            
		}
	}
</script>


<style>

</style>