$(function () {
    $('ul.parent > li').hover(function () {
        $(this).find('ul.child').show(150);
    }, function () {
            $(this).find('ul.child').hide(100);
    })
});

var el_up = $('#paragrafo_descr');

var innerTable = [
    { "col_1": "Marca", "col_2": "val_12" },
    { "col_1": "Modello", "col_2": "val_22" },
    { "col_1": "Cilindrata", "col_2": "val_32" },
    { "col_1": "Prezzo", "col_2": "val_42" }
];

el_up.innerHTML = "Click on the button to create the "
    + "table from the JSON data.<br><br>"
    + JSON.stringify(innerTable[0]) + "<br>"
    + JSON.stringify(innerTable[1]) + "<br>"
    + JSON.stringify(innerTable[2]);

$(document).ready(table_create());

function table_create() {
    var cols = [];

    for (var i = 0; i < innerTable.length; i++) {
        for (var k in innerTable[i]) {
            if (cols.indexOf(k) === -1) {
                // Push all keys to the array 
                cols.push(k);
            }
        }
    }

    // Create a table element 
    var table = document.createElement("table");

    // Create table row tr element of a table 
    //var tr = table.insertRow(-1);
    /*
    for (var i = 0; i < cols.length; i++) {

        // Create the table header th element 
        var theader = document.createElement("th");
        theader.innerHTML = cols[i];

        // Append columnName to the table row 
        tr.appendChild(theader);
    }*/

    // Adding the data to the table 
    for (var i = 0; i < innerTable.length; i++) {

        // Create a new row 
        trow = table.insertRow(-1);
        for (var j = 0; j < cols.length; j++) {
            var cell = trow.insertCell(-1);

            // Inserting the cell at particular place 
            cell.innerHTML = innerTable[i][cols[j]];
        }
    }

    // Add the newely created table containing json data 
    var el = document.getElementById("table");
    el.innerHTML = "";
    el.appendChild(table);
}     


//
var table = $('<table>');

for (i = 0; i < 3; i++) {
    var row = $('<tr>').addClass('bar').text('result ' + i);
    table.append(row);
    for (i = 0; i < 3; i++) {
        var col = $('<td>').addClass('col').text('result ' + i);
        table.append(col);
    }
}
table += "</table>";
$('#here_table').append(table);
