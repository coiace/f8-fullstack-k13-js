// Bài 2: Kiểm tra số chính phương
/* 
var x , isPrime = false          
                                                 
                                 false           
           ┌─────► i <= x**0.5  ───────► isPrime 
           │           │                         
           │           │true                     
           │           │                         
           │           ▼       true              
 for(i=0)  │      i**2 === x ───────► !isPrime   
           │                                     
           │           │                         
           │           │false                    
           │           │                         
           │           ▼                         
           └───────── i++                        
                                                 
            true                  
    isPrime ──────► SCP            
        │                           
        │                           
        │ false                     
        │                           
        ▼                           
     Không phải SCP                                                                 
**/
var x = 1
var isPrime = false
for (var i = 0; i <= x**0.5; i++) {
    if(i**2 === x) {
        isPrime = true
    }
}
if (isPrime) {
    console.log('Số chính phương')
} else {
    console.log('Không phải là số chính phương')
}