function botaoBusca() {
    // Pegar código da célula especificada
    var codigo = SpreadsheetApp.getActiveSpreadsheet().getRange('C10').getValue();

    // Recebe quantidade de linhas com não nulos
    var tamanho  = InitializeBD();

    // Limpar campo com os valores inseridos
    SpreadsheetApp.getActiveSheet().getRange('Registro!D10:H10').setValue(" ");

    // Buscar produto no Banco de Dados
    // Iniciar na posição 2, tendo limite o tamanho máximo, buscar pelo codigo
    var pos = getProduto(2, tamanho, codigo);

    // Volta pra página inicial
    InitializeRegistro();
}