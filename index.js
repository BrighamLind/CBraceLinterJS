import * as dummyData from "./dummy_data";
import cBraceLinter from "./c_brace_linter";

// temp test
console.log(cBraceLinter(dummyData.properPair)); // true
console.log(cBraceLinter(dummyData.multProperPair)); // true
console.log(cBraceLinter(dummyData.nestedProperPair)); // true
console.log(cBraceLinter(dummyData.properPairWithReversedBrckts)); // false
console.log(cBraceLinter(dummyData.reversedBrckts)); // false
console.log(cBraceLinter(dummyData.tooFewClosingBrckts)); // false
console.log(cBraceLinter(dummyData.tooFewOpeningBrckts)); // false
console.log(cBraceLinter(dummyData.randCharsProperPair)); // true

console.log(cBraceLinter(dummyData.properPairAlphaNum)); // true
console.log(cBraceLinter(dummyData.multProperPairAlphaNum)); // true
console.log(cBraceLinter(dummyData.nestedProperPairAlphaNum)); // true
console.log(cBraceLinter(dummyData.properPairWithReversedBrcktsAlphaNum)); // false
console.log(cBraceLinter(dummyData.reversedBrcktsAlphaNum)); // false
console.log(cBraceLinter(dummyData.tooFewClosingBrcktsAlphaNum)); // false
console.log(cBraceLinter(dummyData.tooFewOpeningBrcktsAlphaNum)); // false
