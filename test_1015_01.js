/*
징검다리를 건너려고 합니다. 징검다리는 한 번에 1칸 혹은 2칸을 건널 수 있습니다.
예를 들어, 3개의 발판이 있다고 가정할 때, 징검다리를 건너는 모든 방법의 수 예시는
다음과 같습니다.
> 1 걸음 + 1 걸음 + 1 걸음
> 1 걸음 + 2 걸음
> 2 걸음 + 1 걸음
징검다리의 발판 수 n이 주어질 때, 징검다리를 건너는 모든 방법의 수를 구하는 함수,
solution을 완성해주세요.
*/


/**
* @param n {number}
* @return {number]}
*/
function solution (n) {
    var answer = 0;

    if(n > 1) {
        answer = solution(n-2) + solution(n-1);
    } else{
        //n == 1 일 경우
        answer = 1;
    }

    return answer;
}

//테스트용 코드 입니다.
let n = 10;

console.log(solution(n));