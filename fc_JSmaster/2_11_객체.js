//객체 생성
//1. 싱글 리터럴 객체
const object = {
    //key, property: 'value'
    property: 'value',
    method: function() {},
};

//2. 생성자 함수 - 일반적인 객체(싱글 리터럴 객체)를 자주 만들어야 할때
//파스칼케이스(첫문자 대문자)
function NewObject(name) {
    this.name = name;
}
//new 와 조합해 객체 생성
const newObject = new NewObject('Jang');
//Object.create로 객체 생성 
//Object.create(프로토타입, 객체 서술자(기술자))
//싱글 리터럴과 달리, 만들 때부터 세밀하게 수정가능
const newObject2 = Object.create(Object.prototype, 
    {
        //객체 서술자 - 객체의 생김새를 더 자세하게 서술
        name: {
            value: 'jang',
            writable: true, //덮어쓸 수 있는지
            enumerable: true, //열거할 수 있는지
            confiqurable: true, //객체 서술자를 수정할 수 있는지
        },
    },
);

//프로퍼티 열거

const obj = {
    prop1: 'value1',
    prop2: 'value2',
    prop3: 'value3',
    prop4: 'value4',
}

obj.prop1;
obj['prop1']; 
obj['prop' + 1];

for (const key in obj) {
    //for in문에서 obj.key 로는 안됨.
    //key 가 문자열 형태로 들어온다 생각하면 이해 됨.
    console.log(obj[key]);
}

//객체 체이닝 - 자신의 프로토타입에 없는게 있으면 계속 위로 올라감.(체이닝)
//이걸 방지하고자 - hasOwnProperty() 가 있다.
//obj.hasOwnProperty(key) - 해당 키가 이 객체가 가지고 있는 게 맞느냐?
for (const key in obj) {
    if(obj.hasOwnProperty(key)){
        console.log(obj[key]);
    }
}

//프로퍼티 조작
const person = {
    firstName: 'jang',
    location: 'korea',
};

//const 로 만들어도 객체는 새 프로퍼티 추가가능
//const 는 재할당만 막는 것.
//추가
person.lastName = 'hayeon';
//수정
person.lastName = 'ha-yeon';
//삭체 - delete 연산자
delete person.location;

console.log(person);    //{ firstName: 'jang', lastName: 'ha-yeon' }


//프로퍼티 접근자(getter, setter)
//좀 더 안전하게 접근 가능
//일관적으로 접근 가능

const person2 = {
    _firstName: 'jang',
    _lastName: 'hayeon',
    
    //get, set 을 기본 제공
    get firstName() {
        return this._firstName;
    },

    //set 은 인자로 뭔가를 받아야함
    //이상한 값 들어오는 것 방지 가능
    set firstName(newFirstName) {
        if(typeof newFirstName !== 'string') {
            this._firstName = 'undefined name';
            return;
        }
        this._firstName = newFirstName;
    },

    //응용
    get fullName() {
        return (
            this._firstName + ' ' + this._lastName + '입니다.'
        )
    },
};

//get 사용
//obj.get함수명
console.log(person2.firstName);     //jang

//set 사용
//obj.set함수명
person2.firstName = 'kim';
console.log(person2.firstName);  //kim

person2.firstName = 1234;
console.log(person2.firstName);  //undefined name

//응용
person2.firstName = 'lee';
console.log(person2.fullName);  //lee hayeon입니다.


//<인스턴스>
//인스턴스 = 유일한 객체
//생김이 똑같은 객체, 고유한 객체

const me = {
    name: 'jang',
    age: 18,
    location: 'Korea',
};

const me2 = {
    name: 'jang',
    age: 18,
    location: 'Korea',
};

console.log(me === me2);    //false
console.log(me.name === me2.name);    //true

//객체의 프로퍼티들은 값으로 분류되 비교가능하나,
//객체 그 자체 비교는 아무리 내용이 같아도 같다고 안나온다.
//왜? 이 경우는 객체의 메모리주소를 비교! - 값이 같아도 결과가 다름.
//고유한 하나하나의 객체가 하나하나의 인스턴스로 인정이 된다.
//메모리에 올라가서 특정 메모리의 공간을 차지하고 있는 객페 = 인스턴스
//싱글리터럴로 만든 객체도 고유한 인스턴스,
//생성자 함수로 만든 것도 고유한 인스턴스.

const me = {
    name: 'jang',
    age: 18,
    location: 'Korea',
};
//생성자
//일정한 템플릿으로 비슷한 객체를 만들어 내고 싶을때 사용
//생성자 함수명은 파스칼 케이스(첫문자 대문자)로 쓰는 암묵적 규칙

function Person(name, age, location){
    this.name = name;
    this.age = age;
    this.location = location;

    this.getName = function() {
        return this.name + '입니다.';
    };
}

//me3, me4는 Person에서 확장된 인스턴스 들
const me3 = new Person('han', 13, 'Korea');
const me4 = new Person('yoon', 21, 'China');

me3.getName();  //han입니다.


/**
 * 사실 생성자 함수는 잘 쓰이지 않는다.
 * ES2015 이후부터는 Class가 나왔기 때문!
 */

