<template>
  <div class="row">
    <div class="col-12 mb-7">
      <div class="card">
        <div class="card-body">
          <div class="row">
            <div class="col-6">
              <div class="my-1">
                <label for="aqi_pref">Filters: </label>

                <el-select
                  class="form-select-solid d-block"
                  placeholder="Select region"
                  v-model="xSelected"
                >
                  <el-option value="3175" label="Jakarta Utara"
                    >Jakarta Utara</el-option
                  >
                  <el-option value="3174" label="Jakarta Barat"
                    >Jakarta Barat</el-option
                  >
                  <el-option value="3173" label="Jakarta Pusat"
                    >Jakarta Pusat</el-option
                  >
                  <el-option value="3172" label="Jakarta Timur"
                    >Jakarta Timur</el-option
                  >
                  <el-option value="3171" label="Jakarta Selatan"
                    >Jakarta Selatan</el-option
                  >
                </el-select>
                <!-- <multiselect
                  v-model="xSelected"
                  :options="xOptions"
                  mode="tags"
                  placeholder="Select dependent variabel"
                /> -->
              </div>
            </div>
            <div class="col-6">
              <div class="my-1">
                <label for="aqi_pref">Set aqi preference: </label>
                <el-input
                  style="border-radius: 2px"
                  ref="inputRef"
                  type="number"
                  name="aqi_pref"
                  id="aqi_pref"
                  placeholder="Input pefered AQI"
                />
              </div>
            </div>
            <div class="col-12 text-end">
              <el-button class="mt-5" type="warning">Reset</el-button>
              <el-button class="mt-5" type="primary">Simulate</el-button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-6">
        <MapSimulation :polygonData="polygonData" title="Current Situation" />
      </div>
      <div class="col-6">
        <MapSimulation
          :polygonData="targetPolygonData"
          title="Changes Effect"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import "leaflet/dist/leaflet.css";
import { defineComponent, onMounted, ref } from "vue";
import { setCurrentPageBreadcrumbs } from "@/core/helpers/breadcrumb";
import { LMap, LTileLayer } from "@vue-leaflet/vue-leaflet";
import Multiselect from "@vueform/multiselect";
import MapSimulation from "@/components/widgets/map/MapSimulation.vue";
import hexPolygon from "@/assets/map/hex_before_attribute.js";

export default defineComponent({
  name: "simulation",
  components: {
    // LMap,
    // LTileLayer,
    // Multiselect,
    MapSimulation,
  },
  setup() {
    const zoom = ref(9);
    const xSelected = ref(null);
    const polygonData = ref(hexPolygon);
    const targetPolygonData = ref(null);
    const xOptions = ref();
    onMounted(() => {
      setCurrentPageBreadcrumbs("Simulation", ["Pages", "Simulation"]);
    });

    return {
      zoom,
      xOptions,
      xSelected,
      polygonData,
      targetPolygonData,
    };
  },
});
</script>

<style src="@vueform/multiselect/themes/default.css"></style>
