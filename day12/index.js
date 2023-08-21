const videos =[
    "learn javaScript with ed",
    "learn css with ed",
    "learn html with ed",
    "html",
    "css",
    "javaScript",
]

const students =[
    {name: "Irfan", marks:70 },
    {name: "Kamran", marks:80 },
    {name: "Shahid", marks:85 },
    {name: "Zahid", marks:75 },
]
const movies =[
    "pushpa","BubliDon","Shahanshah",
]
const marks =[15, 30, 55, 10, 5 ,65]
//turnary Operator
const newVideos = videos.map(function(video){
  return video.length<10 ? video: "nope";
   
})
console.log(newVideos);
//return the same value
const newVideoss = videos.map(function(video){
    if(video.length <10){
        return video;
    }else{
        return "nope";
    }
     
  })
  console.log(newVideoss);
  //arrow functions
  const arrowVideos = videos.map((video)=>{
    return video.length <10? video:"hey";
  })
  console.log(arrowVideos);
  const newMovies = movies.map(movi =>{
    return movi.toUpperCase();
  })
  console.log(newMovies);

  //got rid of curlly braces if we have only one line code
  const searchMovies = movies.find(movi => movi.includes("Bubli"));
  console.log(searchMovies);

  const goodStudents = students.filter(student => student.marks>70);
console.log(goodStudents);

const checkMarks =students.every(student => student.marks>80);
console.log(checkMarks)

const checkMarkss =students.some(student => student.marks > 80);
console.log(checkMarkss);
//sort
//Return is negative a will be sorted before b
//positive b before a
//if they are equal then nothing changes
marks.sort(function(a,b){
    return a -b;
})
console.log(marks);
//if you want decending (a -b)
students.sort((a,b)=> a.marks -b.marks);
console.log(students);
//for making duplicate array
const newMarks= [...marks];
newMarks.sort((a,b)=>b -a);
console.log(newMarks);
const name ="Rahmatullah";
const caste = "bugti"
const cast= [...caste]
const nam = [...name];
console.log(nam);
console.log(cast);
//for adding two arrays together
const fullName =[...nam, ...cast];
console.log(fullName);