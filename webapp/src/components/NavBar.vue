<template>
    <div :class="['nav-bar', { open: isOpen }]">
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    name: 'NavBar',
    props: {
      isOpen: {
        type: Boolean,
        required: true
      }
    }
  }
  </script>
  
  <style scoped>
  .nav-bar {
    position: fixed;
    top: 0;
    left: -250px;
    width: 250px;
    height: 100%;
    background-color: #333;
    color: white;
    transition: left 0.3s;
    padding-top: 0px;
  }
  
  .nav-bar.open {
    left: 0;
  }
  
  .nav-bar ul {
    list-style-type: none;
    padding: 0;
  }
  
  .nav-bar li {
    padding: 8px 16px;
  }
  
  .nav-bar li a {
    color: white;
    text-decoration: none;
  }
  
  .nav-bar li a:hover {
    background-color: #575757;
  }
  </style>