let elS3Li = document.querySelectorAll('#sec03 li');
console.log(elS3Li);
function changeImg(self){
    for(let idx=0;idx<=elS3Li.length-1;idx++){
        elS3Li[idx].classList.remove('active');
    }
    self.classList.add('active');
}