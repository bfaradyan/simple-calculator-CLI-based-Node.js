const argvs = process.argv
const argv = argvs.slice(2)
const operation = argv[0]
const a = parseInt(argv[1])
const b = parseInt(argv[2])

switch (operation) {
    case "add":
        function addition(a,b) {
            return a + b;  
        };
        console.log(a, "+", b, "=", addition(a,b));
        break;

    case "substract":
        function subtraction(a,b) {
            return a - b;
        };
        console.log( a, "-", b, " = " + subtraction(a,b));
        break;

    case "multiply":
        function multiply(a,b) {
            return a * b;
        };
        console.log(a, "*", b, "=", multiply(a,b));
        break;
        
    case "divide":
        function divide(a,b) {
            return a / b;
        };
        console.log(a, "/", b, "=", divide(a,b));
        
    default:
        break;
}
