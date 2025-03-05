// import {createRouter, createWebHistory} from 'vue-router';
// import HomePage from '.../components/HomeSection.vue';
// import ServicesPage from '.../components/ServicesSection.vue';
// import AboutPage from '.../components/AboutSite.vue';
// import ContactPage from '.../components/ContactSection.vue';

    
// const routes =[

//     {path: '/', component: HomePage},
//     {path: '/services', component: ServicesPage},
//     {path: '/about', component: AboutPage},
//     {path: '/contact', component: ContactPage}
// ]

// const router = createRouter({
//     History: createWebHistory(),
//     routes
// })

// export default router;

// import { createRouter, createWebHistory } from 'vue-router';
// import HomePage from '../components/HomeSection.vue';
// import ServicesPage from '../components/ServicesSection.vue';
// import AboutPage from '../components/AboutSite.vue';

// const routes = [
//   { path: '/', component: HomePage },
//   { path: '/services', component: ServicesPage },
//   { path: '/about', component: AboutPage }
// ];

// const router = createRouter({
//   history: createWebHistory(),
//   routes
// });
import { createRouter, createWebHistory } from 'vue-router';
import HomeSite from '../components/HomeSection.vue';
import ServicesSection from '../components/ServicesSection.vue';
import AboutPage from '../components/AboutSite.vue';
import ContactPage from '../components/ContactSection.vue';
import AboutMe from '../components/AboutMe.vue';

const routes = [
  { path: '/#', component: HomeSite },
  { path: '/#Services', component:  ServicesSection },
  { path: '/#About', component: AboutPage },
  { path: '/#Aboutme', component: AboutMe },
  { path: '/#Contact', component: ContactPage }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      };
    } else {
      return { top: 0 };
    }
  }
});

export default router;