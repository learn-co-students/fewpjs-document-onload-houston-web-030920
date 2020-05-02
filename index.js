document.addEventListener('DOMContentLoaded', function(){
  updateDOM('text')
})

let updateDOM  = function(pId){
  let DOMElement = document.getElementById(pId)
  DOMElement.textContent = "This is really cool!"
}
