function EditButton() {

    // Gets inputed code from user
    var id = SpreadsheetApp.getActiveSpreadsheet().getRange('Registro!C10').getValue();

    // Initializes Spreadsheet
    var sheet = SpreadsheetApp.getActiveSpreadsheet();
    var DataBase = sheet.getSheetByName('DataBase');

    // Receives quantity of non null lines 
    var size = InitializeBD();
    var options = {
    contentsOnly: true
    };

    // Returns to initial page
    InitializeRegistry();

    // Searches in the array if id already exists 
    pos = getProduct(2, size, id);

    // If id doesn't exists, creates a new line at the end of the table and inserts declared values
    if (pos > size && SpreadsheetApp.getActiveSpreadsheet().getRange('Registry!C10').getValue() != SpreadsheetApp.getActiveSpreadsheet().getRange('DataBase!A'+pos).getValue()) {
    dataBase.insertRowAfter(size);
    SpreadsheetApp.getActiveSheet().getRange('DataBase!A'+pos+':F'+pos).setValues(SpreadsheetApp.getActiveSheet().getRange('Registry!C10:H10').getValues());
    SpreadsheetApp.getActiveSheet().getRange('Registry!C12').setValue("Changes made sucessfully! \nID: " + id);
    SpreadsheetApp.getActiveSheet().getRange('Registry!D10:H10').clear(options);
    
    // If id already exists, changes line (pos) and overwrites changes
    } else {
    SpreadsheetApp.getActiveSheet().getRange('DataBase!A'+pos+':F'+pos).setValues(SpreadsheetApp.getActiveSheet().getRange('Registry!C10:H10').getValues());
    SpreadsheetApp.getActiveSheet().getRange('Registry!C12').setValue("Changes made sucessfully! \nID: " + od);
    SpreadsheetApp.getActiveSheet().getRange('Registry!D10:H10').clear(options);

    }
    
    // Chama botaoBusca para mostrar valores atualizados
    botaoBusca();
}