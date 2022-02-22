let user = {
    get name() {
    return this._name;
    },

    set name(value) {
    if (value.length < 4) {
            console.log("입력하신 값이 너무 짧습니다.");
            return;
        }
        this._name = value;
    }
};
  
user.name = "Pete";
console.log(user.name); // Pete

user.name = "d"; // 너무 짧은 이름을 할당하려 함
console.log(user.name); // Pete

