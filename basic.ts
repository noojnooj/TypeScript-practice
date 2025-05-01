//1. 사용자 정보 타입 선언
interface User {
  name: string;
  age: number;
  isAdmin: boolean
}

const user: User = {
  name: '최현준',
  age: 28,
  isAdmin: true
}

//2. 함수에 타입 붙이기

function add(a: number, b: number): number {
  return a + b;
}

//3. 유니언 타입 사용하기
function toString(value: string | number): string {
    return value.toString();
} 

// 4. todo List 타입 정의
interface Todo {
  id: number;
  title: string;
  done: boolean;
}

const todos: Todo[] = [
  { id: 1, title: '책 읽기', done: true },
  { id: 2, title: '타입스크립트 공부하기', done: true },
  { id: 3, title: '집에가기', done: false},
]

//5. 제네릭 함수 만들기 -> 잘모르겠음


// 6.  API 응답 타입 정의 - > 잘모르겠어서 중간 만했음

interface User {
  id: number;
  name: string;
  email: string;
}

interface Response<T> {
  status: string;
  data: T;
}

