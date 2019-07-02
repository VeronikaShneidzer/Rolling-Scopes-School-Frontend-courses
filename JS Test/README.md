```javascript
//### 1
Официальное название языка согласно стандарту:

//### 2
Перечислите движки/компиляторы/интерпретаторы JS которые знаете:

//### 3
Напишите код, который поможет определить является ли объект массивом.

//### 4
Перечислите все значения, которые относятся к false

//### 5
Что произойдет в данном случае:
var sum = function(a, b){return a + b;}
sum.result = 4;

//### 6
Что произойдет в данном случае:
"c" > true

//### 7
Что произойдет в данном случае:
var x = null || 0 || {name: "false"};

//### 8
Что произойдет в данном случае:
var scope = "global ";
function outer() {
	function scope() {
		console.log(scope);
	}
	scope();
}
outer();

//### 9
Что такое Hoisting?

//### 10
Что делает функция Function.prototype.bind. Напишите полифил.

//### 11
console.log("130" + 3 - "0");
console.log("ten" / 2);

//### 12
var x;
var y = null;
console.log(x == y);
console.log(x === y);
console.log(z === undefined);

//### 13
var obj = {};
console.log(obj.toString()); [object Object]

//### 14
var bool = "false";
console.log(bool == false);
console.log(Boolean(bool));

//### 15
var result = "ten" * 2;
console.log(result == NaN);

//### 16
var zero = 0;
console.log(zero == false);

//### 17
var array1 = new Array(3);
console.log(array1[0]);

//### 18
let x = 50;
if (x < 100) {
   let x = 200;
   console.log(x); 200
}

console.log(x); 50

//### 19
var arr1 = ["3"];
var arr2 = ["3"];
console.log(arr1 == arr2); 

//### 20
function x(o){
	o.a = o.a + 5; 6
	o = {
		a: 20
	};
}
var obj = {a: 1};
x(obj);
console.log(obj.a) 

//### 21
var obj = {x: 12};
Object.prototype.z = 12;
console.log(typeof obj.z == undefined);

//### 22
var globalVar = "global";
function test1() {
	console.log(globalVar);
	return;

	var globalVar;
}
test1();

//### 23
var i = 5;
(function () {
	var j = 2;
})();
console.log(i + j); 

//### 24
var sum = function(x, y){
	console.log(arguments.length); 
	return x + y;
}
sum(3, 5, 8); 

//### 25
var test2 = {
	"name": "max",
	"getName": function(){
		return this.name;
	}
};
var getName = test2.getName;
console.log(getName() == "max")

//### 26
var test3 = function(){
	var i = 0;
	for(var i = 0; i < 10; i++){
		var j = i;
	}
	console.log(i + j);
};
test3();

//### 27
var answer = 42;
var logAnswer = function() {
	console.log(answer);
};
var sum = function(x, y){
	var answer = x + y;
	logAnswer(); 
	return answer; 
}
sum(2,4);

//### 28
function Car(color){
	var that = {};
	that.color = color;
	return that;
};
var lada = new Car("red");
console.log(lada instanceof Car); 

//### 29
function Car(color){
	this.color = color;
};
var lada = new Car("black");
Car.prototype.currentGear = 1;
console.log(++lada.currentGear);
console.log(Car.prototype.currentGear);

//### 30
function Person(firstName, lastName) { 
    this.firstName = firstName;
    this.lastName = lastName;
    this.getName = () => this.firstName + " " + this.lastName;
}
let batman = new Person("Bruce", "Wayne");
console.log(batman.getName());
console.log(batman.getName.call({firstName:"Clark", lastName:"Kent"}));

//### 31
var o = {
        x: 8,
        valueOf: function(){
            return this.x + 2;
        },
        toString: function(){
            return this.x.toString();
        }
    };
console.log(o < "9");

//### 32
console.log( 10['toString']['length'] );

//### 33
function f(){ return f; }
var wildguess = new f() instanceof f;
console.log( wildguess );
```
