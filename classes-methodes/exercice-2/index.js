class User {
    firstName;
    lastName;
    frenchGrades;
    mathGrades;
    
    constructor(firstName, lastName, frenchGrades, mathGrades) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.frenchGrades = frenchGrades;
        this.mathGrades = mathGrades;
    }
    
    getAverage() {
        let sum = 0;
        for(let frenchGrade of this.frenchGrades) {
            sum += frenchGrade;
        }
        for(let mathGrade of this.mathGrades) {
            sum += mathGrade;
        }
        return sum / (this.frenchGrades.length + this.mathGrades.length);
    }
}

let mari = new User('Mari', 'Doucet', [11, 17], [9, 7]);
console.log(mari.getAverage());