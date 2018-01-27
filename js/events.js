function getIt(){
  alert('Hey!');
  return;
}

function frameIt(){
  $('img').on('load', function(){
    this.className = 'tasty'
  })
}
function pressIt(){
  
}
$(document).ready(function(){

$('p').on('click', getIt);
frameIt()

});
