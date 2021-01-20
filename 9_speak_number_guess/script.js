const randomNumber = generateRandomNumber()
console.log(randomNumber)

function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
  }