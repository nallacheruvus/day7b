function* MyGen() {
    yield "First Pass";
    yield "Second Pass";
    yield "Three Pass";
    yield "Four Pass";
    yield "Five Pass";
}
//Generators
const myGen = MyGen();
for (let i = myGen.next(); i.done !== true; i = myGen.next()){
    console.log(i.value);
}
console.clear();
function* AGen() {
    let a = 1;
    while (a <= 10) {
        yield "Log("+a+")="+Math.log(a)
        a++;
    }
}
const aGen = AGen();
for (let i = aGen.next(); i.done !== true; i = aGen.next()){
    console.log(i.value);
}
function* BGen() {
    let b = 1;
    while (b <= 10) {
        yield "Sqrt("+b+")="+Math.sqrt(b)
        b++;
    }
}
const bGen = BGen();
for (let i = bGen.next(); i.done !== true; i = bGen.next()){
    console.log(i.value);
}
function* CGen() {
    yield "First Pass";
    yield "Second Pass";
    yield "Third Pass";
}
let cGen = CGen();
console.log(cGen.next());//1
for (let i = 0; i < 1001; i++) {
   console.log("&&&&&&Sqrt("+i+")="+Math.sqrt(i));
}
console.log(cGen.next());//2
for (let i = 0; i < 1001; i++) {
    console.log("*****Log("+i+")="+Math.log(i));
}
console.log(cGen.next());//3
 
const DGen = function* () {
    yield "A Pass";
    yield "B Pass";
    yield "C Pass";
}
const dGen = DGen();
for (let i = dGen.next(); i.done !== true; i = dGen.next()){
    console.log(i.value);
}

