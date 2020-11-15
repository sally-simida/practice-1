//登录按钮
(function () {
    var oLogin = document.getElementById('login');
    oLogin.onclick = function () {
        new Modal({
            name: 'modal-box',
            onOk:function(){
                console.log('我是确定按钮啊！刚才有人按了我一下~');
            }
        });
        return false;
    }
})();

