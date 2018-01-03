<template>
	<div class="col-lg-4 col-md-6 portfolio-item">
		
		<a :href="createHref()" class="portfolio-link" data-toggle="modal">
			<div class="portfolio-hover">
				<div class="portfolio-hover-content">
					<i class="fa fa-plus fa-3x"></i>
				</div>
			</div>
			<img :src="imgUrl" class="img-responsive" alt>
		</a>
		<div class="portfolio-caption">
			<h4>{{programHeader}}</h4>
			<p class="text-muted">
			{{programDescription}}
			</p>
		</div>
		<div>
			<button :href="createHref()" data-toggle="modal" class="portfolio-learn-more">
				<a >
				<i class="fa fa-plus"></i>&nbsp; Learn More
				</a>
			</button>		
		</div>

	</div>
</template>
<style scoped>
	button.portfolio-learn-more{
		width:100%;
	}
</style>
<script>

export default{
	props:{
		programHeader: String,
		programDescription: String,
		imgUrl: String,
		hrefTag: String
	},
	methods:{
		createHref(){
			return '#'+this.hrefTag;
		}
	}	
}
</script>