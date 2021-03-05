/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    arr = [];
   obj = {};
   for(let i = 0; i<nums.length; i++){
       if(nums[i] in obj){
           obj[nums[i]]++;
       }else{
           obj[nums[i]] = 1;
       }
   }
   for(let i in obj){
       arr.push(obj[i])
   }
   arr.sort((a,b) =>{ return (a-b) })
   for(let i in obj){
       if(arr[arr.length-1] == obj[i]){
           return i
       }
   }
};
