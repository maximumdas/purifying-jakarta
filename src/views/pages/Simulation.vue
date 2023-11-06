<template>
  <div class="row">
    <div class="col-12 mb-7">
      <div class="card">
        <div class="card-body">
          <div class="row">
            <div class="col-6">
              <div class="my-1">
                <label for="aqi_pref">Set aqi preference: </label>
                <input
                  style="border-radius: 2px"
                  ref="inputRef"
                  type="text"
                  class="form-control"
                  name="aqi_pref"
                  id="aqi_pref"
                  placeholder="Search..."
                />
              </div>
            </div>
            <div class="col-6">
              <div class="my-1">
                <label for="aqi_pref">Filters: </label>
                <multiselect
                  v-model="xSelected"
                  :options="xOptions"
                  mode="tags"
                  placeholder="Select dependent variabel"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <MapSimulation />
    <!-- <div style="height: 75vh; width: 100%" class="rounded col-12">
      <l-map ref="map" v-model:zoom="zoom" :center="[-6.3810549, 106.8661672]">
        <l-tile-layer
          url="https://api.mapbox.com/styles/v1/mapbox/dark-v11/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWF4aW11bWRhcyIsImEiOiJjbGE3ejA0cmcwNDhtM3BteTZ1ZDR1NW1pIn0.X360ooFjxu2JyzZVjohMgg"
          layer-type="base"
          name="Mapbox"
          attribution="© <a href='https://www.mapbox.com/contribute/'>Mapbox</a>"
        ></l-tile-layer>
      </l-map>
    </div> -->
  </div>
</template>

<script lang="ts">
import "leaflet/dist/leaflet.css";
import { defineComponent, onMounted, ref } from "vue";
import { setCurrentPageBreadcrumbs } from "@/core/helpers/breadcrumb";
import { LMap, LTileLayer } from "@vue-leaflet/vue-leaflet";
import Multiselect from "@vueform/multiselect";
import MapSimulation from "@/components/widgets/map/MapSimulation.vue";

export default defineComponent({
  name: "simulation",
  components: {
    // LMap,
    // LTileLayer,
    Multiselect,
    MapSimulation,
  },
  setup() {
    const zoom = ref(9);
    const xSelected = ref(null);
    const xOptions = ref([
      { label: "Average built-up area", value: "built_up_mean" },
      { label: "Average population", value: "pop_mean" },
      { label: "Land survace temperature", value: "LST_mean" },
      { label: "Normalize difference built-up index", value: "NDBI_mean" },
      { label: "Normalize difference vegetation index", value: "NDVI_mean" },
      { label: "Is built-up majority", value: "land_cover_Built_up" },
      { label: "Is cropland majority", value: "land_cover_Crop_land" },
      { label: "Is grassland majority", value: "land_cover_Grassland" },
      { label: "Is swamp majority", value: "land_cover_Herbaceous_wetland" },
      {
        label: "Is water body majority",
        value: "land_cover_Permanent_Water_Bodies",
      },
      { label: "Is trees majority", value: "land_cover_Tree_Cover" },
    ]);
    onMounted(() => {
      setCurrentPageBreadcrumbs("Simulation", ["Pages", "Simulation"]);
    });

    return {
      zoom,
      xOptions,
      xSelected,
    };
  },
});
</script>

<style src="@vueform/multiselect/themes/default.css"></style>
