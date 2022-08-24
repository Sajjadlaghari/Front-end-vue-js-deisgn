import { createWebHistory, createRouter } from "vue-router";
import Home from "./components/Home";
import gallery from "./components/Gallery";
import About from "./components/About";
import Login from "./components/login";
import edit from "./components/edit";
import Delete from "./components/delete";
import Registration from "./components/registration.vue";
import menu1 from "./components/menu1.vue";
import comment from "./components/comment.vue";
import menu2 from "./components/menu2.vue";
import menu3 from "./components/menu3.vue";
import phone from "./components/phone_number.vue";
import email from "./components/email.vue";
import detail from "./components/detail.vue";
import address from "./components/address.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },


  {
    path: "/menu1",
    name: "menu1",
    component: menu1
  },
  {
    path: "/menu2",
    name: "menu2",
    component: menu2
  },
  {
    path: "/menu3",
    name: "menu3",
    component: menu3
  },
  {
    path: "/comment",
    name: "comment",
    component: comment
  },

  {
    path: "/phone",
    name: "phone",
    component: phone
  },
  {
    path: "/email",
    name: "email",
    component: email
  },
  {
    path: "/detail",
    name: "detail",
    component: detail
  },
  {
    path: "/address",
    name: "address",
    component: address
  },
  




  {
    path: "/edit/:id",
    name: "edit",
    component: edit
  },
  {
    path: "/delete/:id",
    name: 'delete',
    component: Delete
  },
  {
    path: "/login",
    name: "login",
    component: Login
  },
  {
    path: "/about",
    name: "about",
    component: About
  },
  {
    path: "/gallery",
    name: "gallery",
    component: gallery
  },

  {
    path: "/registration",
    name: "registration",
    component: Registration
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;