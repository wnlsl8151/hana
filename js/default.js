let elNav = document.querySelector('nav');
function callNav(){
    elNav.classList.toggle('active');
}

let _imgKo = document.querySelector('#na-num01');
let _imgCn = document.querySelector('#na-num02');
let _imgUs = document.querySelector('#na-num03');
let _imgJp = document.querySelector('#na-num04');

function fnChange(sltValue){
    if(sltValue==1){
        _imgKo.style.display='block';
        _imgCn.style.display='none';
        _imgUs.style.display='none';
        _imgJp.style.display='none';
    }else if(sltValue==2){
        _imgKo.style.display='none';
        _imgCn.style.display='block';
        _imgUs.style.display='none';
        _imgJp.style.display='none';
    }else if(sltValue==3){
        _imgKo.style.display='none';
        _imgCn.style.display='none';
        _imgUs.style.display='block';
        _imgJp.style.display='none';
    }else{
        _imgKo.style.display='none';
        _imgCn.style.display='none';
        _imgUs.style.display='none';
        _imgJp.style.display='block';
    }
}

