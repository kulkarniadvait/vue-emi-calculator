import dayjs from "dayjs";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    principal: 0,
    intRate: 5,
    tenure: 0,
    totalInterest: 0,
  },
  mutations: {
    SET_PNR(state, payload) {
      state.principal = payload[0];
      state.intRate = payload[1];
      state.tenure = payload[2];
    },
  },
  actions: {
    updatePNR({ commit }, pnr) {
      commit("SET_PNR", pnr);
      // console.log(pnr);
    },
  },
  getters: {
    getEMI: (state) => {
      let monthlyROI = state.intRate / 12 / 100;
      // console.log(monthlyROI);
      let factor = (1 + monthlyROI) ** state.tenure;
      // console.log("factor is ", factor);
      // console.log("principal is ", state.principal);
      let denom = factor / (factor - 1);
      let emi = state.principal * monthlyROI * denom;

      return emi;
    },
    getTotalInterest: (state, getters) => {
      return getters.getTotalAmount - state.principal;
    },
    getTotalAmount: (state, getters) => {
      return getters.getEMI * state.tenure;
    },
    getTableRows: (state, getters) => {
      const toPay = getters.getEMI;
      let day = dayjs().add(-1, "month");
      let rows = [];
      let currentbalance = getters.getTotalAmount;
      let amtPaid = toPay;
      for (let index = 1; index <= state.tenure; index++) {
        rows.push({
          year: day.add(index, "month").format("YYYY"),
          month: day.add(index, "month").format("MMMM"),
          total: toPay.toFixed(2),
          balance: (currentbalance - toPay).toFixed(2),
          ptd: ((amtPaid / getters.getTotalAmount) * 100).toFixed(2) + "%",
        });
        currentbalance = currentbalance - toPay;
        // console.log("/n amtpaid", amtPaid);
        amtPaid = amtPaid + toPay;
      }
      return rows;
    },
  },
  modules: {},
});

// convert number of months to list of months in year from today

//create a function which will return an array of numbers(sequential values looping over 1-12 and starting value can be specified)
//where input is length of array
