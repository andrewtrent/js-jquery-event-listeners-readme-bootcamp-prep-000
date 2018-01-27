function getIt(){
  alert('Hey!');
  return;
}

function frameIt(){
  $('img').on('load', function(){
    element.className = 'tasty'
  })
}
$(document).ready(function(){

$('p').on('click', getIt)

});
