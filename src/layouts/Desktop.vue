<template>
  <div>
    <Header/>
    <br>
    <slot/>
    <br>
    <Footer/>
  </div>
</template>

<script>
import Header from '@/components/desktop/layouts/Header';
import Footer from '@/components/desktop/layouts/Footer';
export default {
  components: {
    Header,
    Footer,
  },
}
</script>
