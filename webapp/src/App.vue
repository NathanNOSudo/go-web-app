<script setup>
import TechItems from './components/TechItems.vue'
// import TitleBar from './components/TitleBar.vue'
// import NavBar  from './components/NavBar.vue';
import logoSVG from '@/assets/logo.svg';
</script>

<template>
  <div id="app" :class="{ 'nav-open': isNavBarOpen }">
    <TitleBar title="Project-1" @toggle-nav-bar="toggleNavBar" />
    <NavBar :isOpen="isNavBarOpen"/>
  <main id="app">

    <h2 class="title">project-1</h2>
    <div class="logo">
      <img :src="logoSVG" height="150" alt="logo" />
    </div>
    <div>
      This project is generated with
      <b>
        <a href="https://github.com/shpota/goxygen">goxygen</a>
      </b>.
      <p />The following list of technologies comes from
      a REST API call to the Go-based back end. Find
      and change the corresponding code in
      <code>webapp/src/components/TechItems.vue</code>
      and <code>server/web/app.go</code>.
      <TechItems />
    </div>
  </main>
</div>

</template>

<script>
import TitleBar from './components/TitleBar.vue';
import NavBar from './components/NavBar.vue';

export default {
  name: 'App',
  components: {
    TitleBar,
    NavBar
  },
  data() {
    return {
      isNavBarOpen: false
    };
  },
  methods: {
    toggleNavBar() {
      this.isNavBarOpen = !this.isNavBarOpen;
    }
  }
}
</script>

<style>

body {
  margin-top: 5%;
  padding-right: 5%;
  padding-left: 5%;
  font-size: larger;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
/* Nav Bar Start */
#app {
  transition: margin-left 0.3s;
}

#app.nav-open {
  margin-left: 250px;
}
/* Nav Bar Stop */
@media screen and (min-width: 800px) {
  body {
    padding-right: 15%;
    padding-left: 15%;
  }
}

@media screen and (min-width: 1600px) {
  body {
    padding-right: 30%;
    padding-left: 30%;
  }
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
  background-color: #b3e6ff;
}

.title {
  text-align: center;
}

.logo {
  text-align: center;
}
</style>
