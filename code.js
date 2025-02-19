var pn;
function getNewHit(){
     pn=Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent=pn;
}
function makebubble(){
    var clutter="";
    for(var i=1;i<=120;i++){
        var rn=Math.floor(Math.random()*10);
                clutter+=  `<div class="bubble">${rn} </div>`;
    }
    document.querySelector("#pbtm").innerHTML=clutter;
}
var timer=60;
function Runtimer(){
    var timerint=setInterval(function(){
        if(timer>0){
            timer--;
            document.querySelector("#timerval").textContent=timer;
        }
        else{
            clearInterval(timerint);
            document.querySelector("#pbtm").innerHTML=`<h1>Game Over!!</h1>`;
        }
    },1000)
}
var score=0;
function inscore(){
    score +=10;
    document.querySelector("#scoreval").textContent=score;
}
document.querySelector("#pbtm").addEventListener("click",function(dets){
   var clickedNum=Number(dets.target.textContent);
   if(clickedNum==pn){
    inscore();
    makebubble();
    getNewHit();
   }
});
makebubble();
getNewHit();
Runtimer();
inscore();
