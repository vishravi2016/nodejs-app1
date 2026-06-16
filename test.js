const calc=require('./app')

if(calc.add(10,20)!==30){
    throw new Error("addition test failed")
}

if(calc.multi(2,3)!==6){
    throw new Error("multiplication test failed")
}

console.log("all tests are passed");
