import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/homepage.vue";
import Register from "../views/register.vue";
import Login from "../views/login.vue";
import BuyTicket from "../views/buyticket.vue";
import My from "../views/my.vue";
import Forgotpass from "../views/forgotpassword.vue";
import Passreset from "../views/passreset.vue";

Vue.use(VueRouter);
const router = new VueRouter({
  routes: [
    // 动态路径参数 以冒号开头
    { path: "/homepage", component: Home },
    { path: "/register", component: Register },
    { path: "/login", component: Login },
    { path: "/buyticket", component: BuyTicket },
    { path: "/my", component: My },
    { path: "/forgotpass", component: Forgotpass },
    { path: "/passreset", component: Passreset },
  ],
});

export default router;
