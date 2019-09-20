var deng = function (id) {
    return document.getElementById(id);
}

// 大风车开始
var lunbo = deng("botu");
var leftDiv = lunbo.getElementsByTagName("div")[0];
var rightDiv = lunbo.getElementsByTagName("div")[1];
var allDl = rightDiv.getElementsByTagName("dl");
var allImg = leftDiv.getElementsByTagName("img");
for (var i = 0; i < allImg.length; i++) {
    allImg[i].setAttribute("index", i);
    allImg[i].onmouseover = function () {
        for (var j = 0; j < allImg.length; j++) {
            allImg[j].removeAttribute("class");
        }
        this.className = "current";
        var num = this.getAttribute("index");
        for (var k = 0; k < allDl.length; k++) {
            allDl[k].removeAttribute("class");
        }
        allDl[num].className = "current";
    }
}
//大风车结束

//护眼模式
deng("btn").onclick = function () {
    if (deng("bd").className != "cls") {
        deng("bd").className = "cls";
        this.value = "切换正常模式";
    } else if (deng("bd").className == "cls") {
        deng("bd").className = "";
        this.value = "切换护眼模式";
    }
}

//动漫专区轮播图开始
var bdLeft = deng("bdLeft");
var kuang = bdLeft.children[0];
var imgWidth = kuang.offsetWidth;
var ulObj = kuang.children[0];
var list = ulObj.children;
var olObj = kuang.children[1];
var arr = deng("arr");

var pic = 0;
//创建小按钮
for (var i = 0; i < list.length; i++) {
    var liObj = document.createElement("li");
    olObj.appendChild(liObj);
    liObj.innerHTML = (i + 1);
    //在每个ol中的li标签上添加一个自定义属性,存储索引值
    liObj.setAttribute("index", i);
    liObj.onmouseover = function () {
        //先干掉所有的ol中的li的背景颜色
        for (var j = 0; j < olObj.children.length; j++) {
            olObj.children[j].removeAttribute("class");
        }
        //设置当前鼠标进来的li的背景颜色
        this.className = "yanse";
        pic = this.getAttribute("index");
        animate(ulObj, -pic * imgWidth);
    };
}
olObj.children[0].className = "yanse";


//克隆一个ul中第一个li,加入到ul中的最后
ulObj.appendChild(ulObj.children[0].cloneNode(true));

var timeId = setInterval(clickHandle, 3000);

//鼠标进入显示左右焦点的div
bdLeft.onmouseover = function () {
    arr.style.display = "block";
    clearInterval(timeId);
};
//鼠标离开隐藏左右焦点的div
bdLeft.onmouseout = function () {
    arr.style.display = "none";
    timeId = setInterval(clickHandle, 3000);
};
//右边按钮
deng("rightArr").onclick = clickHandle;
function clickHandle() {
    if (pic == list.length - 1) {
        //从第6个图,跳转到第一个图
        pic = 0;
        ulObj.style.left = 0 + "px";
    }
    pic++;
    animate(ulObj, -pic * imgWidth);
    if (pic == list.length - 1) {
        
        olObj.children[olObj.children.length - 1].className = "";
        //第一个按钮颜色设置上
        olObj.children[0].className = "yanse";
    } else {
        //干掉所有的小按钮的背景颜色
        for (var i = 0; i < olObj.children.length; i++) {
            olObj.children[i].removeAttribute("class");
        }
        olObj.children[pic].className = "yanse";
    }

};
//左边按钮
deng("leftArr").onclick = function () {
    if (pic == 0) {
        pic = 5;
        ulObj.style.left = -pic * imgWidth + "px";
    }
    pic--;
    animate(ulObj, -pic * imgWidth);
    for (var i = 0; i < olObj.children.length; i++) {
        olObj.children[i].removeAttribute("class");
    }
    
    olObj.children[pic].className = "yanse";

};

//设置任意的一个元素,移动到指定的目标位置
function animate(element, target) {
    clearInterval(element.timeId);
    element.timeId = setInterval(function () {
        var current = element.offsetLeft;
        //每次移动的距离
        var step = 1000;
        step = current < target ? step : -step;
        //当前移动到位置
        current += step;
        if (Math.abs(current - target) > Math.abs(step)) {
            element.style.left = current + "px";
        } else {
            clearInterval(element.timeId);
            //直接到达目标
            element.style.left = target + "px";
        }
    }, 10);
}


//动漫右边
var bdrUl = deng("bdrUl");
var bdrLi = bdrUl.getElementsByTagName("li");
for (var i = 0; i < bdrLi.length; i++) {
    bdrLi[i].onmouseover = function () {
        for (var j = 0; j < bdrLi.length; j++) {
            bdrLi[j].removeAttribute("class");
        }
        this.className = "redu";

    }
}

