// 1) დაწერეთ რიცხვის ფაქტორიალის გამომთვლელი პროგრამა


function factorial(num) {
    let result = 1;

    for (let i = 1; i <= num; i++) {
        result *= i;
    }

    return result;
}

// console.log(factorial(5)); //complexity O(n)


// 2) დაწერეთ ორი ფუნქცია ერთი ცელსიუსის ფარენგეიტში გადამყვანი და მე2 პირიქით. 

function convertToCelsius(num) {
    return (num - 32) * 5 / 9;
}

function convertToFahrenheit(num) {
    return num / 5 * 9 + 32;
}

// console.log(convertToCelsius(100)); // complexity O(1)
// console.log(convertToFahrenheit(30)); // complexity O(1)


// 3)* დაწერეთ ფუნქცია რომელიც იპოვის 2 რიცხვის უდიდეს საერთო გამყოფს (ევკლიდეს ალგორითმის გამოყენებით). 
// მოიძიეთ ინფო ევკლიდეს ალოგირთმზე. 

function eucledianAlgorithm(a, b) {
    if (a === 0 || b === 0) return;

    let biggest = a > b ? a : b;
    let smallest = a > b ? b : a;
    let remainder = biggest % smallest;

    if (remainder === 0) return smallest;

    while (remainder !== 0) {
        biggest = smallest;
        smallest = remainder;
        remainder = biggest % smallest;
    }

    return smallest;
}

// console.log(eucledianAlgorithm(210, 17));  //complexity O(log n) მგონი