
  const calculator = {
    owner: "System",
    total: 0,
    add(x) {
      this.total += x;
      console.log(`${this.owner}'s total is ${this.total}`);
    }
  };
  
  const alice = { owner: "Alice", total: 10 };
  const bob = { owner: "Bob", total: 20 };
  
  // 문제 1: calculator.add를 Alice가 호출하게 만드세요 (즉시 실행, 결과 출력해야 함)
  calculator.add.call(alice, 1);
  // 문제 2: calculator.add를 Bob이 호출하도록 하되, 인자는 배열로 전달하세요.
  calculator.add.apply(bob, [20]);
  
  // 문제 3: Alice 전용 addByTwo 함수를 만들어, 두 번 실행되도록 하세요.
  function addByTwo(user){
    if(user===alice){
    calculator.add.call(user,1);
    calculator.add.call(user,1);
    }
  }
  
  addByTwo(alice);

  // 문제 4: setTimeout으로 1초 뒤 Bob이 add(5) 하도록 호출하세요.
   setTimeout(calculator.add.bind(bob,5),1);
  
  // 문제 5: 다음 고차 함수 repeatThreeTimes는 건드리지 말고,
  //         Alice가 add(1)을 3번 하게 만드세요 (this는 항상 Alice)
  
    function repeatThreeTimes(fn) {
        fn();
        fn();
        fn();
    }

    repeatThreeTimes(calculator.add.bind(alice,1));
  
  // 문제 6 (심화): 아래 배열에 담긴 함수들이 순차적으로 실행되도록 하고,
  //                각각의 this가 모두 Bob을 가리키도록 하세요.
  const taskQueue = [
    calculator.add,
    calculator.add,
    calculator.add
  ];
  
  // 여기에 각 문제의 해답을 작성하세요.
  taskQueue.forEach(calculator.add.bind(bob,1));





