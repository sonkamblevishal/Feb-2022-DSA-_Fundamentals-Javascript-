function FindingElement(arr, targetletter) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (arr[mid] === targetletter) {
      return mid;
    } else if (arr[mid] < targetletter) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return false;
}

let arr = ["a", "b", "d", "e", "f", "g", "h", "i", "x", "z"];
let targetletter = "z";

console.log(FindingElement(arr, targetletter));
