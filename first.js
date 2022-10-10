/**
 * @param {number[]} salary
 * @return {number}
 */
let average = function (salary) {
  let max = Math.max(...salary);
  let min = Math.min(...salary);
  let sum = 0;
  salary.splice(salary.indexOf(max), 1);
  salary.splice(salary.indexOf(min), 1);
  for (let x of salary) {
    sum = sum + x;
  }
  let average = sum / salary.length;
  return average;
};
