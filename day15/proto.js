function Todo (name, completed){
    this.name = name;
    this.completed =completed;
};
    Todo.prototype.getName=function(){
        console.log(this.name);
    };
const todo = new Todo("buy eggs",false);
const todo1 = new Todo("come here",false);
todo.getName();
console.log(todo, todo1);
