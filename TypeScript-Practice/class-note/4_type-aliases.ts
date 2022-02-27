// interface Person {
//   name: string;
//   age: number;
// }

type Person1 = {
  name: string;
  age: number;
};

var soyeon: Person1 = {
  name: "soyeon",
  age: 20,
};

//
type MyString = string;
var str: MyString = "hello";

//
type Todo = { id: string; title: string; done: boolean };
function getTodo(todo: Todo) {}
