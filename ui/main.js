console.log('Loaded!');

 var button=document.getElementById('counter');
 
 button.onClick()= function() {
  //make a request to the counter endpoint
  
  var  request= new  XMLHttpRequest();
  
  request.onreadystatechange=function()
  {
      if(request.readyState===XMLHttpRequest.DONE)
      {
          
          if(request.status===200)
          {
            var counter=request.response.Text;
          
    
     var span=document.getElememyById('count');
     
     span.innerHTML=counter.toString();
    
    request.open('GET',"http://sagarsarkar043.imad.hasura-app.io/counter",true);
    
    request.send(NULL);
    
    
              
          }
      }
      
  }
  // and capture the response and store it in a variable
 
 //render the variable to the nearest correct span
     
     counter = counter + 1;
     
     
     
 }
 
 
 //submit name
  
  var nameInput=document.getElementById("name");
  
  var name=nameInput.value;
  
  var submit=document.getElementById("submit");
  
  submit.oneclick=function(){
 //make request to the server and send the name
 //capture the list of names and render it in a list
 
 
  };
  var list='';
  
  for(var i=0;i<names.length;i++)
  {
      list +='<li>' +names[i]+'</li>';
      
      
  }
 
 var ul=document.getElementById('namelist');
 
 ul.innerHTML=list;
 
  