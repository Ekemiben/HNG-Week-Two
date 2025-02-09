// export function classifyNumber(number) {
// 	if (!Number.isInteger(number)) {
// 		return {
// 			number,
// 			error: true,
// 		};
// 	}

// 	return {
// 		number,
// 		is_prime: isPrime(number),
// 		is_perfect: isPerfect(number),
// 		properties: getNumberProperties(number),
// 		digit_sum: getDigitSum(number),
// 		fun_fact: getFunFact(number),
// 	};
// }

// // Check if a number is prime
// function isPrime(n) {
// 	if (n < 2) return false;
// 	for (let i = 2; i * i <= n; i++) {
// 		if (n % i === 0) return false;
// 	}
// 	return true;
// }

// // Check if a number is perfect
// function isPerfect(n) {
// 	let sum = 1;
// 	for (let i = 2; i * i <= n; i++) {
// 		if (n % i === 0) {
// 			sum += i + (i !== n / i ? n / i : 0);
// 		}
// 	}
// 	return sum === n && n !== 1;
// }

// // Get number properties (Armstrong, odd/even)
// function getNumberProperties(n) {
// 	let properties = [];
// 	if (n % 2 === 0) {
// 		properties.push("even");
// 	} else {
// 		properties.push("odd");
// 	}
// 	if (isArmstrong(n)) {
// 		properties.push("armstrong");
// 	}
// 	return properties;
// }

// // Check if a number is an Armstrong number
// function isArmstrong(n) {
// 	let sum = 0,
// 		temp = n,
// 		digits = n.toString().length;
// 	while (temp > 0) {
// 		sum += Math.pow(temp % 10, digits);
// 		temp = Math.floor(temp / 10);
// 	}
// 	return sum === n;
// }

// // Calculate digit sum
// function getDigitSum(n) {
// 	return n
// 		.toString()
// 		.split("")
// 		.reduce((sum, digit) => sum + parseInt(digit), 0);
// }

// // Generate fun fact for Armstrong numbers
// function getFunFact(n) {
// 	if (isArmstrong(n)) {
// 		let digits = n.toString().split("");
// 		let power = digits.length;
// 		let sumExpression = digits.map((d) => `${d}^${power}`).join(" + ");
// 		return `${n} is an Armstrong number because ${sumExpression} = ${n}`;
// 	}
// 	return null;
// }








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
