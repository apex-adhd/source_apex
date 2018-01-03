<template>
<div>
	<div class="row" style="margin-top:10%;">
		<div class="col-lg-12 box">
				<hr>
				<div class="section-heading text-center">
					Bio
				</div>
				<hr>
		</div>
		<div class="col-lg-8">
			<div class="box">
				<div class="h3">Rachel Kottkamp, BSN RN</div>
				<p>
					Rachel Kottkamp is a Registered Nurse Coach who specializes in ADHD management, psychology, and personal development training.
					Rachel has a thorough understanding of the biology behind ADHD symptoms, through clinical health training she received through the
					CCNE Accredited Nursing Program at California State University San Bernardino.
					She is able to use this knowledge to help her clients develop strategies that
					maximize on their brain's strengths and unique capabilities.
				<br><br>
			Rachel also has extensive personal coaching experience. She has worked one-on-one with clients to create transformational breakthroughs in
			all areas of their lives. Years after working with Rachel, her clients report experiencing extraordinary accomplishments at work, home, and
			in their interactions with others by using the very strategies she helped them develop.
			<br><br>
			With over 13 years of improvisational training through CSZ LA, Rachel brings a quick, energetic, and fun approach to her coaching sessions,
			workshops, and public speaking events. She has
			developed and directed team building exercises for people of all walks of life, from USC medical students to Nike executives. Her clients leave
			her trainings excited to apply new skills in communication, commitment, and problem solving to their specific ambitions and needs.
				</p>
			</div>
		</div>
		<div class="col-lg-4">
			<img :src="cloudImagesUrl" class="img-responsive" alt>
		</div>
	</div>

</div>
</template>
<style scoped>
	.section-heading{
	    font-size: 40px;
		margin-top: 0;
		margin-bottom: 15px;
	}
</style>
<script>
	import cloudinary from 'cloudinary-core';
	export default{
		data(){
			return{
				msg: 'betsy',
				cloudImagesUrl:"",
				cloudinary:{}
			}
		},
		methods:{
			transform(imageId) {
			  const imageUrl =
				this.cloudinary.url(imageId);
			  return imageUrl;
			}
		},
		created(){
			this.cloudinary = cloudinary.Cloudinary.new({
			  cloud_name: 'apex-adhd'
			});

			this.cloudImagesUrl = this.transform("rachel_adhd_headshot_diwnkm");
		}
	}
</script>
