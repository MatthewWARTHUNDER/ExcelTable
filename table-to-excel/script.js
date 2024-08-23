function adicionaritem(){
    var nome  = document.getElementById("nome").value 
    var valor  = document.getElementById("valor").value
    var quantidade  = document.getElementById("quantidade").value

    if(!nome || !valor || !quantidade){
        alert("Preenche todos os campos")
        return
    }

    // criar uma linha na tabela
    var tabela = document.getElementById("tabela").getElementsByTagName("tbody")[0]
    var novalinha = tabela.insertRow(tabela.rows.length)
    var celulanome = novalinha.insertCell(0) 
    var celulavalor = novalinha.insertCell(1)
    var celulaquantidade = novalinha.insertCell(2)
   
    // Preencer as célular com os valores

    celulanome.innerHTML = nome
    celulavalor.innerHTML = valor
    celulaquantidade.innerHTML = quantidade

    // limpar os campos
    document.getElementById("nome").value = ""
    document.getElementById("valor").value = ""
    document.getElementById("quantidade").value = ""

    }

    function exportarParaExcel(){
        var tabela = document.getElementById("tabela")
        var nomeArquivo = "tabela_produtos.xlsx"
        var wb = XLSX.utils.table_to_book(tabela, {sheet: "Tabela  de produtos"})
        XLSX.writeFile(wb, nomeArquivo)
    }