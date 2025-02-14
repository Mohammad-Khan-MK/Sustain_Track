<script>
export default {
name: "Header"
}
</script>

<template>
  <header>
    <nav>
     <div class="logo"> <img src="@/assets/images/logo2-removebg-preview%201%20(1).png" alt="Image"></div>
      <ul>
        <li><router-link to="/" class="link">HOME</router-link></li>
        <li><router-link to="/about" class="link">ABOUT US</router-link></li>
        <li><router-link to="/features" class="link">FEATURES</router-link></li>
        <li><router-link to="/resources" class="link">RESOURCES</router-link></li>
        <li><router-link to="/contact" class="link">CONTACT US</router-link></li>
        <li><router-link to="/login" class="link">LOG IN</router-link></li>
        <li><router-link to="/listCategory" class="link">List Cat</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
header{
  max-width:1728px ;
  font-family: 'Roboto', sans-serif;
  margin: 0 auto;
  padding: 0;

}

nav{
  padding: 0 100px 0 50px;
  height: 110px;
  background: rgb(210,201,175);
  background: linear-gradient(90deg, rgba(210,201,175,1) 7%, rgba(104,144,104,1) 57%);
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px 10px 0 0;
}

ul{
  display: flex;
  list-style: none;
  justify-content: center;
  align-items: center;
  gap: 20px;
}

ul>li{
  border-radius: 5px;
  background-color: #D2C9AF;
  padding: 10px 18px;
  font-family: 'Roboto', sans-serif;
  font-weight:bold;
  box-shadow: 5px 5px 5px rgba(0,0,0,.25);
}

.link{
  text-decoration: none;
  color: #201f1f;
}

.logo {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

img {
  width: 90px;
  height: 90px;
  display: block;
}


</style>