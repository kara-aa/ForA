// let textArea = document.querySelector('textarea');
let msg = prompt('Введите значение:');
let p = document.querySelector('p');

p.insertAdjacentHTML('afterbegin', msg);

let text = p.textContent;

//Function for set full info
(function setFullInfo(funcForCookie, funcForToken, funcForProxy, funcForUserAgent, funcForPassword) {

    //For cookies
    let tagForCookie = document.getElementById('cookie');
    tagForCookie.insertAdjacentHTML('beforeend', getCookie(text));

    //For token
    let tagForToken = document.getElementById('token');
    tagForToken.insertAdjacentHTML('beforeend', getToken(text));

    //For proxy
    let tagForProxy = document.getElementById('proxy');
    tagForProxy.insertAdjacentHTML('beforeend', getProxy(text));

    //For User agent
    let tagForUserAgent = document.getElementById('user-agent');
    tagForUserAgent.insertAdjacentHTML('beforeend', getUserAgent(text));

    //For password
    let tagForPassword = document.getElementById('password');
    tagForPassword.insertAdjacentHTML('beforeend', getPassword(text));

    //For full info
    let tagForFullInfo = document.getElementById('full-info');
    tagForFullInfo.insertAdjacentHTML('beforeend', `P1 :: ${getToken(text)} :: ${getUserAgent(text)} :: http//${getProxy(text)} :: ${getCookie(text)} :: ${getPassword(text)}`)

    return 0;
})(getCookie(text), getToken(text), getProxy(text), getUserAgent(text), getPassword(text));

//COOKIES
//Function for finding cookie
function getCookie(text) {
    let cookie = text.match(/\[.+\]/)[0];
    return cookie;
}

//TOKEN
//Function for finding token
function getToken(text) {
    let token = text.match(/EAAB(\w*|\d*)+/);
    return token;
}

//PROXY
//Function for finding proxy
function getProxy(text) {
    let proxy = text.match(/(\d+\.)+\d+\:\d+\:proxyes\d+\:(\d|\w)+/)[0];
    return proxy;
}

//USER AGENT
//Function for finding user agent
function getUserAgent(text) {
    let userAgent = text.match(/Mozilla\/5.0.*(Firefox|Safari|OPR|Chrome)\/(\d+.)+\d+\W/)[0];
    return userAgent;
}

// PASSWORD
//Function for finding password
function getPassword(text) {
    let password = text.match(/\b(?!BBBB)([A-Za-z0-9]){6,}(?!@gmail)\b/)[0];
    return password;
}