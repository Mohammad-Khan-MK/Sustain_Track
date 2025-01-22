<script>
import Main_Button from "@/components/Main_Button.vue";

export default {
  name: "Home",
  components: {Main_Button}
}
</script>

<template style="background-color: #ebeadf" >

  <div class="hero-container">
    <div class="hero-content">
      <h1 class="hero-title"><span>Small Actions,</span> Big Impact...</h1>
      <p class="hero-subtitle">
        Start tracking your journey to a sustainable future today!</p>
      <Main_Button class="hero-button"/>

    </div>


  </div>
  <div class="main-content">
    <div class="card_1">

      <img src="@/assets/images/image_1.png" alt="Descriptive Alt Text" style="">
      <div class="text">
        <h2>“Cherish Nature, One Step at a Time.”</h2>
        <p>Take a moment to reflect on the beauty
          of our planet. Sustain Track empowers
          you to monitor your environmental imp-
          act impact and make mindful choice for
          a sustainable tomorrow.</p>
      </div>
    </div>
    <div class="card_2">
      <div class="text">
        <h2>“Be the Change the Planet needs.”</h2>
        <p>Every small step you take makes a difference. Start tracking your daily habits and join the movement toward a cleaner, healthier environment.</p>

      </div>
      <img src="@/assets/images/image_2.png" alt="Descriptive Alt Text">

    </div>
   <div id="join"> <Main_Button /></div>
  </div>





</template>


<style scoped>
*{
  max-width:1728px ;
  font-family: 'Roboto', sans-serif;
  margin: 0 auto;
  padding: 0;
}

.text {
  width: 50%;
  font-family: "Roboto Mono", monospace;
  line-height: 1.8;
  margin: 0 auto;
}

.text h2 {
  font-size: 32px;
  font-style: italic;
  letter-spacing: 3px;
  padding-bottom: 20px;
  text-align: center;
}

.text p {
  font-size: 18px;
  letter-spacing: 1.5px;
  text-align: justify;
  line-height: 1.6;
  margin-bottom: 20px;
}

.text p::first-letter {
  font-size: 28px;
  font-weight: bold;
  color: #444;
}
img{
  width: 40%;
}

.card_1, .card_2{
  display: flex;
  justify-content: space-between;
  align-items: center;


}
#join{

  text-align: center;
padding: 80px 0 80px 0;}
*{
  font-family: 'Roboto', sans-serif;
  max-width: 1728px;
  margin: 0 auto;
  padding: 0;
}
.hero-container {
  position: relative;
  height: 55vh;


  background-image: url('@/assets/images/backgroung_img_2.jpg');

  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;


}


.hero-content {
  text-align: center;
  color: white;

  padding: 20px;
  border-radius: 8px;
}

.hero-title {

  font-size: 80px;
  margin: 0;
  padding-top: 15px;
  font-style: italic;
  letter-spacing: 5px;

}
.hero-title span {
  color: #D3C9AD;

  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;

}

.hero-subtitle {
  position: absolute;
  top: 70%;
  left: 50%;
  transform: translateX(-50%);
  font-size: 40px;
  letter-spacing: 2px;
  font-style: italic;
  font-weight: bolder;
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
  width: 100%;
  text-align: center;
}

.hero-button {
  position: absolute;
  top: 80%;
  left: 50%;
  transform: translateX(-50%);
}
.main-content{
  background-color: #ebeadf;
  padding-top: 100px;
  display: flex;
  flex-direction: column;
  row-gap: 100px;


}
</style>

