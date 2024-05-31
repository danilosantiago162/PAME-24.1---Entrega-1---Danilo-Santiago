class Funcionário{
    constructor(ID_unico,nome_usuario,cpf,email,senha) {
        this.ID_unico=ID_unico;
        this.nome_usuario=nome_usuario;
        this.cpf=cpf;
        this.email=email;
        this.senha=senha;
    }
}
class Funcionário_não_logado extends Funcionário {
    Fazer_Login_f() {
        var requisição = require("readline-sync")
        this.email = requisição.question("Qual seu email?\n");
        var requisição = require("readline-sync");
        this.senha = requisição.question("Qual sua senha?\n");
    }
}
var danilo = new Funcionário_não_logado("9847","Danilin","39749468880","email","senha");
danilo.Fazer_Login_f

