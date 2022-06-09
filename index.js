// code your solution here

function saturdayFun(activity = "roller-skate"){
    return `This Saturday, I want to ${activity}!`
}

let mondayWork = function(activity = "go to the office"){
    return `This Monday, I will ${activity}.`;
}


let wrapAdjective = function (newAdjective = "*"){
    return function inner (feel = "special"){
        return `You are ${newAdjective}${feel}${newAdjective}!`;
    }
}
wrapAdjective('!!!');

