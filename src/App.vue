<template>
  <div id="app">
    <component :is="layout">
      <router-view/>
    </component>
  </div>
</template>

<script>
let device = 'desktop';
if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
  device = 'mobile';
}

import { mapMutations, mapState } from 'vuex';

export default {
  computed: {
    ...mapState({
      layout: state => state.device,
    }),
  },
  methods: {
    ...mapMutations([
      'setDevice', // map `this.increment()` to `this.$store.commit('increment')`
    ]),
  },
  created() {
    this.setDevice(device);
  },
  mounted() {
    console.log('device', device);
    console.log('layout', this.layout);
  },
};
</script>
