<script>
import Input_Field from "@/components/Input_Field.vue";
import Button_Form from "@/components/Button_Form.vue";

export default {
  name: "Account",
  components: {
    Input_Field,
    Button_Form
  }
}
</script>

<template>
  <div class="main-div">
    <main class="main-content">

      <div class="div-img"><img src="@/assets/images/register.png" alt="Background Image"/></div>

      <div class="form-container">
        <h1>Register</h1>
        <form class="registration-form">
          <div class="form-row">
            <Input_Field type="text" placeholder="First Name" required id="first-name" label="First Name"/>
            <Input_Field type="text" placeholder="Last Name" required id="last-name" label="Last Name"/>
          </div>
          <div class="form-row">
            <Input_Field type="email" placeholder="Email Address" required id="email" label="Email Address"/>
            <Input_Field type="tel" placeholder="Phone Number" required id="phone-number" label="Phone Number"/>
          </div>
          <div class="form-row">
            <Input_Field type="password" placeholder="Password" required id="password" label="Password"/>
            <Input_Field type="password" placeholder="Confirm Password" required id="confirm-password"
                         label="Confirm Password"/>
          </div>
          <div class="checkbox-row">
            <input type="checkbox" id="terms" required/>
            <label for="terms">I Agree to the Terms & Conditions</label>
          </div>


          <div class="button-row">
            <Button_Form label="Create Account" class="create-account-btn"/>

          </div>

          <div class="checkbox-row">
            <label for="login">Already have an Account?</label>
          </div>
          <div class="button-row">
            <Button_Form label="Log in" type="button" class="login-btn" style="background-color: #92af92;"/>
          </div></form>
      </div>
    </main>
  </div>
</template>

<style scoped>

.main-div {
  max-width: 1728px;
  margin: 0 auto;
  font-family: 'Roboto', sans-serif;

}
h1{text-align: center;
  font-weight: lighter;
  letter-spacing: 3px;
  padding-bottom: 10px;

}

.main-content {
  display: flex;

  justify-content: center;
  align-items: center;
  height: 60vh;
  background: #D2C9AF;

}

.div-img {
  width: 30%;
  height: 650px;

}

img {
  width: 100%;
  height: 100%;
  border-radius: 10px 0 0 10px;
  object-fit: cover;
  object-position: center;

}

.form-container {
  height: 650px;
  background: #fff;
  border-radius: 0 10px 10px 0;
  width: 50%;
  margin-left: -2px;

  box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.25);
}

.registration-form {
  display: flex;
  flex-direction: column;
  width: auto;

}

.form-row {
  display: flex;
  justify-content: space-around;
  margin-bottom: 15px;
}

.checkbox-row {
  padding: 15px 30px 15px 30px;
  display: flex;
  align-items: center;

  letter-spacing: 1px;
}

.button-row {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 10px;
}

button {
  background-color: #d3c9ad;
  border: 1px solid #000;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #c6b393;
}

.create-account-btn {
  margin-bottom: 10px;
}
</style>