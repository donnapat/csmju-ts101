// 1. ประกาศ Interface
interface Employee {
  id: number;
  name: string;
  position: string;
  salary: number;
}

// 2. สร้างอาเรย์ของพนักงาน
const employees: Employee[] = [
  { id: 1, name: "วิน", position: "โปรแกรมเมอร์", salary: 30000 },
  { id: 2, name: "มะลิ", position: "นักออกแบบ", salary: 28000 },
  { id: 3, name: "อั้ม", position: "ผู้จัดการ", salary: 45000 },
];

// 3. ฟังก์ชันค้นหาพนักงานด้วยชื่อ
function findEmployeeByName(name: string): Employee | undefined {
  return employees.find(emp => emp.name === name);
}

// 4. แสดงผลพนักงานทั้งหมด
console.log("📋 รายชื่อพนักงานทั้งหมด:");
employees.forEach(emp => {
  console.log(`ID: ${emp.id}, ชื่อ: ${emp.name}, ตำแหน่ง: ${emp.position}, เงินเดือน: ${emp.salary} บาท`);
});

// 5. ทดสอบค้นหาพนักงาน
const searchName = "มะลิ"; // เปลี่ยนชื่อได้ตามต้องการ
const result = findEmployeeByName(searchName);

console.log("\n🔍 ผลการค้นหาพนักงาน:");
if (result) {
  console.log(`พบพนักงาน: ID ${result.id}, ชื่อ: ${result.name}, ตำแหน่ง: ${result.position}, เงินเดือน: ${result.salary} บาท`);
} else {
  console.log(`ไม่พบพนักงานชื่อ "${searchName}"`);
}
