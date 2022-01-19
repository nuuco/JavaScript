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

