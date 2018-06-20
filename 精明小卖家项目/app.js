//初始化
createTable(findData())
createLine(findData())
createBar(findData())
changeTd()
mergeCell(1, 0)


//事件响应
regionCheck.onclick = function (event) {
    checkType(region, event);
    createTable(findData())
    createLine(findData())
    createBar(findData())
    changeTd()
    mergeCell(1, 0)
}

productCheck.onclick = function (event) {
    checkType(product, event);
    createTable(findData())
    createLine(findData())
    createBar(findData())
    changeTd()
    mergeCell(1, 0)
}
