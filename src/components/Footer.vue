<script>
export default {
  name: "Footer"
}
</script>

<template>
  <footer>
    <h1 >Sustain Track</h1>
    <hr id="line-1">

    <div class="flex">
      <div class="flex-item-1">
        <h4>Contact Details</h4>
        <hr class="line-2">
        <p>123 Abc Street</p>
        <p>Limerick</p>
        <p>Co.Limerick</p>
        <p>Phone No: 061-11116666</p>
        <p><a href="mailto:someone@example.com">Email US</a></p>
      </div>
      <div class="flex-item-2">
        <img src="@/assets/images/logo2-removebg-preview%201%20(1).png" alt="Logo"/>
      </div>
      <div class="flex-item-3">
        <h4>Useful Links</h4>
        <hr class="line-2">

        <div>


          <p><a href="#">links</a></p>

          <p><a href="#">links</a></p>

          <p><a href="#">links</a></p>

        </div>
      </div>
    </div>

    <div class="social">
      <h4>Find Us On</h4>
      <div class="social-icons">

        <div class="social-icons">
          <ul >
            <li><a href="https://facebook.com" target="_blank">
              <font-awesome-icon :icon="['fab', 'facebook']"/>
            </a></li>
            <li><a href="https://youtube.com" target="_blank">
              <font-awesome-icon :icon="['fab', 'youtube']"/>
            </a></li>
            <li><a href="https://instagram.com" target="_blank">
              <font-awesome-icon :icon="['fab', 'instagram']"/>
            </a></li>

            <li><a href="https://twitter.com" target="_blank">
              <font-awesome-icon :icon="['fab', 'x-twitter']" />
            </a></li>
          </ul>
        </div>
      </div>
      <div>

      </div>
    </div>
  </footer>




</template>

<style scoped>
*{
  max-width: 1728px;
  font-family: 'Roboto', sans-serif;
  margin: 0 ;
  padding: 0;


}
h1{
  text-align: center;
  padding-top: 50px;
}

#line-1{
  width: 270px;
  border: 2px solid black;
  margin: 0 auto;
}
.line-2{
  width: 120px;
  border: 1px solid black;
}

.flex {
  display: flex;
  justify-content: space-between;
  padding:20px 30px 20px 30px;


}
img{
  width: 150px;
  height: 150px;
  margin-right: 50px;

}


footer{
  margin-left: auto;
  margin-right: auto;
  border-radius: 10px;
  width: 98%;


  background: rgb(210,201,175);
  background: linear-gradient(90deg, rgba(210,201,175,1) 7%, rgba(104,144,104,1) 57%);
}

a{
  text-decoration: none;
  color: black;

}

.social{
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding-bottom: 30px;
}
.social-icons{
  display: flex;

}
.social-icons ul{
  list-style: none;
  gap: 10px;
  display: flex;
}
ul li{
  font-size: 20px;
  color: black;

}






</style>