function present(){
    if(yourpublic.value==''){
        alert('您的公钥不能为空！');
        return false;
    }
    if(friendpublic.value==''){
        alert('好友公钥不能为空！');
        return false;
    }
    if(number.value==''){
        alert('转赠额度不能为空！');
        return false;
    }
    if(yourprivate.value==''){
        alert('您的私钥不能为空！');
        return false;
    }
    else {
        $.ajax({
            //几个参数需要注意一下
            type: "POST",//方法类型
            dataType: "json",//预期服务器返回的数据类型
            url: "" ,//url
            data: $('#form_present').serialize(),
            success: function (result) {
                console.log(result);//打印服务端返回的数据(调试用)
                    if (result.resultCode == 200) {
                        alert('转赠成功，请尽快通知您的好友')
                    };
            },
            error : function() {
                alert("异常！");
            }
        });
    }
    action="#";
    submit();
}

function showscore() {
    if(yourpublic.value==''){
        alert('您的公钥不能为空！');
        return false;
    }
    if(yourprivate.value==''){
        alert('您的私钥不能为空！');
        return false;
    }
    else{
        alert('您的积分余额为：')
    }
}