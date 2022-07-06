//Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.
//You must write an algorithm with O(log n) runtime complexity.
var searchRecursively = function(nums, target) {
    if (nums[0] === target) return 0
    if (nums[nums.length-1] === target) return nums.length-1
    if (nums[0] > target || nums[nums.length-1] < target || nums.length < 2) return -1
    return search (nums, target, 0, nums.length-1)    
};

var search = function(nums, target, leftIndex, rightIndex){
    let midItem = Math.floor((leftIndex+rightIndex)/2)
    if (nums[midItem] === target) return midItem
    if (midItem - leftIndex < 2) return -1
    if (nums[midItem] > target) return search(nums, target, leftIndex, midItem)
    else return search(nums, target, midItem, rightIndex)
}

console.log(searchRecursively([-1,0,3,5,9,12,13,14,15,20,21,22,24,25,31,32,33,34],32))
// console.log(searchRecursively([-1,0,5],2))

