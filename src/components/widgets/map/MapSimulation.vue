<template>
  <!--begin::List Widget 3-->
  <div :class="widgetClasses" class="card card-flush">
    <!--begin::Card header-->
    <div class="card-header">
      <!--begin::Card title-->
      <h3 class="card-title fw-boldest">Changes Effect</h3>
      <!--end::Card title-->

      <!--begin::Card toolbar-->
      <div class="card-toolbar">
        <div class="d-flex align-items-center">
          <a
            class="
              btn btn-sm btn-icon btn-circle btn-icon-info btn-active-light-info
            "
            href="#"
            data-kt-menu-trigger="click"
            data-kt-menu-placement="bottom-end"
            data-kt-menu-flip="top-end"
          >
            <span class="svg-icon svg-icon-1">
              <inline-svg src="media/icons/duotune/general/gen023.svg" />
            </span>
          </a>
          <Dropdown1></Dropdown1>
        </div>
      </div>
      <!--end::Card toolbar-->
    </div>
    <!--end::Card header-->

    <!--begin::Body-->
    <div class="card-body pt-1">
      <!--begin:Tab content-->
      <div class="tab-content">
        <!--begin::Tab pane-->
        <div
          class="tab-pane fade active show"
          id="kt_lists_widget_3_tab_pane_1"
        >
          <div style="height: 600px; width: 100%">
            <l-map
              ref="map"
              v-model:zoom="zoom"
              :center="[-6.3810549, 106.8661672]"
            >
              <l-tile-layer
                url="https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWF4aW11bWRhcyIsImEiOiJjbGE3ejA0cmcwNDhtM3BteTZ1ZDR1NW1pIn0.X360ooFjxu2JyzZVjohMgg"
                layer-type="base"
                name="Mapbox"
                attribution="© <a href='https://www.mapbox.com/contribute/'>Mapbox</a>"
              ></l-tile-layer>
              <l-geo-json :geojson="hexPolygon"> </l-geo-json>
            </l-map>
          </div>
        </div>
        <!--end::Tab pane-->
      </div>
      <!--end:Tab content-->
    </div>
    <!--end::Body-->
  </div>
  <!--end::List Widget 3-->
</template>

<script lang="ts">
import "leaflet/dist/leaflet.css";
import { defineComponent, onMounted, ref } from "vue";
import { getCSSVariableValue } from "@/assets/ts/_utils";
import Dropdown1 from "@/components/dropdown/Dropdown1.vue";
import { LMap, LTileLayer, LGeoJson } from "@vue-leaflet/vue-leaflet";
import hexPolygon from "@/assets/map/hex_res7_with_attr.js";

export default defineComponent({
  name: "kt-widget-3",
  props: {
    widgetClasses: String,
  },
  components: {
    Dropdown1,
    LMap,
    LTileLayer,
    LGeoJson,
  },
  setup() {
    const zoom = ref<number>(10);
    const map = ref(null);

    const series = [
      {
        name: "Net Profit",
        data: [40, 50, 65, 70, 50, 30],
      },
      {
        name: "Revenue",
        data: [-30, -40, -55, -60, -40, -20],
      },
    ];

    return {
      series,
      zoom,
      map,
      hexPolygon,
    };
  },
});
</script>
