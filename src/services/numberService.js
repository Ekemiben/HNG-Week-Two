import { isPrime, isPerfect, isArmstrong, digitSum } from '../utils/helper.js';

export const classify = (num) => {
    const properties = [];
    if (isArmstrong(num)) properties.push('armstrong');
    if (num % 2 === 0) properties.push('even');
    else properties.push('odd');

    return {
        number: num,
        is_prime: isPrime(num),
        is_perfect: isPerfect(num),
        properties,
        digit_sum: digitSum(num),
        fun_fact: `${num} is ${isArmstrong(num) ? "an Armstrong number" : "a normal number"}`
    };
};
