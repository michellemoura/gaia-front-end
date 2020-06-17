<template>
  <div>
     <img id="imgFundo" class="img-fluid" src="@/assets/img/agora.png" alt="background-img">
  </div>
</template>

<script>
export default {
  async created() {
    const resp = await this.$services.user.getAll();
    console.log('Usuários cadastrados', resp.docs);
  }
}
</script>

<style>
  #imgFundo{
    width: 100vw;
    height: 85vh;
  }

</style>