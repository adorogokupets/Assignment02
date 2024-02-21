// The code could be shorter with else if statement. 
//I just wanted to practice Switch stetment, so added extra code.
let numberOfGrade = parseInt(prompt('Enter number between 1 and 100'))
let grade

if (numberOfGrade > 100 || numberOfGrade < 1) {
    alert('Only number between 1 and 100 should be entered')
}
if (numberOfGrade >= 60 && numberOfGrade <= 69) {
    grade = 'D'
}
if (numberOfGrade >= 70 && numberOfGrade <= 79) {
    grade = 'C'
}
if (numberOfGrade >= 80 && numberOfGrade <= 89) {
    grade = 'B'
}
if (numberOfGrade >= 90 && numberOfGrade <= 100) {
    grade = 'A'
}

switch (grade) {
    case 'D':
        console.log('You received a D')
        break;
    case 'C':
        console.log('You received a C')
        break;
    case 'B':
        console.log('You received a B')
        break;
    case 'A':
        console.log('You received a A')
        break;
    default:
        console.log('You received a F')
        break;
}