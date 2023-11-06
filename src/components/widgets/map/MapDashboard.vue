<template>
  <!--begin::List Widget 3-->
  <div :class="widgetClasses" class="card card-flush mb-4">
    <!--begin::Card header-->
    <div class="card-header">
      <!--begin::Card title-->
      <h3 class="card-title fw-boldest">Air Quality Index in Jakarta</h3>
      <!--end::Card title-->

      <!--begin::Card toolbar-->
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
            AQI Sensor Stations
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
            AQI Trends
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
            Current AQI
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
          <div class="row mb-4">
            <div class="col">Source : openaq-api</div>
          </div>
          <div id="chart-trend"></div>
          <!--end::Chart-->
        </div>
        <!--end::Tab pane-->

        <!--begin::Tab pane-->
        <div class="tab-pane fade" id="kt_lists_widget_3_tab_pane_3">
          <!--begin::Items-->
          <div class="row g-5">
            <div class="py-5 col-lg-8">
              <div class="card card-stretch shadow">
                <div class="card-header">
                  <h3 class="card-title">Current AQI</h3>
                  <div class="card-toolbar">
                    <!-- <button type="button" class="btn btn-sm btn-light">
                      Action
                    </button> -->
                  </div>
                </div>
                <div class="card-body">
                  <div class="row d-flex justify-content-center mb-4">
                    <div class="card shadow w-300px text-center">
                      <div class="card-header">
                        <div class="card-title text-center">AQI</div>
                      </div>
                      <div class="card-body">
                        <h2 class="fs-30">
                          {{ currentAqi }}
                        </h2>
                      </div>
                      <div class="card-footer">
                        <div class="row">Time : {{ currentDateAqi }}</div>
                      </div>
                    </div>
                  </div>
                  <div class="row d-flex justify-content-center mb-4">
                    <div class="container mb-4">
                      <h3>Indicators:</h3>
                    </div>
                    <div class="container mb-2">
                      <div v-if="currentIaqi != null" class="row">
                        <div
                          class="col mb-4"
                          v-for="(data, idx) in currentIaqi"
                          :key="idx"
                        >
                          <div class="card shadow">
                            <div class="card-header">
                              <div class="card-title">{{ idx }}</div>
                            </div>
                            <div class="card-body">{{ data.v }}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card-footer">
                  <div v-if="currentAqiAttr != null" class="row text-muted">
                    Source : {{ currentAqiAttr[0].name }}
                  </div>
                  <div v-if="currentAqiAttr != null" class="row text-muted">
                    API : {{ currentAqiAttr[1].name }} ({{
                      currentAqiAttr[1].url
                    }})
                  </div>
                  <div v-if="currentAqiCity != null" class="row text-muted">
                    Location : {{ currentAqiCity.name }}
                  </div>
                </div>
              </div>
            </div>
            <div class="py-5 col-lg-4">
              <div class="card shadow card-stretch">
                <div class="card-header">
                  <h3 class="card-title">Forcast AQI</h3>
                  <div class="card-toolbar">
                    <!-- <button type="button" class="btn btn-sm btn-light">
                      Action
                    </button> -->
                  </div>
                </div>
                <div class="card-body card-scroll h-400px">
                  <!--begin::Accordion-->
                  <div
                    class="accordion"
                    id="kt_accordion_1"
                    v-if="forecastDaily != null"
                  >
                    <div
                      class="accordion-item mb-4"
                      v-for="(data, idx) in forecastDaily"
                      :key="idx"
                    >
                      <h2
                        class="accordion-header"
                        :id="'kt_accordion_header_' + idx"
                      >
                        <button
                          class="accordion-button fs-4 fw-bold"
                          type="button"
                          data-bs-toggle="collapse"
                          :data-bs-target="'#kt_accordion_body_' + idx"
                          aria-expanded="true"
                          aria-controls="kt_accordion_1_body_1"
                        >
                          Indicator: {{ idx }}
                        </button>
                      </h2>
                      <div
                        :id="'kt_accordion_body_' + idx"
                        class="accordion-collapse collapse show"
                        aria-labelledby="kt_accordion_header_{{ idx }}"
                        data-bs-parent="#kt_accordion_1"
                      >
                        <div class="accordion-body">
                          <table class="table table-striped gy-7 gs-7">
                            <thead>
                              <tr>
                                <td>Date</td>
                                <td>AVG Value</td>
                              </tr>
                            </thead>
                            <tbody>
                              <tr v-for="(row, idx) in data" :key="idx">
                                <td>{{ row.day }}</td>
                                <td>{{ row.avg }}</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!--end::Accordion-->
                </div>
                <div class="card-footer">
                  <div v-if="currentAqiAttr != null" class="row text-muted">
                    Source : {{ currentAqiAttr[0].name }}
                  </div>
                  <div v-if="currentAqiAttr != null" class="row text-muted">
                    API : {{ currentAqiAttr[1].name }} ({{
                      currentAqiAttr[1].url
                    }})
                  </div>
                  <div v-if="currentAqiCity != null" class="row text-muted">
                    Location : {{ currentAqiCity.name }}
                  </div>
                </div>
              </div>
            </div>
          </div>
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
import hexPolygon from "@/assets/map/hex_before_attribute";
import { array } from "yup";
import ApexCharts from "apexcharts";

