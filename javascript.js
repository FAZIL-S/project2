let mm={
    wins:0,
    loss:0.
    
};
document.querySelector('.dc').innerHTML=`WINS:${mm.wins}
LOSS:${mm.loss}`;
document.querySelector('.dc').classList.add('win');

function ran(a,b){
    
    let mat=Math.random();
    if(mat>0.5){
        
        document.querySelector('.sc')
        .innerHTML=`THE FLIP WAS ${a}.YOU WON`;
        document.querySelector('.sc').classList.add('lose');

        mm.wins+=1;}

    else if(mat<0.5){
       
        document.querySelector('.sc')
        .innerHTML=`THE FLIP WAS ${b}.YOU LOST`;
        document.querySelector('.sc').classList.add('lose');
        mm.loss+=1;
    }
    document.querySelector('.dc').innerHTML=`WINS:${mm.wins}
    LOSS:${mm.loss}`;

}
