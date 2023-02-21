var varConstructor = new ExampleConstructor();

function ExampleConstructor() {
}

console.log('value of prototype ExampleConstructor:', ExampleConstructor.prototype);
console.log('typeof prototype ExampleConstructor:', typeof ExampleConstructor.prototype);
console.log('variable varContructor', varConstructor);
console.log('instanecof test:', varConstructor instanceof ExampleConstructor);
