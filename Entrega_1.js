0

class Pedidos{
    constructor(ID_unico,ID_cliente,status,data_pedido) {
        this.ID_unico=ID_unico;
        this.ID_cliente=ID_cliente;
        this.status=status;
        this.data_pedido=data_pedido;
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
class Funcionário{
    constructor(ID_unico,nome_usuario,cpf,email,senha) {
        this.ID_unico=ID_unico;
        this.nome_usuario=nome_usuario;
        this.cpf=cpf;
        this.email=email;
        this.senha=senha;
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
class sistema {
    constructor() {
        this.Pedidos = [];
        this.Funcionário = [];
        this.Cliente = [];
        this.Produtos = [];
    }
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
            this.nome_usuario = requisição.question("Insira novo nome de usuario desejado\n");
        }
        if (número == 2) {
            var requisição = require("readline-sync");
            this.cpf = requisição.question("Insira novo cpf sem traços\n");
        }
        if (número == 3) {
            var requisição = require("readline-sync");
            this.email = requisição.question("Insira novo email desejado\n");
        }
        if (número == 4) {
            var requisição = require("readline-sync");
            this.senha = requisição.question("Insira nova senha desejada\n");
        }
    }
    ver_lista_pedidos() {
        console.log(this.Pedidos);
    }
    ver_lista_produtos() {
        console.log(this.Produtos);
    }
    ver_lista_clientes() {
        console.log(this.Cliente)
    }
    mudar_status_pedido() {
    var requisição = require("readline-sync");
    var 
    
    )
    }
    adicionar_produto() {
        var requisição = require("readline-sync")
        var novoproduto = new Produtos

        this.Produtos.push(novoproduto)
    }
    editar_produto() {

    }
    excluir_produto() {     
    }
    Cadastrar_f() {  
        var requisição = require("readline-sync");
        this.nome_usuario = requisição.question("Qual nome de usuário você deseja?\n");
        var requisição = require("readline-sync");
        this.cpf = requisição.question("Qual seu cpf (insira sem traços)?\n");
        var requisição = require("readline-sync");
        this.email = requisição.question("Qual seu email?\n");
        var requisição = require("readline-sync");
        this.senha = requisição.question("Qual sua senha desejada?\n");
        this.ID_unico = Math.random();
        var novofuncionário = new Funcionário(this.ID_unico,this.nome_usuario,this.cpf,this.email,this.senha);
        this.Funcionário.push(novofuncionário)

    }
    Fazer_Login_f() {
        var requisição = require("readline-sync")
        this.email = requisição.question("Qual seu email?\n");
        var requisição = require("readline-sync");
        this.senha = requisição.question("Qual sua senha?\n");
    }
    Sair_do_Programa() {
        console.log(" ")
    }
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
            this.nome_cliente = requisição.question("Insira seu novo nome");
        }
        if (número == 2) {
            var requisição = require("readline-sync")
            this.data_de_nascimento = requisição.question("Insira nova data de nascimento");
        }
        if (número == 3) {
            var requisição = require("readline-sync");
            this.cpf = requisição.question("Insira novo cpf sem traços");
        }
        if (número == 4) {
            var requisição = require("readline-sync");
            this.email = requisição.question("Insira novo email desejado");
        }
        if (número == 5) {
            var requisição = require("readline-sync");
            this.senha = requisição.question("Insira nova senha desejada");
        }
    }
    ver_lista_produtos() {

    }
    fazer_pedido() {

    }
    cancelar_pedido() {

    }
    ver_meus_pedidos() {

    }
    avaliar_pedido() {

    }
    vizualizar_avaliacoes() {

    }
    Cadastrar_c() {  
        var requisição = require("readline-sync");
        this.nome = requisição.question("Qual seu nome?");
        var requisição = require("readline-sync");
        this.data = requisição.question("Qual sua data de nascimento?\n")
        var requisição = require("readline-sync");
        this.cpf = requisição.question("Qual seu cpf (insira sem traços)?\n");
        var requisição = require("readline-sync");
        this.email = requisição.question("Qual seu email?\n");
        var requisição = require("readline-sync");
        this.senha = requisição.question("Qual sua senha desejada?\n");
        var ID = Math.random();
    }
    Fazer_Login_c() {
        var requisição = require("readline-sync");
        var EMAIL1 = requisição.question("Qual seu email?\n");
        var requisição = require("readline-sync");
        var SENHA1 = requisição.question("Qual sua senha?\n");
    }
    Sair_do_Programa() {
        console.log(" ");
    }


}
//mensagem q aparece pro usuário do 'site'
var requisição = require("readline-sync");
var number = requisição.question("Se voce e um funcionario aperte 1 \n, de voce e um cliente aperte 2\n");

