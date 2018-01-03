<template>
	<div class="row">
		<div id="portfolio" class="box">
			<div class="col-lg-12">
				<hr>
				<div class="section-heading text-center">
					Programs
				</div>
				<hr>
			</div>
			<div class="col-sm-offset-2 col-sm-8">
				<div class="h4 program-header" >
					Our 3-6 month programs are focused on helping you achieve the goal that is MOST important to you! 
					While working on your top goal, you will learn about the science behind ADHD gaining skills to help 
					you manage your ADHD in every area of your life. You will also transition into being able to evaluate and coach YOURSELF!
				</div>
			</div>
			<div class="row">
				<portfolio-card program-header="My Home is Chaos!"
								program-description="Do you feel like your home is filled with chaos and clutter the minute you walk through the door?"
								href-tag="homeChaos"
								:img-url="cloudImages.homeChaos.imageUrl"
				>
				</portfolio-card>
				<portfolio-card program-header="HELP! Get Me Through This Exam!"
								program-description="Big exam coming up? In panic mode trying to sit and focus for it?"
								href-tag="exam"
								:img-url="cloudImages.exam.imageUrl"
				>
				</portfolio-card>
				<portfolio-card program-header="I’m Going to Lose My Job if I Don’t Get Organized"
								program-description="On the brink of losing your job from being written up a million times? Feel like you’ll never get that promotion you’ve been working towards?"
								href-tag="loseJob"
								:img-url="cloudImages.loseJob.imageUrl"
				>
				</portfolio-card>
				<portfolio-card program-header="Learn How to Support Your ADHD Family Member"
								program-description="Do you have a child, significant other, or parent with ADHD? Frustrated that you don’t know the best way to help them? Exhausted from asking them to get support or 
								coaching and having them be unwilling to make changes?"
								href-tag="supportFamily"
								:img-url="cloudImages.supportFamily.imageUrl"
				>
				</portfolio-card>	
				<portfolio-card program-header="I Wish I Didn’t Have This Specific ADHD Symptom"
								program-description="Have a specific ADHD symptom that creates challenges in all the areas of your life?	"
								href-tag="adhdSymptom"
								:img-url="cloudImages.adhdSymptom.imageUrl"
				>
				</portfolio-card>	
				<portfolio-card program-header="I’m About to Have a BIG Change (Pregnancy, Moving, Starting a New Career or College, Marriage, Divorce etc)"
								program-description="Are things in your life about to drastically change? Nervous that you won’t be able to handle the transition and create new routines on your own?"
								href-tag="bigChange"
								:img-url="cloudImages.bigChange.imageUrl"
				>
				</portfolio-card>
				<portfolio-card program-header="I Need to Get Through This Semester!"
								program-description="Do you want support throughout your entire semester? Feeling like your child could use extra help to learn how to study with ADHD?		"
								href-tag="semester"
								:img-url="cloudImages.semester.imageUrl"
				>
				</portfolio-card>
				<portfolio-card program-header="Lose Weight and Keep It Off"
								program-description="Does losing weight feel like a never ending battle? Having trouble fighting your impulses to keep off the weight once you lose it?"
								href-tag="loseWeight"
								:img-url="cloudImages.loseWeight.imageUrl"
				>
				</portfolio-card>
				<portfolio-card program-header="Find Love in the Middle of a Scattered and Busy Life"
								program-description="What to find the love of your life but keep hitting dead ends? Feel like dating takes too much time in your overpacked life?"
								href-tag="loveLife"
								:img-url="cloudImages.loveLife.imageUrl"
				>
				</portfolio-card>
				<portfolio-card program-header="Find a Job and Keep It"
								program-description="Feeling hopeless about searching for a new job? Worried that once you are offered one you’ll have trouble keeping it like you have in the past? "
								href-tag="findJob"
								:img-url="cloudImages.findJob.imageUrl"
				>
				</portfolio-card>
				<portfolio-card program-header="I Am So Tired of Drama in All My Relationships! Help Me Communicate!"
								program-description="Having trouble communicating with your Partner? Children? Siblings? Parents? Co-Workers? Friends? Everyone?"
								href-tag="relationships"
								:img-url="cloudImages.relationships.imageUrl"
				>
				</portfolio-card>
				<portfolio-card program-header="I Feel So Scattered Lately! but I Don’t Have ADHD Program"
								program-description="Feeling more scattered and distracted lately? Don’t have ADHD but still want help to feel more focused in your day to day life?"
								href-tag="students"
								:img-url="cloudImages.students.imageUrl"
				>
				</portfolio-card>				

				
			</div>
		</div>
	</div>	
</template>
<script>
	import cloudinary from 'cloudinary-core';
	import portfolioCard from './portfolioCard.vue'
	export default{
		components:{portfolioCard},
		data(){
			return{
				cloudinary: null,
				cloudImages:{},
				cloudObj:{
					homeChaos:{
						"imageId": "StockSnap_J4C1WJDMMU_khejs7",
						"collector": "Cleaning",
						"description": "Home in Chaos"					
					},
					exam:{
						"imageId":"StockSnap_08Y964XUTJ_l8dbwa",
						"description":"Exam image"
					},
					loseJob:{
						"imageId":"17474731_10155195409314549_1959763394_n_tof1yt",
						"description":"Lose my job image"
					},
					supportFamily:{
						"imageId":"StockSnap_Q7UIKF58IR_toa7h0",
						"description":"Support Family"
					},
					adhdSymptom:{
						"imageId":"17496080_10155195394819549_69347784_n_ilx6ye",
						"description":"ADHD Symptom"
					},
					bigChange:{
						"imageId":"StockSnap_FP3T6WYTYC_riuunl",
						"description":"Big change"
					},	
					semester:{
						"imageId":"StockSnap_SFYRKERH4N_zizhi3",
						"description":"Support Family"
					},
					loseWeight:{
						"imageId":"StockSnap_RMDYXIJFJN_compress_idjtku",
						"description":"Lose Weight"
					},
					loveLife:{
						"imageId":"StockSnap_SAI0X4QHXI_v8h727",
						"description":"Big change"
					},
					findJob:{
						"imageId":"StockSnap_Q1OSKR7D42_cwxdqz",
						"description":""
					},
					relationships:{
						"imageId":"17467771_10155195385309549_1040223351_n_nil1ey"
					},
					students:{
						"imageId":"StockSnap_NAOWFGI5EF_sx02q2"
					}
					
				},
				collections:[]
			}
		},
		methods:{
			transform(collection) {
			  const imageUrl =
				this.cloudinary.url(collection.imageId);
			  return Object.assign(collection, { imageUrl });
			}		
		},
		created() {
			this.cloudinary = cloudinary.Cloudinary.new({
			  cloud_name: 'apex-adhd'
			});
			let objKeys = Object.keys(this.cloudObj)
			this.cloudImages = objKeys.reduce((cldImg,key)=>{
				cldImg[key] = this.transform(this.cloudObj[key]);
				return cldImg;
			}, {})
			//this.cloudImages.homeChaos = this.transform(this.cloudObj.homeChaos) //this.cloudImages.map(this.transform);
		}		
	}
</script>