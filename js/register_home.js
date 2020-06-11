function register() {
    $.ajax({
        url : "http://localhost:8080/api/register",//后台请求的数据
        dataType : "json",//数据格式
        type : "get",//请求方式
        async : false,//是否异步请求
        success : function(data) {   //如果请求成功，发送用户通知
            alert('您的公钥为：'+data.yourpublic+'\n您的私钥为：'+data.yourprivate)
            $("#yourpublic").html(data.yourpublic);
            $("#yourprivate").html(data.yourprivate);
            //在html页面id=yourpublic和yourprivate的标签里显示html内容
        },
        error:function (data){
            alert("注册异常！")
        }
    })
}

function start() {
    $.ajax({
        url : "http://localhost:8080/api/start",//请求url
        dataType : "json",//后端传到前端的数据格式
        type : "get",//请求方式
        async : true,//是否异步请求
        success : function(data) {
            alert('激活成功!')
        },
        error:function(data){
            alert("激活失败！")
        }
    })
}

function stop() {
    $.ajax({
        url : "http://localhost:8080/api/stop",//请求url
        dataType : "json",//后端传到前端的数据格式
        type : "get",//请求方式
        async : true,//是否异步请求
        success : function(data) {
            alert('休眠成功!')
        },
        error:function(data){
            alert("休眠失败！")
        }
    })
}