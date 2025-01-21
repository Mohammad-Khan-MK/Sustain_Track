<script>
export default {
name: "Header"
}
</script>

<template>
  <header>
    <nav>
      <img src="@/assets/images/logo2-removebg-preview%201%20(1).png" alt="Image">
      <ul>
        <li><router-link to="/" class="link">HOME</router-link></li>
        <li><router-link to="/about" class="link">ABOUT US</router-link></li>
        <li><router-link to="/features" class="link">FEATURES</router-link></li>
        <li><router-link to="/resources" class="link">RESOURCES</router-link></li>
        <li><router-link to="/contact" class="link">CONTACT US</router-link></li>
        <li><router-link to="/login" class="link">LOG IN</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
*{
  max-width: 1728px;
  font-family: 'Roboto', sans-serif;
  margin: 0 auto;
  padding: 0;
}

nav{
  padding: 0 20px 0 20px;

  height: 100px;
  background: rgb(210,201,175);
  background: linear-gradient(90deg, rgba(210,201,175,1) 7%, rgba(104,144,104,1) 57%);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

ul{
  width: 80%;
  display: flex;
  gap: 10px;
  list-style: none;
  justify-content: space-around;

  align-items: center;
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
img{
  width: 80px;
  height: 80px;
}
header{
  width: 98%;
}

</style>