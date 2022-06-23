const pricePerCoffee = 1.25;

function CalcBill(orders){
    return `The total Bill is : $${orders.reduce((total, current) => total+=current)*pricePerCoffee}`
}


console.log(CalcBill([2, 5, 7, 1, 4]))