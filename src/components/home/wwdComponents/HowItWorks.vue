<template>
  <v-container fluid class="roboto-font">
    <v-row align="center" justify="center">
      <p class="roboto-font ma-0 tool-header primary--text" style="font-size:300%">HOW MITRE SAF WORKS</p>
    </v-row>
    <v-row class="ma-0">
      <p :style="rotate" class="mx-1 primary--text">GOAL</p>
      <v-col>
        <v-row class="ma-0 pa-0">
          <v-col v-for="n in 4" :key="n" cols="3" class="text-center pa-1">
            <v-card flat outlined>
              <v-card-title class="primary--text">{{howitworks[0]["goal"][n - 1].title}}</v-card-title>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row>
      <p :style="rotate" class="justify-center text-center primary--text">INPUTS</p>
      <v-col class="ma-0">
        <v-row class="ma-0">
          <v-col cols="6" class="text-center pa-1">
            <v-card flat outlined>
              <v-card-title
                class="justify-center primary--text subtitle-1"
              >{{howitworks[1]["inputs"][0].title}}</v-card-title>
              <v-card-subtitle class="primary--text body-2">{{howitworks[1]["inputs"][0].subtitle}}</v-card-subtitle>
            </v-card>
          </v-col>
          <v-col cols="3" class="text-center pa-1">
            <v-card flat outlined class="pa-0">
              <v-card-title
                class="justify-center primary--text subtitle-1"
              >{{howitworks[1]["inputs"][1].title}}</v-card-title>
              <v-card-subtitle class="primary--text body-2">{{howitworks[1]["inputs"][1].subtitle}}</v-card-subtitle>
            </v-card>
          </v-col>
          <v-col cols="3" class="text-center pa-1">
            <v-card flat outlined class="pa-0">
              <v-card-title
                class="justify-center primary--text subtitle-1"
              >{{howitworks[1]["inputs"][2].title}}</v-card-title>
              <v-card-subtitle class="primary--text body-2">{{howitworks[1]["inputs"][2].subtitle}}</v-card-subtitle>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row class="ma-0">
      <p :style="rotate" class="primary--text">TOOLS</p>
      <v-col class="ma-0">
        <v-row class="ma-0 pa-0">
          <v-col cols="3" class="text-center pa-1">
            <v-card flat outlined><p>Terraform</p><p>Kitchen</p><p>Anisble</p><p>Hardening</p></v-card>
          </v-col>
          <v-col cols="3" class="text-center pa-1">
            <v-card flat outlined><h4>Vulcan</h4><p>Author standards to create validation code</p><h4>InSpec_Tools</h4><p></p></v-card>
          </v-col>
          <v-col cols="3" class="text-center pa-1">
            <v-card flat outlined></v-card>
          </v-col>
          <v-col cols="3" class="text-center pa-1">
            <v-card flat outlined></v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import howitworks from "@/assets/data/howitworks.json";
export default {
  data() {
    return {
      howitworks: howitworks.rows,
      turn: 0.75,
    };
  },
  computed: {
    rotate() {
      return { transform: "rotate(" + this.turn + "turn)", height: "20px" };
    },
  },
};
</script>