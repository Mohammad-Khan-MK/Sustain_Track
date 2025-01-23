
<script>
export default {
  name: "Input_Field",
  props: {
    label: {
      type: String,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default: "text", // Default type is text
    },
    placeholder: {
      type: String,
      default: "Enter your value...",
    },
  },
};
</script>

<template>
  <div class="input-container">
    <label :for="id">{{ label }}</label>
    <input
        :type="type"
        :id="id"
        :placeholder="placeholder"
        required
        class="input-field"
    />
  </div>
</template>

<style scoped>
.input-container {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
}

label {
  margin-bottom: 5px;
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  letter-spacing: 1px;
  font-weight:lighter;
  width: 373px;
  text-align: left;
}

.input-field {
  font-family: 'Roboto', sans-serif;
  font-weight: normal;
  font-size: 14px;
  letter-spacing: 1px;
  font-style: italic;
  width: 350px;
  background-color: whitesmoke;
  padding: 10px;
  border-left: 2px solid black;
  border-bottom: 2px solid black;
  border-right: 1px solid black;
  border-top: 1px solid black;
  cursor: pointer;
}
</style>
