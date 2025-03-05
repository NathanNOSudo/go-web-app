<template>
    <div class="title-bar">
      <button @click="toggleNavBar" class="hamburger-button">&#9776;</button>
      <h1>{{ title }}</h1>
    </div>
  </template>
  
  <script>
  export default {
    name: 'TitleBar',
    props: {
      title: {
        type: String,
        required: true
      }
    },
    methods: {
      toggleNavBar() {
        this.$emit('toggle-nav-bar');
      }
    }
  }
  </script>
  
  <style scoped>
  .title-bar {
    background-color: #6a6a6a;
    color: white;
    padding: 10px;
    text-align: center;
    box-shadow: 0 4px 10px -2px rgb(171, 238, 253); /* Adding blue shadow around the bottom */
    position: relative;
  }
  
  .hamburger-button {
    position: absolute;
    left: 10px;
    top: 10px;
    background: none;
    border: none;
    color: white;
    font-size: 24px;
    cursor: pointer;
  }
  </style>