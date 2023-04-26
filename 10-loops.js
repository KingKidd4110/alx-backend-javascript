export default function appendToEachArrayValue (array, appendString) {
  let array2 = [];
  for (let value of array) {
    array2.push(appendString + value);
  }

  return array2;
}
