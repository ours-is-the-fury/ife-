var region = document.getElementsByName("region");
var product = document.getElementsByName("product");
var regionCheck = document.querySelector("#region-radio-wrapper");
var productCheck = document.querySelector("#product-radio-wrapper");
//根据被选中的商品和地区，获取数据
function findData() {
    var data = new Array();
    for (var i = 0; i < region.length; i++) {
        if (region[i].checked == true) {
            data.push(region[i].value);
        }
    }
    for (var i = 0; i < product.length; i++) {
        if (product[i].checked == true) {
            data.push(product[i].value);
        }
    }
    var getData = new Array();
    for (var i = 0; i < sourceData.length; i++) {
        if (data.indexOf(sourceData[i].product) != -1 && data.indexOf(sourceData[i].region) != -1) {
            getData.push(sourceData[i]);
        }
    }
    return getData;
}
//检查勾选状态函数  wrapper 选择类型（地区或者商品），event为触发事件
function checkType(wrapper, event) {
    var type = event.target.value
    if (type == "全选") {                       //点击的是全选，进行全选操作或者无反应               
        event.target.checked = "ture";
        for (var i = 0; i < 3; i++) {
            wrapper[i].checked = "ture";
        }
    }
    else {											//点击的是其它选项
        var flag = 0;
        for (var i = 0; i < 3; i++) {
            if (wrapper[i].value != type) {
                if (wrapper[i].checked == true) flag++;
            }
        }
        if (flag == (wrapper.length - 2) && event.target.checked == true) {	//点击之后满足全选状态
            wrapper[3].checked = "ture";
        }
        if (flag == (wrapper.length - 2) && event.target.checked == false) {	//当全选时，取消其中一个选项
            wrapper[3].checked = "";
        }
        if (flag == 0 && event.target.checked == false) {	//点击的是唯一已勾选的，不允许一个都不选
            event.target.checked = "ture";
        }
    }
}