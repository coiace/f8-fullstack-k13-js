// Bài 1: Kiểm tra số nguyên tố

var x = 2
var isPrime = true

if (x > 1) {
    for (var i = 2; i <= x**0.5; i++) {
        if (x % i === 0) {
            isPrime = false
            break
        }
    }

    if (isPrime) {
        console.log("Là số nguyên tố")
    } else {
        console.log("Không phải là số nguyên tố")
    }
} else {
    console.log("Không phải là số nguyên tố")
}
