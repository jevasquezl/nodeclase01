console.log('Inicio');


setTimeout(() => {
    
console.log('primer timeout');

}, 1500);

setTimeout(() => {
    
console.log('segundo timeout');

}, 0);

setTimeout(() => {

console.log('tercer timeout');

}, 0);


console.log('Fin')