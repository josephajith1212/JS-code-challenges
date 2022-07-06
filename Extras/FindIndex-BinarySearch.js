//Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.
//You must write an algorithm with O(log n) runtime complexity.
var search = function(nums, target) {
    if (nums[0] === target) return 0
    if (nums[nums.length-1] === target) return nums.length-1
    
    let leftIndex = 0, rightIndex = nums.length-1
    while (leftIndex < rightIndex && rightIndex-leftIndex > 1){
        let midIndex = Math.floor((rightIndex+leftIndex)/2)
        if (nums[midIndex] === target) return midIndex
        else if (nums[midIndex] > target) rightIndex = midIndex
        else leftIndex = midIndex
    }
    return -1
};

// console.log(search([-1,0,3,5,9,12,13,14,15,20,21,22,24,25,31,32,33,34],14))
console.log(search([-1,0,5],2))
