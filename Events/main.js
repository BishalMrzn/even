// btn.addEventListener("click",function(e){
//     alert("Hello You clicked the button 1")
// })
// btn.addEventListener("click",function(e){
//     alert("Hello You clicked the button 2")
// })
let x=function(e){
    alert("Clicked Button")
}
let b=function(e){
    alert("Clicked Not Button")
}
btn.addEventListener('click',x)
btn.addEventListener('click',b)
let a=prompt("Enter a value")
if(a=="2"){
    btn.removeEventListener('click',b)
}