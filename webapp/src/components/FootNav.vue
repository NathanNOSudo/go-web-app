<template>
    <footer class="footer">
      <p>&copy; 2025 Your Company. All rights reserved.</p>
    </footer>
  </template>
  
  <script>
  export default {
    name: 'FootNav'
  }
  </script>
  <!-- I need css for the title bar to be at the top of the viewscreen
    -->
  <style scoped>
  .footer {
    background-color: #333;
    color: white;
    text-align: center;
    padding: 10px 0;
    position: relative;
    width: 100%;
    bottom: 0;
  }
  </style>