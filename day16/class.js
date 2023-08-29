/*
function Enemy(life, name, level){
  this.life = life;
  this.name = name;
  this.level = level;
}
Enemy.prototype.getinfo = function(){
  console.log(this.life, this.name,this.level);
};
Enemy.prototype.attack =function(){
  console.log(` ${this.name}has attacked`)
};

Enemy.prototype.block =function(){
  console.log(` ${this.name}has blocked`)
};
function Snake(life,name,level,color,spell){
  Enemy.call(this,life,name,level);
  this.color = color;
  this.spell= spell;
}
Snake.prototype= Object.create(Enemy.prototype);

Snake.prototype.apple =function(){
  console.log("apple");
}
const newSnake = new Snake(100, "snake",25,"green","fire")
console.log(newSnake);*/




class Enemy{
    constructor(life, name, level){
      this.life - life;
      this.name = name;
      this.level =level;
    }
  getInfo(){
    console.log(this.life,this.name,this.level);
  }
  
  }
  class Bug extends Enemy{
  
    constructor(life, name, level, legs, dmg){
      //keyword super excuting Enemy
        super(life,name,level);
      //
      this.legs = legs;
      this.dmg = dmg;
    }
    }
  
  
  const johan = new Bug(10, "Bugy",1, 6,10);
  console.log(johan);
  johan.getInfo();