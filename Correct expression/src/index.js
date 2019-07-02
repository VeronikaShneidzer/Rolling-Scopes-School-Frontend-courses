module.exports = function check(str, bracketsConfig) {
  if (str.length % 2 != 0) return false;

  let config = bracketsConfig;
  let openBrackets = '';
  let closeBrackets = '';
  let openAndClose = '';
  let stack = '';

  for (let i = 0; i < bracketsConfig.length; i++) {
    if (bracketsConfig[i][0] === bracketsConfig[i][1]) {
      openAndClose += bracketsConfig[i][0]
    }
    else {
      openBrackets += bracketsConfig[i][0];
      closeBrackets += bracketsConfig[i][1];
    }
  }

  for (let i = 0; i < str.length; i++) {
    if (openBrackets.includes(str[i])) {
      stack += str[i];
    }
    else if (closeBrackets.includes(str[i])) {
      if (stack[stack.length - 1] == openBrackets[closeBrackets.indexOf(str[i])] && stack.length - 1 >= 0) {
        stack = stack.slice(0, -1);
      }
      else return false;
    }
    else if (openAndClose.includes(str[i])) {
      if (stack[stack.length - 1] == str[i]) {
        stack = stack.slice(0, -1);
      }
      else stack += str[i];
    }
  }

  return (stack.length == 0);
}
