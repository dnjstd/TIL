//숫자형 이넘
// ex) 'Nike = 10'과 같이 따로 초기화를 하지 않으면 0으로 출력
enum Shoes {
  Nike,
  Adidas,
}

//문자형 이넘
// enum Shoes {
//   Nike = '나이키',
//   Adidas = '아디다스',
// }

var myShoes = Shoes.Adidas;
console.log(myShoes); //숫자형 - 0 //문자형 - '아디다스'

//이넘 예제
enum Answer {
  Yes = "Y",
  No = "N",
}

function askQuestion(answer: Answer) {
  if (answer === Answer.Yes) {
    console.log("정답입니다");
  }
  if (answer === Answer.No) {
    console.log("오답입니다");
  }
}

askQuestion(Answer.Yes);
askQuestion(Answer.No);
