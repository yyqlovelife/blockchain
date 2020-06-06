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
        alert('转赠成功，请尽快通知您的好友')
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