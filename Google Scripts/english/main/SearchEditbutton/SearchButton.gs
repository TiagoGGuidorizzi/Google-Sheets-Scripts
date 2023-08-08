function botaoBusca() {
    // Gets id from specified cell
    var id = SpreadsheetApp.getActiveSpreadsheet().getRange('C10').getValue();

    // Receives quantity of non null lines
    var size  = InitializeBD();

    // Clears cells with the inputs
    SpreadsheetApp.getActiveSheet().getRange('Registro!D10:H10').setValue(" ");

    // Searches Product in Data Base
    // Initiliazes in position 2, max size (size), searches for id    
    var pos = getProduct(2, size, id);

    //  Goes back to initial page
    InitializeRegistro();
}