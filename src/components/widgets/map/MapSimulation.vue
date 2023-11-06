<template>
  <!--begin::List Widget 3-->
  <div :class="widgetClasses" class="card card-flush">
    <!--begin::Card header-->
    <div class="card-header">
      <!--begin::Card title-->
      <h3 class="card-title fw-boldest">{{ title }}</h3>
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
          <DropdownSimulation :onSelectChange="changeSelected" />
        </div>
      </div>
      <!--end::Card toolbar-->
    </div>

    <!--end::Card header-->

    <!--begin::Body-->
    <div class="card-body pt-1">
      <!--begin:Tab content-->
      <div class="tab-content">
        <div class="row">
          <div class="col-12">Displayed Var: {{ selectedVar }}</div>
        </div>
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
              <!-- <l-geo-json
                v-if="show"
                :key="geoid"
                :geojson="polygonData"
                :optionsStyle="style"
                :options="{
                  onEachFeature: onEachHexFeature,
                }"
              >
              </l-geo-json> -->
              <l-geo-json
                :geojson="newpolygonData"
                :optionsStyle="style"
                :options="{
                  onEachFeature: onEachHexFeature,
                }"
              >
              </l-geo-json>
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
import { defineComponent, onMounted, ref, toRefs, watch } from "vue";
import { getCSSVariableValue } from "@/assets/ts/_utils";
import DropdownSimulation from "@/components/dropdown/DropdownSimulation.vue";
import { LMap, LTileLayer, LGeoJson } from "@vue-leaflet/vue-leaflet";

export default defineComponent({
  name: "kt-widget-3",
  props: {
    widgetClasses: String,
    polygonData: Object,
    newpolygonData: Object,
    title: String,
    geoid: Number,
    show: Boolean,
  },
  components: {
    DropdownSimulation,
    LMap,
    LTileLayer,
    LGeoJson,
  },
  setup(props) {
    const zoom = ref<number>(9);
    const map = ref(null);
    const selectedVar = ref("AQI");

    const onEachHexFeature = (feature, layer) => {
      layer.bindPopup(`<table>
        <tbody>
          </tbody>
        <tr>
          <td>Hex Id </td>
          <td>:</td>
          <td>
            ${feature.properties.hex_id}
          </td>
        </tr>

        <tr>
          <td>Province</td>
          <td>:</td>
          <td>
            [${feature.properties.kdprov}] ${feature.properties.nmprov}
            </td>
        </tr>
        <tr>
          <td>City</td>
          <td>:</td>
          <td>
            [${feature.properties.kdkab}] ${feature.properties.nmkab}
            </td>
        </tr>
        <tr>
          <td>AQI Value</td>
          <td>:</td>
          <td>
            ${feature.properties.aqi}
            </td>
        </tr>
        </table>`);
      layer.on("mouseover", () => {
        layer.setStyle({
          weight: 5,
          fillColor: "#FD8D3C",
          dashArray: "3",
          fillOpacity: 0.7,
        });
        layer.bringToFront();
      });
      layer.on("mouseout", function () {
        layer.setStyle({
          // fillColor: "#009EFF",
          fillColor: getColorGrade(feature.properties.aqi),
          weight: 2,
          opacity: 1,
          dashArray: "3",
          fillOpacity: 0.7,
        });
      });
    };

    const getColorGrade = (value) => {
      let color = "#7E0122";
      if (value <= 50) {
        color = "#04E300";
      } else if (value <= 100) {
        color = "#FFFF00";
      } else if (value <= 150) {
        color = "#FF7E00";
      } else if (value <= 200) {
        color = "#FF0000";
      } else if (value <= 300) {
        color = "#8F3F97";
      }

      return color;
    };

    const style = (feature) => {
      return {
        // fillColor: "#009EFF",
        fillColor: getColorGrade(feature.properties.aqi),
        weight: 2,
        opacity: 1,
        color: "white",
        dashArray: "3",
        fillOpacity: 0.7,
      };
    };

    const changeSelected = (val) => {
      console.log(val);
    };
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

    watch(
      () => props.polygonData,
      () => {
        console.log(props.polygonData);
      }
    );
    return {
      series,
      zoom,
      map,
      selectedVar,
      style,
      onEachHexFeature,
      changeSelected,
    };
  },
});
</script>
