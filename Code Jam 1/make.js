function make(num) {
  let curr = [+num];

  return function f() {
      if (typeof arguments[0] == 'function') {
        return curr.reduce(arguments[0]);
      }

      for (let i = 0; i < arguments.length; i++) {
        if (typeof +arguments[i] == 'number') curr.push(+arguments[i]);
      }

      return f;
  };
}

function sum(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

function mul(a, b) {
    return a * b;
}

function div(a, b) {
    return a / b;
}
make(15)('34', 21, '666', true, false)(41)(sum);
make(15)(34, 21, 666)(41)(sum);
make()(sum);
make(5)(-1)(div);
make(1)(2, 3, 4)(mul);
make(22)(2, 8, 4)(sub);
