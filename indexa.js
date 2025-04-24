class A{
    _name;
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    _email;
    get email() {
        return this._email;
    }
    set email(value) {
        this._email = value;
    }
   tester= function() {
        console.log("Coming from parent");
    }
}
class B extends A{
}

const b = new B();
b.name = 'Jaideep';
b.email = "jai@ibm.com";
b.tester();
console.log(JSON.stringify(b));

class Animals{
    constructor(name, family) {
        this.name = name;
        this.family = family;
    }
    myFun = function () {
        console.log("Coming from Animal Parent class");
    }
}
class Cats extends Animals{
    constructor(name, family, color) {
        super(name, family);
        this.color = color;
    }
}
const cat = new Cats("Pekinese", "cat", "black");
cat.myFun();
console.log(JSON.stringify(cat));

class C extends B{ }
class D extends C{
    _mobile;
    get mobile() {
        return this._mobile;
    }
    set mobile(value) {
        this._mobile = value;
    }
}
const d = new D();
d.name = "Samuel Smiles";
d.email = "samu@yahoo.com";
d.mobile = "9877675432";
console.log(JSON.stringify(d));
//Multi level inheritance
//inheritance amongst anonymous classes
const ClassA = class {
    _id;
    get id() {
        return this._id;
    }
    set id(value) {
        this._id = value;
    }
    _name;
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
}

const ClassB = class extends ClassA{
}
const objB = new ClassB();
objB.id = 213334;
objB.name = "Charulata";
console.log(JSON.stringify(objB));

//Abstract Class IN JS
class BasCls {
    constructor() {
        if (this.constructor === BasCls) {
            throw new Error("Cant create an object for the class")
        }
    }
    _id;
    get id() {
        return this._id;
    }
    set id(value) {
        this._id = value;
    }
    _name;
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    _email;
    get email() {
        return this._email;
    }
    set email(value) {
        this._email = value;
    }
}
class ChdCls extends BasCls{ }

const objchd = new ChdCls();
objchd.id = 200029;
objchd.name = 'Gladiola Glaviascola';
objchd.email = "glad@yahoo.com";
console.log(JSON.stringify(objchd));

class ClassAA{
    funa = function () {
        console.log("Iam from parent");
    }
}
class ClassBB extends ClassAA{ 
    funa = function () {
        console.log("Iam from child");
    }
}
const objb = new ClassBB();
objb.funa();
//overloading
class ClassCC{
    constructor(n, a) {
        this.n = n;
        this.a = a;
        if (this.n == undefined) {
            this.n = "";
        }
        if (this.a == undefined) {
            this.a = 0;
        }
    }
}
const obj = new ClassCC('hello', undefined);
console.log(JSON.stringify(obj));

