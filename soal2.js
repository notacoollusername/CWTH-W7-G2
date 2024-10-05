const array = [
    { name: "banana", count: 2, pricePerOne: 45000, discount: 5 },
    { name: "potato", count: 8, pricePerOne: 23000, discount: 15 },
    { name: "onion", count: 12, pricePerOne: 12000, discount: 10 },
    ];
    
    function printBill(items) {
    const bill = []
    items.forEach(element => {
    const pricePerOneAfterDiscount = element.pricePerOne * (1-(element.discount/100))
    const porduct = {
    name:element.name,
    count:element.count,
    pricePerOneBeforeDiscount:element.pricePerOne,
    pricePerOneAfterDiscount,
    total:element.count * pricePerOneAfterDiscount
    }
    bill.push(porduct)
    });
    return bill
    }
    
    console.table(printBill(array));

    const table =document.createElement("table")
    console.log(table);
    const tbody= document.createElement("tbody")
     console.log(tbody);
    //  table.appendChild(tbody)
    //  const row=document.createElement("tr")
    //  const row1=document.createElement("tr")
    //  const row2=document.createElement("tr")
    //  tbody.appendChild(row)
    //  tbody.appendChild(row1)
    //  tbody.appendChild(row2)
    //  const cell=document.createElement("td")
    //  const cell1=document.createElement("td")
    //  const cell2=document.createElement("td")
    //  row.appendChild(cell)
    //  row.appendChild(cell1)
    //  row.appendChild(cell2)
     
    for (let i = 0; i < 2; i++) {
        // creates a table row
        const row = document.createElement("tr");
        
        for (let j = 0; j < 2; j++) {
        // Create a <td> element and a text node, make the text
        // node the contents of the <td>, and put the <td> at
        // the end of the table row
        const cell = document.createElement("td");
        const cellText = document.createTextNode(`cell in row ${i}, column ${j}`);
        cell.appendChild(cellText);
        row.appendChild(cell);
        }
    }