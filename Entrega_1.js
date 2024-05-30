class Pedidos{
    constructor(ID_unico,ID_cliente,status,data_pedido) {
        this.ID_unico=ID_unico;
        this.ID_cliente=ID_cliente;
        this.status=status;
        this.data_pedido=data_pedido;
    }
}
class Funcionário{
    constructor(ID_unico,nome_usuario,cpf,email,senha) {
        this.ID_unico=ID_unico;
        this.nome_usuario=nome_usuario;
        this.cpf=cpf;
        this.email=email;
        this.senha=senha;
    }
}
class Funcionário_logado extends Funcionário {
    ver_meus_dados_f() {
        console.log("Seu ID único é:",this.ID_unico);
        console.log("Seu nome de usuário é:",this.nome_usuario);
        console.log("Seu CPF é:", this.cpf);
        console.log("Seu email é:", this.email);
        console.log("Sua senha é", this.senha);
    }
    modificar_meus_dados_f() {
        var requisicao = require("readline-sync");
        var número = requisicao.question("Se desejas alterar, \n seu nome de usuario digite 1 \n seu cpf digite 2 \n seu email digite 3 \n sua senha digite 4");
        if (número == 1) {
            var requisição = require("readline-sync");
            var novonome = requisição.question("Insira novo nome de usuario desejado\n");
            Funcionário_logado.nome_usuario = novonome
            console.log("Mudado com sucesso para: ", novocpf);
        }
        if (número == 2) {
            var requisição = require("readline-sync");
            var novocpf = requisição.question("Insira novo cpf sem traços\n");
            Funcionário_logado.cpf = novocpf
            console.log("Mudado com sucesso para: ", novocpf);
        }
        if (número == 3) {
            var requisição = require("readline-sync");
            var novoemail = requisição.question("Insira novo email desejado\n");
            Funcionário_logado.email = novoemail
            console.log("Mudado com sucesso para: ", novocpf);
        }
        if (número == 4) {
            var requisição = require("readline-sync");
            var novasenha = requisição.question("Insira nova senha desejada\n");
            Funcionário_logado.senha = novasenha
            console.log("Mudado com sucesso para: ", novocpf);
        }
    }
}
class Funcionário_não_logado extends Funcionário {
    Cadastrarf() {  
        var requisição = require("readline-sync");
         var nome = requisição.question("Qual nome de usuário você deseja?\n");
        var requisição = require("readline-sync");
        var CPF = requisição.question("Qual seu cpf (insira sem traços)?\n");
        var requisição = require("readline-sync");
        var EMAIL = requisição.question("Qual seu email?\n");
        var requisição = require("readline-sync");
        var SENHA = requisição.question("Qual sua senha desejada?\n");
        function getRandom() {
            return Math.random();
        }
        Funcionário_não_logado.ID_unico = getRandom();
        Funcionário_não_logado.nome_usuario = nome;
        Funcionário_não_logado.cpf = CPF;
        Funcionário_não_logado.email = EMAIL;
        Funcionário_não_logado.senha = SENHA;
    }
    Fazer_Login_f() {
        var requisição = require("readline-sync")
        var EMAIL = requisição.question("Qual seu email?\n");
        var requisição = require("readline-sync");
        var SENHA = requisição.question("Qual sua senha?\n");
    }
}
class Cliente{
    constructor(ID_unico,nome_cliente,data_de_nascimento,cpf,email,senha){
        this.ID_unico=ID_unico;
        this.nome_cliente=nome_cliente;
        this.data_de_nascimento=data_de_nascimento;
        this.cpf=cpf;
        this.email=email;
        this.senha=senha
    }
}
class Cliente_logado extends Cliente {
    ver_meus_dados_c() {
        console.log(ID_unico);
        console.log(nome_cliente);
        console.log(data_de_nascimento);
        console.log(cpf);
        console.log(email);
        console.log(senha)
    }
    modificar_meus_dados_c() {
        var requisição = require("readline-sync");
        var número = requisição.question("Se desejas alterar, \n seu nome digite 1, \n sua data de nascimento digite 2 \n seu cpf digite 3 \n seu email digite 4 \n sua senha digite 5");
        if (número == 1) {
            var requisição = require("readline-sync");
            var novonomec = requisição.question("Insira seu novo nome");
            Cliente_logado.nome_cliente = novonomec
        }
        if (número == 2) {
            var requisição = require("readline-sync")
            var novadata = requisição.question("Insira nova data de nascimento");
            Cliente_logado.data_de_nascimento = novadata
        }
        if (número == 3) {
            var requisição = require("readline-sync");
            var novocpf = requisição.question("Insira novo cpf sem traços");
            Cliente_logado.cpf = novocpf
        }
        if (número == 4) {
            var requisição = require("readline-sync");
            var novoemail = requisição.question("Insira novo email desejado");
            Cliente_logado.email = novoemail
        }
        if (número == 5) {
            var requisição = require("readline-sync");
            var novasenha = requisição.question("Insira nova senha desejada");
            Cliente_logado.senha = novasenha
        }
    }
}
class Cliente_não_logado extends Cliente {
    Cadastrarc() {  
        var requisição = require("readline-sync");
        var nome = requisição.question("Qual seu nome?");
        var requisição = require("readline-sync");
        var data = requisição.question("Qual sua data de nascimento?\n")
        var requisição = require("readline-sync");
        var CPF = requisição.question("Qual seu cpf (insira sem traços)?\n");
        var requisição = require("readline-sync");
        var EMAIL = requisição.question("Qual seu email?\n");
        var requisição = require("readline-sync");
        var SENHA = requisição.question("Qual sua senha desejada?\n");
        function getRandom() {
            return Math.random();
        }
        var MeusDados = new Cliente_não_logado(this.ID_unico,this.nome_cliente,this.cpf,this.email,this.senha);
        MeusDados.ID_unico = getRandom();
        MeusDados.nome_cliente = nome;
        MeusDados.data_de_nascimento = data
        MeusDados.cpf = CPF;
        MeusDados.email = EMAIL;
        MeusDados.senha = SENHA;
    }
    Fazer_Login() {
        var requisição = require("readline-sync")
        var EMAIL1 = requisição.question("Qual seu email?\n");
        var requisição = require("readline-sync");
        var SENHA1 = requisição.question("Qual sua senha?\n");
    }
}
class Produtos{
    constructor(validade,preco,estoque,nome,descricao){
        this.validade=validade;
        this.preco=preco;
        this.estoque=estoque;
        this.nome=nome;
        this.descricao=descricao
    }
}
console.log("teste denovo");
var requisição = require("readline-sync");
var number = requisição.question("Se você é um funcionário aperte 1, de vc é um cliente aperte 2");

if (number == 1) {
    var requisição = require("readline-sync");
    var number2 = requisição.question("Para fazer login aperte 1 \nPara se cadastrar aperte 2 \nPara sair do site aperte 3");
    if (number2 == 1) {
        Fazer_Login_f();
    }
    if (number2 == 2) {
        Cadastrar_f();
    }
    if (number == 3) {
        Sair_do_Programa();
    }
}