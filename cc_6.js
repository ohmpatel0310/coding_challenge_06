// Step 2: Create Base Class Employee

class Employee {
    constructor (name, department){
        this.name = name
        this.department = department
    }
    describe(){
        return `Employee Name: ${this.name}, Department: ${this.department}`
    }
}

// Step 3: Creating Manager Subclass

class Manager extends Employee {
    constructor(name, department, teamSize) {
        super(name, department)
        this.teamSize = teamSize

    }

    describe() {
        return `Manager: ${this.name}, Department: ${this.department}, Team Size: ${this.teamSize}`
    }
}

// Step 4: Creating Employees and Managers

const employee1 = new Employee("JimJim", "Finance")
const employee2 = new Employee("TimTim", "HR")
const employee3 = new Employee("BimBim", "Marketing")
const employee4 = new Employee("JimJim", "Engineering")

const manager1 = new Manager("TheBigMan", "Logistics", 10)
const manager2 = new Manager("TheLargeMan", "Product Design", 5)

console.log(employee1.describe())
console.log(employee2.describe())
console.log(employee3.describe())
console.log(employee4.describe())

console.log(manager1.describe())
console.log(manager2.describe())

// Step 5: Creating Company Class with Property Employees

class Company {
    constructor() {
        this.employees = []
    }

    addEmployee(employee) {
        this.employees.push(employee)
    }

    listEmployees() {
        this.employees.forEach(employee => {
            console.log(employee.describe())
        })
    }

}
