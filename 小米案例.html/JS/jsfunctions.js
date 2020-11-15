//JS应用函数包
var util = (function () {
    return {
        // 封装next方法，在所有浏览器中都可以返回下一个兄弟元素节点
        next: function (elem) {
            do {
                elem = elem.nextSibling;
            } while (elem && elem.nodeType != 1);
            return elem;
        },


    // 封装first方法，在所有的浏览器中都可以返回第一个元素孩子节点

       first:  function (elem) {
            elem = elem.firstChild;
            return elem && elem.nodeType != 1 ? next(elem) : elem;
        }
    }
})();