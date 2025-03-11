/**                                                       
    var  arr = [9, 8, 7, 6, 5, 4]                                                                                                              
    for i=0,i<arr.length                                                
            │      ┌──────────────────────────────────────────────┐     
            │      │   for j=0,j<arr.length-1-i                   │     
            │      │              │                               │     
            │      │              ▼                               │     
            │      │  ┌─────────────────────────────────────────┐ │     
            │      │  │     if(arr[j]>arr[j+1] ────► do nothing │ │     
            └─ ───►│  │            |            no              │ │     
                   │  │            │yes                         │ │     
                   │  │            ▼                            │ │     
                   │  │                                         │ │     
                   │  │ Đổi chỗ arr[j] và arr[j+1]              │ │     
                   │  │                                         │ │     
                   │  └─────────────────────────────────────────┘ │     
                   └──────────────────────────────────────────────┘     
    Sau khi chạy hết vòng for(j) khi i=0 thì:                           
       phần tử lớn nhất sẽ chuyển xuống cuối mảng [8, 7, 6, 5, 4, 9]    
    Khi i=1 (j<4) : [7, 6, 5, 4, 8, 9]                                  
    Khi i=2 (j<3) : [6, 5, 4, 7, 8, 9]                                  
    Khi i=3 (j<2) : [5, 4, 6, 7, 8, 9]                                  
    Khi i=4 (j<1) : [4, 5, 6, 7, 8, 9]                                  
    Khi i=5 (j<0) : kết túc vòng lặp                                                                                                           
 */
var array = [3, 6, 1, 9, 4, 7, 2, 8, 5]
function increase(arr) {
    for (var i = 0; i < arr.length - 1; i++) {
        for (var j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) { 
                var tmp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = tmp;
                console.log(arr);
            }
        }
    }
    console.log(arr);
}
increase(array)
