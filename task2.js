let input=document.querySelector("#input")
let addbtn=document.querySelector("#add")
let list=document.querySelector("ul")
let msg=document.querySelector("#span")
let head=document.querySelector(".head")


input.addEventListener("keyup",function(evnt){
if (evnt.target.value.length<3 || evnt.target.value.trim()=="") {
    msg.style.display="inline"
 
}
else{
    msg.style.display="none" 

}
})
 
let count=1;
addbtn.addEventListener("click",(event)=>{
    event.preventDefault();
let newlist =document.createElement("li")
newlist.classList.add("list-group-item")
newlist.classList.add("d-flex")
newlist.classList.add("justify-content-between")
newlist.classList.add("align-items-center")


head.innerHTML+=`<sup>${count}</sup>`;
count++;

let span =document.createElement("span")
span.classList.add("lead");
span.textContent=input.value;
let done=document.createElement("done")
done.textContent="Done"
done.classList.add("btn")
done.classList.add("btn-info")
let btn =document.createElement("button")
btn.classList.add("btn")
btn.classList.add("btn-danger")
btn.textContent="Delete"

let update=document.createElement("update")
update.classList.add("btn")
update.classList.add("btn-success")
update.textContent="Update"

newlist.append(span,done,btn,update)
list.append(newlist)
input.value=" "


    btn.addEventListener("click",function(){
        btn.parentElement.remove();
    });

done.addEventListener("click", function(){
    span.style.textDecoration="line-through"
});    
});

let clear= document.getElementById("clear")
    clear.addEventListener("click", ()=>{
        list.innerHTML=""
    })

   let counter

    



