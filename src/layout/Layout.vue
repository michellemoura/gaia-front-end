<template>
  <div>
    <Navbar />
    <main class="app-content">
      <router-view></router-view>
    </main>
    <Footer />
  </div>
</template>

<script>
import Navbar from './Navbar';
import Footer from './Footer';

export default {
  components: {
    Navbar,
    Footer
  }
}
</script>

<style scoped>
  .layout {
    width: 100%;
    height: 100%;
  }
</style>