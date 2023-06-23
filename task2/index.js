
function addRow(){
    const table = document.getElementById("table")
    let tr =document.createElement('tr')
    
    let input1 = document.createElement('input')
    input1.placeholder="Enter Name"
    let input2 = document.createElement('input')
    input2.placeholder="Enter Age"
    let input3 = document.createElement('input')
    input3.placeholder="Enter Email"

    let td1 = document.createElement('td');
    let td2 = document.createElement('td');
    let td3 = document.createElement('td');

    td1.appendChild(input1)
    td2.appendChild(input2)
    td3.appendChild(input3)
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3)
    table.appendChild(tr)
}



document.getElementById("btn").addEventListener('click', addRow)
