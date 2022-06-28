function validar() {
    //cria variavel local recebendo valor do form user usando name´s dos inputs//

    var nome = formUser.nome.value;
    var email = formUser.email.value;
    var telefone = formUser.telefone.value;
    var endereco = formUser.endereco.value;
    var cpf = formUser.cpf.value;
    var cnpj = formUser.cnpj.value;
    var senha = formUser.senha.value;

    if (nome == "" || nome.length < 3) {
        alert("Informe o nome completo!");
        formUser.nome.focus();
        return false;
    }

    if (email == "" || email.length < 10) {
        alert("E-mail não atende os requisitos!");
        formUser.email.focus();
        return false;
    }

    if (telefone == "" || telefone.length < 11) {
        alert("Telefone não atende os requisitos!");
        formUser.telefone.focus();
        return false;
    }

    if (endereco == "" || endereco.length < 5) {
        alert("Endereço não atende os requisitos!");
        formUser.endereco.focus();
        return false;
    }

    if (cnpj == "") {
        if (cpf == "" || cpf.length < 14 && cnpj != "") {
            alert("CPF inválido!");
            formUser.cpf.focus();
            return false;
        }
    } else if (cnpj == "" || cnpj < 18) {
        alert("CNPJ inválido!");
        formUser.cnpj.focus();
        return false;
    } 

    if (cpf == "") {
        if (cnpj == "" || cnpj.length < 18 && cpf != "") {
            alert("CNPJ inválido!");
            formUser.cnpj.focus();
            return false;
        }
    } else if (cpf == "" || cpf < 14) {
        alert("CPF inválido!");
        formUser.cpf.focus();
        return false;
    } 


    if (senha == "" || senha.length <= 6) {
        alert("Senha deve ter no mínimo 6 digitos!");
        formUser.senha.focus();
        return false;
    }


}