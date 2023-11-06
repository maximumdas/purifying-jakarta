<template>
  <!--begin::Row-->
  <div class="row g-xl-8">
    <!--begin:::Col-->
    <div class="col-12">
      <!-- <Map widget-classes="mb-5 mb-xl-8"></Map> -->
      <MapDashboard></MapDashboard>
    </div>
    <!--end:::Col-->

    <!--begin:::Col-->

    <!--end:::Col-->

    <!--begin:::Col-->

    <!--end:::Col-->
  </div>
  <!--end::Row-->
</template>

<script setup lang="ts">
import { ref, inject, computed, onMounted, defineComponent } from "vue";
import { setCurrentPageBreadcrumbs } from "@/core/helpers/breadcrumb";
import KTChartWidget1 from "@/components/widgets/charts/Widget1.vue";
import KTChartWidget2 from "@/components/widgets/charts/Widget2.vue";
import KTEngageWidget1 from "@/components/widgets/engage/Widget1.vue";
import KTListWidget1 from "@/components/widgets/lists/Widget1.vue";
import KTListWidget2 from "@/components/widgets/lists/Widget2.vue";

// import KTListWidget3 from "@/components/widgets/lists/Widget3.vue";
import Map from "@/components/widgets/map/Map.vue";
import MapDashboard from "@/components/widgets/map/MapDashboard.vue";

import KTListWidget4 from "@/components/widgets/lists/Widget4.vue";
import KTSliderWidget1 from "@/components/widgets/sliders/Widget1.vue";
import KTTablesWidget1 from "@/components/widgets/tables/Widget1.vue";

onMounted(() => {
  setCurrentPageBreadcrumbs("Dashboard", ["Dashboards"]);
});
</script>
