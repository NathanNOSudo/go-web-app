<template>
  <ul class="technologies">
    <li v-for="technology in technologies" v-bind:key="technology.name">
      <b>{{technology.name}}</b>: {{technology.details}}
    </li>
  </ul>
</template>

<script>
import axios from 'axios'

export default {
  name: 'TechItems',
  data() {
    return {
      technologies: []
    };
  },
  mounted() {
    axios
      .get(`${import.meta.env.VITE_API_URL}/api/technologies`)
      .then(response => (this.technologies = response.data));
  }
};
</script>

<style scoped>
.technologies {
  margin-top: 5px;
  border: red 5px solid;
}
</style>
