<template>
<div class="home-header">
	<div class="row">
		<div class="box contact-box" >
			<div class="col-md-7">
				<div class="h2 intro-contact">Contact Us</div>
				<p class="intro-contact">Get my <strong>FREE</strong> 1 hour coaching session from anywhere in the world!</p>
				<p class="intro-contact">
					<div class="row">
						<div class="col-xs-5" style="color:white; font-size:16px;">
							<i class="fa fa-envelope"></i>
							&nbsp;Email Us:
						</div>
						<div class="col-xs-6">
							<a href="mailto:apexadhd@gmail.com">apexadhd@gmail.com</a>
						</div>
					</div>
					<div class="row">
						<div class="col-xs-5" style="color:white; font-size:16px;">
							<i class="fa fa-phone"></i>&nbsp;&nbsp;&nbsp;Call Us:
						</div>
						<div class="col-xs-6">
							<a href="tel:909-262-8716">(909) 262-8716</a>
						</div>
					</div>
				</p>
			</div>
<!--			<div class="col-md-5">
				<div class="indent">
					<i class="fa fa-quote-left"></i>
					<i class="h4">I worked with Rachel and she was a godsend! I can't believe how in control I feel about with my ADHD now. I'd recommend Rachel to anyone who I know going through a tough time</i>
					<i class="fa fa-quote-right"></i>
				</div>
			</div> -->
		</div>

	</div>
</div>
</template>
<style>
	.home-header{
		margin-top:15%;
	}

	@media(max-width:768px){
		.home-header{
			margin-top:115px;
		}
	}

	.box.contact-box{
		text-align: left;
		background: #333a56;
		color:white;
	}

	.indent{
		padding-left:15px;
	}
</style>
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
