const movies =[
    "pushpa","BubliDon","Shahanshah",
] 
const students =[
    {name: "Irfan", marks:70 },
    {name: "Kamran", marks:80 },
    {name: "Shahid", marks:85 },
    {name: "Zahid", marks:75 },
]
movies.push("three ideots");
movies.forEach(function(movi){
    console.log("run");
    console.log(movi);

})

const newMovies =movies.map(function(movi){
    return movi.toUpperCase();
})
console.log(`${newMovies}`);
const searchMovies = movies.find(function(movi){
return movi.includes("three");
})
console.log(searchMovies);
const goodStudents = students.filter(function(student){
    return student.marks >75;

})
console.log(goodStudents);
const checkMarks = students.every(function(student){
    return student.marks >80;
})
console.log(checkMarks);


const checkMarkss = students.some(function(student){
    return student.marks >80;
})
console.log(checkMarkss);