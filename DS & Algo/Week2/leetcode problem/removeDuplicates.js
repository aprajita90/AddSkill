/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    arr = [];
    obj = {};
    for(let i = 0; i<nums.length; i++) {
        if(nums[i] in obj){
            obj[nums[i]]++;
        }else{
            obj[nums[i]] = 1;
        }
    }
    for(let i in obj){
        arr.push(parseInt(i));
    }  
    return arr;
};
removeDuplicates([1,1,2])

