import axios from 'axios';

// Function to check if a number is prime
const isPrime = (num) => {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
};

// Function to check if a number is an Armstrong number
const isArmstrong = (num) => {
    const digits = num.toString().split('').map(Number);
    const sum = digits.reduce((acc, digit) => acc + Math.pow(digit, digits.length), 0);
    return sum === num;
};

// Function to check if a number is a Perfect number
const isPerfect = (num) => {
    let sum = 1;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            sum += i;
            if (i !== num / i) sum += num / i;
        }
    }
    return num > 1 && sum === num;
};

// Function to check if a number is Odd or Even
const getOddEven = (num) => (num % 2 === 0 ? "even" : "odd");

// Function to calculate the sum of digits of a number
const getDigitSum = (num) => num.toString().split('').reduce((acc, digit) => acc + parseInt(digit), 0);

// Function to fetch a fun fact from Numbers API
const getFunFact = async (num) => {
    try {
        const response = await axios.get(`http://numbersapi.com/${num}/math?json`);
        return response.data.text || "No fun fact available.";
    } catch (error) {
        console.error("Error fetching fun fact:", error.message);
        return "No fun fact available.";
    }
};

// Main function to classify the number
const classifyNumber = async (num) => {
    const prime = isPrime(num);
    const armstrong = isArmstrong(num);
    const perfect = isPerfect(num);
    const digitSum = getDigitSum(num);
    const oddOrEven = getOddEven(num);

    let properties = armstrong ? ["armstrong", oddOrEven] : [oddOrEven];

    const funFact = await getFunFact(num);

    return {
        number: num,
        is_prime: prime,
        is_perfect: perfect,
        properties,
        digit_sum: digitSum,
        fun_fact: funFact,
    };
};

export default classifyNumber;
