//Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.
//You must write an algorithm with O(log n) runtime complexity.
var search = function(nums, target) {
    if (nums[0] === target) return 0
    if (nums[nums.length-1] === target) return nums.length-1
    if (nums[0] > target || nums[nums.length-1] < target) return -1
    if (nums.length < 2) return -1
    var i = Math.floor(nums.length/2)
    while (nums[i] !== target){
        if (nums[i] > target) i = search(nums.slice(0,i),target)
        if (nums[i] < target) {
            var temp = search(nums.slice(i,nums.length-1),target)
            (temp===-1)? i=-1 : i+=temp
            // i += search(nums.slice(i,nums.length-1),target)
        }
        break
    }
    return i
};

// console.log(search([-1,0,3,5,9,12,13,14,15,20,21,22,24,25,31,32,33,34],4))
console.log(search([-1,0,5],2))