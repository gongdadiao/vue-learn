import Vue from 'vue'
import App from './App.vue'
import router from "./router"
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false

Vue.use(ElementUI)


router.beforeEach((to,from,next)=>{
  // eslint-disable-next-line no-undef,no-console
  //console.log("前往的页面"+to.path);
  // eslint-disable-next-line no-undef,no-console
  //console.log("当前页面"+from.path);
  // eslint-disable-next-line no-console
  if(to.matched.some(record=>record.meta.requiredAuth)){
    // eslint-disable-next-line no-console
    console.log("这个页面需要权限");
  }
  next();
})

new Vue({
  router,
  render: h =>h(App)
}).$mount('#app')