// Generic types

function addApendiceList<T>(array: any[], valor: T) {
  return array.map(item => item + valor);
}

addApendiceList([1, 2, 3], 1);
