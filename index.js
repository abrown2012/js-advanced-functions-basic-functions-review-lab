// Your code here
const saturdayFun = (activity="roller-skate") => {
    return `This Saturday, I want to ${activity}!`
}

const mondayWork = (arg="go to the office") => {
    return `This Monday, I will ${arg}.`
}

const wrapAdjective = (arg2='*') => {
    return function(arg="special"){
        return `You are ${arg2}${arg}${arg2}!`
    }
}

let Calculator = {
    add: function(a, b) {
        return a + b;
    },
    subtract: function(a, b){
        return a - b; 
    },
    multiply: function(a, b){
        return a*b;
    },
    divide: function(a, b){
        return a/b;
    }}

    function actionApplyer(a, b) {
        for (let i = 0; i < b.length; i++) {
          a = b[i](a);
        }
        return a;
      }
      

