
const right=document.getElementById("right")
const left=document.getElementById("left")
const sli=document.getElementById('slide')
const barre_droite=document.getElementById("barre_droite");
var margePlus=0;
var flag=0;

left.addEventListener('click', ()=>{

    if(flag > 0)
    {
        margePlus += 500;
        flag --
    sli.style.marginLeft = margePlus +'px';
    barre_droite.style.width=(flag * (100/5))+'%';

    }
})

right.addEventListener('click', ()=>{

    if(flag < 5 )
    {margePlus -=500;
        flag ++
    sli.style.marginLeft = margePlus +'px';
    barre_droite.style.width=(flag *(100/5))+'%';

    }
})
