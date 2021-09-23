//class
//만드는 방법
//1. 선언 방식
class A {};

console.log(new A()); //A {}

//2. class 표현식을 변수에 할당.
class B {};

console.log(new B()); //B {}

//선언적 방식이지만 호이스팅은 일어나지 않는다.
// new C();

// class C {};
//ReferenceError: Cannot access 'C' before initialization

//constructor 생성자

class Class1{
    constructor(name, age){
        console.log('hello! constructor', name, age);
    }
};

console.log(new Class1('Mark', 37));
//hello! constructor Mark 37
//class1 {}


//맴버 변수 : 객체의 프로퍼티

class Class2{
    constructor(name, age){
        this.name = name;
        this.age = age
    }
}

console.log(new Class2('Anna', 22));
//class2 { name: 'Anna', age: 22 }

class Class3{
    name;
    age; 
}
console.log(new Class3());
//class3 { name: undefined, age: undefined }
//안될 경우, 실행하고 있는 런타임이 지원하지 않는 것.

class Class4{
    name = 'no name';
    age = 0;
    
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}

console.log(new Class4('Mark', 37));
//Class4 { name: 'Mark', age: 37 }

//멤버 함수
class Class5{
    hello1() {
        console.log('hello1', this);
    }
    hello2 = () => {
        console.log('hello2', this);
    }
}

new Class5().hello1();
// hello1 Class5 { hello2: [Function: hello2] }
new Class5().hello2();
// hello2 Class5 { hello2: [Function: hello2] }


class Class6{
    name = 'Mark';

    hello(){
        console.log('hello', this.name);
    }
}

new Class6().hello();
//hello Mark

//get, set 게터 세터
//변수를 내부적으로만 쓸 때는 언더바( _ )를 달아준다.
//게터, 세터가 외부에서 접근할 수 있는 public 한 접근 제어자가 되는 것.
//보통은 직접적으로 class7._name 을 바꾸지 않고, 게터와 세터를 통해서만 멤버 변수를 바꿔준다.
class Class7{
    _name = 'no name';
    get name(){
        return this._name + '@@@';
    }

    set name(value){
        this._name = value + '!!!';
    }
}

const c7 = new Class7();
console.log(c7);
//Class7 { _name: 'no name' }

c7.name = 'Mark';
//set name함수가 실행된다.
console.log(c7);
//Class7 { _name: 'Mark!!!' }

console.log(c7.name);
//Mark!!!@@@
console.log(c7._name);
//Mark!!!


//read only
//세터 함수 없이 게터 함수만 넣어서, readonly 를 표현할 수 있다.
class Class8{
    _name = 'no name';
    //_변수명 -> 외부에서 값을 바꾸지 말자고 전제하는 약속
    get name(){
        return this._name + '@@@';
    }

}

const c8 = new Class8();
console.log(c8);
// Class8 { _name: 'no name' }
c8.name = 'Mark';
console.log(c8);
// Class8 { _name: 'no name' }


//static 변수, 함수

class Class9{
    static age = 37;
    static hello(){
        console.log(Class9.age);
    }
}

console.log(Class9, Class9.age);
// [class Class9] { age: 37 } 37
Class9.hello();
// 37

class Class10{
    age = 37;
    static hello(){
        console.log(this.age);
    }
}
console.log(Class10, Class10.age);
// [class Class10] undefined
Class10.hello();
// undefined
//new Class10().hello();
//TypeError: (intermediate value).hello is not a function
//static 변수, 함수는 객체에 속한 게 아니기 때문에, 객체에서 접근할 수 없음.


class Class11{
    static name = '이건 static 변수 값';
}

console.log(Class11);
//[class 이건 static 변수 값] { name: '이건 static 변수 값' }
//static name 변수는 class 의 이름을 뜻한다.



//extend 클래스의 상속 기본
class Parent {
    name = 'Lee';

    hello() {
        console.log('hello', this.name);
    }
}

class Child extends Parent {}

const p = new Parent();
const c = new Child();
console.log(p, c);
//Parent { name: 'Lee' } Child { name: 'Lee' }

c.hello();
//hello Lee
c.name = 'Anna';
c.hello();
//hello Anna

//Child 클래스는 Parent의 멤버 함수, 변수를 그대로 가짐.


//override 클래스의 상속 멤버 변수 및 함수 오버라이딩 추가

class Parent2 {
    name = 'Lee';

    hello() {
        console.log('hello', this.name);
    }
}

class Child2 extends Parent {
    age = 37;

    hello() {
        console.log(this.name, this.age);
    }

}

const p2 = new Parent2();
const c2 = new Child2();
console.log(p2, c2);
//Parent2 { name: 'Lee' } Child2 { name: 'Lee', age: 37 }

c2.hello();
//Lee 37


//super 클래스의 상속 생성자 함수 변경
//자식이 생성자에서 무언가를 추가하려 할 때, super를 호출해야..

class Parent3 {
    name = 'Lee';

    constructor(name){
        this.name = name;
    }

    hello() {
        console.log('hello', this.name);
    }
}

class Child3 extends Parent {
    age = 37;

    constructor(name, age){
        super(name);
        //부모의 생성자와 동일한 역할
        //부모에서 하는 일을 먼저 하게
        //this 쓰기 전에 super 꼭 호출.
        this.age = age;
    }

    hello() {
        console.log(this.name, this.age);
    }

}

const p3 = new Parent3('Mark');
const c3 = new Child3('Mark', 37);
console.log(p3, c3);
//Parent3 { name: 'Mark' } Child3 { name: 'Lee', age: 37 }

c3.hello();
//Lee 37


//static 클래스 안에 있는 static 상속 받기

class Parent4{
    static age = 37;
}

class Child4 extends Parent4{}

console.log(Parent4.age, Child4.age);
//37 37
//static 변수도 정상적으로 상속 된다.