if (number == 1) {
    var requisição = require("readline-sync");
    var number2 = requisição.question("Para fazer login aperte 1 \nPara se cadastrar aperte 2 \nPara sair do site aperte 3\n");
    if (number2 == 1) {
        //chamar método fazerlogin
        var requisição = require("readline-sync");
        var number3 = requisição.question("Oq vc quer fazer?\n1-Ver seus dados?\n2-Modificar seus dados\n3-ver Lista de pedidos\n4-ver Lista de produtod?\n5-ver lista de clientes?\n6-Mudar status de pedido?\n7-Adicionar produto?\n8-Editar Produto?\n9-Excluir Produto?\n");
        if (number3 == 1) {
            //chamar metodo ver dados
        }
        if (number3 == 2) {
            //chamar metodo modificar dados
        }
        if (number3 == 3) {}
        if (number3 == 4) {}
        if (number3 == 5) {}
        if (number3 == 6) {}
        if (number3 == 7) {}
        if (number3 == 8) {}
        if (number3 == 9) {}
    }
    if (number2 == 2) {
        //chamar cadastrar
        var requisição = require("readline-sync");
        var number3 = requisição.question("Oq vc quer fazer?\n1-Ver seus dados?\n2-Modificar seus dados\n3-ver Lista de pedidos\n4-ver Lista de produtod?\n5-ver lista de clientes?\n6-Mudar status de pedido?\n7-Adicionar produto?\n8-Editar Produto?\n9-Excluir Produto?\n");
        if (number3 == 1) {}
        if (number3 == 2) {}
        if (number3 == 3) {}
        if (number3 == 4) {}
        if (number3 == 5) {}
        if (number3 == 6) {}
        if (number3 == 7) {}
        if (number3 == 8) {}
        if (number3 == 9) {}
    }
    if (number == 3) {
        Sair_do_Programa();
    }
} 
if (number == 2) {
    var requisição = require("readline-sync");
    var number4 = requisição.question("Para fazer login aperte 1 \nPara se cadastrar aperte 2 \nPara sair do site aperte 3\n");
    if (number4 = 1) {
        //chamar fazer login
        //cliente_nao_logado.Fazer_login_f()
        var requisição = require("readline-sync");
        var number5 = requisição.question("O que voce deseja fazer?\n1-Ver Meus Dados\n2-Modificar meus dados\n3-Ver lista de produtos\n4=Fazer pedido\n5-Cancelar pedido\n6-Ver meus pedidos\n7-Avaliar pedido\n8-Visualizar avaliacoes\n");
        if (number3 == 1) {}
        if (number3 == 2) {}
        if (number3 == 3) {}
        if (number3 == 4) {}
        if (number3 == 5) {}
        if (number3 == 6) {}
        if (number3 == 7) {}
        if (number3 == 8) {}
    }
    if (number4 = 2) {
        //chamar cadastrar
        var requisição = require("readline-sync");
        var number5 = requisição.question("O que voce deseja fazer?\n1-Ver Meus Dados\n2-Modificar meus dados\n3-Ver lista de produtos\n4=Fazer pedido\n5-Cancelar pedido\n6-Ver meus pedidos\n7-Avaliar pedido\n8-Visualizar avaliacoes\n");
        if (number3 == 1) {}
        if (number3 == 2) {}
        if (number3 == 3) {}
        if (number3 == 4) {}
        if (number3 == 5) {}
        if (number3 == 6) {}
        if (number3 == 7) {}
        if (number3 == 8) {}
    }
}
