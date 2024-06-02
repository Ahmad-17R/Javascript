let boxes=document.querySelectorAll(".box");
let resetBTN=document.getElementById("reset_btn");
let NewGame=document.querySelector("#New");
let msg=document.querySelector("#msg");
let result=document.querySelector(".msg_container");
let turn0=true;

let WinPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
       if(turn0){box.innerText="o";
    turn0=false;}
       else{box.innerText="x";turn0=true;} 
       box.disabled=true;
       CheckWinner();
});
});

const CheckWinner=()=>{
    for(let pattern of WinPatterns){
        let PosVal1 =boxes[pattern[0]].innerText;
        let PosVal2 =boxes[pattern[1]].innerText;
        let PosVal3 = boxes[pattern[2]].innerText;

        if(PosVal1!="" && PosVal2!="" && PosVal3!=""){
            if(PosVal1===PosVal2 && PosVal2===PosVal3){
                console.log("Winner");
                ShowWinner(PosVal1);
            }
        }
    }
}

const ShowWinner=(winner)=>{
    msg.innerText=`Congradulations, ${winner}`;
    result.setAttribute("id","show");
    boxes.forEach((box)=>{
        box.disabled=true;
    })
}



NewGame.addEventListener("click",()=>{
    turn0=true;
    boxes.forEach((box)=>{
        box.innerText="";
        box.disabled=false;
    });
    result.setAttribute("id","hide");
    });

    resetBTN.addEventListener("click", ()=>{
        turn0 = true;
        boxes.forEach((box) => {
            box.innerText = "";
            box.disabled = false;
        });
        result.setAttribute("id", "hide");
    });
    