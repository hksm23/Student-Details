        function addRow() {
            let table = document.getElementById("studentTable");
            let newRow = table.rows[0].cloneNode(true);
            let inputs = newRow.querySelectorAll("input");
            inputs.forEach(input => input.checked = false || (input.value = ""));
            table.appendChild(newRow);
        }

        function removeRow() {
            let table = document.getElementById("studentTable");

            
            if (table.rows.length > 1) {
                table.deleteRow(table.rows.length - 1);
            } else {
                alert("You must have at least one entry!");
            }
        }
  
