function getIt(){
  alert('Hey!');
  return;
}

function frameIt(){
  $('img').on('load', function(){
    this.className = 'tasty'
  })
}
function submitIt(){
  alert('Your form is going to be submitted now.')
}
$(document).ready(function(){

$('p').on('click', getIt);
frameIt()
$('form').on('submit', submitIt)
});
