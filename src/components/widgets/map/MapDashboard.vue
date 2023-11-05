<template>
  <!--begin::List Widget 3-->
  <div :class="widgetClasses" class="card card-flush">
    <!--begin::Card header-->
    <div class="card-header">
      <!--begin::Card title-->
      <h3 class="card-title fw-boldest">Air Quality Index in Jakarta</h3>
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
      <!--begin::Tabs-->
      <ul
        class="
          nav
          rounded-pill
          flex-center
          bg-light
          overflow-auto
          flex-nowrap
          p-2
          mb-8
        "
      >
        <!--begin::Tab nav-->
        <li class="nav-item flex-equal">
          <a
            class="
              nav-link
              btn btn-active-white btn-color-gray-500 btn-active-color-gray-700
              py-2
              px-4
              fs-6
              fw-bold
              active
            "
            data-bs-toggle="tab"
            href="#kt_lists_widget_3_tab_pane_1"
          >
            Exclusive Authors
          </a>
        </li>
        <!--end::Tab nav-->

        <!--begin::Tab nav-->
        <li class="nav-item flex-equal mx-1">
          <a
            class="
              nav-link
              btn btn-active-white btn-color-gray-500 btn-active-color-gray-700
              py-2
              px-4
              fs-6
              fw-bold
            "
            data-bs-toggle="tab"
            href="#kt_lists_widget_3_tab_pane_2"
          >
            Statistics
          </a>
        </li>
        <!--end::Tab nav-->

        <!--begin::Tab nav-->
        <li class="nav-item flex-equal">
          <a
            class="
              nav-link
              btn btn-active-white btn-color-gray-500 btn-active-color-gray-700
              py-2
              px-4
              fs-6
              fw-bold
            "
            data-bs-toggle="tab"
            href="#kt_lists_widget_3_tab_pane_3"
          >
            Recent Trends
          </a>
        </li>
        <!--end::Tab nav-->
      </ul>
      <!--end::Tabs-->

      <!--begin:Tab content-->
      <div class="tab-content">
        <!--begin::Tab pane-->
        <div
          class="tab-pane fade active show"
          id="kt_lists_widget_3_tab_pane_1"
        >
          <div id="map" style="height: 500px"></div>
        </div>
        <!--end::Tab pane-->

        <!--begin::Tab pane-->
        <div class="tab-pane fade" id="kt_lists_widget_3_tab_pane_2">
          <!--begin::Chart-->

          <!--end::Chart-->
        </div>
        <!--end::Tab pane-->

        <!--begin::Tab pane-->
        <div class="tab-pane fade" id="kt_lists_widget_3_tab_pane_3">
          <!--begin::Items-->

          <!--end::Items-->
        </div>
        <!--end::Tab pane-->
      </div>
      <!--end:Tab content-->
    </div>
    <!--end::Body-->
  </div>
  <!--end::List Widget 3-->
</template>

<script setup lang="ts">
import axios from "axios";
import "leaflet/dist/leaflet.css";
import { ref, inject, computed, onMounted } from "vue";
import leaflet from "leaflet";
import hexPolygon from "@/assets/map/hex_res7_with_attr.js";
import { array } from "yup";

const openAqApi = inject("openAqApi");

async function getMap() {
  var map = leaflet.map("map");

  const tiles = leaflet
    .tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 18,
      attribution:
        '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    })
    .addTo(map);

  function style(feature) {
    return {
      fillColor: "#009EFF",
      weight: 1,
      opacity: 1,
      color: "white",
      dashArray: "3",
      fillOpacity: 0.7,
    };
  }

  function zoomToFeature(e) {
    map.fitBounds(e.target.getBounds());
  }

  function mapInteractions(feature, layer) {
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
        </table>`);
    layer.on("click", zoomToFeature);
    layer.on("mouseover", function () {
      this.setStyle({
        weight: 5,
        fillColor: "#FD8D3C",
        dashArray: "",
        fillOpacity: 0.7,
      });
      this.bringToFront();
    });
    layer.on("mouseout", function () {
      this.setStyle({
        fillColor: "#009EFF",
        weight: 2,
        opacity: 1,

        dashArray: "3",
        fillOpacity: 0.7,
      });
    });
  }

  const multipolygon = leaflet.geoJSON(hexPolygon, {
    onEachFeature: mapInteractions,
    style: style,
  });
  multipolygon.addTo(map);

  var layerControl = leaflet.control.layers().addTo(map);
  map.fitBounds(multipolygon.getBounds());

  await axios
    .get(
      "https://api.openaq.org/v2/locations?limit=100&page=1&offset=0&sort=desc&radius=1000&country=ID&order_by=lastUpdated&dump_raw=false",
      {
        headers: {
          accept: "application/json",
        },
      }
    )
    .then((response) => {
      const stations = response.data.results;
      console.log(response.data.results);
      var list_stations = [];
      stations.forEach((element) => {
        var myIcon = leaflet.icon({
          iconUrl: "media/icons/destination.png",
          iconSize: [40, 40],
        });
        const markerStat = leaflet
          .marker(
            [element.coordinates.latitude, element.coordinates.longitude],
            { icon: myIcon }
          )
          .bindPopup("Station Name: " + element.name);
        list_stations.push(markerStat);

        markerStat.addTo(map);
      });
      const stationLayer = leaflet.layerGroup(list_stations);
      layerControl.addOverlay(stationLayer, "AQI Sensors");
      layerControl.addOverlay(multipolygon, "H3");
    });
}

onMounted(() => {
  getMap();
});
</script>
