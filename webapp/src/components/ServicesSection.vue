// filepath: /Users/skankhunt/portfolio-pojects/project-1/webapp/src/components/Services.vue
<template>
  <div class="services" id="services"> 
    <h1>Services</h1>
  <div class="service-section">
    <p>Here are some of the services I offer:</p>
    <ul>
      <li>Web Development</li>
      <li>Web Design</li>
      <li>SEO</li>
      <li>Web Hosting</li>
    </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ServiceSection'
}
</script>

<!-- style scoped basic -->
<style scoped>
  h1 {
    background-color: #ab14f6;
    color: rgb(0, 254, 38);
    text-align: center;
    padding: 10px 0;
    position: relative;
    width: 100%;
    bottom: 0;
    margin-bottom: 5%;
    border: red 5px solid;
    
  }
  .service-section     {
    background-color: #ab14f6;
    color: rgb(0, 254, 38);
    text-align: center;
    padding: 10px 0;
    position: relative;
    width: 100%;
    bottom: 0;
    margin-bottom: 5%;
    border: red 5px solid;
    }
  </style>