console.log('code runs');

function getUserData(){    
          try { 	   
            var element = document.getElementsByName('loginfmt');
            if (element[0].value = '0') {
              element[0].value = 'andreas.stoecker@de.rhenus.com';
            }
          }    
          catch(err) { 			  
            console.log('Error: ' + err.message); 			 }; 
          }; 
if(document.readyState === 'complete') 
{ 	  	  
  getUserData(); 	 
}


