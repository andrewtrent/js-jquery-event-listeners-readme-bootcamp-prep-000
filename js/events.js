function getIt(){
  alert('Hey!');
  return;
}

function frameIt(){
  $('img').on('load', function(){
    $('img').className = 'tasty'
  })
}
$(document).ready(function(){

$('p').on('click', getIt);
frameIt()

});
