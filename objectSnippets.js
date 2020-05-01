/// Object.assign() method is used to copy the values of all enumerable own properties from one or more source objects to a target object. ///
export const immuteObj = () => {
    let obj = {
        a: 1,
        b: 2,
      };
      let objCopy = Object.assign({}, obj);
      console.log(objCopy);
      // Result - { a: 1, b: 2 }
};

/// deep copy objects immutable ///
export const deepCopy = () => {
    let obj = { 
        a: 1,
        b: { 
          c: 2,
        },
      }
      
      let newObj = JSON.parse(JSON.stringify(obj));
      
      obj.b.c = 20;
      console.log(obj); // { a: 1, b: { c: 20 } }
      console.log(newObj); // { a: 1, b: { c: 2 } } (New Object Intact!)
};


/// This is mutable and variable is pointing to the same object and is a reference to that object. ///
export const muteObj = () => {
    let obj = {
        a: 1,
        b: 2,
      };
      let copy = obj;
      
      obj.a = 5;
      console.log(copy.a);
      // Result 
      // a = 5;
};

export const copyObj = (mainObj) => {
    let objCopy = {}; // objCopy will store a copy of the mainObj
    let key;
  
    for (key in mainObj) {
      objCopy[key] = mainObj[key]; // copies each property to the objCopy object
    }
    return objCopy;
  };
  /// Example object ///
  const mainObj = {
    a: 2,
    b: 5,
    c: {
      x: 7,
      y: 4,
    },
  }




/// https://scotch.io/bar-talk/copying-objects-in-javascript ///