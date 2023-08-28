//function for making new objects
function Todo(name, completed){
    this.name =name;
    this.completed = completed;
    (this . getTodoName = function(){
        console.log(this.name);
    })
}
const todo = new Todo("Buy eggs", false);
const todo1 = new Todo("do my home work", false);
console.log(todo);
todo.getTodoName();
todo1.getTodoName();
function Student(srNo, name, marks){
    this.srNO= srNo;
    this.name =name;
    this.marks =marks;

}
const student = new Student(1,'Irfan',500,);
const student1 = new Student(2,'Kamran',600,);
console.log(student);
console.log(student1);