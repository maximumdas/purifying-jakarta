import { App } from "vue";
import ElementPlus from "element-plus";

/**
 * Initialize VueApexChart component
 * @param app vue instance
 */
export function initElementPlus(app) {
  app.use(ElementPlus);
}
