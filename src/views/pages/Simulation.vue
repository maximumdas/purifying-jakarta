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
                  v-model="aqiPrefValue"
                  id="aqi_pref"
                  placeholder="Input pefered AQI"
                />
              </div>
            </div>
            <div class="col-12 text-end">
              <el-button class="mt-5" type="warning">Reset</el-button>
              <el-button class="mt-5" type="primary" @click="openFullScreen2"
                >Simulate</el-button
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-6">
        <MapSimulation
          :polygonData="polygonData"
          :newpolygonData="beforepolygonData"
          title="Current Situation"
          :geoid="geoid"
          :show="show"
        />
      </div>
      <div class="col-6">
        <MapSimulation
          :polygonData="targetPolygonData"
          :newpolygonData="aftertargetPolygonData"
          title="Changes Effect"
          :geoid="aftgeoid"
          :show="show"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import "leaflet/dist/leaflet.css";
import { defineComponent, onMounted, ref } from "vue";
import { setCurrentPageBreadcrumbs } from "@/core/helpers/breadcrumb";
import MapSimulation from "@/components/widgets/map/MapSimulation.vue";
import hexPolygon from "@/assets/map/hex_before_attribute.js";
import mapafter from "@/assets/map/simulation/3173_after.js";
import mapbefore from "@/assets/map/simulation/3173_before.js";
import { ElLoading } from "element-plus";

export default defineComponent({
  name: "simulation",
  components: {
    MapSimulation,
  },
  setup(props, context) {
    const zoom = ref(9);
    const xSelected = ref("");
    const aqiPrefValue = ref("");
    const polygonData = ref(hexPolygon);
    const targetPolygonData = ref({});
    const beforepolygonData = ref({});
    const aftertargetPolygonData = ref({});
    const xOptions = ref();
    const geoid = ref(1);
    const aftgeoid = ref(2);
    const show = ref(true);

    const simulation = () => {
      console.log(xSelected.value, aqiPrefValue.value);
    };
    type MyType = {
      type: string;
      crs: any;
      features: any[];
    };

    const openFullScreen2 = () => {
      const loading = ElLoading.service({
        lock: true,
        text: "Loading",
        background: "rgba(0, 0, 0, 0.7)",
      });
      setTimeout(() => {
        show.value = false;
        loading.close();
      }, 2000);
    };

    onMounted(() => {
      setCurrentPageBreadcrumbs("Simulation", ["Pages", "Simulation"]);
      const hexafter: MyType = {
        type: "FeatureCollection",
        crs: {
          type: "name",
          properties: { name: "urn:ogc:def:crs:OGC:1.3:CRS84" },
        },
        features: [],
      };

      hexPolygon.features.forEach((feat) => {
        mapafter.forEach((after) => {
          if (feat.properties.hex_id == after.hex_id) {
            hexafter.features.push({
              ...feat,
              built_up_mean: after.built_up_mean,
              pop_mean: after.pop_mean,
              LST_mean: after.LST_mean,
              NDBI_mean: after.NDBI_mean,
              NDVI_mean: after.NDVI_mean,
              NDWI_mean: after.NDWI_mean,
              NTL_mean: after.NTL_mean,
              land_cover_Built_up: after.land_cover_Built_up,
              land_cover_Crop_land: after.land_cover_Crop_land,
              land_cover_Grassland: after.land_cover_Grassland,
              land_cover_Herbaceous_wetland:
                after.land_cover_Herbaceous_wetland,
              land_cover_Permanent_Water_Bodies:
                after.land_cover_Permanent_Water_Bodies,
              land_cover_Tree_Cover: after.land_cover_Tree_Cover,
              aqi: after.aqi,
            });
          }
        });
      });
      aftertargetPolygonData.value = hexafter;

      const hexbefore: MyType = {
        type: "FeatureCollection",
        crs: {
          type: "name",
          properties: { name: "urn:ogc:def:crs:OGC:1.3:CRS84" },
        },
        features: [],
      };

      hexPolygon.features.forEach((feat) => {
        mapbefore.forEach((before) => {
          if (feat.properties.hex_id == before.hex_id) {
            hexbefore.features.push({
              ...feat,
              built_up_mean: before.built_up_mean,
              pop_mean: before.pop_mean,
              LST_mean: before.LST_mean,
              NDBI_mean: before.NDBI_mean,
              NDVI_mean: before.NDVI_mean,
              NDWI_mean: before.NDWI_mean,
              NTL_mean: before.NTL_mean,
              land_cover_Built_up: before.land_cover_Built_up,
              land_cover_Crop_land: before.land_cover_Crop_land,
              land_cover_Grassland: before.land_cover_Grassland,
              land_cover_Herbaceous_wetland:
                before.land_cover_Herbaceous_wetland,
              land_cover_Permanent_Water_Bodies:
                before.land_cover_Permanent_Water_Bodies,
              land_cover_Tree_Cover: before.land_cover_Tree_Cover,
              aqi: before.aqi,
            });
          }
        });
      });

      beforepolygonData.value = hexbefore;
    });

    return {
      zoom,
      xOptions,
      xSelected,
      polygonData,
      targetPolygonData,
      aqiPrefValue,
      simulation,
      openFullScreen2,
      geoid,
      aftgeoid,
      show,
      beforepolygonData,
      aftertargetPolygonData,
    };
  },
});
</script>

<style src="@vueform/multiselect/themes/default.css"></style>
