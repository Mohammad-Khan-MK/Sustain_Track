<script>
import LoginForm from "@/components/LoginForm.vue";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "LoginPage",
  components: {
    LoginForm,
    Header,
    Footer,
  },
};
</script>

<template>
  <div>

    <div class="login-page-wrapper">
      <div class="login-page">
        <LoginForm formTitle="Admin Login" backgroundColor="#fff" :inputWidth="350"/>
        <div class="divider"></div>
        <LoginForm formTitle="User Log In" backgroundColor="#8FAD88" :inputWidth="350"/>
      </div>
    </div>

  </div>
</template>

<style scoped>
.login-page-wrapper {
  max-width: 1728px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  height: 70vh;
}

.login-page {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  background-color: #ebeadf;
  flex-grow: 1;
}

.divider {
  width: 5px;
  background-color: #A78B6A;
  height: 80%;
}
</style>