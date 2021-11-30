const twoSum = (nums, target) => {
  for(let i = 0; i< nums.length - 1; i++) {  
    const  val = nums[i] > target ? parseInt(nums[i] - target) : parseInt(target - nums[i])
    let newIndex = i + 1;
    const temp = nums.slice(newIndex)
    if(temp.includes(val)) {
        const index = temp.findIndex(value => value === val)
        return [i, index + newIndex]
    }
  }
};

const nums = [2,7,11,15]
console.log(twoSum(nums, 9))
const nums1 = [3,2,4]
console.log(twoSum(nums1, 6))
const nums2 = [3,3]
console.log(twoSum(nums2, 6))