(function() {
    // Define personal information
    const tableContent = [
      { name: "Name", value: "Binay Kumar" },
      { name: "Age", value: "21" },
      { name: "Address", value: "Patna" },
      { name: "Phone", value: "7542857863" },
      { name: "Email", value: "binaykumartan@gmail.com" }
    ];
    
    // Create table element
    const table = document.createElement("table");
    table.style.borderCollapse = "separate";
    var element = document.querySelector("#tab");
    // Set the margins to 10 pixels
    element.style.margin = "200px";
    element.style.paddingLeft ="200px";
    element.style.position = "relative";
    element.style.left = "50%";
    element.style.top = "50%";
    element.style.transform = "translateX(-50%)";
    element.style.transform = "translateY(-50%)";

  
    // Create table headers
    const headerRow = document.createElement("tr");
    for (let i = 0; i < 5; i++) {
      const headerCell = document.createElement("th");
      headerCell.style.marginLeft = "20px";
      headerCell.style.border = "2px solid";
      headerCell.style.borderRadius = "10px";
      headerCell.style.borderColor="rgba(12,240,141)"
      headerCell.style.padding = "12px";
      headerCell.style.background = "rgba(182,252,222)";
      headerCell.style.fontWeight = 'bold';
      headerCell.style.fontSize = '25px';
      headerCell.style.textAlign = 'center';
      headerCell.style.fontFamily = 'Montserrat, Oswald';
      const textCell = document.createTextNode(tableContent[i].name);
      headerCell.appendChild(textCell);
      headerRow.appendChild(headerCell);
    }
    table.appendChild(headerRow);
  
    // Create table rows
    for (let i = 0; i < 5; i++) {
      const row = document.createElement("tr");
      for (let j = 0; j < 5; j++) {
        const row_content = document.createElement("td");
        row_content.style.border = "2px solid";
        row_content.style.borderRadius = "10px";
        row_content.style.borderColor = "rgba(32,245,241)";
        row_content.style.background = "rgba(163, 240, 238)";
        row_content.style.padding = "10px";
        row_content.style.fontSize = '20px';
        row_content.style.fontFamily = 'Montserrat, sans-serif';
        row_content.style.textAlign = 'center';
        const textCell = document.createTextNode(tableContent[j].value);
        row_content.appendChild(textCell);
        row.appendChild(row_content);
      }
      table.appendChild(row);
    }
  
    // Add table to the document
    document.body.appendChild(table);
})();