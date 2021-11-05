# 정규표현식 뽀개기

'드림코딩 by 엘리' 님의 강의 영상을 토대로 작성한 문서입니다.

참고 강의 : [https://www.youtube.com/watch?v=t3M6toIflyQ](https://www.youtube.com/watch?v=t3M6toIflyQ)

연습용 사이트 : [https://regexr.com/5ml92](https://regexr.com/5ml92)

--------
## 기본 구성


1) slash → 나 정규표현식이야! 라고 알려주는 역할

2) pattern → 우리가 찾고자 하는 패턴

3) flag - 어떤 옵션을 사용해 검색할 건지   

   
<br/>
   
    중요한 건 pattern!  

<br/>       
   
----


### flag - 어떤 옵션을 사용해 검색할 건지

1. g = global
    - 전체
    - 매칭되는 다수의 결과값을 기억할 수 있다.
2. i = case insensitive
    - 대소문자 구분X
3. m = multiline
    - 다중행 검색
4. s = single line (dotall)
5. u = unicode
    - 유니코드 패턴을 유니코드 코드 포인트의 나열로 취급
6. y = sticky
    - "sticky" 검색을 수행, 문자열의 현재 위치부터 검색을 수행

→ 주로 /g, /gm, /gi 를 많이 사용

    
<br/>   
======

## 문법 정리

### Groups and ranges

`|`   또는

- Hi `|` Hello

`( )`   그룹, 그룹을 기억함

- (Hi `|`Hello) `|` (And)  → group #1 : Hi`|` Hello, group #2 : And
- gr(a|e)y = gray, grey
- gr(a|e|d)y = gr[aed]y = gray, grey, grdy

`(?:)`   찾지만 그룹을 기억하지는 않음

- 중괄호로 부분을 묶어 찾고 싶었을 뿐, 따로 group 데이터를 만들고 싶지 않다면 그룹 시작부분에 `?:` 를 넣어주면 더이상 그룹이 지정되지 않는다.
- gr(?:a|e)y = gray, grey  (group 데이터는 없음)

`[ ]`  문자셋, 괄호 안의 어떤 문자든 하나라도 만족하면 찾음

- gr[aed]y = gray, grey, grdy
- [a-z] = 어떤 문자열이든 영어 소문자로 이뤄져 있으면 찾음
- [a-zA-Z0-9] = 영어 소문자, 대문자, 숫자로 이뤄져 있으면 찾음

`[^]`   부정 문자셋, 대괄호 안의 어떤 문자를 제외한 나머지를 찾고 싶을 때

- 대괄호(문자셋) 시작부분에 ^(not sign) 을 붙여주면 그 문자셋 제외
- [^a-zA-Z0-9] = 영문자, 숫자가 아닌 것만 찾기   
   
<br/>


### Quantifiers (한 문자 뒤에 붙여서 쓴다. 아니면 그룹으로 묶어야)

`?`    없거나 있거나 (zero or one)

- 특정 문자 다음에 `?` 를 써준다.
- gra?y = a가 없는 경우, 있는 경우 = gry, gray

`*`    없거나 있거나 많거나 (zero or more)

- gra*y = a가 없거나 있거나 많거나 = gry, gray, graaaaay

`+`    하나 또는 많이 (one or more)

- gra+y = a가 있거나 많거나 = gray, graaaaay
- * 와 달리, 없으면 매치 안 됨!

`{n}`    n번 반복, 정확하게 문자 수를 지정해 줄 때

- a{2} = a가 2번 나오는 것만 선택
- gra{2}y = graay

`{min,}`   최소

- a{2,} = a가 최소 2번 나오는 것만 선택
- gra{2,}y = graay, graaay, graaaaaay

`{min,max}`    최소, 그리고 최대

- a{2,3} = a가 최소 2개, 최대 3개 나오는 것만 선택
- gra{2, 3}y = graay, graaay
   
<br/>

### **Boundary-type**

`\b`	  단어 경계

- \bYa = (space)Ya 인 것만 =Ya ya YaYaYa Ya YaYAya yaYaYa
- Ya\b = Ya(space) 인 것만 = Ya ya YaYaYa Ya YaYAya yaYaYa

`\B`	  단어 경계가 아님

- \BYa = (space)Ya 가 아닌 Ya 만 = Ya ya YaYaYa Ya YaYAya yaYaYa
- Ya\B = Ya(space) 가 아닌 Ya 만  = Ya ya YaYaYa Ya YaYAya yaYaYa

`^`    문장의 시작

- ^Ya = 문장 시작에 있는 Ya 만 선택 = Ya ya YaYaYa Ya YaYAya yaYaYa

