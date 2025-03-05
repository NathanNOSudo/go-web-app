<template>
    <div class="about-site">
      <h1>About This Site</h1>
      <p>This site is a simple example of a Vue.js application. It uses the following technologies:</p>
      <ul>
        <li>Vue.js for the front end</li>
        <li>Go for the back end</li>
        <li>PostgreSQL for the database</li>
      </ul>

    </div>
  </template>

<script>
export default {
  name: 'AboutSite'
}
</script>

<style scoped>
  .about-site {
    background-color: #f76363;
    color: rgb(254, 254, 14);
    text-align: center;
    padding: 10px 0;
    position: relative;
    width: 100%;
    bottom: 0;
    margin-bottom: 5%;
    border: red 5px solid;
  }
  </style>