<template>
  <v-container>
    <v-card class="mx-auto" max-width="65%">
      <v-data-table
        :headers="headers"
        :items="getTableRows"
        disable-pagination
        group-by="Year"
        show-group-by
      >
      </v-data-table>
    </v-card>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Table",

  computed: {
    ...mapGetters(["getTableRows"]),
  },

  data() {
    return {
      headers: [
        { text: "Year", value: "year" },
        { text: "Month", value: "month", groupable: false },
        { text: "Total Payment", value: "total", groupable: false },
        { text: "Balance", value: "balance", groupable: false },
        { text: "Loan Paid To Date", value: "ptd", groupable: false },
      ],
    };
  },
};
</script>

<style></style>
