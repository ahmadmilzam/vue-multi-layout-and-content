<template>
  <component :is="component" />
</template>

<script>
export default {
  components: {
    mobile: () => import(/* webpackChunkName: "about-content-mobile" */ '@/components/mobile/pages/About.vue'),
    desktop: () => import(/* webpackChunkName: "about-content-desktop" */ '@/components/desktop/pages/About.vue'),
  },
  beforeCreate() {
    this.component = this.$store.state.device;
  },
}
</script>
