let addTask = document.querySelector("#add_task");
let confirmm = document.querySelector("#confirm");
let container = document.querySelector(".container");
let clear = document.querySelector("#clear");

confirmm.addEventListener("click", function(){
    if(addTask.value){
        container.innerHTML +=  `<div class="message_container"><div class="wiadomosc">${addTask.value}</div><button class="complete">complete</button><button class="usun">delete</button></div>`;
        let usun = document.querySelectorAll(".usun");
        let wiadomosc = document.querySelectorAll(".wiadomosc");
        console.log(usun,wiadomosc);
        
            container.addEventListener("click", function(e){
                
                if(e.target.classList.contains("usun")){
                    e.target.parentElement.remove();
                }
                else if(e.target.classList.contains("complete")){
                    let wiadomosc_style = e.target.parentElement.childNodes[0];
                    wiadomosc_style.style.textDecoration = "line-through";
                }
                
            });
        }
    });
    
    
clear.addEventListener("click",function(){
    container.innerHTML = ``;
});

    //usun.addEventListener("click", function(){
    //         wiadomosc.remove();
    //         usun.remove();
    //     });
    
