let btns=document.querySelectorAll(".btn");
let newgame=document.querySelector(".newgame");
let msgcontainer=document.querySelector(".hide");
let msg= document.querySelector("#msg")
let reset=document.querySelector(".reset");

const winpatten=[
    [3,4,5],
    [6,7,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [0,1,2],
    [0,3,6],
    [0,4,8],
];



let turn0=true;
btns.forEach((btn)=>{
    btn.addEventListener('click',()=>{
        if(turn0){
            btn.innerText="O";
            turn0=false;
        }else{
            btn.innerText="X"
            turn0=true;
        }
        btn.disabled=true;

        checkWinner();
    })
})

const checkWinner=()=>{
    for(let patten of winpatten){

        let post1val=btns[patten[0]].innerText;
        let post2val=btns[patten[1]].innerText;
        let post3val=btns[patten[2]].innerText;

        if(post1val!="" && post2val!="" && post3val!=""){
            if(post1val=== post2val && post2val=== post3val){
                showwinner(post1val);

            }
        }
    }
}

const showwinner=(winner)=>{
    msg.innerText= `Congratulations, winner is ${winner}`;
    msgcontainer.classList.remove("hide")
    reset.disabled=true;
    disablebtn();
}

const disablebtn=()=>{
    for(let btn of btns ){
        btn.disabled=true;
    }
}
const enablebtn=()=>{
    for(let btn of btns ){
        btn.disabled=false;
        btn.innerText="";
    }
}

const resetGame=()=>{
    turn0=true;
    enablebtn();
}

reset.addEventListener("click",()=>{
    resetGame();
})

newgame.addEventListener("click",()=>{
    msgcontainer.classList.add("hide");
    resetGame();
    reset.disabled=false;
})

