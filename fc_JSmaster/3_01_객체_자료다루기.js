//객체 - 객체로 배열로 순회하기(객체를 배열로)

//객체 - Object.keys()
//객체를 인자로 받아 그 객체의 속성(키 이름)만 배열로 반환해줌.
//일반적인 반복문과 동일한 순서로 열거될 수 있는 배열로 반환
const data = {
    squadName: 'Super hero squad',
    homeTown: 'Metro City',
    formed: 2016,
    secretBase: 'Super tower',
    active: true,
    members: [
        {
            name: 'Mika',
            age: 21,
            secretIdentity: 'Dan jukes',
            powers: ['Radiation resistance', 'Turing tiny'],
        },
        {
            name: 'Hally',
            age: 23,
            secretIdentity: 'Hanah kay',
            powers: ['Milion tonne punch', 'Damage resistance'],
        },
        {
            name: 'Flame',
            age: 110000,
            secretIdentity: 'Jane orte',
            powers: ['immorality', 'Fire flash'],
        },
    ]
}

const keys = Object.keys(data);

console.log(keys);
/*
[
    'squadName',
    'homeTown',
    'formed',
    'secretBase',
    'active',
    'members'
]
*/

//객체 - Object.values()
//객체를 인자로 받아 그 객체의 속성값들만 배열로 리턴
const values = Object.values(data);

console.log(values);
/*
 [
  'squadName',
  'homeTown',
  'formed',
  'secretBase',
  'active',
  'members'
]

[Done] exited with code=0 in 0.819 seconds

[Running] node "d:\00_SelfDev\NKLCB\programming\JavaScript\fc_JSmaster\3_01_자료다루기.js"
[
  'squadName',
  'homeTown',
  'formed',
  'secretBase',
  'active',
  'members'
]

[Done] exited with code=0 in 0.299 seconds

[Running] node "d:\00_SelfDev\NKLCB\programming\JavaScript\fc_JSmaster\3_01_자료다루기.js"
[
  'squadName',
  'homeTown',
  'formed',
  'secretBase',
  'active',
  'members'
]
[
  'Super hero squad',
  'Metro City',
  2016,
  'Super tower',
  true,
  [
    {
      name: 'Mika',
      age: 21,
      secretIdentity: 'Dan jukes',
      powers: [Array]
    },
    {
      name: 'Hally',
      age: 23,
      secretIdentity: 'Hanah kay',
      powers: [Array]
    },
    {
      name: 'Flame',
      age: 110000,
      secretIdentity: 'Jane orte',
      powers: [Array]
    }
  ]
]
 */

//객체 - Object.entries()
//객체를 인자로 받아 그 객체의 [key, value] 쌍의 배열을 반환
//2차원 중첩 매열로 반환됨. 배열 안의 배열(키, 값) 구조
//객체의 키와 값을 한번에 써야할 때 사용.
const entries = Object.entries(data);

console.log(entries);
/*
[
  [ 'squadName', 'Super hero squad' ],
  [ 'homeTown', 'Metro City' ],
  [ 'formed', 2016 ],
  [ 'secretBase', 'Super tower' ],
  [ 'active', true ],
  [ 'members', [ [Object], [Object], [Object] ] ]
]
 */