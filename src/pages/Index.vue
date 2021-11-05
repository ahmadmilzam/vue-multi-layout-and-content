<template>
  <component :is="component" />
</template>

<script>
export default {
  components: {
    mobile: () => import(/* webpackChunkName: "index-content-mobile" */ '@/components/mobile/pages/Index.vue'),
    desktop: () => import(/* webpackChunkName: "index-content-desktop" */ '@/components/desktop/pages/Index.vue'),
  },
  beforeCreate() {
    this.component = this.$store.state.device;
  },
}
</script>
