const add = a => b => a + b;
const double = num => num * 2;
const square = num => num * num;

const validateNumbers = a => {
  const num = Number(a);
  return num === NaN ? 0 : num;
};

const five = add(2)(3);
const add5 = add(5);
const nine = add5(4);

const four = double(2);

const isNum = validateNumbers(four);

if (isNum) console.log("good job!");
else console.log("nope...");
