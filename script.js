// An array to keep every calculation record
const history = [];
/**
 * Records a calculation in the global history array.
 * @param {string} opName  - 'add', 'subtract', 'multiply', or 'divide'
 * @param {number} a       - first operand
 * @param {number} b       - second operand
 * @param {number} result  - result of the operation
 */
function recordCalc(opName, a, b, result) {
    history.push({
      operation: opName,
      operands: [a, b],
      result: result
    });
  }

/**
 * Returns a + b and logs it to history.
 * @param {number} a - first operand
 * @param {number} b - second operand
 * @returns {number} sum of a and b
 */
function add(a, b) {
  const result = a + b;
  recordCalc('add', a, b, result);
  return result;
}

/**
 * Returns a - b and logs it to history.
 * @param {number} a - first operand
 * @param {number} b - second operand
 * @returns {number} difference of a and b
 */
function subtract(a, b) {
  const result = a - b;
  recordCalc('subtract', a, b, result);
  return result;
}

/**
 * Returns a * b and logs it to history.
 * @param {number} a - first operand
 * @param {number} b - second operand
 * @returns {number} product of a and b
 */
function multiply(a, b) {
  const result = a * b;
  recordCalc('multiply', a, b, result);
  return result;
}

/**
 * Returns a / b, throws on division by zero, and logs to history.
 * @param {number} a - first operand
 * @param {number} b - second operand
 * @returns {number} quotient of a and b
 * @throws {Error} if b is zero
 */
function divide(a, b) {
  if (b === 0) {
    throw new Error('Division by zero is not allowed');
  }
  const result = a / b;
  recordCalc('divide', a, b, result);
  return result;
}