`$`    문장의 끝

- Ya$ = 문장 시작에 있는 Ya 만 선택 = Ya ya YaYaYa Ya YaYAya yaYaYa

`^`  나 `$` 처럼 문장 단위로 찾는 경우, flag에서 m(multiline)을 해제하면 <여러 문장 전체> 내에서 시작과 끝을 찾게 된다. 보통 쓰일 일 없음...

→ 여러 줄에서 문장의 시작과 끝을 검사할 때는 대체적으로 m 옵션을 켜서 사용한다
   
<br/>

### **Character classes**

`\`    특수 문자가 아닌 문자(escpe기호)

- 정규표현식에서 사용되는 특수문자를 찾고싶은 경우 앞에 \를 써줘야한다.
- \\. = . 을 찾음
- \\{\\} = {} 을 찾음

`.`    어떤 글자 (줄바꿈 문자 제외), 모든 문자를 선택하고 싶을 때

- 단순히 마침표(.)를 찾고 싶을 때는 \. 로 써줘야한다.

`\d`    digit 숫자

- \d = ABSCEFGHIJKL1234567890

`\D`    digit 숫자 아님

- \D =  ABSCEFGHIJKL1234567890

`\w`    word 문자, 특수 문자가 아닌 모든 문자

- \w = ABSCEFG 1234 .[]{}()\^$|?*-+

`\W`    word 문자 아님, 공백도 찾음

- \W= ABSCEFG   1234 .[]{}()\^$|?*-+

`\s`    space 공백, 띄어쓰기 찾음

- \s = Ya ya YaYaYa Ya YaYAya yaYaYa

`\S`    space 공백 아님, 띄어쓰기를 제외한 모든 것

- \S = Ya ya YaYaYa Ya YaYAya yaYaYa
   
<br/>


--------

## 패턴 연습

### 1. 전화번호 선택하기

매치되야할 문장   

010-405-3412   
02-878-8888    
010-898-0893   
010 898 0893   
010.898.0893   
0108790893   
010-1234-1234   


- \d{2,3}[- .]?\d{3,4}[- .]?\d{4}
- 공백는 문자셋에서 그냥 진짜 공백으로 넣어주면 된다. (물론 \s 로 넣어줘도 동작함)
- 마침표(.)는 문자셋에서 그냥 진짜 마침표 넣어주면 된다. (물론 \. 넣어줘도 동작함

   
<br/>

### 2. 이메일 선택하기

매치되어야할 문자

dream.coder.ellie@gmail.com

hello@daum.net

hello@daum.co.kr

- [a-zA-Z0-9._+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9.]+
- `+` 는 하나 또는 많이!
   
<br/>


### 3. 유튜브 주소에서 영상 아이디 가져오기

매치되어야할 문장

https://www.youtu.be/-ZClicWm0zM

https://youtu.be/-ZClicWm0zM

https://youtu.be/-ZClicWzMm0

youtu.be/-ZClicWzMm0


- (https?:\/\/)?(www\.)?[youtu.be](http://youtu.be/)\/([a-zA-Z0-9-]{11})
- 유튜브 영상 아이디가 11자리 인걸 정확힐 알고 있다면 `{11}`로 써 주는 게 좋고,
    
    모른다면 `+` 로 써준다.
    
- 아이디 부분은 group #3 로 묶여진다. 그룹1, 2 가 필요하지 않으면 `(?:)`를 붙여서 기억되지 않게 한다.
    - (?:https?:\/\/)?(?:www\.)?[youtu.be](http://youtu.be/)\/([a-zA-Z0-9-]{11})
    
   
   
<br/>

----

## 정규표현식 자바스크립트에서 활용하기

console.log(url.match(regex));

- 결과값이 배열로 리턴
    - 배열[0] 에는 '매칭되는 전체 문자열'이 들어있다.
    - 배열[1] 에는 '매칭되는 그룹 데이터'가 들어있다.

```javascript
const regex = /(?:https?:\/\/)?(?:www\.)?youtu.be\/([a-zA-Z0-9-]{11})/;

const url = "https://youtu.be/-ZClicWm0zM";

console.log(url.match(regex));
/** 결과값이 배열로 리턴
 * 배열[0] 에는 '매칭되는 전체 문자열'이 들어있다.
 * 배열[1] 에는 '매칭되는 그룹 데이터'가 들어있다.
[
  'https://youtu.be/-ZClicWm0zM',
  '-ZClicWm0zM',
  index: 0,
  input: 'https://youtu.be/-ZClicWm0zM',
  groups: undefined
]
 */

const result = url.match(regex);

console.log(result[1]);
//-ZClicWm0zM
```