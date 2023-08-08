function botaoAlteracao() {

    // Pega código do campo 
    var codigo = SpreadsheetApp.getActiveSpreadsheet().getRange('Registro!C10').getValue();

    // Inicializa Planilha
    var sheet = SpreadsheetApp.getActiveSpreadsheet();
    var baseDados = sheet.getSheetByName('Base_Dados');

    // Recebe quantidade de linhas com não nulos
    var tamanho = InitializeBD();
    var options = {
    contentsOnly: true
    };

    // Volta para página inicial
    InitializeRegistro();

    // Busca no array se o código já existe ou não
    pos = getProduto(2, tamanho, codigo);

    // Caso código não exista, cria linha no final da tabela e insere valores declarados nos campos
    if (pos > tamanho && SpreadsheetApp.getActiveSpreadsheet().getRange('Registro!C10').getValue() != SpreadsheetApp.getActiveSpreadsheet().getRange('Base_Dados!A'+pos).getValue()) {
    baseDados.insertRowAfter(tamanho);
    SpreadsheetApp.getActiveSheet().getRange('Base_Dados!A'+pos+':F'+pos).setValues(SpreadsheetApp.getActiveSheet().getRange('Registro!C10:H10').getValues());
    SpreadsheetApp.getActiveSheet().getRange('Registro!C12').setValue("Alteração feita com sucesso! \nCódigo: " + codigo);
    SpreadsheetApp.getActiveSheet().getRange('Registro!D10:H10').clear(options);
    
    // Caso código exista, modifica linha (pos) e sobrescreve valores
    } else {
    SpreadsheetApp.getActiveSheet().getRange('Base_Dados!A'+pos+':F'+pos).setValues(SpreadsheetApp.getActiveSheet().getRange('Registro!C10:H10').getValues());
    SpreadsheetApp.getActiveSheet().getRange('Registro!C12').setValue("Alteração feita com sucesso! \nCódigo: " + codigo);
    SpreadsheetApp.getActiveSheet().getRange('Registro!D10:H10').clear(options);

    }
    
    // Chama botaoBusca para mostrar valores atualizados
    botaoBusca();
}