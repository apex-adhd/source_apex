<template>
    <nav id="mainNav" class="navbar navbar-default navbar-custom navbar-fixed-top">
	
        <div class="container">
			
            <!-- Brand and toggle get grouped for better mobile display -->
            <div class="navbar-header">

                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <!-- navbar-brand is hidden on larger screens, but visible when the menu is collapsed -->
                <a class="navbar-brand apex-brand" href="index.html"><!-- Apex ADHD -->
				<img src="../assets/img/18136173_10155306264329549_105507785_n-compressor.svg" class="brand-image" alt/>
				</a>
            </div>

            <!-- Collect the nav links, forms, and other content for toggling -->
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul class="nav navbar-nav navbar-right">
                    <li class="hidden">
                        <a href="#page-top"></a>
                    </li>
                    <li>
                        <router-link to="/" >Home</router-link>
                    </li>
                    <li>
                        <router-link to="/about">About</router-link>
                    </li>
                    <li>
                        <router-link to="/contact">Contact</router-link>
                    </li>
                </ul>
            </div>
            <!-- /.navbar-collapse -->
        </div>
        <!-- /.container-fluid -->
    </nav>	



	
</template>
<style>
.brand-image{
	width:80%;
	height:100%;

}

@media(min-width:768px){
	.navbar-header{
		width:60%;
	}
}


.navbar-brand.apex-brand{
	width:40%;
	height: auto;
	padding-left:15px;
	padding-right:15px;
	margin-left:auto;
	margin-right:auto;
}

@media (max-width:768px){
	.brand-image{
		width:150px;
		height:75px;
	}
	button.navbar-toggle{
		margin-top:35px;
	}
}
/*
.navbar-custom{
	padding:0;
}
@media (min-width: 768px) {
	.navbar-default .navbar-brand.apex-brand{
		color:white;
		padding-top:15%;
	}

	.navbar-default .navbar-brand.apex-brand:hover{
		color:yellow;
	}
}*/
</style>
<script>
	export default{
	}
</script>