function getIt(){
  alert('Hey!');
  return;
}

function frameIt(){
  className = 'tasty'
}
$(document).ready(function(){

$('p').on('click', getIt)
$('img').on('load', frameIt)
});
