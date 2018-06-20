var region = document.getElementsByName("region");
var product = document.getElementsByName("product");
var regionCheck = document.querySelector("#region-radio-wrapper");
var productCheck = document.querySelector("#product-radio-wrapper");
let tableWrapper = document.querySelector("#tableWrapper");
let table = document.createElement("table");
table.setAttribute("id", "table");
//创建表格
function createTable(getData) {
    table.innerHTML = "";
    let tr = document.createElement("tr");
    tr.innerHTML = `
        <th>商品</th>
        <th>地区</th>
        <th>1月</th>
        <th>2月</th>
        <th>3月</th>
        <th>4月</th>
        <th>5月</th>
        <th>6月</th>
        <th>7月</th>
        <th>8月</th>
        <th>9月</th>
        <th>10月</th>
        <th>12月</th>
        <th>12月</th>
    `;
    table.appendChild(tr);
    tableWrapper.appendChild(table);
    for (let i = 0; i < getData.length; i++) {          // 遍历拿到的数据数组getData
        let tr = document.createElement("tr");
        for (let key in getData[i]) {                   // 遍历数组中每一个对象
            if (getData[i].hasOwnProperty(key)) {
                if (!Array.isArray(getData[i][key])) {  // 判断getData[i]的value是否是数组，非数组则直接添加到td里
                    let td = document.createElement("td");
                    td.innerHTML = getData[i][key];
                    tr.appendChild(td);
                } else {
                    for (let k = 0; k < getData[i][key].length; k++) {// 如果是数组，则遍历数组，将数组中的每一项分别创建并添加到td
                        let td = document.createElement("td");
                        td.innerHTML = getData[i][key][k];
                        tr.appendChild(td);
                    }
                }
            }
        }
        table.appendChild(tr);
    }
    tableWrapper.appendChild(table);
}
//交换第一列第二列顺序
function changeTd() {
    let ipts1 = regionCheck.querySelectorAll("input[type=checkbox]:checked");
    let ipts2 = productCheck.querySelectorAll("input[type=checkbox]:checked");
    let tab = document.querySelector("#table");
    if (ipts1.length == 1 && ipts2.length != 1) {// 当地区选择了一个，商品选择了多个的时候，第一列第二列交换
        for (let i = 0; i < tab.rows.length; i++) {
            let temp = tab.rows[i].cells[0].innerHTML;
            tab.rows[i].cells[0].innerHTML = tab.rows[i].cells[1].innerHTML;
            tab.rows[i].cells[1].innerHTML = temp;
        }
    }
}
//合并重复单元
function mergeCell(startrow, col) {
    let tab = document.querySelector("#table");
    for (let i = startrow; i < tab.rows.length - 1; i++) {
        if (tab.rows[startrow].cells[col].innerHTML === tab.rows[i + 1].cells[col].innerHTML) {// 如果第i行和第i+1行内容相同则隐藏第i+1行，同时第i行的rowSpan+1
            tab.rows[i + 1].cells[col].style.display = "none";
            tab.rows[startrow].cells[col].rowSpan += 1;
        }
        else {
            mergeCell(i + 1, 0) // 不相等的时候从第i+1行再次执行次函数
        }
    }
}