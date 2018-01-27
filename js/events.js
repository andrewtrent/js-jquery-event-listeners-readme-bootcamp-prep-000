function getIt(){
  alert('Hey!');
  return;
}

function submitIt(){
  $('img').on('load', function(){
    this.className = 'tasty'
  })
}
function pressIt(){
  alert('Your form is going to be submitted now.')
}
$(document).ready(function(){

$('p').on('click', getIt);
frameIt()
$('form').on('submit', submitIt)
});
