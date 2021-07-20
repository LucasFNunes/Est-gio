Vue.directive("mask", VueTheMask.mask);
var app = new Vue({
  el: "#id",
  data: {
    tela: 0,
    lista: [],
    nome: "",
    email: "",
    cpf: "",
    telefone: "",
    cep: "",
    logradouro: "",
    numero: "",
    bairro: "",
    cidade: "",
    estado: "",
    alert: false,
    controler: "",
  },
  created() {
    var key = localStorage.getItem("key");
    if (key != null) {
      this.lista = JSON.parse(key);
    }
  },
  methods: {
    deletar(index) {
      this.lista.splice(index, 1);
      localStorage.setItem("key", JSON.stringify(this.lista));
    },
    mudartela(tela) {
      this.alert = false;
      this.tela = tela;
      this.controler = "";
    },

    salvar() {
      this.controler = "all";
      if (
        !this.regrasnome &&
        !this.regrasemail &&
        !this.regrasestado &&
        !this.regraslogradouro &&
        !this.regrasnumero &&
        !this.regrastelefone &&
        !this.regrasbairro &&
        !this.regrascep &&
        !this.regrascpf
      ) {
        var dados = {
          nome: this.nome,
          email: this.email,
          cpf: this.cpf,
          telefone: this.telefone,
          cep: this.cep,
          logradouro: this.logradouro,
          numero: this.numero,
          bairro: this.bairro,
          cidade: this.cidade,
          estado: this.estado,
        };
        this.alert = true;
        this.lista.push(dados);
        localStorage.setItem("key", JSON.stringify(this.lista));
        (this.nome = ""),
          (this.email = ""),
          (this.cpf = ""),
          (this.telefone = ""),
          (this.cep = ""),
          (this.logradouro = ""),
          (this.numero = ""),
          (this.bairro = ""),
          (this.cidade = ""),
          (this.estado = "");
        this.controler = "";
      }
    },
  },
  computed: {
    regrasnome() {
      if (this.controler == "nome" || this.controler == "all") {
        if (this.nome == "") {
          return "Nome Inválido";
        }
        return false;
      }
      return false;
    },
    regrasemail() {
      if (this.controler == "email" || this.controler == "all") {
        var re = /\S+@\S+\.\S+/;
        if (!re.test(this.email)) return "Email Inválido";
        return false;
      }
      return false;
    },
    regrascpf() {
      if (this.controler == "cpf" || this.controler == "all") {
        var re =
          /^([0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2}|[0-9]{2}\.?[0-9]{3}\.?[0-9]{3}\/?[0-9]{4}\-?[0-9]{2})$/;
        if (!re.test(this.cpf)) return "CPF?CNPJ Inválido";
        return false;
      }
      return false;
    },
    regrastelefone() {
      if (this.controler == "telefone" || this.controler == "all") {
        var re = /(\(\d{2}\)\s)(\d{4,5}\-\d{4})/g;
        if (!re.test(this.telefone)) return "Telefone Inválido";
        return false;
      }
      return false;
    },
    regrascep() {
      if (this.controler == "cep" || this.controler == "all") {
        var re = /^[0-9]{2}.[0-9]{3}-[0-9]{3}$/;
        if (!re.test(this.cep)) return "CEP Inválido";
        return false;
      }
      return false;
    },
    regraslogradouro() {
      if (this.controler == "logradouro" || this.controler == "all") {
        if (this.logradouro == "") {
          return "Logradouro Inválido";
        }
        return false;
      }
      return false;
    },
    regrasnumero() {
      if (this.controler == "numero" || this.controler == "all") {
        if (this.numero == "" || this.numero < 0) {
          return "Número Inválido";
        }
        return false;
      }
      return false;
    },
    regrasbairro() {
      if (this.controler == "bairro" || this.controler == "all") {
        if (this.bairro == "") {
          return "Bairro Inválido";
        }
        return false;
      }
      return false;
    },
    regrascidade() {
      if (this.controler == "cidade" || this.controler == "all") {
        if (this.cidade == "") {
          return "Cidade Inválida";
        }
        return false;
      }
      return false;
    },
    regrasestado() {
      if (this.controler == "estado" || this.controler == "all") {
        if (this.estado == "") {
          return "Estado Inválido";
        }
        return false;
      }
      return false;
    },
  },
});
