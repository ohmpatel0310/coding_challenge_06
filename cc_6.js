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