<template>
  <!--begin::Menu 1-->
  <div
    class="menu menu-sub menu-sub-dropdown w-250px w-md-300px"
    data-kt-menu="true"
  >
    <!--begin::Header-->
    <div class="px-7 py-5">
      <div class="fs-5 text-dark fw-bolder">Filter Layer</div>
    </div>
    <!--end::Header-->

    <!--begin::Menu separator-->
    <div class="separator border-gray-200"></div>
    <!--end::Menu separator-->

    <!--begin::Form-->
    <div class="px-7 py-5">
      <!--begin::Input group-->
      <div class="mb-10">
        <!--begin::Label-->
        <label class="form-label fw-bold">Independent Variable:</label>
        <!--end::Label-->

        <!--begin::Input-->
        <div>
          <el-select
            class="form-select-solid d-block"
            placeholder="Select option"
            v-model="data.status"
          >
            <el-option label="Average built-up area" value="built_up_mean"
              >Average built-up area</el-option
            >
            <el-option label="Average population" value="pop_mean"
              >Average population</el-option
            >
            <el-option label="Land survace temperature" value="LST_mean"
              >Land survace temperature</el-option
            >
            <el-option
              label="Normalize difference built-up index"
              value="NDBI_mean"
              >Normalize difference built-up index</el-option
            >
            <el-option
              label="Normalize difference vegetation index"
              value="NDVI_mean"
              >Normalize difference vegetation index</el-option
            >
            <el-option label="Is built-up majority" value="land_cover_Built_up"
              >Is built-up majority</el-option
            >
            <el-option label="Is cropland majority" value="land_cover_Crop_land"
              >Is cropland majority</el-option
            >
            <el-option
              label="Is
            grassland majority"
              value="land_cover_Grassland"
              >Is grassland majority</el-option
            >
            <el-option
              label="Is swamp majority"
              value="land_cover_Herbaceous_wetland"
              >Is swamp majority</el-option
            >
            <el-option
              label="Is water body majority"
              value="land_cover_Permanent_Water_Bodies"
              >Is water body majority</el-option
            >
            <el-option
              label="Is
            trees majority"
              value="land_cover_Tree_Cover"
              >Is trees majority</el-option
            >
          </el-select>
        </div>
        <!--end::Input-->
      </div>
      <!--end::Input group-->

      <!--begin::Actions-->
      <div class="d-flex justify-content-end">
        <button
          type="reset"
          class="btn btn-sm btn-white btn-active-light-primary me-2"
          data-kt-menu-dismiss="true"
        >
          Reset
        </button>

        <button
          type="submit"
          class="btn btn-sm btn-primary"
          data-kt-menu-dismiss="true"
        >
          Apply
        </button>
      </div>
      <!--end::Actions-->
    </div>
    <!--end::Form-->
  </div>
  <!--end::Menu 1-->
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

interface Filter {
  status: string;
  author: boolean;
  customer: boolean;
  notifications: boolean;
}

export default defineComponent({
  name: "dropdown-1",
  components: {},
  setup() {
    const data = ref<Filter>({
      status: "",
      author: true,
      customer: true,
      notifications: true,
    });

    return {
      data,
    };
  },
});
</script>
