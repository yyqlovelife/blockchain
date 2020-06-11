function present(){
    var yourpublic=$("#yourpublic").val();
    var yourprivate=$("#yourprivate").val();
    var friendpublic=$("#friendpublic").val();
    var score_number=$("#score_number").val();

    if(yourpublic==''){
        alert('您的公钥不能为空！');
        return false;
    }
    if(friendpublic==''){
        alert('好友公钥不能为空！');
        return false;
    }
    if(score_number==''){
        alert('转赠额度不能为空！');
        return false;
    }
    if(yourprivate==''){
        alert('您的私钥不能为空！');
        return false;
    }
    else {
        $.ajax({
            type: "POST",//HTTP请求方法类型
            dataType: "json",//预期前端发给后端的数据类型
            url: "http://localhost:8080/api/presentscore" ,//url地址
            data:{'yourpublic':yourpublic,'yourprivate':yourprivate,
                'friendpublic':friendpublic,'score_number':score_number},

            success: function (result) {
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