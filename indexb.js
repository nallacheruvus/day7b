/**
 * Class to illustrate the usage of statics
 */
//#region 
class MyClass{
    static vara = 'This is a static variable';
    static funa =  ()=> {
        console.log("Iam a static function");
    }
    funb =  ()=> {
        console.log("Iam a normal method");
    }
}
class NClass extends MyClass{ }
NClass.funa();
console.log(NClass.vara);
const objn = new NClass();
objn.funb();
//#endregion