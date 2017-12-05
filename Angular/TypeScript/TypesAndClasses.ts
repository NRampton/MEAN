var myNum: number = 5;
var myString: string = "Hello Universe";
var myArr: number[] = [1,2,3,4];
var myObj: any = {name: 'Bill'};
var anythingVariable: any = "Hey";
anythingVariable = 25;
var arrayOne: [boolean,boolean,boolean,boolean] = [true, false, true, true];
var arrayTwo: [number, string, boolean, number] = [1, 'abc', true, 2];
myObj = {x: 5, y: 10};
class MyNode {
  val: number;
  _priv: number;
  constructor(value: number) {
    this.val = 0;
    this.val = value;
  }
  doSomething() {
    this._priv = 10;
  };
};
var myNodeInstance = new MyNode(1);
console.log(myNodeInstance.val);
function myFunction(): void{
  console.log("Hello World");
  return;
}
function sendingErrors(): never {
  throw new Error('Error messsage');
}
