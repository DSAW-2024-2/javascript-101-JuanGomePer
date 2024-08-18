// Sum of Two Numbers
function sum(a, b) {
  if(typeof a === "number" & typeof b === "number"){
    return a+b;
  }else{
    console.log("Los datos de entrada no son adecuados");
  }
}

// Factorial of a Number
function factorial(n) {
  if(typeof n !== "number"){
    return "Los datos de entrada no son adecuados";
  }

  if (n === 0 || n === 1) {
    return 1;
  } else {
      return n * factorial(n - 1);
  }
}

// Find the Largest Number
function findLargest(arr) {
  if (!Array.isArray(arr)) {
    return "Los datos de entrada no son adecuados";
  }

  if (!arr.every(element => typeof element === 'number')) {
    return "Los datos de entrada no son adecuados";
  }
  return Math.max(...arr);
}

// Count Vowels in a String
function countVowels(str) {
  if (typeof str !== 'string') {
    return "Los datos de entrada no son adecuados";
  }

  const vocales = 'aeiouAEIOU';
  let cuenta = 0;

  for (let char of str) {
      if (vocales.includes(char)) {
        cuenta++;
    }
  }
  return cuenta;
}

// Check if a Number is Prime
function isPrime(n) {
  if (n <= 1) return false;
    if (n <= 3) return true;
    if (n % 2 === 0 || n % 3 === 0) return false;

    for (let i = 5; i * i <= n; i += 6) {
        if (n % i === 0 || n % (i + 2) === 0) return false;
    }
    return true;
}

module.exports = {
  sum,
  factorial,
  findLargest,
  countVowels,
  isPrime,
};
