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
import Header from '@/components/mobile/layouts/Header';
import Footer from '@/components/mobile/layouts/Footer';

export default {
  components: {
    Header,
    Footer,
  },
}
</script>
