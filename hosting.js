function atmFunc(input) {
  if (input < 500) {
    return "amount must be at least 500";
  }
  let eightpersontOfotal = input * 0.9;
  let reminder = input - eightpersontOfotal;
    let denominationCount = findthedenomination(eightpersontOfotal);
    let denominationCountReminder = findthedenomination(reminder);
    console.log(eightpersontOfotal);
    for (let denom in denominationCountReminder) {
      denominationCount[denom] += denominationCountReminder[denom];
    }
    
    let result = {};
    for (let denom in denominationCount) {
      if (denominationCount[denom] > 0) {
        result[denom] = denominationCount[denom];
      }
    }
    return result;

}
function findthedenomination(input) {
  const denominations = [5000, 1000, 500,100];
   let result = {};
  for (let denom of denominations) {
    let count = Math.floor(input / denom);
    input = input % denom;
    result[denom] = count;
  }
  return result;
}

console.log(atmFunc(25000));
