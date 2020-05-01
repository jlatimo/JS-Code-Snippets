/* Mini-Max Sum In JavaScript - How to Get the Minimum Sum And Maximum Sum of 
4 Elements in a 5-Element Array */
export const miniMax = () => {
    let data = [1, 3, 2, 4, 5];

    // sort first
    data = data.sort();
      
    // to get the sets only array.slice(start, end)
    let maxSet = data.slice(1);
    let minSet = data.slice(0, -1);
    
    console.log(minSet, maxSet);
    
    // to get just the max/min value
    const sum = data.reduce((a, total) => a + total, 0);
    console.log(sum - data[data.length - 1], sum - data[0]);
};


/* The reduce() method executes a reducer function 
(that you provide) on each element of the array, resulting in a single output value */
export const arrReduce = () => {
    const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

// 1 + 2 + 3 + 4
console.log(array1.reduce(reducer));
// expected output: 10

// 5 + 1 + 2 + 3 + 4
console.log(array1.reduce(reducer, 5));
// expected output: 15
};

/// Sum of an elements Array ///
export const sumArr = () => {
    const numbers = [10, 20, 30, 40] // sums to 100
    
    // function for adding two numbers. Easy!
    const add = (a, b) => a + b
    
    // use reduce to sum our array
    const sum = numbers.reduce(add)
    };

/*https://www.digitalocean.com/community/tutorials/4-uses-of-javascripts-arraymap-you-should-know
The map() method creates a new array populated with the 
results of calling a provided function on every element in the calling array. */
export const arrMap = () => {
    const array1 = [1, 4, 9, 16];

    // pass a function to map
    const map1 = array1.map(x => x * 2);
    
    console.log(map1);
    // expected output: Array [2, 8, 18, 32]
}



