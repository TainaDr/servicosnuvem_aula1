
function chamarServicoViaCEP() {

    cep_digitado = document.getElementById("numero_cep").value;

    if (cep_digitado == "") {
        alert("informe o CEP!!!");
    }
    //alert("Você clicou no botão enviar e o método foi invocado");
    //alert("o número do CEP digitado foi: " + cep_digitado.value);

    //cep_digitado = "01001000";

    const urlViaCep = "https://viacep.com.br/ws/" +  cep_digitado  + "/json/";



    fetch(urlViaCep).then((response) => {
        if (response.ok) {
            alert("Resposta ok");

            return response.json();
        }
        if (!response.ok) {
            alert("Resposta não OK");
        }
    })

        .then((data)=> {
           // alert(JSON.stringfy(data));
            console.log(`Informações do CEP: ${cep}`);
            console.log(`Logradouro: ${data.logradouro}`);
            console.log(`Bairro: ${data.bairro}`);
            console.log(`Cidade: ${data.localidade}`);
            console.log(`Estado: ${data.uf}`);
            

        })

        .catch(error => {
            alert("Erro ao requisitar o serviço na nuvem!");
            console.error("Erro ao requisitar o serviço na nuvem!");
        });
}