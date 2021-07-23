<template>
    <v-btn outlined @click="print"><slot></slot></v-btn>
</template>

<script>
export default {
  data () {
    return {
      output: null
    }
  },
  props: {
      printId: String,
  },
  methods: {
    async print () {
      Event.$emit('printPrep')
      await this.$htmlToPaper(this.printId);
    }
  }
}
</script>