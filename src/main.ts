import { createApp } from "vue";
import App from "./App.vue";

/*
TIP: To get started with clean router change path to @/router/clean.ts.
 */
import router from "./router";
import store from "./store";
import i18n from "@/core/plugins/i18n";

//imports for app initialization
import { initApexCharts } from "@/core/plugins/apexcharts";
import { initInlineSvg } from "@/core/plugins/inline-svg";
import { initVeeValidate } from "@/core/plugins/vee-validate";
import { initElementPlus } from "@/core/plugins/element-plus";

import "@/core/plugins/keenthemes";
import "@/core/plugins/prismjs";
import "bootstrap";

const app = createApp(App);

app.use(store);
app.use(router);

initApexCharts(app);
initInlineSvg(app);
initElementPlus(app);
initVeeValidate();

app.use(i18n);
app.config.globalProperties.openAqApi = "https://api.openaq.org/v2/";
app.provide("openAqApi", "https://api.openaq.org/v2/");

app.mount("#app");
