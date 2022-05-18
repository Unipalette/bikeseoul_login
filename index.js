console.log("hello codeit!");

// 변수 선언

let espressoPrice;
espressoPrice = 3000;

console.log(espressoPrice);
// 문자열
console.log('I\'m "Iron man"');
// 큰 따옴표 안에는 큰 따옴표 앞에 역슬래시를 쳐주고 작은 따옴표에서는 작은따옴표 안에
// 그리고 그냥 헷갈리니까 문자열 안에 따옴표에는 다 앞에 슬래시 치셈

// 백틱을 활용하는게 더 편하다.
console.log(`He said "I'm Irom mam"`);

// typeof 연산자 사칙연산보다 우선순위가 높다.
console.log(typeof "hello" + "codeit"); // 'string'+'codeit' =>stringcodeit으로 출력
console.log(typeof 8 - 3); // NaN(not a number)
// 위에 그 이유는 'number' - 3 으로 계산이 됐기 때문이다. 스티링과 숫자형은 -연산이 되지 않는다.

function test(x) {
  return x + x;
}
console.log(test(6));
