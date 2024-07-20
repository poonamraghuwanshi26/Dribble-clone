var body=document.querySelector("body");
var cursor=document.querySelector("#cursor")
var h1=document.querySelector("#mid h1")

body.addEventListener("mousemove",function(dets){
    cursor.style.top=dets.y+"px"
    cursor.style.left=dets.x+"px"
    cursor.style.bottom=dets.y+"px"
    cursor.style.right=dets.x+"px"

})
h1.addEventListener("mouseenter",function(dets){
   cursor.style.scale=2

})

h1.addEventListener("mouseleave",function(dets){
    cursor.style.scale=1
 
 })

