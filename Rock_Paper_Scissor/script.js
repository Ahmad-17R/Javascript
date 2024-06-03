let userScore=document.querySelector("#user-score");
let Comp_Score=document.querySelector("#comp-score");
let Result_Msg=document.querySelector("#msg");
let msg_container=document.querySelector("#msg");
let Moves=['Rock','Paper','Scissors'];

let UserNum=0;
let CompNum=0;

let choices=document.querySelectorAll(".choice");

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        let UserMove=choice.getAttribute("id");
        let CompMove=getRandomString(Moves);
        let result=GiveResult(UserMove,CompMove);
        if(result=="Draw"){
            Result_Msg.innerText="It is a Draw";
            msg_container.style.backgroundColor="Purple";
        }
        else if(result=="User"){
            Result_Msg.innerText="Congrads ,You Win";
            UserNum+=1;
            userScore.innerText=UserNum;
            msg_container.style.backgroundColor="Green";
        }
        else if(result=="Computer"){
            Result_Msg.innerText="Computer won";
            msg_container.style.backgroundColor="Red";
            CompNum+=1;
            Comp_Score.innerText=CompNum;
        }
    })
})


const getRandomString=(Moves)=> {
  const randomIndex = Math.floor(Math.random() * Moves.length);
  return Moves[randomIndex];
}

const GiveResult=(UserMove,CompMove)=>{
    if(UserMove==CompMove){
        return "Draw";
    }
    else if(UserMove=="Rock" && CompMove=="Paper"){
        return "Computer";
    }
    else if(UserMove=="Rock" && CompMove=="Scissors"){
        return "User";
    }
    else if(UserMove=="Paper" && CompMove=="Rock"){
        return "User";
    }
    else if(UserMove=="Paper" && CompMove=="Scissors"){
        return "Computer";
    }
    else if(UserMove=="Scissors" && CompMove=="Rock"){
        return "Computer";
    }
    else if(UserMove=="Scissors" && CompMove=="Paper"){
        return "User";
    }
}