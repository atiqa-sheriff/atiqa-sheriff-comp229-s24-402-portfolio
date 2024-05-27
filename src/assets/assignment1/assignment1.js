function makeTable() {
  var table = document.getElementById("table");
  var rows = document.getElementById("rows").value;
  var columns = document.getElementById("columns").value;

  while (table.firstChild) {
    table.removeChild(table.firstChild);
  }

  console.log(rows + " " + columns);

  for (var r = 1; r <= rows; r++) {
    var tr = document.createElement("tr");

    for (var c = 1; c <= columns; c++) {
      var td = document.createElement("td");
      var text = document.createTextNode(r * c);

      td.appendChild(text);
      tr.appendChild(td);
    }
    table.appendChild(tr);
  }
}

document.getElementById("button").addEventListener("click", makeTable);
