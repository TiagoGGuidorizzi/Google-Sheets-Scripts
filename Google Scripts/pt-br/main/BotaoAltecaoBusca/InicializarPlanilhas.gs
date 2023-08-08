function InitializeRegistro() {

    // Inicializa Planilha 
    var sheet = SpreadsheetApp.getActiveSpreadsheet();
    var registro = sheet.getSheetByName('Registro');

    //setActiveSheet muda a página, não queremos isso
    //SpreadsheetApp.setActiveSheet(registro);
    
} 
function InitializeBD() {

    //Inicializa Planilha
    var sheet = SpreadsheetApp.getActiveSpreadsheet();
    var baseDados = sheet.getSheetByName('Base_Dados');

    //setActiveSheet muda a página, não queremos isso
    //SpreadsheetApp.setActiveSheet(baseDados);
    
    // Pega quantidade de linhas não nulas
    var tamanho =  (baseDados.getLastRow());

    return tamanho;
}



