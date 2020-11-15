

var Modal = (function () {

    function extend(target, object) {
        for (var p in object) {
            if (typeof object[p] == 'object') {
                target[p] = extend(obj[p].constructor == Array ? [] : {}, obj[p]);
                //obj[p].constructor == Array ? [] : {} 
                //此处用来判断对象是否是一个数组，因为数组的 typerof也是object，所以需要用构造函数来判断
            } else {
                target[p] = object[p];
            }
        }
        return target;
    }

    function Modal(object) {
        var _this = this;
        this.setting = extend({
            width: 300,
            height: 400
        }, object);
        this.oModal = document.getElementById(this.setting.name);
        this.oModal.style.display = 'block';//显示窗口

        //填写参数改变弹窗的长和宽
        var oBox = this.oModal.firstElementChild;//有兼容性问题
        oBox.style.width = this.setting.width + 'px';
        oBox.style.height = this.setting.height + 'px';

        //[X] 点击按钮关闭窗口
        var oCloseBtn = this.oModal.getElementsByClassName('modal-close')[0];
        //此处记得 getElementsByClassName 这个语法取出的是集合，并不是某个元素
        oCloseBtn.onclick = function () {
            _this.close();
        }

        //点击后面的黑色背景也会关闭窗口
        var clickBack = document.getElementById(this.setting.name);
        clickBack.onclick = function (e) {
            //判断点击的是父元素不是子元素
            if (e.target == this) {
                _this.close();
            }
            //也可以用函数来组织事件冒泡~
            //。。。。
        }

        //点击 确定 可以自定义二次开发者的需求
        var oBtnOk = this.oModal.getElementsByClassName('ok')[0];
        oBtnOk.onclick = function () {
            _this.setting.onOk();
            //onOk 由二次开发者自定义编写，写在自己的JS文件中
        }

        //类下面的方法
        Modal.prototype.close = function () {
            this.oModal.style.display = 'none';
        }
    }
    return Modal;
})();

