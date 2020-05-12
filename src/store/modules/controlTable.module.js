// import Vue from 'vue'; // have to import for Vue.set when need to add new properties and reactivity stuff

import json from "@/assets/data/mitre-saf-control-mapping.json";

const state = {
  filter: '',
  data: json,
};

const getters = {
  getFilterText: state => {
    return state.filter;
  },
  getData: state => {
    return state.data.filter(row => row['NIST SP 800-53 Control'].toLowerCase().includes(getters.getFilterText(state).toLowerCase()));
  },
  getColumns: state => {
    const data = getters.getData(state);
    if(!data.length) {
      return [];
    }

    const columnheaders = Object.keys(getters.getData(state)[0]);
    const columnWidth = 100;
    let columns = [];
    for(let column of columnheaders) {
      columns.push({ text: column, value: column, align: "center", width: columnWidth });
    }
    if(columns.length) {
      columns[0].align = 'start';
    }
    return columns;
  }
};

const mutations = {
  setFilterText(state, text) {
    state.filter = text;
  },
};

const actions = {};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
