let cep = document.getElementById("CEP")
cep.addEventListener('blur', function(){
   cep = cep.value
    if (cep.length === 8) {
       fetch(`https://viacep.com.br/ws/${cep}/json/`)
       .then(response => response.json())
       .then(data => {
        console.log(data);
        document.getElementById('Logradouro').value = data.logradouro
        document.getElementById('Bairro').value = data.bairro
        document.getElementById('Cidade').value = data.localidade
        document.getElementById('UF').value = data.uf
       })
    } else {
        alert("cep inválido")
    }
})