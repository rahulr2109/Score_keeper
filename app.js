const p1button=document.querySelector('#p1button');
const p2button=document.querySelector('#p2button');
const reset=document.querySelector('#reset');
const p1=document.querySelector('#p1');
const p2=document.querySelector('#p2');
//const dropDown=documnet.querySelectorAll('#dropDown');

let p1Score=0;
let p2Score=0;
let finalScore=3;
let isGameOver=false;

p1button.addEventListener('click',function(){
    if(!isGameOver){
        p1Score+=1;
        if(p1Score==finalScore){
            isGameOver=true;
            p1button.disabled=true;
            p2button.disabled=true;
            p1.classList.add('has-text-success');
            p2.classList.add('has-text-danger');
        }
        p1.textContent=p1Score;
    }
})

p2button.addEventListener('click',function(){
    if(!isGameOver){
        p2Score+=1;
        if(p2Score==finalScore){
            isGameOver=true;
            p2button.disabled=true;
            p1button.disabled=true;
            p2.classList.add('has-text-success');
            p1.classList.add('has-text-danger');
        }
        p2.textContent=p2Score;
    }
})

function resetbutton(){
    p1Score=0;
    p2Score=0;
    p1.textContent=0;
    p2.textContent=0;
    isGameOver=false;
    p1button.disabled=false;
    p2button.disabled=false;
    p1.classList.remove('has-text-success','has-text-danger');
    p2.classList.remove('has-text-success','has-text-danger');
}


reset.addEventListener('click',resetbutton)


dropDown.addEventListener('change',function(){
    finalScore=parseInt(this.value);
    resetbutton();
;})