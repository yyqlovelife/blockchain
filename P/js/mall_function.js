function moneybuy(score,item) {
    var score_number=score
    var itemname=item
    var id=prompt("为了确保您的安全，请再次输入您的用户名","")
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
            url: "http://106.55.63.99:8081/api/moneybuy",//url地址
            data: {'id':id,'password':password,'score_number': score_number,'itemname':itemname},
            success: function (result) {
                if (result.statecode==1){
                    alert('用户名密码错误，请重新操作')
                };
                if (result.statecode == 3) {
                    alert('购买成功，稍后将有客服联系您确定具体配送内容，请留意来电\n您的积分数额增加，请前往查询页面核实')
                }
                ;
            },
            error: function () {
                alert("购买异常！");
            }
        });
    }

}

function scorebuy(score,item) {
    var score_number=score
    var itemname=item
    var id=prompt("为了确保您的安全，请再次输入您的用户名")
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
            url: "http://106.55.63.99:8081/api/scorebuy",//url地址
            data: {'id': id, 'password': password, 'score_number': score_number,'itemname':itemname},
            success: function (result) {
                if (result.statecode==1){
                    alert('用户名密码错误，请重新操作')
                }
                if(result.statecode==2){
                    alert('您的积分余额不足')
                }
                if (result.statecode == 3) {
                    alert('相应积分已扣除，稍后将有客服联系您确定具体配送内容，请留意来电')
                }
                ;
            },
            error: function () {
                alert("购买异常！");
            }
        });
    }
}