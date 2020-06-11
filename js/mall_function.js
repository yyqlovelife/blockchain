function moneybuy(score_number) {
    $.ajax({
        type: "POST",//HTTP请求方法类型
        dataType: "json",//预期前端发给后端的数据类型
        url: "http://localhost:8080/api/moneybuy" ,//url地址
        data:{'score_number':score_number},
        success: function (result) {
            if (result.resultCode == 200) {
                alert('相应金额已扣除，稍后将有客服联系您收集具体配送内容，请留意来电\n此次购买后您的CCBLOCK积分将会增加，请在积分查询页面中查询')
            };
        },
        error : function() {
            alert("异常！");
        }
    });
}

function scorebuy(score_number) {
    $.ajax({
        type: "POST",//HTTP请求方法类型
        dataType: "json",//预期前端发给后端的数据类型
        url: "http://localhost:8080/api/buy" ,//url地址
        data:{'score_number':score_number},
        success: function (result) {
            if (result.resultCode == 200) {
                alert('相应积分已扣除，稍后将有客服联系您收集具体配送内容，请留意来电')
            };
        },
        error : function() {
            alert("购买异常！");
        }
    });
}