const listIdStstions = [
  8637, 222854, 66145, 354662, 337479, 1708264, 1628560, 1563313, 1776543, 8320,
  1757030, 299574, 299575, 342846, 160412, 275162, 224433, 2537, 2538,
];

// 324734959ff84b4ae4efe58448de608b743cc98b token

const openAqApi = inject("openAqApi");
const currentAqi = ref(null);
const currentDateAqi = ref(null);
const currentAqiAttr = ref(null);
const currentIaqi = ref(null);
const currentAqiCity = ref(null);
const forecastDaily = ref(null);

async function getMap() {
  var map = leaflet.map("map");

  const tiles = leaflet
    .tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 18,
      attribution:
        '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    })
    .addTo(map);

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
  function style(feature) {
    return {
      fillColor: getColorGrade(feature.properties.aqi),
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
        dashArray: "3",
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
        if (listIdStstions.includes(element.id)) {
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
        }
      });
      const stationLayer = leaflet.layerGroup(list_stations);
      stationLayer.addTo(map);
      layerControl.addOverlay(stationLayer, "AQI Sensors");
      layerControl.addOverlay(multipolygon, "H3 Hexagon Grid");
    });

  map.fitBounds(multipolygon.getBounds());
}

async function makeChart() {
  function pm25_aqi(pm25) {
    const c = Math.floor(10 * pm25) / 10;
    const a =
      c < 0
        ? 0 // values below 0 are considered beyond AQI
        : c < 12.1
        ? lerp(0, 50, 0.0, 12.0, c)
        : c < 35.5
        ? lerp(51, 100, 12.1, 35.4, c)
        : c < 55.5
        ? lerp(101, 150, 35.5, 55.4, c)
        : c < 150.5
        ? lerp(151, 200, 55.5, 150.4, c)
        : c < 250.5
        ? lerp(201, 300, 150.5, 250.4, c)
        : c < 350.5
        ? lerp(301, 400, 250.5, 350.4, c)
        : c < 500.5
        ? lerp(401, 500, 350.5, 500.4, c)
        : 500; // values above 500 are considered beyond AQI
    return Math.round(a);
  }
  function lerp(a, b, x0, x1, x) {
    return a + ((b - a) * (x - x0)) / (x1 - x0);
  }

  // 'https://api.openaq.org/v2/averages?temporal=day&parameters_id=2&date_to=2023-11-01T00%3A00%3A00Z&date_from=2023-09-01T00%3A00%3A00Z&locations_id=299575&limit=100&page=1'

  var dateTrend = [];
  var aqiVal = [];
  var pm25Val = [];

  await axios
    .get(
      "https://api.openaq.org/v2/averages?temporal=day&parameters_id=2&date_to=2023-11-01T00%3A00%3A00Z&date_from=2023-08-01T00%3A00%3A00Z&locations_id=299575&limit=100&page=1",
      {
        headers: {
          accept: "application/json",
        },
      }
    )
    .then((response) => {
      console.log("trend", response.data.results);
      var trendData = response.data.results.sort(function (a, b) {
        var c = new Date(a.day);
        var d = new Date(b.day);
        return c - d;
      });

      trendData.forEach((element) => {
        dateTrend.push(element.day);
        pm25Val.push(element.average.toFixed(2));
        var aqi = pm25_aqi(element.average);
        aqiVal.push(aqi);
      });
    });

  var options = {
    chart: {
      type: "line",
      zoom: {
        type: "x",
        enabled: true,
        autoScaleYaxis: true,
      },
    },
    series: [
      {
        name: "AQI",
        data: aqiVal,
      },
      {
        name: "PM 2.5",
        data: pm25Val,
      },
    ],
    xaxis: {
      type: "datetime",
      categories: dateTrend,
    },
  };

  var chart = new ApexCharts(document.querySelector("#chart-trend"), options);

  chart.render();
}

async function getCurrentAqi() {
  await axios
    .get(
      "https://api.waqi.info/feed/Jakarta/?token=324734959ff84b4ae4efe58448de608b743cc98b"
    )
    .then((response) => {
      console.log("current aqi", response.data.data);
      var dataAqi = response.data.data;
      currentAqi.value = dataAqi.aqi;
      currentDateAqi.value = dataAqi.time.s;
      currentAqiAttr.value = dataAqi.attributions;
      currentIaqi.value = dataAqi.iaqi;
      currentAqiCity.value = dataAqi.city;
      forecastDaily.value = dataAqi.forecast.daily;
    });
}

onMounted(() => {
  getMap();
  makeChart();
  getCurrentAqi();
});
</script>
