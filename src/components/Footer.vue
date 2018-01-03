<template>
  <div class="footer">
    <div class="container">
      <div class="row">
        <router-link :to="{name:'Home'}" class="footer__link">
          www.apexadhd.com
        </router-link>
        |
        <router-link :to="{name:'Disclaimer'}" class="footer__link">
          Disclaimer
        </router-link>
        |
        <router-link :to="{name:'Disclaimer'}" class="footer__link">
          Contact Us
        </router-link>
      </div>

    </div>
  </div>
</template>
<style scoped>
  .footer{
    background-color: #52658F;
    font-size:15px;
    padding-bottom:30px;
    padding-top: 30px;
    bottom:0px;
  }
</style>
<script>
  export default{

  }
</script>
