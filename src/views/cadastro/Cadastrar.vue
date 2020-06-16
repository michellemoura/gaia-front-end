<template>
  <div class="container mt-2" >
    <b-form @submit="onSubmit" @reset="onReset">
      <b-row>
        <b-form-group
          id="input-nome"
          label="Nome"
          label-for="input-1"
          class="col-md-6"
        >
          <b-form-input
            id="input-1"
            v-model="form.nome"
            type="text"
            required
            placeholder="Digite seu nome"
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="input-sobrenome"
          label="Sobreome"
          label-for="input-2"
          class="col-md-6"
        >
          <b-form-input
            id="input-2"
            v-model="form.sobrenome"
            type="text"
            required
            placeholder="Digite seu sobrenome"
          ></b-form-input>
        </b-form-group>
<b-form-group
          id="input-cidade"
          label="Cidade"
          label-for="input-2"
          class="col-md-6"
        >
          <b-form-input
            id="input-2"
            v-model="form.cidade"
            type="text"
            required
            placeholder="Digite sua cidade"
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="input-estado"
          label="Estado"
          label-for="input-2"
          class="col-md-6"
        >
          <b-form-input
            id="input-2"
            v-model="form.estado"
            type="text"
            required
            placeholder="Digite seu Estado"
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="input-cep"
          label="Cep"
          label-for="input-2"
          class="col-md-6"
        >
          <b-form-input
            id="input-2"
            v-model="form.cep"
            type="text"
            required
            placeholder="Digite seu CEP"
          ></b-form-input>
        </b-form-group>

         <b-form-group
          id="input-logradouro"
          label="Logradouro"
          label-for="input-2"
          class="col-md-6"
        >
          <b-form-input
            id="input-2"
            v-model="form.logradouro"
            type="text"
            required
            placeholder="Digite seu logradouro"
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="input-email"
          label="Email"
          label-for="input-2"
          class="col-md-6"
        >
          <b-form-input
            id="input-2"
            v-model="form.email"
            type="text"
            required
            placeholder="Digite seu email"
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="input-user"
          label="Usuário"
          label-for="input-2"
          class="col-md-6"
        >
          <b-form-input
            id="input-2"
            v-model="form.user"
            type="text"
            required
            placeholder="Digite seu usuário"
          ></b-form-input>
        </b-form-group>



        <b-form-group
          id="input-senha"
          label="Senha"
          label-for="input-2"
          class="col-md-6"
        >
          <b-form-input
            id="input-2"
            v-model="form.senha"
            type="text"
            required
            placeholder="Digite sua senha"
          ></b-form-input>
        </b-form-group>

      </b-row>
    </b-form>
  </div>
</template>

<script>

export default {
  data() {
    return {
      form: {
        nome: "",
        sobrenome: "",
        cidade: "",
        estado: "",
        cep: "",
        logradouro: "",
        user: "",
        email: " ",
        senha: " ",
      },
    };
  },
  methods: {
    SingUp() {
      // firebase.auth().createUserWithEmailAndPassword(this.email,this.senha).then(
      //   (user) => {
      //     this.$router.replace('/')
      //   },
      //   (err) => {
      //     alert('Aconteceu algo inesperado.' + err.message)
      //   }
      // );
    },
    // async obterCadastro() {
    //   this.register = await this.$services.register.getAll();
    //   console.log(this.register);
    // },
    // async postRegistro() {
    //   console.log(this.instituicao);
    //   let response = await this.$services.register.post(this.instituicao);
    //   console.log(response);
    // },
    // async putRegistro() {
    //   let refresh = {
    //     nome: "atualiza usuario",
    //     idade: 20,
    //     email: "atualiza@gmail.com",
    //   };
    //   let response = await this.$services.register.put(4, refresh);
    // },
    // async delRegistro() {
    //   let response = await this.$services.register.delete(4);
    // },
  },
  created() {},
  mounted() {
    /*this.obterCadastro();*/
    //this.postRegistro();
    //this.obterCadastro();
    //this.putRegistro();
    //this.obterCadastro();
    //this.delRegistro();
  },
  updated() {},
};
</script>

<style>
.cadastro {
  background-color: darkgreen;
}
#titulo {
  color: cornsilk;
  display: inline-flex;
}
</style>
