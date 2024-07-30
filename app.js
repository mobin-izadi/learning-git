function isLogin(user){
    return true
}

function login(user){
    if(user.name==='mobin' && user.password===123456){
        return true
    }else{
        return false
    }
}

function forgetPassword(email){
    if(email ==='mobinizadi@gmail.com'){
        console.log('send password to your email');
    }else{
        console.log('not found user');
    }
}