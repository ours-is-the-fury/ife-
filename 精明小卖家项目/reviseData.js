var flag = 1;
var btn1 = document.createElement("button");
var btn2 = document.createElement("button");
con2.onmousedown = function () {

    for (let i = 0; i < td.length; i++) {

        td[i].onclick = function () {
            this.removeChild(div);
            if (flag == 1) {
                var tdvalue = td[i].innerHTML;

                let input = document.createElement("input");
                input.type = "text";
                input.value = tdvalue;
                this.innerHTML = "";
                this.appendChild(input);
                input.focus();
                // console.log(td[i].childNodes[0]);

                btn1.innerHTML = "确定";
                btn2.innerHTML = "取消";
                this.appendChild(btn1);
                this.appendChild(btn2);
                flag = 0;
                document.onkeydown = function (event) {

                    var e = event;
                    if (e.keyCode == 27) { // 按 Esc
                        td[i].innerHTML = "";
                        td[i].innerHTML = tdvalue;
                        flag = 1;

                    } else if (e.keyCode == 13) { // enter 键
                        td[i].innerHTML = "";
                        td[i].innerHTML = input.value;
                        flag = 1;

                    }

                };
                setTimeout(function () {
                    btn1.onmousedown = function () {
                        td[i].innerHTML = "";
                        td[i].innerHTML = input.value;
                        flag = 1;
                    }

                }, 400);
                setTimeout(function () {
                    btn2.onmousedown = function () {
                        td[i].innerHTML = "";
                        td[i].innerHTML = tdvalue;
                        flag = 1;
                    }

                }, 500);
                // alert(flag);

            }

        }

    }

}
