function idSearchFailed(){
    return 'მანქანა ვერ მოიძებნა';
}

function carNotFoundWithinPrice(){
    return 'სამუხაროდ ამ ფასში მანქანა ვერ მოიძებნა';
}

function incorrectPriceFormat(){
    return 'გთხოვთ შეიყვანოთ ფასი სწორ ფორმატში';
}

function averagePriceMessage(price){
    return `ჩვენს საიტზე არსებული მანქანების საშუალო ღირებულება არის ${price}$`
}

export {idSearchFailed, carNotFoundWithinPrice, incorrectPriceFormat, averagePriceMessage}