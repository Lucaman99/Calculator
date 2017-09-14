//Algebra Calculator Version 1.3
var answerlist = []
var input = prompt('Enter an equation');
if (input === "ANSWERS") {
  console.log(answerlist)
}
else {
var left = input.substring(0, input.indexOf('='));
var right = input.substring(input.indexOf('=') + 1, input.length);
var right = right + ' ';
var cof1 = [];
var cof2 = [];
var cof3 = [];
var cof4 = [];
var cof5 = [];
var cof6 = [];
function front(x, y, z, p) {
  for (var i = 0; i < x.length; i++) {
    if (
      x.charAt(i) === 'a' && x.charAt(i + 1) === '^' ||
      x.charAt(i) === 'b' && x.charAt(i + 1) === '^' ||
      x.charAt(i) === 'c' && x.charAt(i + 1) === '^' ||
      x.charAt(i) === 'd' && x.charAt(i + 1) === '^'  ||
      x.charAt(i) === 'e' && x.charAt(i + 1) === '^'  ||
      x.charAt(i) === 'f' && x.charAt(i + 1) === '^'  ||
      x.charAt(i) === 'g' && x.charAt(i + 1) === '^'  ||
      x.charAt(i) === 'h' && x.charAt(i + 1) === '^'  ||
      x.charAt(i) === 'i' && x.charAt(i + 1) === '^'  ||
      x.charAt(i) === 'j' && x.charAt(i + 1) === '^'  ||
      x.charAt(i) === 'k' && x.charAt(i + 1) === '^'  ||
      x.charAt(i) === 'l' && x.charAt(i + 1) === '^'  ||
      x.charAt(i) === 'm' && x.charAt(i + 1) === '^'  ||
      x.charAt(i) === 'n' && x.charAt(i + 1) === '^'  ||
      x.charAt(i) === 'o' && x.charAt(i + 1) === '^'  ||
      x.charAt(i) === 'p' && x.charAt(i + 1) === '^'  ||
      x.charAt(i) === 'q' && x.charAt(i + 1) === '^'  ||
      x.charAt(i) === 'r' && x.charAt(i + 1) === '^'  ||
      x.charAt(i) === 's' && x.charAt(i + 1) === '^'  ||
      x.charAt(i) === 't' && x.charAt(i + 1) === '^'  ||
      x.charAt(i) === 'u' && x.charAt(i + 1) === '^'  ||
      x.charAt(i) === 'v' && x.charAt(i + 1) === '^'  ||
      x.charAt(i) === 'w' && x.charAt(i + 1) === '^'  ||
      x.charAt(i) === 'x' && x.charAt(i + 1) === '^'  ||
      x.charAt(i) === 'y' && x.charAt(i + 1) === '^'  ||
      x.charAt(i) === 'z' && x.charAt(i + 1) === '^' 
    ) {
      var ae = 1;
      var number = '';
      while (
        x.charAt(i - ae) === '1' ||
        x.charAt(i - ae) === '2' ||
        x.charAt(i - ae) === '3' ||
        x.charAt(i - ae) === '4' ||
        x.charAt(i - ae) === '5' ||
        x.charAt(i - ae) === '6' ||
        x.charAt(i - ae) === '7' ||
        x.charAt(i - ae) === '8' ||
        x.charAt(i - ae) === '9' ||
        x.charAt(i - ae) === '0' ||
        x.charAt(i - ae) === '/' ||
        x.charAt(i - ae) === '.' ||
        x.charAt(i - ae) === '-'
      ) {
        var numbera = x.charAt(i - ae) + numbera;
        var ae = ae + 1;
      }
      if (x.charAt(i - ae - 1) === '-' || x.charAt(i - ae - 2) === '-') {
        var numbera = '-' + numbera;
      }
      if (numbera.indexOf('/') > -1) {
        p.push(
          parseFloat(
            numbera.substring(0, numbera.indexOf('/')) /
              numbera.substring(numbera.indexOf('/') + 2, numbera.length - 1)
          )
        );
      } else {
        p.push(parseFloat(numbera));
      }
    }
    if (
      x.charAt(i) === 'a' && x.charAt(i + 1) === ' ' ||
      x.charAt(i) === 'b' && x.charAt(i + 1) === ' ' ||
      x.charAt(i) === 'c' && x.charAt(i + 1) === ' ' ||
      x.charAt(i) === 'd' && x.charAt(i + 1) === ' '  ||
      x.charAt(i) === 'e' && x.charAt(i + 1) === ' '  ||
      x.charAt(i) === 'f' && x.charAt(i + 1) === ' '  ||
      x.charAt(i) === 'g' && x.charAt(i + 1) === ' '  ||
      x.charAt(i) === 'h' && x.charAt(i + 1) === ' '  ||
      x.charAt(i) === 'i' && x.charAt(i + 1) === ' '  ||
      x.charAt(i) === 'j' && x.charAt(i + 1) === ' '  ||
      x.charAt(i) === 'k' && x.charAt(i + 1) === ' '  ||
      x.charAt(i) === 'l' && x.charAt(i + 1) === ' '  ||
      x.charAt(i) === 'm' && x.charAt(i + 1) === ' '  ||
      x.charAt(i) === 'n' && x.charAt(i + 1) === ' '  ||
      x.charAt(i) === 'o' && x.charAt(i + 1) === ' '  ||
      x.charAt(i) === 'p' && x.charAt(i + 1) === ' '  ||
      x.charAt(i) === 'q' && x.charAt(i + 1) === ' '  ||
      x.charAt(i) === 'r' && x.charAt(i + 1) === ' '  ||
      x.charAt(i) === 's' && x.charAt(i + 1) === ' '  ||
      x.charAt(i) === 't' && x.charAt(i + 1) === ' '  ||
      x.charAt(i) === 'u' && x.charAt(i + 1) === ' '  ||
      x.charAt(i) === 'v' && x.charAt(i + 1) === ' '  ||
      x.charAt(i) === 'w' && x.charAt(i + 1) === ' '  ||
      x.charAt(i) === 'x' && x.charAt(i + 1) === ' '  ||
      x.charAt(i) === 'y' && x.charAt(i + 1) === ' '  ||
      x.charAt(i) === 'z' && x.charAt(i + 1) === ' ' 
    ) {
      var a = 1;
      var number = '';
      while (
        x.charAt(i - a) === '1' ||
        x.charAt(i - a) === '2' ||
        x.charAt(i - a) === '3' ||
        x.charAt(i - a) === '4' ||
        x.charAt(i - a) === '5' ||
        x.charAt(i - a) === '6' ||
        x.charAt(i - a) === '7' ||
        x.charAt(i - a) === '8' ||
        x.charAt(i - a) === '9' ||
        x.charAt(i - a) === '0' ||
        x.charAt(i - a) === '/' ||
        x.charAt(i - a) === '.' ||
        x.charAt(i - a) === '-'
      ) {
        var number = x.charAt(i - a) + number;
        var a = a + 1;
      }
      if (x.charAt(i - a - 1) === '-' || x.charAt(i - a - 2) === '-') {
        var number = '-' + number;
      }
      if (number.indexOf('/') > -1) {
        y.push(
          parseFloat(
            number.substring(0, number.indexOf('/')) /
              number.substring(number.indexOf('/') + 2, number.length - 1)
          )
        );
      } else {
        y.push(parseFloat(number));
      }
    }
    if (x.charAt(i) === ' ' || x.charAt(i) === '') {
      if (x.charAt(i - 1) === '1' || x.charAt(i - 1) === '2' || x.charAt(i - 1) === '3' || x.charAt(i - 1) === '4' || x.charAt(i - 1) === '5' || x.charAt(i - 1) === '6' || x.charAt(i - 1) === '7' || x.charAt(i - 1) === '8' || x.charAt(i - 1) === '9' ||
        x.charAt(i - 1) === '0') {
        var b = 2;
        var othernumber = x.charAt(i - 1);
        while (x.charAt(i - b) === '1' || x.charAt(i - b) === '2' || x.charAt(i - b) === '3' || x.charAt(i - b) === '4' || x.charAt(i - b) === '5' || x.charAt(i - b) === '6' ||
          x.charAt(i - b) === '7' ||
          x.charAt(i - b) === '8' ||
          x.charAt(i - b) === '9' ||
          x.charAt(i - b) === '0' ||
          x.charAt(i - b) === '/' ||
          x.charAt(i - b) === '.'
        ) {
          var othernumber = x.charAt(i - b) + othernumber;
          var b = b + 1;
        }
        if (x.charAt(i - b - 1) === '-' || x.charAt(i - b - 2) === '-') {
        var othernumber = '-' + othernumber;
      }
        if (othernumber.indexOf('/') > -1) {
          z.push(
            parseFloat(
              othernumber.substring(0, othernumber.indexOf('/')) /
                othernumber.substring(
                  othernumber.indexOf('/') + 2,
                  othernumber.length - 1
                )
            )
          );
        } else {
          z.push(parseFloat(othernumber));
        }
      }
    }
  }
}
front(left, cof1, cof3, cof5);
front(right, cof2, cof4, cof6);
var sum1 = 0;
var sum2 = 0;
var sum3 = 0;
var sum4 = 0;
var sum5 = 0;
var sum6 = 0;
for (var i = 0; i < cof1.length; i++) {
  var sum1 = sum1 + cof1[i];
}
for (var i = 0; i < cof2.length; i++) {
  var sum2 = sum2 + cof2[i];
}
for (var i = 0; i < cof3.length; i++) {
  var sum3 = sum3 + cof3[i];
}
for (var i = 0; i < cof4.length; i++) {
  var sum4 = sum4 + cof4[i];
}
for (var i = 0; i < cof5.length; i++) {
  var sum5 = sum5 + cof5[i];
}
for (var i = 0; i < cof6.length; i++) {
  var sum6 = sum6 + cof6[i];
}
if (cof5.length === 0 && cof6.length === 0) {
var answer = (sum3 - sum4) / (sum2 - sum1)
answerlist.push(answer)
console.log(
  'The solution to the equation is: x = ' + answer
);
}
else {
  var rightdis = 4*(sum5 - sum6)*(sum3 - sum4)
  var leftdis = Math.pow((sum1 - sum2), 2)
  var dis = leftdis - rightdis
  if (dis < 0) {
    var root = Math.sqrt(dis/-1)
    var righteq = root/(2*(sum5-sum6))
    var max = (-1*(sum1 - sum2))/(2*(sum5 - sum6))
    if (max === 0) {
      console.log("The solutions to this equation are: x = " + righteq + "i" + ", " + -1*righteq + "i")
      answerlist.push(righteq + "i" + ", " + -1*righteq + "i")
    }
    else {
      console.log("The solutions to this equation are: x = " + max + "  + " + righteq + "i" + ", " + max + "  - " + righteq + "i")
      answerlist.push(max + "  + " + righteq + "i" + ", " + max + "  - " + righteq + "i")
    }
  }
  if (dis === 0) {
    var max = (-1*(sum1 - sum2))/(2*(sum5 - sum6))
    console.log("The solution to this equation is: x = " + max)
    answerlist.push(max)
  }
  if (dis > 0) {
    var root = Math.sqrt(dis)
    var righteq = root/(2*(sum5-sum6))
    var max = (-1*(sum1 - sum2))/(2*(sum5 - sum6))
    var plus = max + righteq
      var minus = max - righteq
    if (max === 0) {
      console.log("The solutions to this equation are: x = " + righteq + ", " + -1*righteq)
      answerlist.push(righteq + ", " + -1*righteq)
    }
    else {
      console.log("The solutions to this equation are: x = " + plus + ", " + minus)
      answerlist.push(plus + ", " + minus)
    }
  }
}
}
