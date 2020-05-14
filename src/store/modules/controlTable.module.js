// import Vue from 'vue'; // have to import for Vue.set when need to add new properties and reactivity stuff

import json from "@/assets/data/mitre-saf-control-mapping.json";

const state = {
  controlFilters: [],
  profileFilters: [],
  data: json,
};

const getters = {
  getControls: state => {
    return state.data.map(row => row['NIST SP 800-53 Control']);
  },
  getProfiles: state => {
    return Object.keys(state.data[0]).filter(key => !["NIST SP 800-53 Control", "ALL"].includes(key));
  },
  getControlFilters: state => {
    return state.controlFilters;
  },
  getProfileFilters: state => {
    return state.profileFilters;
  },
  getData: state => {
    const filters = getters.getControlFilters(state);
    if(filters.length){
      return state.data.filter(row => filters.some(filter => row['NIST SP 800-53 Control'].toLowerCase().includes(filter.toLowerCase())));
    } else {
      return state.data;
    }
  },
  getColumns: state => {
    const filters = getters.getProfileFilters(state);
    let columnheaders = Object.keys(state.data[0]);
    if(filters.length){
      columnheaders = columnheaders.filter(col => ['NIST SP 800-53 Control', 'ALL'].includes(col) || filters.some(filter => col.toLowerCase().includes(filter.toLowerCase())));
    }

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
  setControlFilters(state, filters) {
    state.controlFilters = filters;
  },
  setProfileFilters(state, filters) {
    state.profileFilters = filters;
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
