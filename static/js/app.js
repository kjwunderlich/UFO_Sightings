// from data.js
var tableData = data;

// Read in the data table
var tbody = d3.select("tbody");

tableData.forEach(function(ufoSighting) {
//   console.log(alienSighting);
  var row = tbody.append("tr");

  Object.entries(ufoSighting).forEach(function([key, value]) {
    // console.log(key, value);
    var cell = tbody.append("td");
    cell.text(value);
  });
});

// Filter table by date
var submit = d3.select("#filter-btn");
submit.on("click", function() {
    selectTable = d3.select("tbody");
    d3.event.preventDefault();
    selectTable.html("");
    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value");
    // console.log(inputValue);
    tableData.forEach(function(row){
        // console.log(row.datetime)
        if (row.datetime == inputValue){
        var newRow = selectTable.append("tr")
        Object.entries(row).forEach(function([key,value]){
            var cell = newRow.append("td");
            cell.text(value);
        });
    }
    });
});