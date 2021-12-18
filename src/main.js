import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import store from "./store";
import VueApexCharts from "vue-apexcharts";
import dayjs from "dayjs";

Vue.config.productionTip = false;

new Vue({
  vuetify,
  store,
  VueApexCharts,
  dayjs,
  render: (h) => h(App),
}).$mount("#app");
