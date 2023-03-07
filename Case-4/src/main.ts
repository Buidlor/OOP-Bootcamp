import './style.css'


class Student {
  name: string;
  grade: number;

  constructor(name: string, grade: number) {
    this.name = name;
    this.grade = grade;
  }
}

class Group {
  students: Student[];

  constructor(students: Student[]) {
    this.students = students;
  }

  getAverageGrade(): number {
    const total = this.students.reduce((acc, student) => acc + student.grade, 0);
    return total / this.students.length;
  }

  moveStudentTo(otherGroup: Group, student: Student): void {
    const index = this.students.indexOf(student);
    if (index >= 0) {
      this.students.splice(index, 1);
      otherGroup.students.push(student);
    }
  }

  getTopStudent(): Student {
    return this.students.reduce((prev, current) => prev.grade > current.grade ? prev : current);
  }

  getLowestScoringStudent(): Student {
    return this.students.reduce((prev, current) => prev.grade < current.grade ? prev : current);
  }
}

const group1 = new Group([
  new Student("John", 80),
  new Student("Jane", 85),
  new Student("Bob", 70),
  new Student("Alice", 90),
  new Student("Jaqen", 100),
  new Student("Eve", 75),
  new Student("Dave", 60),
  new Student("Ann", 95),
  new Student("Dan", 65),
  new Student("Beth", 88)
]);

const group2 = new Group([
  new Student("Tom", 72),
  new Student("Sue", 88),
  new Student("Fred", 81),
  new Student("Mary", 93),
  new Student("Jim", 77),
  new Student("Kate", 69),
  new Student("Bill", 84),
  new Student("Lucy", 90),
  new Student("Max", 79),
  new Student("Tina", 86)
]);

// Calculate and display the average grade of each group
console.log(`Group 1 average grade: ${group1.getAverageGrade()}`);
console.log(`Group 2 average grade: ${group2.getAverageGrade()}`);
const averageBeforeMove = [group1.getAverageGrade(), group2.getAverageGrade()];

// Move a student from group 1 to group 2
const studentToMove = group1.getTopStudent();
const lowestScoringStudent = group2.getLowestScoringStudent();
group1.moveStudentTo(group2, studentToMove);
group2.moveStudentTo(group1, lowestScoringStudent);

// Calculate and display the average grade of each group after the move
console.log(`Group 1 average grade after move: ${group1.getAverageGrade()}`);
console.log(`Group 2 average grade after move: ${group2.getAverageGrade()}`);

const averageAfterMove = [group1.getAverageGrade(), group2.getAverageGrade()];


document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>Case 4</h1>
    <p>There's two groups, both of 10 students. Every student has a name (even Jaqen) and gets a grade. You can have some fun coming up with the content here :-) </p>
    <ul>
      <li>   Provide an easy way to calculate the average score of a group. </li>
      <li>  Add a function to move a student from one group to another. </li>
      <li> Show the average score of both groups. Move the top student from one group with the lowest scoring student from another. Show the averages again - how were these affected?  </li>
    </ul>
    <div>
      <h2>Group 1</h2>
      <ul>
        ${group1.students.map(student => `<li>${student.name} - ${student.grade}</li>`).join('')}
      </ul>
    </div>
    
    <div>
      <h2>Group 2</h2>
      <ul>
        ${group2.students.map(student => `<li>${student.name} - ${student.grade}</li>`).join('')}
      </ul>
    </div>
    <p>Average grade before move: ${averageBeforeMove[0]} - ${averageBeforeMove[1]}</p>
    <p>Average grade after move: ${averageAfterMove[0]} - ${averageAfterMove[1]}</p>
  </div>
`


