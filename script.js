const textinput= document.getElementById("input-box");
const applist= document.getElementById("app list");
function ToAdd(){
    if(textinput.value===''){
        alert("Your list is empty!");
    }
    else{
        let li= document.createElement("li")
        li.innerHTML =textinput.value;
        applist.appendChild(li); 
        let span= document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span)
       }
       textinput.value='';
       datareload()
}
applist.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("marked");
        datareload()
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        datareload()
    }
}, false);
function datareload(){
    localStorage.setItem("db",applist.innerHTML);
}
function whenreload(){
    applist.innerHTML= localStorage.getItem("db");
}
whenreload()