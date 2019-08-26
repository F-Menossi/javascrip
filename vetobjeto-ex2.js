function funcao(){
    var vet=[]
    for (var i=0;i<3; i++){
        var habitante = {}
        habitante.salario = Number(prompt("Informe o salário do(a) habitante: "))
        habitante.idade = Number(prompt("Informe idade do(a) habitante: "))
        habitante.filhos = Number(prompt("Informe quantidade de filhos(as) do(a) habitante: "))
        habitante.sexo = prompt("Informe o sexo do(a) habitante: ")
        vet.push(habitante)
    }
    var somasalario=0
    var somafilhos=0
    var maior= vet[0].salario
    var mulhermdm =0
    for (var i=0;i<3; i++){
        somasalario = somasalario+vet[i].salario;
        somafilhos = somafilhos + vet[i].filhos;
        if (vet[i].salario>maior){
            maior = vet[i].salario;
        }
        if (vet[i].salario>1000){
            if (vet[i].sexo="f"){
                mulhermdm = mulhermdm + 1;
            }
        }
    }
    alert("A média de salário da população é R$" + somasalario/3);
    alert("A médio do número de filhos(as) é " + somafilhos/3);
    alert("O maior salário é R$" + maior);
    alert("A porcentagem de habitantes que são mulheres com salário maior que R$1000,00 é " + mulhermdm/3*100);
}