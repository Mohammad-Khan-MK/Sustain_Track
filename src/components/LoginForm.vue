

<script>
import Input_Field from "@/components/Input_Field.vue";
import Button_Form from "@/components/Button_Form.vue";

export default {
  name: "LoginForm",
  components: {
    Input_Field,
    Button_Form
  },
  props: {
    formTitle: {
      type: String,
      required: true
    },
    backgroundColor: {
      type: String,
      default: "#fff"
    }
  },
  methods: {
    goToAccountPage() {
      console.log("Navigating to Account page...");
      this.$router.push({ name: 'Account' });
    }
  }
  };
</script>

<template>
  <div class="form-container" :style="{ backgroundColor: backgroundColor }">
    <h2 class="form-title">{{ formTitle }}</h2>
    <form class="form-content">
      <Input_Field label="Email Address" id="email" type="email" placeholder="Enter your email..."/>
      <Input_Field label="Password" id="password" type="password" placeholder="Enter your password..."/>
      <div class="checkbox-container">
        <input type="checkbox" id="remember-me"/>
        <label id="remember" for="remember-me">Remember me</label>
      </div>
      <Button_Form label="Log In"/>
    </form>
    <p class="create-account-text">Don’t Have an Account</p>
    <Button_Form
        id="acc-btn"
        label="Create Account"
        :type="'button'"
        @click="goToAccountPage"
    />

  </div>
</template>

<style scoped>
.form-container {
  width: 450px;
  padding: 60px 0 60px 0;
  border-radius: 10px;
  box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.25);
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.form-title {
  font-family: 'Roboto', sans-serif;
  font-size: 20px;
  text-align: center;
  margin-bottom: 20px;
  letter-spacing: 2px;
}

.form-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.checkbox-container {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  align-self: flex-start;
  padding-left: 32px;
}

.checkbox-container input {
  margin-right: 10px;
}

.create-account-text {
  margin: 10px 0;
}

.create-account-text,
#remember {
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  text-align: left;
  width: 373px;
  letter-spacing: 1px;
  font-weight: lighter;
}
</style>
