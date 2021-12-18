<template>
  <v-container>
    <v-card outlined max-width="70%" class="pa-6">
      <v-card-title class="indigo--text font-weight-bold">Results</v-card-title>
      <div>
        <v-subheader>Loan EMI : {{ getEMI.toFixed(2) }}</v-subheader>
      </div>
      <div>
        <v-subheader
          >Total Interest :
          {{ getTotalInterest.toFixed(2).toLocaleString("en-IN") }}</v-subheader
        >
      </div>

      <div>
        <v-subheader
          >Total Amount :
          {{ getTotalAmount.toFixed(2).toLocaleString("en-IN") }}</v-subheader
        >
      </div>
      <hr class="my-4" />
      <div id="chart">
        <apexchart
          width="500"
          :options="chartOptions"
          :series="[getTotalAmount - getTotalInterest, getTotalInterest]"
        ></apexchart>
      </div>
    </v-card>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
import VueApexCharts from "vue-apexcharts";

export default {
  name: "PieChart",
  components: {
    apexchart: VueApexCharts,
  },
  computed: {
    ...mapGetters(["getEMI", "getTotalInterest", "getTotalAmount"]),
  },
  data() {
    return {
      series: [70, 30],
      chartOptions: {
        chart: {
          width: 200,
          type: "pie",
        },
        labels: ["Principal Loan Amount", "Total Interest"],
      },
    };
  },
};
</script>

<style></style>
