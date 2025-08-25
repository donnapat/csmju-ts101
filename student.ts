import { Course } from './course';

export class Student {
  studentID: string;
  name: string;
  courses: Course[];

  constructor(studentID: string, name: string) {
    this.studentID = studentID;
    this.name = name;
    this.courses = [];
  }

  addCourse(course: Course): void {
    this.courses.push(course);
  }

  getAverage(): number {
    const total = this.courses.reduce((sum, c) => sum + c.grade, 0);
    return this.courses.length > 0 ? total / this.courses.length : 0;
  }

  display(): void {
    console.log(`📘 นักศึกษา: ${this.name} (${this.studentID})`);
    this.courses.forEach((c, i) => {
      console.log(`   วิชา ${i + 1}: ${c.name} - เกรด ${c.grade}`);
    });
    console.log(`   🎯 เกรดเฉลี่ย: ${this.getAverage().toFixed(2)}\n`);
  }
}
