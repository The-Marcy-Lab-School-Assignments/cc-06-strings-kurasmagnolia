//write your code here
// Question 1
const reverseString = (string) => {
  let finalStr = "";
  for (let i = string.length - 1; i >= 0; i--) {
    finalStr += string[i];
  }
  return finalStr;
};

console.log("\n");
console.log("Question 1:");
console.log(reverseString("hello"));

// Question 2
const reverseZigZagString = (string) => {
  let finalOutput = "";
  for (let i = string.length - 1; i >= 0; i--) {
    if (i % 2 !== 0) {
      finalOutput += string[i].toUpperCase();
    } else {
      finalOutput += string[i].toLowerCase();
    }
  }
  return finalOutput;
};

console.log("\n");
console.log("Question 2:");
console.log(reverseZigZagString("hello"));
