const history = []





function add(a,b) {
  const sum = a+b
  history.push({
    operator : "+",
    operand1 : a,
    operand2 : b,
    result : sum
  })
  return sum;
}
function subtract(a,b) {
  const sum = a-b
  history.push({
    operator : "-",
    operand1 : a,
    operand2 : b,
    result : sum
  })
  return sum;
}
function multiply(a,b) {
  const sum = a*b
  history.push({
    operator : "*",
    operand1 : a,
    operand2 : b,
    result : sum
  })
  return sum;
}
function divide(a,b) {
  const sum = a/b
  history.push({
    operator : "/",
    operand1 : a,
    operand2 : b,
    result : sum
  })
  return sum;
}