/**
 * 
 *Function illustrating usage of generator on an array 
 *@author satish
 */
//#region 
function ArrGenCode() {
    let arr = ['Physics', 'Nuclear Physics', 'Geo Physics', 'Low Temperature Physics', 'Quantum mechanics'];
    let lena = arr.length;
    function* ArrGen() {
        let a = 0;
        while (a < lena) {
            yield arr[a];
            a++;
        }
    }
    let arrGen = ArrGen();
    for (let i = arrGen.next(); i.done !== true; i = arrGen.next()){
        console.log(i.value);
    }
}
//#endregion

/**
 * Function illustrating the usage of generator on a set
 * @author satish
 */
//#region 
function SetGen() {
    console.log("*".repeat(45));
    let arr2 = [1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 5, 6, 6, 7, 7, 7, 7, 8, 8, 8, 8, 8, 8, 9, 9, 9, 9, 10];
    let set = new Set(arr2);
    let lenb = set.size;
    function* SetGen() {
        let a = 0;
        while (a < lenb) {
            yield Array.from(set)[a];
            a++;
        }
    }
    let setGen = SetGen();
    for (let i = setGen.next(); i.done !== true; i = setGen.next()){
        console.log(i.value);
    }
    let arr11 = [1, 2, 3, 4, 5];
    let arr12 = ['Physics', 'Nuclear Physics', 'Geo Physics', 'Low Temperature Physics', 'Quantum mechanics'];
    let map = new Map();
    for (let i = 0; i < arr11.length; i++) {
        map.set(arr11[i], arr12[i]);
    }
    
}
//#endregion

/**
 * Function illustrating the usage of generator on a map
 * @author satish
 */
//#region 
function firstSyntax() {
    function* MapGena() {
        let a = 0;
        while (a < map.size) {
            yield Array.from(map.entries())[a];
            a++;
        }
    }
    let mapGena = MapGena();
    for (let i = mapGena.next(); i.done !== true; i = mapGena.next()){
        console.log(i.value);
    }
}
//#endregion

/**
 * Function illustrating the usage of generator on a map(Second approach)
 * @author satish
 */
//#region 
function secSyntax() {
    let arr3 = Array.from(map.entries());
    function* MapGenb() {
        let a = 0;
        while (a < arr3.length) {
            const t = arr3[a];
            yield t ;
            a++;
        }
    } 
    let mapGenb = MapGenb();
    for (let i = mapGenb.next(); i.done !== true; i = mapGenb.next()){
        console.log(i.value);
    }
}
//#endregion

/**
 * Function illustrating the usage of generator on a map(third syntax)
 * @author satish
 */
//#region 
function thirdSyntax() {
    let arr5 = Array.from(map.keys());
    let lenc = arr5.length;
    function* MapGenc() {
        let a = 0;
        while (a < lenc) {
            let t = arr5[a];
            yield t + " " + map.get(t);
            a++;
        }
    }
    let mapGenc = MapGenc();
    for (let i = mapGenc.next(); i.done !== true; i = mapGenc.next()){
        console.log(i.value);
    }
}
//#endregion

/**
 * Constructor based class for books
 * @author satish
 */
//#region 
class Books{
    constructor(id, name, auth) {
        this.id = id;
        this.name = name;
        this.auth = auth;
    }
    toString() {
        return `Id:${this.id}\tName:${this.name}\tAuthor:${this.auth}`
    }
}
let arra = [133331, 111112, 13335653, 1123234, 14445445];
let arrb = ['Ramayan', 'Last sigh of moor', 'Shall we tell the president', 'God father', 'IT'];
let arrc = ['Valmiki', 'Salman Ruisdie', 'J Archer', 'Mario Puzo', 'Stephen King'];
let arrBooks = [];
for (let i = 0; i < arra.length; i++){
    let book = new Books(arra[i], arrb[i], arrc[i]);
    arrBooks.push(book);
}
//#endregion

/**
 * Function illustrating the usage of generator on a map of books
 * @author satish
 */
//#region 
function BookGenMap() {
    let bMap = new Map();
    for (let i = 0; i < arrBooks.length; i++) {
        bMap.set(i + 1, arrBooks[i]);
    }
    // console.log(bMap);
    
    function* BookGenC() {
        let a = 0;
        while (a < arrBooks.length) {
            // yield Array.from(bMap.entries())[a];
            const k = Array.from(bMap.keys())[a];
            const v = bMap.get(k);
            yield k + " " + v;
            a++;
        }
    }
    let bGenc = BookGenC();
    for (let i = bGenc.next(); i.done !== true; i = bGenc.next()){
        console.log(i.value);
    }
}
//#endregion

/**
 * using generator to read a map first,second approach
 * @author satish
 */
//#region 
function FirstSyntBooks() {
    function* BookGena() {
        let a = 0;
        while (a < arrBooks.length) {
            yield arrBooks[a].toString();
            a++;
        }
    }
    let bookGena = BookGena();
    for (let i = bookGena.next(); i.done !== true; i = bookGena.next()){
        console.log(i.value);
    }
}

function SecSyntBooks() {
    function* BookGenb() {
        let a = 0;
        while (a < arrBooks.length) {
            yield arrBooks[a];
            a++;
        }
    }
    let bGen = BookGenb();
    for (let i = bGen.next(); i.done !== true; i = bGen.next()){
        // console.log(i.value.toString());
        // console.log(JSON.stringify(i.value));
        const obj = i.value;
        // console.log(obj.id+" "+obj.name+" "+obj.auth);
        for (const k in obj) {
            console.log(k+" "+obj[k]);
        }
    }
}

//#endregion

