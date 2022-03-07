



function media(){
    
    let n1 = document.getElementById('n1');
    let n2 = document.getElementById('n2');
    let n3 = document.getElementById('n3');
    let n4 = document.getElementById('n4');
    let mediaa = ((n1.value*1) + (n2.value*1)+ (n4.value*1) +(n3.value*1))/4
    let result = document.getElementById('result')

    if(mediaa>=6){
            result.innerHTML = `Parabéns você foi aprovado <br> Sua media é ${mediaa}`
            document.body.style.backgroundColor = "#32CD32";
        }else{
            result.innerHTML = `Parabéns você foi reprovado <br> Sua media é ${mediaa}`
            document.body.style.backgroundColor = "	#8B0000";
        }
        
    }


function seleciona(){
    let opcao = document.getElementById("select").value
    var div = document.getElementById("esconde-pai")
    var div1 = document.getElementById("esconde")
    var div2 = document.getElementById("esconde1")
    

    switch(opcao){
        case "CF": 
        div.style.display = "flex"
        div1.style.display = "flex"
        div2.style.display = "none"
        break
        case "FC": 
        div.style.display = "flex"
        div1.style.display = "none"
        div2.style.display = "flex"
        break
        default: alert("Selecione uma opção Válida!")
    }

}

function converte(){
    let C = document.getElementById("C")
    let F = document.getElementById("F")
    let opcao = document.getElementById("select").value
    var p = document.getElementById("resultado")

    switch(opcao){
        case 'CF':
        let Celconvertido = ((9*C.value)/5)+32;
        p.innerHTML = `O valor convertido é ${Celconvertido} °F`
        break

        case 'FC': 
        let Fahconvertido = ((5*F.value)-160)/9;
        p.innerHTML = `O valor convertido é ${Fahconvertido} °C`
        break
        default: alert("Selecione uma opção válida")
    }
        

    

}