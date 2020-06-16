function present(){
    var yourid=$("#yourid").val();
    var password=$("#password").val();
    var friendid=$("#friendid").val();
    var score_number=$("#score_number").val();

    if(yourid==''){
        alert('您的用户名不能为空！');
        return false;
    }
    if(friendid==''){
        alert('好友用户名不能为空！');
        return false;
    }
    if(score_number==''){
        alert('转赠额度不能为空！');
        return false;
    }
    if(password==''){
        alert('您的密码不能为空！');
        return false;
    }
    else {
        $.ajax({
            type: "POST",//HTTP请求方法类型
            dataType: "json",//预期前端发给后端的数据类型
            url: "http://localhost:8080/api/showscore" ,//url地址
            data:{'yourid':yourid,'password':password,
                'friendid':friendid,'score_number':score_number},

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
    var id=$("#id").val();
    var password=$("#password").val();


    if(id==''){
        alert('您的用户名不能为空！');
        return false;
    }
    if(password==''){
        alert('您的密码不能为空！');
        return false;
    }
    else {
        $.ajax({
            type: "POST",//HTTP请求方法类型
            dataType: "json",//预期前端发给后端的数据类型
            url: "http://localhost:8080/api/showscore",//url地址
            data: {
                'id': id, 'password': password
            },
            success: function (result) {
                if (result.resultCode == 200) {
                    alert('您的积分数额为：'+result.score_number)
                }
                ;
            },
            error: function () {
                alert("查询异常！");
            }
        });
    }
}