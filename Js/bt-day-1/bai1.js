// Bài 1: Kiểm tra số nguyên tố

/*
                                                                
var x , isPrime = true                            
                                                                
                                                           
     var x                                      false            
       │                 ┌─────► i <= x**0.5  ───────► isPrime  
       │                 │           │                          
       │                 │           │true                      
       ▼       true      │           │                          
     x > 1    ─────────► │           ▼      true            
       │                 │      x%i === 0  ───────► !isPrime 
       │ false           │           │                         
       ▼                 │           │false                    
    !isPrime             │           │                         
                         │           ▼                         
                         └──────────i = i+1                     
                                                                

            true                                                
   isPrime ──────► SNT                                          
      │                                                         
      │                                                         
      │ false                                                   
      │                                                         
      ▼                                                         
 Không phải SNT                                                  
**/
var x = 1
var isPrime = true

if (x > 1) {
    for (var i = 2; i <= x**0.5; i++) {
        if (x % i === 0) {
            isPrime = false
            break
        }
    }
} else {
    isPrime = false
}

if (isPrime && x !== 1) {
    console.log("Là số nguyên tố")
} else {
    console.log("Không phải là số nguyên tố")
}