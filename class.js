class FamilyMember {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
let father=new FamilyMember("Ravi", 50);
let mother=new FamilyMember("Priya", 48);
console.log(father.name,father.age);
console.log(mother.name,mother.age);

// // Encapsulation example
class BankAccount {
    constructor(balance){
        let _balance = balance; // private variable

        this.getBalance = function() {
            return _balance;
        };
        this.deposit=function(amount){
            _balance+=amount;
        }
    }
}
let fatherAccount=new BankAccount(6000);
fatherAccount.deposit(3000);
console.log(fatherAccount.getBalance());

// // Inheritance example
class Parent{
    constructor(surname){
        this.surname=surname;
    }
    showSurname(){
        console.log(this.surname);
    }
}
class child extends Parent{
    constructor(name,surname){
        super(surname);
        this.name=name;
    }
}
let daughter=new child("Poojitha","Karnaina");
daughter.showSurname();
console.log(daughter.name);

// Polymorphism example
class FamilyMember{
    role(){
        console.log("Family Member");
    }
}
class Father extends FamilyMember{
    role(){
        console.log("I am a Father");
    }
}
class Mother extends FamilyMember{
    role(){
        console.log("I am a Mother");
    }
}
let f=new Father();
f.role();
let m=new Mother();
m.role();

// Abstraction example
class Family{
    FunctionOfFamily(){
        this.cooking();
        this.earning();
    }
    cooking(){
        console.log("Cooking food");
    }
    earning(){
        console.log("Earning money");
    }
}
let family=new Family();
family.FunctionOfFamily();
