const person = {
    firstName: "Rahmatullah",
    lastName: " Bugti",
    getName(){
        console.log(this.firstName +this.lastName);
    }
};
person.getName();

function regiterUser(country, lang){
    console.log(`My country is ${country} and my language is ${lang} `);
}
//bind
let register =regiterUser.bind(person);
register("Pakistan", " Urdu");

const user={

}

function reg(name, caste){
    console.log(`My name is ${name} and my caste is ${caste} `);
}
//call
reg.call(user, "Rahmatullah", "Bugti");

const user2={

}

function regt(desgnation, qualification){
    console.log(`My desgnation is ${desgnation} and my qualificaion is ${qualification} `);
}
//apply
regt.apply(user2, ["Junior Devloper", "Software Engineer"]);