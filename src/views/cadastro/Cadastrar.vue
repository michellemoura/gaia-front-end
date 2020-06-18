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
              type="password"
              required
              placeholder="Digite sua senha"
            ></b-form-input>
          </b-form-group>
          <b-form-group
            id="input-file"
            label="Imagem"
            class="col-md-6"
          >
            <b-form-file v-model="file" ref="file-input" class="mb-2"></b-form-file>
          </b-form-group>
        </b-row>
        
        <b-row>
          <b-form-group
              id="input-descricao"
              label="Descrição"
              label-for="input-3"
              class="col-md-12"
            >
            <b-form-textarea
              id="input-3"
              v-model="form.descricao"
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
        cidade: "",
        estado: "",
        cep: "",
        logradouro: "",
        user: "",
        email: " ",
        senha: " ",
        imagem: null,
        descricao: "",
      },
    };
  },

  watch: {
    async file(file) {
      console.log(file)
      const result = await this.toBase64(file);
      console.log('tste file', result)
    }
  },

  created() {
    if(this.$route.params.id) {
      this.findOne(this.$route.params.id);
    }
  },

  methods: {
    toBase64(file) {
      const reader = new FileReader();
      return reader.readAsDataURL(file);
    },
    async findOne(id) {
      const user = await this.$services.user.getById(id);
      console.log('user', user);
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
        console.err("Deu erro", error);
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
