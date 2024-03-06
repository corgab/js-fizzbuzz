// stampare numeri da 1 a 100
// -prendere multipli di 3 - stampare fizz
// -prendere multipli di 5 - stampare buzz
// -multipli di entrambi - fizzbuzz

let n = 100

//html

const containerElement = document.querySelector(".container")


for(let i = 1 ; i <= n; i++) {
    
    if(i % 3 === 0 && i % 5 === 0) {
        const pElement = document.createElement("p")
        pElement.style.backgroundColor = "red"
        pElement.textContent = "FizzBuzz"
        containerElement.append(pElement)

    } else if(i % 3 === 0) {
        const pElement = document.createElement("p")
        pElement.style.backgroundColor = "green"
        pElement.textContent = "Fizz"
        containerElement.append(pElement)
    }

    else if(i % 5 === 0) {
        const pElement = document.createElement("p")
        pElement.style.backgroundColor = "yellow"
        pElement.textContent = "Buzz"
        containerElement.append(pElement)

    } else {
        const pElement = document.createElement("p")
        pElement.style.backgroundColor = "aqua"
        pElement.textContent = i
        containerElement.append(pElement)
        
    }
}

