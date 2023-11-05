<template>
  <!--begin::Aside-->
  <div
    id="kt_aside"
    class="aside bg-white"
    data-kt-drawer="true"
    data-kt-drawer-name="aside"
    data-kt-drawer-activate="{default: true, lg: false}"
    data-kt-drawer-overlay="true"
    data-kt-drawer-width="{default:'200px', '300px': '250px'}"
    data-kt-drawer-direction="start"
    data-kt-drawer-toggle="#kt_aside_toggle"
  >
    <!--begin::Brand-->
    <div class="aside-logo flex-column-auto pt-9 pb-7 px-9" id="kt_aside_logo">
      <!--begin::Logo-->
      <a href="#">
        <!-- <h2 class="fw-bolder">
          PURIFYING <br />
          JAKARTA
        </h2> -->
        <img
          alt="Logo"
          src="media/logos/un-datathon.png"
          style="max-height: 80px"
        />
      </a>
      <!--end::Logo-->
    </div>
    <!--end::Brand-->

    <!--begin::Aside menu-->
    <div class="aside-menu flex-column-fluid px-3 px-lg-6">
      <KTMenu></KTMenu>
    </div>
    <!--end::Aside menu-->
  </div>
  <!--end::Aside-->
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { useI18n } from "vue-i18n";
import { DrawerComponent } from "@/assets/ts/components";
import KTMenu from "@/layout/aside/Menu.vue";
import { isDocPage, themeName } from "@/core/helpers/documentation";
import { asideTheme } from "@/core/helpers/config";

export default defineComponent({
  name: "KTAside",
  components: {
    KTMenu,
  },
  props: {
    defaultLogo: String,
    compactLogo: String,
  },
  setup() {
    const { t } = useI18n();

    onMounted(() => {
      DrawerComponent.reinitialization();
    });

    return {
      isDocPage,
      asideTheme,
      t,
      themeName,
    };
  },
});
</script>
