var Ctrl = document.querySelector('#Ctrl');
var body = document.querySelector('#body');
 body.addEventListener("click",() => {
     var state= Ctrl.checked;
     if (state) {
         body.setAttribute("class",'night')
     }
     else{
         body.removeAttribute("class",'night')
     }
 })