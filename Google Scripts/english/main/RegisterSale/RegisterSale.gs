function registerSale() {
    
    //SearchInfo
    var ssForm = SpreadsheetApp.getActiveSpreadsheet().getSheetByName ('Sales Table');
    var data = ssForm.getRange('I2:I6').getValues();
    var finalData = [data];

    //Gets specified quantity
    var quantity = ssForm.getRange('I7').getValue();

    // Searches for last line
    var ssBD = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Sales Table');
    var lastline = ssBD.getLastRow();
    var targetLine = lastLine+1;
    
    // Repeats quantity times
    console.log("Declared Quantity: " + quantity);
    for (let i = 0; i < quantity; i++) {

        // Gets last Line
        lastline  = ssBD.getLastRow();
        targetLine = lastLine+1;

        // Write final Data
        ssBD.getRange(targetLine,1,1,data.length).setValues(finalData);
        console.log("Registring product number: " + (1+i))
        console.log("Register Successfull!");
        
    }
}