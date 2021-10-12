let screen = document.getElementById("input");
let screenvalue = "";

let buttons = document.querySelectorAll("button");

for(let button of buttons){
    button.addEventListener("click", (e) => {
        let entered = e.target.innerText;
        if(entered == "clear" ){
            if(screenvalue != "")
            screenvalue = screenvalue.slice(0,-1);
        }
        else if(entered == "reset") screenvalue = "";
        else if(entered == "="){
            let ans = eval(screenvalue);
            screen.value =ans;
            screenvalue = ans.toString();
            return;
        }
        else{
            screenvalue+=entered;
        }
        screen.value = screenvalue;


    });
}
