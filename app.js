let boxes= document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset");
let newGameBtn=document.querySelector("#new-game");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let count=0;
let turnX=true;//playerX,playerO

const winPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
  ];

boxes.forEach((box)=>{
    box.addEventListener("click", ()=>{
        count++;
        console.log("box was clicked");
        if(turnX){
            //playerX
            box.innerText ="X";
            
            turnX=false;
        }
        else{
            //playerO
            box.innerText="O";
            
            turnX=true;
        }

        box.disabled=true;
        if(count===9){
            showWinner("draw");
            
        }
        checkwinner();
    });
}); 

const resetGame=()=>{
    turnX=true;
    enableBoxes();
    msgContainer.classList.add("hide");
}

const disableBoxes= () =>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enableBoxes= () =>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

const showWinner=(winner)=>{
    if(winner==="draw"){
        msg.innerText="DRAW!, No one won.";
        msgContainer.classList.remove("hide");
        count=0;
    }
    else{
    msg.innerText=`Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    count=0;
    disableBoxes();
    }
}

const checkwinner = () =>{
    for(let pattern of winPattern){
    let pos1Val=boxes[pattern[0]].innerText;
    let pos2Val=boxes[pattern[1]].innerText;
    let pos3Val=boxes[pattern[2]].innerText;

    if(pos1Val !="" &&pos2Val != "" &&pos3Val !=""){
        if(pos1Val===pos2Val&&pos2Val===pos3Val){
            console.log("Winner");
            showWinner(pos1Val);
        }
    }
    }
}
newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);