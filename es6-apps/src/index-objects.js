
//es 5 
function Employee() {
    //instance variables
    this.id = 1;
    this.name = 'subramanian'
    //instance methods
    this.calculateSalary = function () {
        return 10;
    }
}
///emp - reference variable which references the location of object.
//new is keyword - memory allocation operator
//Employee(); Constructor call
let emp = new Employee();
console.log(`Id : ${emp.id} Name : ${emp.name} Salary :  ${emp.calculateSalary()}`)

class Customer {
    //instance variables
    id = 1;
    name = 'subramanian'
    //instance methods
    // calculateSalary = function () {
    //     return 10;
    // // }
    // calculateSalary = () => {
    //     return 10;
    // }
    calculateInvoice() {
        return 10;
    }
}
//cust - reference variable which references the location of object.
//new is keyword - memory allocation operator
//Customer(); Constructor call
let cust = new Customer();
console.log(`Id : ${cust.id} Name : ${cust.name} Invoice :  ${cust.calculateInvoice()}`)


let product = {
    id: 1,
    name: 'Phone',
    // calculateQty: function(){
    //     return 10;
    // }
    // calculateQty: ()=>{
    //     return 10;
    // }
    //es 6 method syntax
    calculateQty() {
        return 10
    },
    save() {
        return 'save'
    },
    findAll() {
        return 'findAll'
    }
};
console.log(`Product id ${product.id} name ${product.name} Qty ${product.calculateQty()} ${product.findAll()} ${product.save()} `)