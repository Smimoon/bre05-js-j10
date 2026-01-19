class Student {
    firstName;
    lastName;
    mathGrades;
    frenchGrades;
    englishGrades;
    
    constructor(firstName, lastName, mathGrades, frenchGrades, englishGrades) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.mathGrades = mathGrades;
        this.frenchGrades = frenchGrades;
        this.englishGrades = englishGrades;
    }
    
    getMathAverage() {
        let sum = 0;
        for(let grade of this.mathGrades) {
            sum += grade;
        }
        return sum / this.mathGrades.length;
    }
    getFrenchAverage() {
        let sum = 0;
        for(let grade of this.frenchGrades) {
            sum += grade;
        }
        return sum / this.frenchGrades.length;
    }
    getEnglishAverage() {
        let sum = 0;
        for(let grade of this.englishGrades) {
            sum += grade;
        }
        return sum / this.englishGrades.length;
    }
    getTotalAverage() {
        let math = this.getMathAverage();
        let french = this.getFrenchAverage();
        let english = this.getEnglishAverage();
        
        return (math + french + english) / 3;
    }
    getWhichIsBest() {
        let math = this.getMathAverage();
        let french = this.getFrenchAverage();
        let english = this.getEnglishAverage();
        
        if(math > french && math > english) {
            return console.log(`La meilleur moyenne de ${this.firstName} ${this.lastName} est en maths.`);
        }
        else if(french >math && french > english) {
            return console.log(`La meilleur moyenne de ${this.firstName} ${this.lastName} est en français.`);
        }
        else if(english > math && english > french) {
            return console.log(`La meilleur moyenne de ${this.firstName} ${this.lastName} est en anglais.`);
        }
    }
}


let simon = new Student('Simon', 'Laroche', [12, 13, 16], [14.5, 18, 11], [20, 15, 16.5]);

console.log(simon.getMathAverage());
console.log(simon.getFrenchAverage());
console.log(simon.getEnglishAverage());
console.log(simon.getTotalAverage());
console.log(simon.getWhichIsBest());