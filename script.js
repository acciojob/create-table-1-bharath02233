function insert_Row() {
    // Get the table element by its ID
    let table = document.getElementById("sampleTable");

    // Insert a new row at the top (index 0)
    let newRow = table.insertRow(0);

    // Insert two new cells
    let cell1 = newRow.insertCell(0);
    let cell2 = newRow.insertCell(1);

    // Assign text to the new cells
    cell1.textContent = "New Cell1";
    cell2.textContent = "New Cell2";
}
