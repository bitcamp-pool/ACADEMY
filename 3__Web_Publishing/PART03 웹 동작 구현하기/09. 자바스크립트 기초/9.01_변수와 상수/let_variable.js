/* 데이터(값)을 저장하는 공간
변수: 변하는 데이터를 저장하고 관리하는 공간
상수: 변하지 않는 데이터를 저장하고 관리하는 공간
 */
/*예약어(키워드) 식별자(이름) 연산자 데이터(값) 표현식*/
var kor = 100;
var eng = 90;
var math = 85;
var total = kor + eng + math;
console.log("총점:" , total);

/* var 변수의 문제
  변수이름이 중복되어 재생성 되더라도 실행이 되는 문제
*/
var sum = 10 + 20;
var sum = 777;
console.log("sum: ", sum);

// 식별자가 중복될 수 없다!
let num = 10;
// let num = 777; SyntaxError: Identifier 'num' has already been declared
console.log("num=", num);
num = 30;
console.log("num=", num);


/* 호이스팅(hoisting) : 선언부와 할당을 나누어서, 선언부를 최상위로 끌어 올리는 행위
  인터프리터가 변수와 함수의 메모리 공간을 선언 전에 미리 할당하는 것을 의미
  var 로 선언한 변수의 경우 호이스팅 시 undefined 로 변수를 초기화

  let은 호이스팅이 되지않는다.
 */
// console.log(url); ReferenceError: Cannot access 'url' before initialization
let url = 'www.google.com';
console.log(url);

var word;         // 선언부 <---- 최상위
console.log("word = ", word); // 에러가 나지 않음
// var word;      
word = "Hello~";  // 할당부
console.log("word = ", word);

// let 사용권장