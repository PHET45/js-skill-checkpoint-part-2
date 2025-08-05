const students = [
  { name: "Alice", score: 42 },
  { name: "Bob", score: 55 },
  { name: "Charlie", score: 68 },
  { name: "David", score: 48 },
  { name: "Eve", score: 91 },
];

// เริ่มเขียนโค้ดตรงนี้
let score = students.filter((name) => name.score > 50).map((a) => a.score + (a.score * 10/100)).reduce((name, newScore) => name + newScore,0)
console.log(`Total score is ${score}`)
