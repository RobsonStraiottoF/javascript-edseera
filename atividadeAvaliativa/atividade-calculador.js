let numero1 = document.getElementById("numero1")
        let numero2 = document.getElementById("numero2")
        let adicao = document.getElementById("adicao")
        let subtracao = document.getElementById("subtracao")
        let divisao = document.getElementById("divisao")
        let multiplicacao = document.getElementById("multiplicacao")
        
        adicao.addEventListener("click", function() {
            let num1 = parseFloat(numero1.value)
            let num2 = parseFloat(numero2.value)

            let soma = num1 + num2;

            resultado.textContent = soma
        
        })

        subtracao.addEventListener("click", function(){
            let num1 = parseFloat(numero1.value)
            let num2 = parseFloat(numero2.value)

            let menos = num1 - num2;
            resultado.textContent = menos
        })

        divisao.addEventListener("click", function(){
            let num1 = parseFloat(numero1.value)
            let num2 = parseFloat(numero1.value)

            let dividir = num1 / num2
            resultado.textContent = dividir
        })

        multiplicacao.addEventListener("click", function(){
            let num1 = parseFloat(numero1.value)
            let num2 = parseFloat(numero2.value)

            let mutiplicar = num1 * num2
            resultado.textContent = mutiplicar
        })
