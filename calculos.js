function calcularSalario(){
    let salarioBase = Number(document.getElementById("salarioBase").value);
    console.log(salarioBase)
    if(salarioBase == 0 || salarioBase<=0){
     alert("Debe de ingresar un salario valido")
    }
    else{
        let salarioBruto = document.getElementById("salariobruto");
        salarioBruto.innerHTML = "C$ "+ salarioBase.toFixed(2);

        let salarioMenosInss = document.getElementById("deduccionINSS");
       
        salarioMenosInss.innerHTML = "C$ "+(salarioBase * 0.07).toFixed(2);
        
        let salarioNetoInss = document.getElementById("salarioNeto");
        let salarioMinssTemporal   = salarioBase-(salarioBase * 0.07);
        salarioNetoInss.innerHTML ="C$ "+ salarioMinssTemporal.toFixed(2);
        let ir =calculoIR(salarioMinssTemporal)
        

       let deduccionIR = document.getElementById("deduccionImpuesto");
       deduccionIR.innerHTML = "C$ "+ir.toFixed(2);
       
       let salarioTotal = document.getElementById("salarioTotal");
       let salarioMensual = salarioMinssTemporal - ir;
       salarioTotal.innerHTML= "C$ "+salarioMensual.toFixed(2);
        
        
    }
    
}

function calculoIR(salarioNetoParamtro){
    //return 500;
    let salarioAnual = salarioNetoParamtro *12;
    //console.log(salarioAnual)
    if (salarioAnual <= 100000){
        return 0;
    }
    else if(salarioAnual >= 100000.01 && salarioAnual<= 200000){
        let salariosinexceso = salarioAnual -100000;
        salariosinexceso = salariosinexceso *0.15;
        return salariosinexceso /12;
    }
    else if(salarioAnual >= 200000.01 && salarioAnual<= 350000){
        let salariosinexceso = salarioAnual -200000;
        salariosinexceso = (salariosinexceso *0.20)+15000;
        return salariosinexceso /12;
    }
    else if(salarioAnual >= 350000.01 && salarioAnual<= 500000){
        let salariosinexceso = salarioAnual -200000;
        salariosinexceso = (salariosinexceso *0.25)+45000;
        return salariosinexceso /12;
    }
    else{
        let salariosinexceso = salarioAnual -500000;
        salariosinexceso = (salariosinexceso *0.30)+82500;
        return salariosinexceso /12;
    }
}