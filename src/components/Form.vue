<template>
  <v-container>
    <v-card outlined class="mx-auto pa-6" max-width="70%">
      <div>
        <v-card-title class="indigo--text font-weight-bold"
          >EMI Calculator</v-card-title
        >
      </div>
      <div>
        <v-row>
          <v-col cols="2">
            <v-subheader>Loan Amount</v-subheader>
          </v-col>
          <v-col cols="8">
            <v-text-field
              label="Amount"
              @change="changeAmount"
              v-model="sliderAmount"
            >
              <template v-slot:append>
                <v-icon right> mdi-currency-inr </v-icon>
              </template>
            </v-text-field>
          </v-col>
        </v-row>

        <v-row>
          <v-col>
            <v-slider
              v-model="sliderAmount"
              linear
              step="2500000"
              max="20000000"
              ticks="always"
              tick-size="5"
              :tick-labels="ticksLabelsAmount"
              @change="changeAmount"
            ></v-slider></v-col
        ></v-row>
      </div>
      <div>
        <v-row>
          <v-col cols="2">
            <v-subheader>Interest Rate</v-subheader>
          </v-col>
          <v-col cols="8">
            <v-text-field
              label="Rate"
              v-model="sliderRate"
              prefix=""
              @change="changeAmount"
            >
              <template v-slot:append>
                <v-icon right> mdi-percent </v-icon>
              </template>
            </v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-slider
              v-model="sliderRate"
              linear
              min="5"
              max="20"
              step="2.5"
              tick-size="5"
              :tick-labels="ticksLabelsRate"
              @change="changeAmount"
            ></v-slider
          ></v-col>
        </v-row>
      </div>
      <div>
        <v-row>
          <v-col cols="2">
            <v-subheader>Loan Tenure</v-subheader>
          </v-col>
          <v-col cols="6">
            <v-text-field
              label="Rate"
              v-model="sliderTenure"
              prefix=""
              @change="changeAmount"
            >
            </v-text-field>
          </v-col>
          <v-col cols="2" class="d-flex">
            <v-btn
              class="ma-2"
              @click="toggleTenure"
              :outlined="boolMonth"
              :dark="!boolMonth"
              color="indigo"
            >
              Yr
            </v-btn>
            <v-btn
              class="ma-2"
              @click="toggleTenure"
              :outlined="!boolMonth"
              :dark="boolMonth"
              color="indigo"
            >
              Mo
            </v-btn>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-slider
              v-model="sliderTenure"
              linear
              min="0"
              max="30"
              step="5"
              tick-size="5"
              :tick-labels="ticksLabelsTenure"
              @change="changeAmount"
            ></v-slider
          ></v-col>
        </v-row>
      </div>
      <!-- <div>
        <v-row>
          <v-col cols="2">
            <v-subheader>Loan Tenure</v-subheader>
          </v-col>
          <v-col cols="8">
            <v-text-field label="Rate" v-model="sliderNoTickTenure" prefix="">
              <template v-slot:append>
                <v-icon right> mdi-percent </v-icon>
              </template>
            </v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-slider
              v-model="sliderNoTickTenure"
              linear
              min="0"
              max="30"
              :tick-labels="ticksLabelsTenure"
            ></v-slider
          ></v-col>
        </v-row>
      </div> -->
    </v-card>
  </v-container>
</template>

<script>
import { mapActions } from "vuex";
// import

export default {
  name: "Form",
  data() {
    return {
      sliderAmount: 0,
      sliderRate: 5,
      sliderTenure: 0,
      sliderNoTickTenure: 0,
      boolMonth: true,
      ticksLabelsAmount: [
        "0",
        "25L",
        "50L",
        "75L",
        "100L",
        "125L",
        "150L",
        "175L",
        "200L",
      ],
      ticksLabelsRate: ["5", "7.5", "10", "12.5", "15", "17.5", "20"],
      ticksLabelsTenure: ["0", "5", "10", "15", "20", "25", "30"],
    };
  },
  methods: {
    ...mapActions(["updatePNR"]),
    changeAmount() {
      if (this.boolMonth) {
        const payload = [this.sliderAmount, this.sliderRate, this.sliderTenure];
        this.updatePNR(payload);
      } else {
        const payload = [
          this.sliderAmount,
          this.sliderRate,
          this.sliderTenure * 12,
        ];
        this.updatePNR(payload);
      }
    },
    toggleTenure() {
      this.boolMonth = !this.boolMonth;
      this.changeAmount();
    },
  },
};
</script>

<style>
.buttonYear {
  border: 0.5px solid #000;
  padding: 5px;
}
</style>
