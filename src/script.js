function GoToHome() {
  window.location = "index.html"
}

function GoToFactorize() {
  window.location = "factorize.html"
}

function GoToFind() {
  window.location = "find.html"
}

let running = false
let primes = [2]
let currentNumber = 3

function StartGenerator() {
  //Get the primes from the database - Load them to "primes" array - If more than two primes is present, set current number as last prime, and remove it
  //If it can't get it set 2 as prime and start

  running = true

  generatePrimes();
}

async function generatePrimes() {
  if (!running) {
    return
  }

  let isPrime = true;
  
  //Set <p> to "currentNumber"
  for (let i = 0; i < primes.length; i++) {
    if (!isPrime) {
      break;
    }

    let number = primes[i];

    while (primes[i] * number <= currentNumber && isPrime) {
      if (primes[i] * number != currentNumber) {
        number++;
      } else {
        isPrime = false;
      }
    }  
  }

  if (isPrime && currentNumber != 2) {
    console.log(currentNumber)
    primes.push(currentNumber);
  }

  isPrime = true;
  currentNumber += 2;

  await new Promise(resolve => setTimeout(resolve, 0))
  generatePrimes();
}

function StopGenerator() {
  running = false

  //Output to database - Just a makeshift version:
  let output = ""
  
  primes.forEach(prime => {
    output += prime + "\n"
  });

  output += currentNumber

  console.log(output)
}
