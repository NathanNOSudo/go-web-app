<template>
  <div class="about-me" id="about-me">
    <h1>A Little Bit About Me</h1>
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
  name: 'AboutMe'
}
</script>

<style scoped>
.about-me {
  background-color: #060606;
  color: rgb(14, 254, 38);
  text-align: center;
  padding: 10px 0;
  position: relative;
  width: 100%;
  bottom: 0;
  margin-bottom: 5%;
  border: red 5px solid;
}
</style>