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
  $('form input').on('keydown', function(){
    if(key.which == 70){
      alert('');
    }
  })
}

function submitIt(){
  $('form').on('submit', function(){
  alert('Your form is going to be submitted now.')
  })
}
$(document).ready(function(){

$('p').on('click', getIt);
frameIt()
submitIt()
});
