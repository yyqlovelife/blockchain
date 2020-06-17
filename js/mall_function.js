function moneybuy(score_number) {
    var id=prompt("请输入您的用户名","")
    var password=prompt("请输入您的密码","")
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
            url: "http://localhost:8080/api/moneybuy",//url地址
            data: {'id':id,'password':password,'score_number': score_number},
            success: function (result) {
                if (result.resultCode == 200) {
                    alert('相应金额已扣除，稍后将有客服联系您收集具体配送内容，请留意来电\n此次购买后您的CCBLOCK积分将会增加，请在积分查询页面中查询')
                }
                ;
            },
            error: function () {
                alert("购买异常！");
            }
        });
    }

}

function scorebuy(score_number) {
    var id=prompt("请输入您的用户名")
    var password=prompt("请输入您的密码")
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
            url: "http://localhost:8080/api/buy",//url地址
            data: {'id': id, 'password': password, 'score_number': score_number},
            success: function (result) {
                if (result.resultCode == 200) {
                    alert('相应积分已扣除，稍后将有客服联系您收集具体配送内容，请留意来电')
                }
                ;
            },
            error: function () {
                alert("购买异常！");
            }
        });
    }
}