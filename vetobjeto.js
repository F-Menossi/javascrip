function funcao(){
    var vet = []
    for (var i=0;i<5; i++){
        var objeto = {}
        objeto.codigo = Number(prompt("Informe código do produto: "))
        objeto.nome = pompt("Informe nome do produto: ")
        objeto.qtde = Number(prompt("Informe quantidade do produto: "))
        objeto.preco = Number(prompt("Informe preço do produto: "))
        vet.push(objeto)
        alert("Produto criado com sucesso " + objeto.qtde)
    }
    var estoque = 0
    for(var i=0;i<5;i++)
}