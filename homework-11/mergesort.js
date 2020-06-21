function mergeSort(array) {             // შემოვიდა მასივი [4,3,2,1]
    if (array.length === 0) return;
    if (array.length === 1) return array;

    let middleIndex = parseInt(array.length / 2); // შუა ინდექსი - 2
    let leftSide = array.slice(0, middleIndex);   // მარცხენა მხარე [4,3]
    let rightSide = array.slice(middleIndex, array.length);  // მარჯვენა მხარე [2,1]

    return merge(mergeSort(leftSide), mergeSort(rightSide));
}

function merge(leftSide, rightSide) { // შემოვიდა ორი მასივი [3,4] და [1,2]
    let result = [];
    let i = 0;
    let j = 0;

    while (i < leftSide.length && j < rightSide.length) {
        if (leftSide[i] < rightSide[j]) {  // შეადარა 3 და 1 ერთმანეთს
            result.push(leftSide[i]);    // შედეგში ჩაამატე მარცხენა მასივის მიმდინარე ელემენტი 
            i++;                        // გაზარდე მარცხენა მასივის იტერაციის ინდექსი
        }
        else {
            result.push(rightSide[j]); // შედეგში ჩაამატე მარჯვენა მასივის მიმდინარე ელემენტი
            j++;                       // გაზარდე მარჯვენა მასივის იტერაციის ინდექსი
        }
    }

    let lastElement = leftSide.slice(i).concat(rightSide.slice(j))

    return result.concat(lastElement);
}

let inputArray = [4, 3, 2, 1];
console.log(mergeSort(inputArray));