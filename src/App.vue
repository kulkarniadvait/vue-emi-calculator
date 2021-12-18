<template>
  <v-app>
    <v-app-bar dense app color="primary" dark> </v-app-bar>

    <v-main>
      <v-row>
        <v-col cols="6"><Form /></v-col>
        <v-col cols="6"><PieChart /></v-col>
      </v-row>
      <Table />
    </v-main>
  </v-app>
</template>

<script>
import Form from "./components/Form.vue";
import PieChart from "./components/PieChart.vue";
import Table from "./components/Table.vue";

export default {
  name: "App",

  components: {
    Form,
    PieChart,
    Table,
  },

  data: () => ({
    //
  }),
};
</script>

<style>
* {
  font-family: "Raleway", sans-serif !important;
}

.v-subheader {
  font-weight: 600;
}
</style>
