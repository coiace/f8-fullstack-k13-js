// Bài 2: Kiểm tra số chính phương

var x = 28
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