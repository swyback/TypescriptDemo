export{}
let message = 'Todays date is ';
let date: Date = new Date();
console.log(message + date);
//console.log(date);

let x = 10;
const y = 20;

let sum;
const ttile = 'Typescript tutorial';

let isBeginner: boolean = true;
let total: number = 0;
let name: string = 'richie';

let sentence: string = `My name is ${name}
I am a developer trying to learn typescript`;

console.log(sentence);

let n: null = null;
let u: undefined = undefined;

let isNew: boolean = null;
let myName: string = undefined;

let list1: number[] = [1,2,3];
let list2: Array<number> = [1,2,3];

let person1: [string, number] = ['Chris', 22];

enum Color {Red, Green, Blue};

let c: Color = Color.Blue;
console.log(c);

let randomValue : any = 10;
randomValue = true;
randomValue = "Richie";

let myVariable: unknown = 10;

function hasName(obj : any): obj is {name: string}{
    return !!obj &&
    typeof obj === "object" &&
    "name" in obj
}

if (hasName(myVariable)){
    console.log(myVariable.name);
}

//(myVariable as string).toUpperCase();

let a;
a = 10;
a = true;

let b = 20;

let multiType: number | boolean;
multiType = 20;
multiType = true;

let anyType: any;
anyType = 20;
anyType = true;


function add(num1: number, num2: number = 10): number{    
    if (num2)
        return num1 + num2;
    else
        return num1;
}

add(5, 10);
add(5);

interface Person{
    firstName: string;
    lastName: string;
}

function fullName(person: Person){
    console.log(`${person.firstName} ${person.lastName}`);
}

let p = {
    firstName: 'Bruce',
    lastName: 'Wayne'
};

fullName(p);

class Employee {
    public employeeName:  string;

    constructor(name: string){
        this.employeeName = name;
    }

    greet(){
        console.log(`Good Morning ${this.employeeName}`);
    }
}

let emp1 = new Employee('Richie');
console.log(emp1.employeeName);
emp1.greet();

class Manager extends Employee{
    constructor(managerName: string){
        super(managerName);
    }
    delegateWork(){
        console.log(`Manager giving tasks`);
    }
}

let m1 = new Manager('Jurgen Klopp');
m1.delegateWork();
m1.greet();
console.log(m1.employeeName);

class Player extends Manager{
    public playerid: number;
    constructor(player: number){
        super('Jurgen Klopp');
        this.playerid = player;
    }
    displayPlayerName(){
        var player: [number, string][];
        player = [[11, "Mo Salah"],[10, "Sadio Mane"],[9, "Bobby Firmino"]];

        console.log(player[this.playerid]);
    }
}

let player = new Player(0);
player.displayPlayerName();
