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

function welcomeUser(name){
    console.log(`welcome dear${name}`);
}
