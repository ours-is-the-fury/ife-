//鼠标悬浮制作图标
var arr = new Array;
table.onmouseover = function (event) {
    let tar = event.target
    if (tar.nodeName.toLowerCase() === 'td') {
        let tr = tar.parentNode;
        tr.style.color = "yellow";
        let tdList = tr.childNodes;
        let arr = [];
        for (let i = 2; i < tdList.length; i++) {
            arr.push(Number(tdList[i].textContent));
        }
        let getData = [{
            product: 'abather',//内容无关图表的制作任意设置
            region: 'abather',//内容无关
            sale: arr//
        }]
        //console.log(arr)
        createBar(getData);
        createLine(getData);
    }
}
//鼠标离开重新作出已选选项图表
table.onmouseout = function (event) {
    let tar = event.target
    let tr = tar.parentNode;
    tr.style.color = "black";
    let oldData = findData();
    createBar(oldData);
    createLine(oldData);
}