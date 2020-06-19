<template>
  <div class="container">
    <b-card class="mt-3" title="Cadastro">
      <b-form @submit="save" @reset="cancel">
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
            label-for="input-3"
            class="col-md-6"
          >
            <b-form-input
              id="input-3"
              v-model="form.endereco.cidade"
              type="text"
              required
              placeholder="Digite sua cidade"
            ></b-form-input>
          </b-form-group>

          <b-form-group
            id="input-estado"
            label="Estado"
            label-for="input-4"
            class="col-md-6"
          >
            <b-form-input
              id="input-4"
              v-model="form.endereco.estado"
              type="text"
              required
              placeholder="Digite seu Estado"
            ></b-form-input>
          </b-form-group>

          <b-form-group
            id="input-cep"
            label="Cep"
            label-for="input-5"
            class="col-md-6"
          >
            <b-form-input
              id="input-5"
              v-model="form.endereco.cep"
              type="text"
              required
              placeholder="Digite seu CEP"
            ></b-form-input>
          </b-form-group>

          <b-form-group
            id="input-logradouro"
            label="Logradouro"
            label-for="input-6"
            class="col-md-6"
          >
            <b-form-input
              id="input-6"
              v-model="form.endereco.logradouro"
              type="text"
              required
              placeholder="Digite seu logradouro"
            ></b-form-input>
          </b-form-group>

          <b-form-group
            id="input-email"
            label="Email"
            label-for="input-7"
            class="col-md-6"
          >
            <b-form-input
              id="input-7"
              v-model="form.conta.email"
              type="text"
              required
              placeholder="Digite seu email"
            ></b-form-input>
          </b-form-group>

          <b-form-group
            id="input-user"
            label="Usuário"
            label-for="input-8"
            class="col-md-6"
          >
            <b-form-input
              id="input-8"
              v-model="form.conta.user"
              type="text"
              required
              placeholder="Digite seu usuário"
            ></b-form-input>
          </b-form-group>

          <b-form-group
            id="input-senha"
            label="Senha"
            label-for="input-9"
            class="col-md-6"
          >
            <b-form-input
              id="input-9"
              v-model="form.conta.senha"
              type="password"
              required
              placeholder="Digite sua senha"
            ></b-form-input>
          </b-form-group>
        </b-row>
        
        <b-row>
          <b-form-group
              id="input-descricao"
              label="Descrição"
              label-for="input-10"
              class="col-md-12"
            >
            <b-form-textarea
              id="input-10"
              v-model="form.instituicao.descricao"
              type="textarea"
              required
              rows="3"
              max-rows="6"
              placeholder="Digite sua descrição"
            ></b-form-textarea>
          </b-form-group>
        </b-row>

        <div class="d-flex justify-content-end">
          <b-button class="mx-1" type="submit" variant="primary"
            >Salvar</b-button
          >
          <b-button type="reset" variant="secondary">Cancelar</b-button>
        </div>
      </b-form>
    </b-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      file: null,
      form: {
        nome: "",
        sobrenome: "",
        endereco: {
          cidade: "",
          estado: "",
          cep: "",
          logradouro: "",
        },
        conta: {
          user: "",
          email: " ",
          senha: " ",
        },
        instituicao: {
          image: "",
          descricao: "",
        }
      },
    };
  },
  created() {
    if(this.$route.params.id) {
      this.findOne(this.$route.params.id);
    }
  },

  methods: {
    async findOne(id) {
      const user = await this.$services.user.getById(id);
      if(user) {
        this.form = user;
      }
    },

    async save() {
      const save = Object.assign({}, this.form);
      try {
        console.log(save);
        const resp = await this.$services.user.create(save);
        if (resp) {
          this.form = resp;
        }
      } catch (error) {
        console.error("Deu erro", error);
      }
    },
    cancel() {
      console.log("cancel");
    },
  },
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
