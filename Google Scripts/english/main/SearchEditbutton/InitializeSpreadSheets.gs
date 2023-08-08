function InitializeRegistry() {

    // Initializes Spreadsheet
    var sheet = SpreadsheetApp.getActiveSpreadsheet();
    var registry = sheet.getSheetByName('Registry');

    //setActiveSheet changes main page, we don't want that
    //SpreadsheetApp.setActiveSheet(registry);
    
} 
function InitializeBD() {

    //Initializes Spreadsheet
    var sheet = SpreadsheetApp.getActiveSpreadsheet();
    var dataBase = sheet.getSheetByName('DataBase');

    //setActiveSheet changes main page, we don't want that
    //SpreadsheetApp.setActiveSheet(dataBase);
    
    // Gets quantity of non null lines
    var size =  (dataBase.getLastRow());

    return size;
}



