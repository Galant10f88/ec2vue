<script setup>
import { computed, ref, onMounted } from "vue";
import { useMainStore } from "@/stores/main";
import {
  mdiHospitalBoxOutline,
  mdiAccountMultiple,
  mdiCartOutline,
  mdiChartTimelineVariant,
  mdiMonitorCellphone,
  mdiReload,
  mdiGithub,
  mdiChartPie,
} from "@mdi/js";
import * as chartConfig from "@/components/Charts/chart.config.js";
import LineChart from "@/components/Charts/LineChart.vue";
import SectionMain from "@/components/SectionMain.vue";
import CardBoxWidget from "@/components/CardBoxWidget.vue";
import CardBox from "@/components/CardBox.vue";
import TableSampleClients from "@/components/TableSampleClients.vue";
import NotificationBar from "@/components/NotificationBar.vue";
import BaseButton from "@/components/BaseButton.vue";
import CardBoxTransaction from "@/components/CardBoxTransaction.vue";
import CardBoxClient from "@/components/CardBoxClient.vue";
import LayoutAuthenticated from "@/layouts/LayoutAuthenticated.vue";
import SectionTitleLineWithButton from "@/components/SectionTitleLineWithButton.vue";
import SectionBannerStarOnGitHub from "@/components/SectionBannerStarOnGitHub.vue";

const chartData = ref(null);

const fillChartData = () => {
  chartData.value = chartConfig.sampleChartData();
};

onMounted(() => {
  fillChartData();
});

const mainStore = useMainStore();

const clientBarItems = computed(() => mainStore.clients.slice(0, 4));

const transactionBarItems = computed(() => mainStore.history);
</script>

<template>
  <LayoutAuthenticated>
    <SectionMain>
      <SectionTitleLineWithButton class="text-green-600 font-semibold"
        :icon="mdiHospitalBoxOutline"
        title="EC2 Solutions"
        main
      >
      </SectionTitleLineWithButton>

      <div class="grid grid-cols-1 gap-6 lg:grid-cols-2 mb-6">
        <div class="relative h-[250px] w-[500px] cursor-pointer">
          <img class="rounded-md" src="../../public/Biodose.jpg" />
          <div class="absolute bottom-2 left-4 right-0 px-4 py-2 bg-gray-800 opacity-70 hover:opacity-90 w-11/12 rounded-md backdrop-blur transition ease-in-out hover:-translate-y-1 hover:scale-105 duration-300">
            <h3 class="text-xl text-white font-bold">
                Department Management</h3>
            <p class="mt-2 text-sm text-gray-300">Explore this solution</p>
          </div>
        </div>
        <div class="relative h-[250px] w-[500px] cursor-pointer">
          <img class="rounded-md" src="../../public/Bior.jpg" />
          <div class="absolute bottom-2 left-4 right-0 px-4 py-2 bg-gray-800 opacity-70 hover:opacity-90 w-11/12 rounded-md backdrop-blur transition ease-in-out hover:-translate-y-1 hover:scale-105 duration-300">
            <h3 class="text-xl text-white font-bold">
                Radiopharmacy Management</h3>
            <p class="mt-2 text-sm text-gray-300">Explore this solution</p>
          </div>
        </div>
        <div class="relative h-[250px] w-[500px] cursor-pointer">
          <img class="rounded-md" src="../../public/Biotrax.jpg" />
          <div class="absolute bottom-2 left-4 right-0 px-4 py-2 bg-gray-800 opacity-70 hover:opacity-90 w-11/12 rounded-md backdrop-blur transition ease-in-out hover:-translate-y-1 hover:scale-105 duration-300">
            <h3 class="text-xl text-white font-bold">
                Cyclotron Quality Management</h3>
            <p class="mt-2 text-sm text-gray-300">Explore this solution</p>
          </div>
        </div>
        <div class="relative h-[250px] w-[500px] cursor-pointer">
          <img class="rounded-md" src="../../public/Numa.jpg" />
          <div class="absolute bottom-2 left-4 right-0 px-4 py-2 bg-gray-800 opacity-70 hover:opacity-90 w-11/12 rounded-md backdrop-blur transition ease-in-out hover:-translate-y-1 hover:scale-105 duration-300">
            <h3 class="text-xl text-white font-bold">
                IT interconnectivity & Interfaces</h3>
            <p class="mt-2 text-sm text-gray-300">Explore this solution</p>
          </div>
        </div>
      </div>

      <SectionBannerStarOnGitHub class="mt-6 mb-6" />


      <SectionTitleLineWithButton :icon="mdiAccountMultiple" title="Clients" />

      <NotificationBar color="info" :icon="mdiMonitorCellphone">
        <b>Responsive table.</b> Collapses on mobile
      </NotificationBar>

      <CardBox has-table>
        <TableSampleClients />
      </CardBox>
    </SectionMain>
  </LayoutAuthenticated>
</template>
