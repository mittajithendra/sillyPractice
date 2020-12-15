module.exports = {
  
    add: function(val1,val2) {
        checkArguments(val1,val2);
        return val1 + val2;
    },

    subtract: function(val1,val2) {
        checkArguments(val1,val2);
        return val1 - val2;
    },

    multiply: function(val1,val2) {
        checkArguments(val1,val2);
        return val1 * val2;
    },

    divide: function(val1,val2) {
        checkArguments(val1,val2);
        return val1 / val2;
    }

   };


function checkArguments(val1,val2) {
    if(isNaN(val1)) {
       return new Error("Arg1 Invalid") ;     
    }
 
    if(isNaN(val2)) {
        return new Error("Arg2 Invalid");     
    }
}