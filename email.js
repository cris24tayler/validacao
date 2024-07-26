// VALIDAÇÃO DE EMAIL DIRETO NO JAVASCRIPT
function checarEMAIL(){
    if(document.forms[0].email.value == "" || //  permite a identificação de espaços
       document.forms[0].email.value.indexOf("@") == -1 || // verifica se @ está presente na resposta
       document.forms[0].email.value.indexOf(".") == -1){ // verifica se . está presente na resposta
        alert("Por favor informe um email válido"); // se não for encontrado @ ou . e se ouver espaços o texto é inválido
        return false;
       }else{
        // se todos os requisitos forem atendido o email é válido
        alert("Email informado");
        document.getElementById("email").innerHTML = document.forms[0].email.value;
       
       }
}