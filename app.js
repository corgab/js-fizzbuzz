// stampare numeri da 1 a 100
// -prendere multipli di 3 - stampare fizz
// -prendere multipli di 5 - stampare buzz
// -multipli di entrambi - fizzbuzz

let n = 100

for(let i = 0; i < n; i++) {
    
    if(i % 3 === 0) {
        console.log("Fizz")
    } else if(i % 5 === 0) {
        console.log("Buzz")
    }
    else{
        console.log("FizzBuzz")
    }

}