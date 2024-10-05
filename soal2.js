const array = [
    { name: "banana", count: 2, pricePerOne: 45000, discount: 5 },
    { name: "potato", count: 8, pricePerOne: 23000, discount: 15 },
    { name: "onion", count: 12, pricePerOne: 12000, discount: 10 },
];

function printBill(items) {
    const bill = [];
    items.forEach(element => {
        const pricePerOneAfterDiscount = element.pricePerOne * (1 - (element.discount / 100));
        const product = {
            name: element.name,
            count: element.count,
            pricePerOneBeforeDiscount: element.pricePerOne,
            pricePerOneAfterDiscount,
            total: element.count * pricePerOneAfterDiscount,
        };
        bill.push(product);
    });
    return bill;
}

const billData = printBill(array);
console.table(billData);

const table = document.createElement("table");
const tbody = document.createElement("tbody");


const headerRow = document.createElement("tr");
const headers = ["Name", "Count", "Price Per One (Before Discount)", "Price Per One (After Discount)", "Total"];
headers.forEach(headerText => {
    const headerCell = document.createElement("th");
    headerCell.textContent = headerText;
    headerRow.appendChild(headerCell);
});
tbody.appendChild(headerRow);

billData.forEach(item => {
    const row = document.createElement("tr");
    
    const nameCell = document.createElement("td");
    nameCell.textContent = item.name;
    row.appendChild(nameCell);
    
    const countCell = document.createElement("td");
    countCell.textContent = item.count;
    row.appendChild(countCell);
    
    const priceBeforeDiscountCell = document.createElement("td");
    priceBeforeDiscountCell.textContent = item.pricePerOneBeforeDiscount; 
    row.appendChild(priceBeforeDiscountCell);
    
    const priceAfterDiscountCell = document.createElement("td");
    priceAfterDiscountCell.textContent = item.pricePerOneAfterDiscount; 
    row.appendChild(priceAfterDiscountCell);
    
    const totalCell = document.createElement("td");
    totalCell.textContent = item.total;
    row.appendChild(totalCell);
    
    tbody.appendChild(row);
});

table.appendChild(tbody);
document.body.appendChild(table);



table.style.width = "100%";
table.style.marginTop = "20px";
table.querySelectorAll("th, td").forEach(cell => {
    cell.style.border = "1px solid #000";
    cell.style.padding = "8px";
    cell.style.textAlign = "left";
});