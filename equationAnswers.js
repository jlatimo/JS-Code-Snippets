/// Staircase | Javascript Algorithm ///

function staircase(n) {
    let filledArray = new Array(n).fill(' ');
    while (filledArray.indexOf(' ') !== -1) {
        filledArray.shift();
        filledArray.push('#');
        console.log(filledArray.join(""));
        n--;
    }
}
/// https://medium.com/@endubueze00/staircase-javascript-algorithm-ec6ae8c00ec2 ///

/// Two Sum - (Brute force) Leet Code///
const twoSum = function () {
    let sumTarget = [];
    let nums = [2, 7, 11, 15];
    let target = 9;
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            console.log('Target 2', sumTarget);
            if (nums[j] === target - nums[i])
                sumTarget.push(i, j)
        }
    }


    console.log('Target 3', sumTarget);
    return sumTarget;
};

console.log('Function', twoSum());


/// Reverse Integer ///
var reverse = function(x) {
    let j;
    
    const reversed = (n) => {
        if(Math.sign(n) === -1){
             n = n + "";
            
             n = n.split("");
            
             j = n.shift();
            
          return n = j + n.reverse().join("");
        }
        n = n + "";
	return n.split("").reverse().join("");
    }
    
return reversed(x);
};

/// Palindrome Number
/* Determine whether an integer is a palindrome. 
An integer is a palindrome when it reads the same backward as forward. */
var isPalindrome = function(x) {
    x = x + "";
    
    if(x.split("").reverse().join("") === x) {
            return true;
    } else if(Math.sign(x) === -1){
            return false;
    } else {
            return false;
    }      
};


/// Remove duplicates from an array of numbers/strings ///
const values = [3, 1, 3, 5, 2, 4, 4, 4];
const uniqueValues = [...new Set(values)];
// uniqueValues is [3, 1, 5, 2, 4]