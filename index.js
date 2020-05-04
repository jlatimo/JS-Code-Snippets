// import * as arrSnippets from './arraySnippets';
// import * as objSnippets from './objectSnippets';
// var http = require('http');

const twoSum = function () {
    let sumTarget = [];
    let nums = [2, 7, 11, 15];
    let target = 9;
    
for(let i = 0; i < nums.length; i++){
    for(let j = i +1; j < nums.length; j++){
        console.log('Iterate 0', i);
        console.log('Iterate 1', j);
        console.log('Equation 2', nums[j]);
        console.log('Equation 3', nums[i]);
        console.log('Equation 4', nums[j] === target - nums[i]);
        if(nums[j] === target - nums[i])
        sumTarget.push(i, j)
    }
}

    console.log('SumTarget 5', sumTarget);
    return sumTarget;
};

console.log('Function', twoSum());

// http.createServer(function (req, res) {
//     res.(200, {twoSum()});
//     res.end();
//   }).listen(8080);