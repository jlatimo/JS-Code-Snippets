/// Check if Number is Negative or Postive /// 

const num = -8;

/// Old Way
num === 0 ? num : (num > 0 ? 1 : -1);

/// ES6 ///
Math.sign(num);

var scripts = NumberString.split(",");
var k = '';

for (i = 0; i < scripts.length; i++) {
    if (scripts[i] != '') { newNumString.push(scripts[i]); }
}
