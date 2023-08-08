function registrarVenda() {
    
    //Buscar Informações
    var ssFormulario = SpreadsheetApp.getActiveSpreadsheet().getSheetByName ('Tabela de Vendas');
    var dados = ssFormulario.getRange('I2:I6').getValues();
    var dadosFinais = [dados];

    //Pega quantidade especificada no campo, input do usuário.
    var quantidade = ssFormulario.getRange('I7').getValue();

    // Pegar aba movimentação e buscar linha alvo
    var ssBancoMovimentacao = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Tabela de Vendas');
    var ultimaLinha = ssBancoMovimentacao.getLastRow();
    var linhaAlvo = ultimaLinha+1;
    
    // Repete de conforme quantidade informada
    console.log("Quantidade informada: " + quantidade);
    for (let i = 0; i < quantidade; i++) {

        // Pega ultima linha
        var ultimaLinha = ssBancoMovimentacao.getLastRow();
        var linhaAlvo = ultimaLinha+1;

        // Escrever dados finais
        ssBancoMovimentacao.getRange(linhaAlvo,1,1,dados.length).setValues(dadosFinais);
        console.log("Registrando produto número: " + (1+i))
        console.log("Produto Cadastrado com Sucesso!");
        
    }
}