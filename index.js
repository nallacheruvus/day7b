//using a constructor
class Person{//1
    constructor(id, name, email, mobile) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.mobile = mobile;
    }
}
const obj = new Person(2122, 'Manekshaw', 'manek@yahoo.com', '9877675432');
console.log(`Id:${obj.name}\t Name:${obj.name}\t Email:${obj.email}\t Mobile:${obj.mobile}`);
console.log(`Id:${obj["id"]}\nName:${obj["name"]}\nEmail:${obj["email"]}\nMobile:${obj["mobile"]}`);
console.log(JSON.stringify(obj));
for (const j in obj) {
    console.log(j+"-"+obj[j]);
}
console.log(obj);
//With accessors
class Cars{//2
    _manid;
    get manid() {
        return this._manid;
    }
    set manid(value) {
        this._manid = value;
    }
    _name;
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    _brand;
    get brand() {
        return this._brand;
    }
    set brand(value) {
        this._brand = value;
    }
}
const obja = new Cars();
obja.manid = 90998;
obja.name = "Beegle"
obja.brand = "Dodge Motors";
console.log(JSON.stringify(obja));
for (const k in obja) {
    console.log(k+"-"+obja[k]);
}
//Anonymous class
const Books = class {//3
    _name;
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    _author;
    get author() {
        return this._author;
    }
    set author(value) {
        this._author = value;
    }
}
const objBook = new Books();
objBook.name = "Elephant Song";
objBook.author = "Wilbur Smith";
console.log(JSON.stringify(objBook));
for (const k in objBook) {
    console.log(k+"-"+objBook[k]);
}
const BankAccount = class {//4
    constructor(id, bname, bact, bloc) {
        this.id = id;
        this.bname = bname;
        this.bact = bact;
        this.bloc = bloc;
    }
}
const objActa = new BankAccount(2021222, "Honkong Shanghai Banking Company", "Rodriguez Sam");
console.log(JSON.stringify(objActa));
for (const k in objActa) {
   console.log(k+"-"+objActa[k]);
}
