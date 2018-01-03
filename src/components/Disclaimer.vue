<template>
  <div class="home-header">
  	<div class="row">
      <h1>Disclaimer for Website, Programs, and Services</h1>
      <br>
      <div class="h4">
        By entering this website or using our social media or purchasing our
        programs, products and/or services, from or related to Rachel Kottkamp
        and Apex ADHD Inc., you are agreeing to accept all parts of this Disclaimer.
        Thus, if you do not agree to the disclaimer below, STOP now, and do not
        use our website, videos, social media, programs, products, or services or
        anything you have purchased or experienced through us (collectively
        “Website, Programs, Products, and Services”)

        <br><br>
        All coaching services and communication, email or otherwise, delivered by
        Apex ADHD, Inc. and Rachel Kottkamp, (your “Coach”),  as well as information
        set forth on this website (apexadhd.com) are for educational and informational
        purposes only and is not medical advice, mental health advice, nursing services,
        or therapy. The information provided by Apex ADHD Coaching and your coach is
        not professional mental health care, medical care, or a nursing service and does
        not constitute as legal, medical, financial, actuarial, or professional advice
        neither is it intended to be. If you are having a medical or mental health problem,
        please seek appropriate help from a medical professional outside of coaching.
        If you are having a medical or mental health emergency, please call 911 or your
        local emergency number, or go to your nearest emergency room.
      </div>
    </div>
    <div class="row">
      <p>
        By entering this website and/or purchasing coaching services from your Coach,
        you (the client or their parent or guardian) confirm that you have read and agree to each statement and that you wish to proceed:
      </p>
      <ul>
        <li v-for="disclaimer in disclaimerList">
          {{disclaimer}}
        </li>
      </ul>
    </div>


  </div>
</template>
<style scoped>
  .home-header{
    padding-bottom:20px;
  }
</style>
<script>
  export default{
    data(){
      return{
        disclaimerList:[
          'I understand that the coaching services I will be receiving from my Coach are not offered as a substitute for professional mental health care or medical care and are not intended to diagnose, treat or cure any mental health or medical conditions. I also understand that my Coach is not acting as a mental health counselor or a medical professional (including not acting as a Registered Nurse). I agree not to disregard professional medical advice or delay seeking professional advice because of information I have read on this website or have received from my coach or Apex ADHD Inc. I also understand that I should not stop taking any medications without speaking to my Medical Provider and/or Mental Health Provider.',
          'I understand that coaching is, at present, an unregulated industry and that while my Coach is licensed as a Registered Nurse in the state of California, she will not be providing nursing services as my coach. My coach will only be providing coaching services and will only be acting as a coach during all coaching sessions and communication. I also understand that my coach will refer me to seek appropriate help from medical professionals for all medical and mental health problems.',
          'I understand that for all legal purposes, the services provided by my Coach will be considered to be provided in the State of California.',
          'I understand and agree that I am fully responsible for my well-being during my coaching sessions, and subsequently, including my choices and decisions. I am acknowledging that I am participating voluntarily in using this website and services and programs provided by my coach and Apex ADHD Inc. and that I am soley responsible for my results. I acknowledge that I take full responsiblity for my business and/or my education, and for my own health, life and well being, as well as the health, lives, and well being of my family and children (where applicable), for all decisions now and in the future.',
          'I understand that coaching is not a substitute for counseling, psychotherapy, psychoanalysis, mental health care or substance abuse treatment, and I will not use it in place of any form of therapy.',
          'I understand that all comments and ideas offered by my Coach are solely for the purpose of aiding me in achieving my defined goals. I have the ability to give my informed consent, and hereby give such consent to my coach to assist me in achieving such goals.',
          'I understand that my coach and Apex ADHD Inc.’s role is to support and assist me in reaching my own goals, but that my success depends primarily on my own effort, motivation, committment, and follow through. I understand that my coach and Apex ADHD Inc. cannot guarantee that I will attain a particular result, and I accept and understand that results differ by each individual. Any examples shown through this website, programs, or services are only estimates of what might be possible for me. There can be no assurance as to any particular financial outcome, or health and wellness outcome based on the use of Apex ADHD Inc.’s website or programs. I understand that to the extent our work together involves school, career, or business, my Coach is not promising outcomes included but not limited to increased clientelle, profitability and/or business or academic success.',
          'I understand that my Coach will protect my information as confidential unless I state otherwise in writing. If I report child, elder abuse or neglect or threaten to harm myself or someone else, I understand that necessary actions will be taken and my confidentiality agreement is limited in this capacity as my coach is a mandatory reporter. Furthermore, if my Coach is ordered by a court to provide information or to testify, she will do so to the extent the law requires.',
          'I understand that the use of technology is not always secure and I accept the risks of confidentiality in the use of email, text, phone, Skype and other technology.',
          'I understand that using any of these coaching services are entirely at my own risk. Any actions or lack of actions, taken by myself of such advice is done so solely by my own choice and responsibility and is neither the responsiblity nor liability of my coach and Apex ADHD, Inc. Under no circumstances can I hold my coach or Apex ADHD Inc., liable for any actions that I take or any loss or cost inccured by myself or any person related or associated with me. ',
          'Although every effort is made to ensure the accuracy of information shared on or through Apex ADHD Inc.’s website, programs, and services, I understand that this information may inadvertenly contain inaccuracies or typographical errors. I understand that every effort has been made to present me with the most accurate, up-to-date information, but because the nature of scientific, business, and technology research is constantly evolving, my coach and Apex ADHD Inc cannot be held responsible for the accuracy of their content.',
          'I understand that coaching services are provided "as is," without warranty of any kind, either expressed or implied, including without limitation any warranty for information services, coaching, uninterrupted access, or products and services provided through or in connection with the service. This service is requested at my own choice and with inherent singular responsibility.',
          'I hereby release, waive, acquit and forever discharge my Coach, any agents, successors, assigns, personal representatives, executors, heirs and employees from every claim, suit action, demand or right to compensation for damages I may claim to have or that I may have arising out of acts or omissions by myself or by my Coach as a result of the advice given by my Coach or otherwise resulting from the coaching relationship contemplated by this agreement. I further declare and represent that no promise, inducement or agreement not expressed in this agreement has been made to me to make this agreement. This agreement shall bind my heirs, executors, personal representatives, successors, assigns, and agents.'
        ]
      }
    }
  }
</script>
