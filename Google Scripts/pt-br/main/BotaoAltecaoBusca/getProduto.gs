function getProduto(inicio, tamanho, codigo) {

    //Declara ponto médio de comparação
    var index = Math.floor((tamanho+inicio)/2);

    //Considerando ordenação da lista, se o código for maior que o ultimo código, retorna que o código buscado não existe
    if (codigo > SpreadsheetApp.getActiveSpreadsheet().getRange("Base_Dados!A"+tamanho).getValues()) {   

    console.log("Instancia Maior que Ultimo");
    SpreadsheetApp.getActiveSheet().getRange('Registro!C6').setValue("Código Não existente");

    return tamanho+1;

    // Retorna Ultimo código
    } else if (codigo == SpreadsheetApp.getActiveSpreadsheet().getRange("Base_Dados!A"+tamanho).getValue()) {

    console.log("Instancia Ultimo");
    SpreadsheetApp.getActiveSheet().getRange('Registro!C6:H6').setValues(SpreadsheetApp.getActiveSheet().getRange('Base_Dados!A'+tamanho+':F'+tamanho).getValues());  

    return tamanho;

    // Retorna Primeiro Código
    } else if (codigo == SpreadsheetApp.getActiveSpreadsheet().getRange("Base_Dados!A"+inicio).getValue()) {

    console.log("Instancia Primeiro");
    SpreadsheetApp.getActiveSheet().getRange('Registro!C6:H6').setValues(SpreadsheetApp.getActiveSheet().getRange('Base_Dados!A'+inicio+':F'+inicio).getValues());
    return inicio;
    }

    // Achou código em meio à busca
    if (codigo == SpreadsheetApp.getActiveSpreadsheet().getRange("Base_Dados!A"+index).getValue()) {

    console.log("Instancia Normal");
    SpreadsheetApp.getActiveSheet().getRange('Registro!C6:H6').setValues(SpreadsheetApp.getActiveSheet().getRange('Base_Dados!A'+index+':F'+index).getValues());
    return index;
    
    // Verifica se o código é maior ou menor que o codigo na posicão index, e reduz o tamanho do array que busca. (Método: QuickSearch)    
    } else if (codigo < SpreadsheetApp.getActiveSpreadsheet().getRange("Base_Dados!A"+index).getValue()) {

    getProduto(inicio, index, codigo);

    } else if (codigo > SpreadsheetApp.getActiveSpreadsheet().getRange("Base_Dados!A"+index).getValue()) {

    getProduto(index, tamanho, codigo);

    } 
}
