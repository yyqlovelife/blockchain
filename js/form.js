
function cambiar_login() {
    document.querySelector('.cont_forms').className = "cont_forms cont_forms_active_login";
    document.querySelector('.cont_form_login').style.display = "block";
    document.querySelector('.cont_form_sign_up').style.opacity = "0";

    setTimeout(function(){  document.querySelector('.cont_form_login').style.opacity = "1"; },400);
  
    setTimeout(function(){
    document.querySelector('.cont_form_sign_up').style.display = "none";},200);
}

function apply() {
    var yourpublic1=$("#yourpublic1").val();
    var yourprivate1=$("#yourprivate1").val();
    var card_number1=$("#card_number1").val();
    var score_number1=$("#score_number1").val();

    if(yourpublic1==''){
        alert('您的公钥不能为空！');
        return false;
    }
    if(score_number1==''){
        alert('授信额度不能为空！');
        return false;
    }
    if(card_number1==''){
        alert('银行卡号不能为空！');
        return false;
    }
    if(yourprivate1==''){
        alert('您的私钥不能为空！');
        return false;
    }
    else {
        $.ajax({
            type: "POST",//HTTP请求方法类型
            dataType: "json",//预期前端发给后端的数据类型
            url: "http://localhost:8080/api/applyscore",//url地址
            data: {
                'yourpublic1': yourpublic1, 'yourprivate1': yourprivate1,
                'card_number1': card_number1, 'score_number1': score_number1
            },
            success: function (result) {
                if (result.resultCode == 200) {
                    alert('授信成功，请前往查询页面进行核实')
                }
                ;
            },
            error: function () {
                alert("授信异常！");
            }
        });
    }
}

function cambiar_sign_up(at) {
  document.querySelector('.cont_forms').className = "cont_forms cont_forms_active_sign_up";
  document.querySelector('.cont_form_sign_up').style.display = "block";
document.querySelector('.cont_form_login').style.opacity = "0";
  
setTimeout(function(){  document.querySelector('.cont_form_sign_up').style.opacity = "1";
},100);  

setTimeout(function(){   document.querySelector('.cont_form_login').style.display = "none";
},400);  

}    

function convert() {
    var yourpublic2=$("#yourpublic2").val();
    var yourprivate2=$("#yourprivate2").val();
    var card_number2=$("#card_number2").val();
    var score_number2=$("#score_number2").val();

    if(yourpublic2==''){
        alert('您的公钥不能为空！');
        return false;
    }
    if(score_number2==''){
        alert('承兑额度不能为空！');
        return false;
    }
    if(card_number2==''){
        alert('银行卡号不能为空！');
        return false;
    }
    if(yourprivate2==''){
        alert('您的私钥不能为空！');
        return false;
    }
    else {
        $.ajax({
            type: "POST",//HTTP请求方法类型
            dataType: "json",//预期前端发给后端的数据类型
            url: "http://localhost:8080/api/applyscore",//url地址
            data: {
                'yourpublic2': yourpublic2, 'yourprivate2': yourprivate2,
                'card_number2': card_number2, 'score_number2': score_number2
            },
            success: function (result) {
                if (result.resultCode == 200) {
                    alert('承兑成功，请前往查询页面进行核实')
                }
                ;
            },
            error: function () {
                alert("承兑异常！");
            }
        });
    }
}


function ocultar_login_sign_up() {

document.querySelector('.cont_forms').className = "cont_forms";  
document.querySelector('.cont_form_sign_up').style.opacity = "0";               
document.querySelector('.cont_form_login').style.opacity = "0"; 

setTimeout(function(){
document.querySelector('.cont_form_sign_up').style.display = "none";
document.querySelector('.cont_form_login').style.display = "none";
},500);  
  
  }