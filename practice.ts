//* 제네릭 함수 연습 문제

//  문제 1. 리스트에서 마지막 요소 가져오기
function getItem<T>(arr: T[]): T {
  return arr[arr.length - 1];
}

const numbers = [1, 2, 3, 4, 5];
const strings = ['a', 'b', 'c'];
