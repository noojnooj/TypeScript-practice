
interface Calc {
  value: number;
}

interface CalcResult {
  value: number;
}


function add(a: Calc, b: Calc): CalcResult {
  return { value: a.value + b.value };
}




