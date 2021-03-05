/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    var r,sum = 0;
    if(num == 0){
        return 0;
    }
    if(num < 10){
        return num
    }
    if(num>=10){
         while(num!=0){ 
             r = num%10;
             num = parseInt(num/10);
             sum = sum + r;
         } 
        if(sum < 10){
        return sum
        }else{
            num = sum
            return addDigits(num);
        }
    }     
};