const cBraceLinter = (brcktStr) => {
  let isProperSyntax = false;

  if (brcktStr != null && brcktStr != undefined && brcktStr != "") {
    const [openCBraceCt, closeCBraceCt] = [
      brcktStr.split("{").length - 1,
      brcktStr.split("}").length - 1,
    ];

    if (openCBraceCt === closeCBraceCt) {
      const cBraceArray = brcktStr.split("").filter((e) => {
        return e === "{" || e === "}";
      });

      if (cBraceArray[0] === "{") {
        let expectedCloseBraceCt = 0;

        isProperSyntax = cBraceArray.every((e) => {
          e === "{" ? expectedCloseBraceCt++ : expectedCloseBraceCt--;

          return expectedCloseBraceCt >= 0;
        });
      }
    }
  } else {
    isProperSyntax = true;
  }

  return isProperSyntax;
};

export default cBraceLinter;
