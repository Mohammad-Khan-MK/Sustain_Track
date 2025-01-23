
<script>
export default {
  name: "Button_Form",
  props: {
    label: {
      type: String,
      required: true,
    },
  },
};
</script>

<template>
  <button type="submit" class="form-btn">{{ label }}</button>
</template>

<style scoped>
.form-btn {
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
  letter-spacing: 1px;
  text-shadow: 0 4px 4px rgba(0, 0, 0, 0.3);
  width: 373px; /* Updated width to match the input field */
  background-color: #D3C9AD;
  padding: 10px; /* Ensures consistent padding with the input field */
  border-left: 2px solid black;
  border-bottom: 2px solid black;
  border-right: 1px solid black;
  border-top: 1px solid black;
  cursor: pointer;
  font-size: 14px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
}
</style>
