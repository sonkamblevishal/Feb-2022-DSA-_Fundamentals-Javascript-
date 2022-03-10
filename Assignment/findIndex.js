function find_index(arr, target)
 {
  for (let i = 0; i < arr.length; i++)
    if (arr[i] == target) 
    {
    return i;
    }
    else if (arr[i] > target) 
    {
        return i;
    }
    return arr.length;

}

let arr = [1, 3, 5, 6];

let target = 2;

// let target = 7;

console.log(find_index(arr, target));
