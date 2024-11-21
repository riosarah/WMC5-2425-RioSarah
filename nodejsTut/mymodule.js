function myFunction1(){
    console.log('Hello from function 1.');
}
function myFunction2(){
    console.log('Hello from function 2.');
}
module.exports ={
    foo: 'bar',
    myFunction1: myFunction1,
    myFunction2: myFunction2
};