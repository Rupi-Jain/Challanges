
const binary_search = (list,target) => {

  let mid;
  if(list.length === 0)
    return false;
  else {
    const length = list.length - 1;
    mid = Math.floor(list.length - 1 / 2);
  }

  if (list[mid] === target) {   
    return true;    
  } else if (list[mid] < target) {
      return binary_search(list.slice(mid+1), target)
  } else {
      return binary_search(list.slice(0, mid ), target)
  }
 
}

const list = [1,2,3,4,5,6,7,8,9,10]
console.log(list.length)
console.log(binary_search(list, 7))
console.log(binary_search(list, 4))
console.log(binary_search(list, 11))