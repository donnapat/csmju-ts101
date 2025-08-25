import { Student } from './student';
import { Course } from './course';

const studentList: Student[] = [
  new Student('6704101407', 'มทินา'),
  new Student('6704101397', 'ดลนภัส'),
  new Student('6704101336', 'ธมล')
];

// เพิ่ม 4 วิชาแรก
studentList[0]!.addCourse(new Course('คณิตศาสตร์', 4.0));
studentList[0]!.addCourse(new Course('ภาษาไทย', 4.0));
studentList[0]!.addCourse(new Course('วิทยาศาสตร์', 3.5));
studentList[0]!.addCourse(new Course('โปรแกรม', 3.5));

studentList[1]!.addCourse(new Course('คณิตศาสตร์', 4.0));
studentList[1]!.addCourse(new Course('ภาษาไทย', 4.0));
studentList[1]!.addCourse(new Course('วิทยาศาสตร์', 4.0));
studentList[1]!.addCourse(new Course('โปรแกรม', 3.5));

studentList[2]!.addCourse(new Course('คณิตศาสตร์', 4.0));
studentList[2]!.addCourse(new Course('ภาษาไทย', 4.0));
studentList[2]!.addCourse(new Course('วิทยาศาสตร์', 4.0));
studentList[2]!.addCourse(new Course('โปรแกรม', 4.0));

// แสดงข้อมูลก่อนเพิ่ม
console.log('📄 ข้อมูลนักศึกษาก่อนเพิ่มวิชาใหม่:\n');
studentList.forEach(s => s.display());

// เพิ่มวิชาใหม่
studentList[0]!.addCourse(new Course('เทคโนโลยีสารสนเทศ', 4.0));
studentList[1]!.addCourse(new Course('ปลาสวยงาม', 4.0));
studentList[2]!.addCourse(new Course('ภาษาอังกฤษ', 4.0));

// แสดงข้อมูลหลังเพิ่ม
console.log('📄 ข้อมูลนักศึกษาหลังเพิ่มวิชาใหม่:\n');
studentList.forEach(s => s.display());
