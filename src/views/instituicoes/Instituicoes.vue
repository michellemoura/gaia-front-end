<template>
  <div class="container mt-3">
    <b-row>
      <div
        v-for="(institution, i) in institutions" :key="i"
        class="col-md-4"
      >
        <b-card
          title="Nome da Instituição"
          :img-src="logo"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 15rem;"
        >
          <b-card-text>
            Descrição da instituição
          </b-card-text>
        </b-card>
      </div>
    </b-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      logo:require('@/assets/logo.png'),
      institutions: []
    }
  },

  created() {
    this.obterInstituicoes();
  },

  methods: {
    async obterInstituicoes(){
      let response = await this.$services.user.getAll();
      if(response){
        this.institutions = response;
      }
    },
  }
}

</script>