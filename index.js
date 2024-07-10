// Code your solutions in this file
function countDown(num) {
    // Check if num is a positive integer
    if (num <= 0 || !Number.isInteger(num)) {
        console.log("Please enter a positive integer greater than 0.");
        return;
    }

    while (num >= 0) {
        console.log(num);
        num--;
    }
}

// Example usage:
countDown(10);
// Define the writeCards function
function writeCards(namesArray, eventName) {
    let thankYouMessages = [];
    for (let i = 0; i < namesArray.length; i++) {
        thankYouMessages.push(`Thank you, ${namesArray[i]}, for the wonderful ${eventName} gift!`);
    }
    return thankYouMessages;
}

// Example usage:
let names = ['Alice', 'Bob', 'Charlie'];
let event = 'birthday';

let messages = writeCards(names, event);
console.log(messages);

