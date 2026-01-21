// function atmFunc(input) {
//   if (input < 500) {
//     return "amount must be at least 500";
//   }
//   let eightpersontOfotal = input * 0.9;
//   let reminder = input - eightpersontOfotal;
//   let denominationCount = findthedenomination(eightpersontOfotal);
//   let denominationCountReminder = findthedenomination(reminder);
//   console.log(eightpersontOfotal);
//   for (let denom in denominationCountReminder) {
//     denominationCount[denom] += denominationCountReminder[denom];
//   }

//   let result = {};
//   for (let denom in denominationCount) {
//     if (denominationCount[denom] > 0) {
//       result[denom] = denominationCount[denom];
//     }
//   }
//   return result;
// }
// function findthedenomination(input) {
//   const denominations = [5000, 1000, 500, 100];
//   let result = {};
//   for (let denom of denominations) {
//     let count = Math.floor(input / denom);
//     input = input % denom;
//     result[denom] = count;
//   }
//   return result;
// }

// console.log(atmFunc(25000));

// function twoSum(nums, target) {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] + nums[j] === target) {
//         return [i, j];
//       }
//     }
//   }
//   return [];
// }
// console.log(twoSum([2, 7, 11, 15], 17))

// function isPalindrome(x)  {
//   if (x<0) return false
//  let numberInNumber=Array.from(x.toString())

//  for (let i = 0; i < numberInNumber.length; i++) {
//    if (numberInNumber[i]!==numberInNumber[numberInNumber.length-1-i]) return false
//  }
//  return true

// };
// console.log(isPalindrome(121))
// function addTwoNumbers(l1, l2) {
//   const joinl1 = [...l1].reverse().join("");
//   const joinl2 = [...l2].reverse().join("");
//   const Addnumber = Number(joinl1) + Number(joinl2);
//   const result = Array.from( Addnumber.toString()).reverse()
//   return result;
// }
// console.log(addTwoNumbers([2, 4, 3], [5, 6, 4]));

function findMedianSortedArrays(num1, num2) {
  let result = [...num1, ...num2];

  for (let i = 0; i < result.length; i++) {
    let minIndex = i;

    // find the smallest element in the unsorted part
    for (let j = i + 1; j < result.length; j++) {
      if (result[j] < result[minIndex]) {
        minIndex = j;
      }
    }

    // swap the found minimum with the first unsorted element
    [result[i], result[minIndex]] = [result[minIndex], result[i]];
  }

  return result;
}
console.log(findMedianSortedArrays([1, 3], [2, 4]));
