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
  