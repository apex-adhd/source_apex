<template>
  <div id="page-top" class="index">
	<header-component></header-component>
	<div class="container">
		<router-view></router-view>
    <br><br>
    <p>
      <i>
        DISCLAIMER: All coaching services and communication, email or otherwise,
        delivered by Apex ADHD, Inc. and Rachel Kottkamp, (your “Coach”), as well
        as information set forth on this website (apexadhd.com) are for educational
        and informational purposes only and is not medical advice, mental health
        advice, nursing services, or therapy. The information provided by Apex ADHD
        Coaching and your coach is not professional mental health care, medical care,
         or a nursing service and does not constitute as legal, medical, financial,
         actuarial, or professional advice neither is it intended to be. If you are
         having a medical or mental health problem, please seek appropriate help from a
          medical professional outside of coaching. If you are having a medical or
          mental health emergency, please call 911 or your local emergency number,
          or go to your nearest emergency room.
      </i>
    </p>
	</div>

  <footer-component></footer-component>
  </div>
</template>
<style>
/*  html, body {
    height: 100%;
  }
  .container{
    height: 100%;
    margin-bottom: -100px;
  }

  .container:after {
  content: "";
  display: block;
  }*/
</style>
<script>
import HeaderComponent from './components/Header.vue'
import FooterComponent from './components/Footer.vue'
export default {
  name: 'app',
  components:
  {
	HeaderComponent,
  FooterComponent
  }

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
