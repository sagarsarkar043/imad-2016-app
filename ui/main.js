console.log('Loaded!');

 var button=document.getElementbyId('counter');
 
 button.onClick()= function() {
  //make a request to the counter endpoint
  // and capture the response and store it in a variable
 
 //render the variable to the nearest correct span
     
     counter = counter + 1;
     
     var span=document.getElememybyId('counter');
     
     span.innerHTML=counter.toString();
     
     
 }