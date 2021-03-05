/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var arr = []; 
      var sum = 0;
      for(var i = 0; i <= nums.length; ++i)
      {
          for(var j =i+1; j<=nums.length; j++){
              sum = nums[i] + nums[j];  
              if(sum == target)
              {
                  arr.push(i, j);
                  break;
              }  
              sum = 0
          }         
      }
      return(arr);
  }
  
  twoSum(nums = [2, 7, 11, 15], target = 9);