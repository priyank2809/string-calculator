import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StringCalculatorService {

  constructor() { }

  add(numbers: string): number {
    if (numbers === '') {
      return 0;
    }

    let delimiter = ',';
    let numbersString = numbers;

    if (numbers.startsWith('//')) {
      const parts = numbers.split('\n');
      delimiter = parts[0].slice(2);
      numbersString = parts.slice(1).join('\n');
    }

    const nums = numbersString.split(new RegExp(`[${delimiter}\n]`));
    const parsedNums = nums.map(num => parseInt(num, 10));
    
    const negativeNumbers = parsedNums.filter(num => num < 0);
    if (negativeNumbers.length > 0) {
      throw new Error(`Negative numbers not allowed: ${negativeNumbers.join(', ')}`);
    }

    return parsedNums.reduce((sum, num) => sum + num, 0);
  }
}
