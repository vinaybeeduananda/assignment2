//------------------------ assignment level 1------------------------

// 1.	Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle

function calculateCircumference(radius) {
    const circumference = 2 * Math.PI * radius;
    return circumference;
  }
console.log(calculateCircumference(10));

// 2.	Body mass index (BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.
// o	The same groups apply to both men and women.
// o	Underweight: BMI is less than 18.5
// o	Normal weight: BMI is 18.5 to 24.9
// o	Overweight: BMI is 25 to 29.9
// o	Obese: BMI is 30 or more

function calculateBMI(weight, height) {
    const bmi = weight / (height * height);
   return bmi;
  }
  console.log(calculateBMI(65, 1.75));
  let bmi = calculateBMI(65, 1.75);
  if (bmi < 18.5) {
console.log('the person is  Underweight');
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    console.log('the person is Normal weight');
  } else if (bmi >= 25 && bmi <= 29.9) {
    console.log('the person is Overweight');
  } else {
    console.log('the person is Obese');
  }

// -----------------------  assignment level 2-----------------------------

// 3.	Linear equation is calculated as follows: ax + by + c = 0. Write a function which calculates value of a linear equation, solveLinEquation.

function solveLinEquation(a, b, c) {
    if (a === 0 && b === 0) {
      return "Invalid input: a and b cannot both be 0";
    } else if (a === 0) {
      const y = -c / b;
      return { x: null, y };
    } else if (b === 0) {
      const x = -c / a;
      return { x, y: null };
    } else {
      const x = -c / a;
      const y = (-a / b) * x - (c / b);
      return { x, y };
    }
  }
  
  console.log(solveLinEquation(0, 4, -8));


//   4.	Write a function _name showDateTime which shows time in this format: 08/01/2020 04:08 using the Date object.

function showDateTime() {
    const now = new Date();
    const year = now.getFullYear();
    const month = ('0' + (now.getMonth() + 1)).slice(-2);
    const day = ('0' + now.getDate()).slice(-2);
    const hour = ('0' + now.getHours()).slice(-2);
    const minute = ('0' + now.getMinutes()).slice(-2);
    const formattedDate = `${day}/${month}/${year} ${hour}:${minute}`;
    console.log(formattedDate);
  }
  showDateTime();

// 5.	Declare a function _name swapValues. This function swaps value of x to y.
  function swapValues(x, y) {
    const temp = x;
    x = y;
    y = temp;
    console.log(`After swapping: x = ${x}, y = ${y}`);
}
  let x = 10;
let y = 20;
console.log(`Before swapping: x = ${x}, y = ${y}`);
swapValues(x, y);

// 6.	Declare a function _name userIdGenerator. When this function is called it generates seven character id. The function return the id.


function userIdGenerator() {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let id = '';
    for (let i = 0; i < 7; i++) {
      id += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return id;
  }
  const id = userIdGenerator();
console.log(id);

// ----------------------assignment level 3-----------------

// 7.	Write a function called isPrime, which checks if a number is prime number.

function isPrime(number) {
    // Check if number is less than 2, which is not a prime number
    if (number < 2) {
      return false;
    }
  
    // Check if the number is divisible by any integer between 2 and the square root of the number
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false;
      }
    }
  
    // If the number is not divisible by any integer between 2 and the square root of the number, it is a prime number
    return true;
  }
  console.log(isPrime(2));

//   8.	Write a function which checks if all items are unique in the array.

  function checkUnique(array) {
    const uniqueValues = new Set(array);
    return uniqueValues.size === array.length;
  }
  console.log(checkUnique([1, 2, 3, 4, 5]));

//   9.	Write a function which checks if all the items of the array are the same data type.

  function checkSameType(array) {
    const dataType = typeof array[0];
    for (let i = 1; i < array.length; i++) {
      if (typeof array[i] !== dataType) {
        return false;
      }
    }
    return true;
  }
  console.log(checkSameType([1, 2, "three", 4, 5]));