export const properPair = "{}"; // true 1 1
export const multProperPair = "{}{}"; // true 2 2
export const nestedProperPair = "{{}}"; // true 2 2
export const properPairWithReversedBrckts = "{}}{"; // false 2 2
export const reversedBrckts = "}{"; // false 1 1
export const tooFewClosingBrckts = "{{}"; // false 2 1
export const tooFewOpeningBrckts = "{}}"; // false 1 2

export const properPairAlphaNum = "a{b 09d 17}e"; // true 1 1
export const multProperPairAlphaNum = "979{7cd}e{a6c}d"; // true 2 2
export const nestedProperPairAlphaNum = "a2{1b{5c}d}e0"; // true 2 2
export const properPairWithReversedBrcktsAlphaNum = "1{asdf}f}32{5klj"; // false 2 2
export const reversedBrcktsAlphaNum = " }41f4{81u ip"; // false 1 1
export const tooFewClosingBrcktsAlphaNum = "joji{1{5 2y}tt"; // false 2 1
export const tooFewOpeningBrcktsAlphaNum = "0kas{a   sdf}t2 3}09"; // false 1 2

export const randCharsProperPair =
  "nf912RN) f|in2!0~+*98f 0j)^@^)(_){||f0hf *(H901u!)(*$^&|!@5~/-*6198!@}$033a3-*/^&*!$5sd&)1f68asd"; // true 1 1
