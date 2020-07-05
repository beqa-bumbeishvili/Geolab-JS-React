function idSearchFailed() {
    return 'მანქანა ვერ მოიძებნა';
}

function carNotFoundWithinPrice() {
    return 'სამუხაროდ ამ ფასში მანქანა ვერ მოიძებნა';
}

function incorrectPriceFormat() {
    return 'გთხოვთ შეიყვანოთ ფასი სწორ ფორმატში';
}

function averagePriceMessage(price: number) {
    return `ჩვენს საიტზე არსებული მანქანების საშუალო ღირებულება არის ${price}$`
}

function fillInputErrosMessage() {
    return 'გთხოვთ შეავსეთ მონაცემები';
}

function userNotFoundErrorMessage() {
    return 'მოცემული სახელით მომხმარებელი არ მოიძებნა';
}

function incorrectEmailFormat() {
    return 'იმეილი არის არასწორ ფორმატში, გთხოვთ გაასწოროთ';
}

function incorrectEmailOrPassword() {
    return 'პაროლი ან მეილი არასწორია';
}

function succsessLoginAlertMessage() {
    return 'სისტემაში შეხვედით წარმატებით, თუმცა გთხოვთ შეცვალოთ პაროლი';
}

function successLoginMessage() {
    return 'შეხვედით სისტემაში წარმატებით';
}

export default {
    idSearchFailed, carNotFoundWithinPrice, incorrectPriceFormat, averagePriceMessage, 
    fillInputErrosMessage, userNotFoundErrorMessage,  incorrectEmailFormat, incorrectEmailOrPassword,  
    succsessLoginAlertMessage, successLoginMessage
}