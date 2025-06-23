// Step 1: Create a new JavaScript file called cc_5.js and link it to an index.html file.

// Step 2: Create an array of 3–5 employee objects. Each should include: name, hourlyRate, hoursWorked.

const employees = [
    { name: "Alice", hourlyRate: 20, hoursWorked: 40 },
    { name: "Bob", hourlyRate: 25, hoursWorked: 35 },
    { name: "Charlie", hourlyRate: 30, hoursWorked: 45 },
    { name: "Diana", hourlyRate: 22, hoursWorked: 38 }
];
//Step 3: Write a function calculateBasePay(rate, hours) that returns pay for up to 40 hours only.

function calculateBasePay(rate, hours) {
    if (hours <= 40) {
        return rate * hours;
    } else {
        return rate * 40; // Only pay for the first 40 hours
    }
}
// Step 4: Write calculateOvertimePay(rate, hours) that returns 1.5x rate for hours over 40.

function calculateOvertimePay(rate, hours) {
    if (hours > 40) {
        return (rate * 1.5) * (hours - 40); // Calculate overtime pay for hours over 40
    } else {
        return 0; // No overtime pay if hours are 40 or less
    }
}
// Step 5: Write calculateTaxes(grossPay) that deducts 15% tax.

function calculateTaxes(grossPay) {
    return grossPay * 0.15; // Deduct 15% tax
}
// Step 6: Write processPayroll(employee) that returns an object with: name, basePay, overtimePay, grossPay, netPay.

function processPayroll(employee) {
    const basePay = calculateBasePay(employee.hourlyRate, employee.hoursWorked);
    const overtimePay = calculateOvertimePay(employee.hourlyRate, employee.hoursWorked);
    const grossPay = basePay + overtimePay;
    const taxes = calculateTaxes(grossPay);
    const netPay = grossPay - taxes;

    return {
        name: employee.name,
        basePay: basePay,
        overtimePay: overtimePay,
        grossPay: grossPay,
        netPay: netPay
    };
}
// Step 7: Loop through your employee array and log the payroll object for each employee.

employees.forEach(employee => {
    const payroll = processPayroll(employee);
    console.log(payroll);
});
