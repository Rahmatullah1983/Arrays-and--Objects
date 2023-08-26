//callstack our code runs form up to down line by line.
function sayHi(){
    changeName();
    console.log(`hello there ${name}`);
    console.log(`sayHi is finished`);
    
};
function changeName(){
name = "Raja";
    console.log(`we changed is to name ${name}`);
    console.log(`changeName  is finished`);
};
let name = "Bugti";
sayHi();
console.log(`we have done with th code`);
//key word is a pointer to an object

const user ={
    name: "Rahmatullah",
}
const admin={
    name:"admin"
};
    function syHi(){
        console.log(this.name);
    }
   

user.hi= syHi;
admin.hi=syHi;

user.hi();
admin.hi();
const lists = document.querySelectorAll("li");
lists.forEach(li => {
    li.addEventListener("click", function(){
        console.log(this);
    })
})

const user1 = {
    name:"Rahmatullah",
    videos:["html","css","javaSript","react","python"],
    greet(){
        console.log(`hello there ${this.name}`);
        this.videos.forEach(video=>{
            console.log(this.name)
        });
        const getVidios = () =>{
            console.log(`you currently have ${this.videos.length} videos`);
        }
        getVidios();
    }
}
user1.greet();