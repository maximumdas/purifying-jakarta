<template>
  <!--begin::Exolore drawer toggle-->
  <button id="kt_explore_toggle" class="
      explore-toggle
      btn btn-sm
      explore-btn-toggle
      shadow-sm
      position-fixed
      fw-bolder
      zindex-2
      top-50
      px-8
      mt-10
      end-0
      transform-90
      fs-5
      rounded-top-0
    " title="Purchase" data-bs-toggle="tooltip" data-bs-placement="left" data-bs-dismiss="click"
    data-bs-trigger="hover">
    <span id="kt_explore_toggle_label"> The Team </span>
  </button>
  <!--end::Exolore drawer toggle-->

  <!--begin::Exolore drawer-->
  <div id="kt_explore" class="explore bg-white" data-kt-drawer="true" data-kt-drawer-name="explore"
    data-kt-drawer-activate="true" data-kt-drawer-overlay="true" data-kt-drawer-width="{default:'300px', 'lg': '440px'}"
    data-kt-drawer-direction="end" data-kt-drawer-toggle="#kt_explore_toggle" data-kt-drawer-close="#kt_explore_close">
    <!--begin::Card-->
    <div class="card shadow-none w-100">
      <!--begin::Header-->
      <div class="card-header" id="kt_explore_header">
        <h5 class="card-title fw-bold text-gray-600 text-uppercase">
          The Team
        </h5>

        <div class="card-toolbar">
          <button type="button" class="btn btn-sm btn-icon explore-btn-dismiss me-n5" id="kt_explore_close">
            <span class="svg-icon svg-icon-2">
              <inline-svg src="media/icons/duotune/arrows/arr061.svg" />
            </span>
          </button>
        </div>
      </div>
      <!--end::Header-->

      <!--begin::Body-->
      <div class="card-body" id="kt_explore_body">
        <!--begin::Content-->
        <div id="kt_explore_scroll" class="scroll-y me-n5 pe-5" data-kt-scroll="true" data-kt-scroll-height="auto"
          data-kt-scroll-wrappers="#kt_explore_body" data-kt-scroll-dependencies="#kt_explore_header, #kt_explore_footer"
          data-kt-scroll-offset="5px">
          <div class="mb-5">
            <!--begin::Comparision-->
            <table class="
                table table-row-dashed table-row-gray-300
                align-middle
                fs-6
                fw-bold
                text-gray-800
                gs-0
                gy-3
              ">
              <tbody>
                <tr class="border-bottom-0">
                  <th class="fw-bolder text-dark fs-3">{{ fullName }}</th>
                  <th class="text-center fw-bolder">
                    Check Our Linkedin
                  </th>
                </tr>
                <tr>
                  <td>
                    <div class="symbol symbol-circle symbol-25px">
                      <img src="media/avatars/aldo.jpeg" alt="img" />
                      Aldo Leofiro Irfiansyah
                    </div>
                  </td>
                  <td class="text-center">
                    <a target="__blank" href="https://www.linkedin.com/in/leofiro/">
                      <i class="bi bi-linkedin"></i>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div class="symbol symbol-circle symbol-25px">
                      <img src="media/avatars/ari.jpeg" alt="img" />
                      Ari Rismansyah
                    </div>
                  </td>
                  <td class="text-center">
                    <a target="__blank" href="https://www.linkedin.com/in/arirismansyah/">
                      <i class="bi bi-linkedin"></i>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div class="symbol symbol-circle symbol-25px">
                      <img src="media/avatars/muar.jpeg" alt="img" />
                      Muarrikh Yazka G.P.
                    </div>
                  </td>
                  <td class="text-center">
                    <a target="__blank" href="https://www.linkedin.com/in/muarrikhyazka/">
                      <i class="bi bi-linkedin"></i>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div class="symbol symbol-circle symbol-25px">
                      <img src="media/avatars/nashir.jpeg" alt="img" />
                      Nashir Wahyudi
                    </div>
                  </td>
                  <td class="text-center">
                    <a target="__blank" href="https://www.linkedin.com/in/nashir-geeks-wahyudi/">
                      <i class="bi bi-linkedin"></i>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div class="symbol symbol-circle symbol-25px">
                      <img src="media/avatars/novia.jpeg" alt="img" />
                      Novia Permatasari
                    </div>
                  </td>
                  <td class="text-center">
                    <a target="__blank" href="https://www.linkedin.com/in/noviaprmtsr/">
                      <i class="bi bi-linkedin"></i>
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
            <!--end::Comparision-->
          </div>
          <a href="https://keenthemes.com/products/rider-vue-prohttps://docs.google.com/presentation/d/1AHu5NPUqEM9HwhmUnIH3XerPhGcCVYr0SxTHdvuGfVw/edit?usp=sharing"
            class="btn btn-lg explore-btn-primary w-100">
            <span class="fw-bolder ms-1">View Our Deck</span></a>
        </div>
        <!--end::Content-->
      </div>
      <!--end::Body-->
    </div>
    <!--end::Card-->
  </div>
  <!--end::Exolore drawer-->
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "kt-upgrade-to-pro",
  setup() {
    const fullName = ref<string>("Yolo - Serta Mulia 25th")
    return {
      fullName,
    };
  },
});
</script>
