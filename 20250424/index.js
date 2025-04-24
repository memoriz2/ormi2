let x = 10; // 전역 스코프

function foo() {
  let y = 20; // foo의 지역 스코프

  function bar() {
    let z = 30; // bar의 지역 스코프
    console.log(x + y + z); 
  }

  bar(); // bar 호출
}

foo(); // foo 호출

//outer함수를 할당하지않았어요
//inner함수는 반환했는데 이걸 어디에 할당해서 어케 접근할건지 정해지지 않아서
//클로저를 쓰시려면 var 변수 = outer();
//이게 되야할것같습니다
//그래야 "변수"로 outerVar과 innerVar에 접근할 수 있습니다







