function getProduct(start, size, id) {

    //Declares intermidiate point in table 
    var index = Math.floor((size+start)/2);

    //Considerando ordenação da lista, se o código for maior que o ultimo código, retorna que o código buscado não existe
    //Considering the list is sorted, if the id is bigger than the last one, returns "non existant code"
    if (id > SpreadsheetApp.getActiveSpreadsheet().getRange("DataBase!A"+tamanho).getValues()) {   

    console.log("Instance: Code is bigger than last one");
    SpreadsheetApp.getActiveSheet().getRange('Registry!C6').setValue("non existant code");

    return size+1;

    // Returns last ID
    } else if (id == SpreadsheetApp.getActiveSpreadsheet().getRange("DataBase!A"+size).getValue()) {

    console.log("Instance: Last One");
    SpreadsheetApp.getActiveSheet().getRange('Registry!C6:H6').setValues(SpreadsheetApp.getActiveSheet().getRange('DataBase!A'+size+':F'+size).getValues());  

    return size;

    // Returns first ID
    } else if (id == SpreadsheetApp.getActiveSpreadsheet().getRange("DataBase!A"+start).getValue()) {

    console.log("Instance: First");
    SpreadsheetApp.getActiveSheet().getRange('Registry!C6:H6').setValues(SpreadsheetApp.getActiveSheet().getRange('DataBase!A'+start+':F'+start).getValues());
    
    return start;
    }

    // Found ID 
    if (id == SpreadsheetApp.getActiveSpreadsheet().getRange("DataBase!A"+index).getValue()) {

    console.log("Instance: Normal");
    SpreadsheetApp.getActiveSheet().getRange('Registry!C6:H6').setValues(SpreadsheetApp.getActiveSheet().getRange('DataBase!A'+index+':F'+index).getValues());
    
    return index;
    
    // Verifies if id is bigger or smaller than id in in (index) (Method: QuickSearch)    

    } else if (id < SpreadsheetApp.getActiveSpreadsheet().getRange("Base_Dados!A"+index).getValue()) {

    getProduct(start, index, id);

    } else if (id > SpreadsheetApp.getActiveSpreadsheet().getRange("Base_Dados!A"+index).getValue()) {

    getProduct(index, size, id);

    } 
}
