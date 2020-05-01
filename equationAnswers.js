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