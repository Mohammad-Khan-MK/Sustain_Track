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
      <div>
        <h2>“Cherish Nature, One Step at a Time.”</h2>
        <p>Take a moment to reflect on the beauty
          of our planet. Sustain Track empowers
          you to monitor your environmental imp-
          act impact and make mindful choice for
          a sustainable tomorrow.</p>
      </div>
    </div>
    <div class="card_2">
      <div>
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
  font-family: 'Roboto', sans-serif;
}

img{
  width: 40%;
}

.card_1, .card_2{
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 50px;
  padding: 0 50px 0 50px;
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
  width: 98%;
  position: relative;
  height: 70vh;


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
  padding-bottom: 300px;
}
.hero-title span {
  color: #D3C9AD;

  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
  
}

.hero-subtitle {
  font-size: 40px;
  
  letter-spacing: 2px;
  font-style: italic;
  font-weight: bolder;
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
}
.hero-button{
  margin-top: 50px;
}
.main-content{
  width: 98%;
  background-color: #ebeadf;
  padding-top: 80px;
  display: flex;
  flex-direction: column;
  row-gap: 50px;
  column-gap: 50px;

}







</style>

