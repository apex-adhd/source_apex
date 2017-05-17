<template>
<div>
	<header>
        <div class="container">
			<div class="intro-lead-in text-center" style="margin-top:7%;"></div>
            <div class="intro-text">
            </div>
			
        </div>
    </header>
	<div class="row">
		<div class="box" style="text-align:left;">
			<h2>Contact Us</h2>
			<a href="mailto:betsy.kottkamp@gmail.com">Email Us!</a>

			<el-form ref="form" :model="form" label-position="top" label-width="120px">
			  <el-form-item label="Phone Number">
				<el-input v-model="form.number"></el-input>
			  </el-form-item>
			  <el-form-item label="Email">
				<el-input v-model="form.email"></el-input>
			  </el-form-item>
			  <el-form-item label="Additional Information">
				<el-input type="textarea" v-model="form.additional"></el-input>
			  </el-form-item>
			  <el-form-item>
				<el-button type="primary" @click="sendEmail()">Send Message</el-button>
				<el-button>Cancel</el-button>
			  </el-form-item>
			</el-form>
		</div>

	</div>
</div>	
</template>
<style></style>
<script>
	import '../assets/js/smtp.js'
	import $ from 'jquery'
	export default{
		data(){
			return{
				form: {
					name:'',
					number:'',
					email:'',
					additional:''
				}
			}
		},
		methods:{
			sendEmail:function(){
				$.ajax({
					url: "https://apex-adhd.github.io/contact_me.php",
					type: "POST",
					data: {
						name: this.form.name,
						phone: this.form.number,
						email: this.form.email,
						message: this.form.additonal
					},
					cache: false,
					success: function() {
						console.log("successs");
					},
					error: function() {
						// Fail message
						console.log("error");
					},
				});
			}
		}
	}
</script>