export function classifyNumber(number) {
	if (!Number.isInteger(number)) {
		return {
			number,
			error: true,
		};
	}

	return {
		number,
		is_prime: isPrime(number),
		is_perfect: isPerfect(number),
		properties: getNumberProperties(number),
		digit_sum: getDigitSum(number),
		fun_fact: getFunFact(number),
	};
}

// Check if a number is prime
function isPrime(n) {
	if (n < 2) return false;
	for (let i = 2; i * i <= n; i++) {
		if (n % i === 0) return false;
	}
	return true;
}

// Check if a number is perfect
function isPerfect(n) {
	let sum = 1;
	for (let i = 2; i * i <= n; i++) {
		if (n % i === 0) {
			sum += i + (i !== n / i ? n / i : 0);
		}
	}
	return sum === n && n !== 1;
}

// Get number properties (Armstrong, odd/even)
function getNumberProperties(n) {
	let properties = [];
	if (n % 2 === 0) {
		properties.push("even");
	} else {
		properties.push("odd");
	}
	if (isArmstrong(n)) {
		properties.push("armstrong");
	}
	return properties;
}

// Check if a number is an Armstrong number
function isArmstrong(n) {
	let sum = 0,
		temp = n,
		digits = n.toString().length;
	while (temp > 0) {
		sum += Math.pow(temp % 10, digits);
		temp = Math.floor(temp / 10);
	}
	return sum === n;
}

// Calculate digit sum
function getDigitSum(n) {
	return n
		.toString()
		.split("")
		.reduce((sum, digit) => sum + parseInt(digit), 0);
}

// Generate fun fact for Armstrong numbers
function getFunFact(n) {
	if (isArmstrong(n)) {
		let digits = n.toString().split("");
		let power = digits.length;
		let sumExpression = digits.map((d) => `${d}^${power}`).join(" + ");
		return `${n} is an Armstrong number because ${sumExpression} = ${n}`;
	}
	return null;
}
