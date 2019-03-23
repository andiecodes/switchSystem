console.log('code runs');

function getUserData(){    
          try { 	   
            var objUsr = JSON.parse(localStorage.getItem('mx.shell.userInfoCache'));  	   
            var usrname = (objUsr.FirstName + '.' +  objUsr.LastName + '@de.rhenus.com'); 
            var element = document.getElementsByName('loginfmt');
            if (element[0].value = '0') {
              element[0].value = usrname;
            }
          }    
          catch(err) { 			  
            console.log('No user data found in local storage. Error: ' + err.message); 			 }; 
          }; 


if(document.readyState === 'complete') 
{ 	  	  
  getUserData(); 	 
}


