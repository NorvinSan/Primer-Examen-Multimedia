function calcularSalario(){
    let salarioBase = Number(document.getElementById("salarioBase").value);
    console.log(salarioBase)
    if(salarioBase == 0 || salarioBase<=0){
     alert("Debe de ingresar un salario valido")
    }
    
}