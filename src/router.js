import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
      mode: "history",
      base: process.env.BASE_URL,
      routes: [
            {
                  //la ruta donde nos vamos a dirigir   
                  path: "/",
                  //este es el componente que se cargara en esta ruta
                  name: "Init",
                  //aqui se esta llamado al componente que se va a cargar importandolo
                  component: () => import("./views/Init.vue")
            },
            {
                  path: "/Home",
                  name: "Home",
                  component: () => import("./views/Home.vue")
            },
            {
                  path: "/SignUp",
                  name: "SignUp",
                  component: () => import("./views/SignUp.vue")
            },
            {
                  path: "/Login",
                  name: "Login",
                  component: () => import("./views/Login.vue")
            },

      ]
});
