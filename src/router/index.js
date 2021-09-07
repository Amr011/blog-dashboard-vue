import { createRouter, createWebHistory } from "vue-router";
import "@fortawesome/fontawesome-free/css/all.css";


import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Contact from "../views/Contact.vue";
import Categories from "../views/Categories.vue";


const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
  {
    path: "/categories",
    name: "Categories",
    component: Categories,
  },
 
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
