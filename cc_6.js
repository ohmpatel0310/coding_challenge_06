class Employee {
    constructor (name, department){
        this.name = name
        this.department = department
    }
    describe(){
        return `Name: ${this.name}, Department: ${this.department}`
    }
}