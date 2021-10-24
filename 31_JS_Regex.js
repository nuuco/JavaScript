//정규 표현식을 사용해 유튜브의 영상 아이디값만 가져오기
//(아이디 자리수는 11자리)

const regex = /(?:https?:\/\/)?(?:www\.)?youtu.be\/([a-zA-Z0-9-]{11})/;
//이 때 flag 는 쓰지 않는다.

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


